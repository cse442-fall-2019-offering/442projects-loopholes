import { NextFunction, Request, Response } from "express";
import QueryFirebaseDatabase from "../querying/QueryFirebaseDatabase";
import MetadataUploader from "../uploading/MetadataUploader";
import FilterPosts from "../querying/FilterPosts";
import SortPosts from "../querying/SortPosts";

export default class FirebaseController {
  public getHomepageImageMetadata = async (
    _request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    const queryFirebaseDatabase = new QueryFirebaseDatabase();
    await queryFirebaseDatabase.fetchEntireDatabase();
    response.status(200).json(queryFirebaseDatabase.getDataSnapshot());
  };

  public searchForPosts = async (
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    const { search_value, card_metadatas } = request.body;
    const filteredPosts = new FilterPosts().filterIn(
      card_metadatas,
      search_value
    );
    console.log(filteredPosts);
    response.status(200).json(filteredPosts);
  };

  public sortPosts = async (
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    const { card_metadatas, sort_type } = request.body;
    let sortedPosts = [];
    if (sort_type === "eventDate") {
      sortedPosts = new SortPosts().sortEventTime(card_metadatas);
    } else if (sort_type === "uploadDate") {
      sortedPosts = new SortPosts().sortNewest(card_metadatas);
    }
    response.status(200).json(sortedPosts);
  };

  public uploadImageMetadata = async (
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    console.log(request.body);
    const {
      image_link,
      event_title,
      event_date,
      event_time,
      event_location,
      event_time_epoch,
      upload_time_epoch
    }: {
      image_link: string;
      event_title: string;
      event_date: string;
      event_time: string;
      event_location: string;
      event_time_epoch: number;
      upload_time_epoch: number;
    } = request.body;
    const post_id: number = await this.getPostId();
    const currentTimestamp = this.getCurrentTimestamp();

    console.log(
      `Event Time: ${event_time_epoch}, Upload Time: ${upload_time_epoch}`
    );

    const metadata = {
      event_info: {
        title: event_title,
        date: event_date,
        time: event_time,
        location: event_location
      },
      EventDate: event_time_epoch,
      image_link: image_link,
      post_id: post_id,
      tags: false,
      timestamp: currentTimestamp,
      UploadDate: upload_time_epoch,
      uploader_buffalo_id: "",
      uploader_is_anonymous: false,
      upvotes: {
        downvoter_buffalo_ids: false,
        num_downvotes: 0,
        num_upvotes: 0,
        upvoter_buffalo_ids: false
      }
    };
    const metadataUploder = new MetadataUploader();
    metadataUploder.pushToDatabase(metadata, post_id);
    response.sendStatus(201);
  };

  private getCurrentTimestamp = () => {
    const date = new Date();
    return {
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      month: date.getMonth(),
      seconds: date.getSeconds(),
      year: date.getFullYear()
    };
  };

  private getPostId = async (): Promise<any> => {
    const queryFirebaseDatabase = new QueryFirebaseDatabase();
    await queryFirebaseDatabase.fetchNextPostId();
    return queryFirebaseDatabase.getNextPostId();
  };
}
