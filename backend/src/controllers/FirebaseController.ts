import { NextFunction, Request, Response } from "express";
import QueryFirebaseDatabase from "../querying/QueryFirebaseDatabase";
import MetadataUploader from "../uploading/MetadataUploader";

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
      event_location
    }: {
      image_link: string;
      event_title: string;
      event_date: string;
      event_time: string;
      event_location: string;
    } = request.body;
    const post_id: number = await this.getPostId();
    const currentTimestamp = this.getCurrentTimestamp();

    const metadata = {
      event_info: {
        title: event_title,
        date: event_date,
        time: event_time,
        location: event_location
      },
      image_link: image_link,
      post_id: post_id,
      tags: false,
      timestamp: currentTimestamp,
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
