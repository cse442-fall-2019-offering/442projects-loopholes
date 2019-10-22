import { NextFunction, Request, Response } from "express";
import { firebaseDatabase } from "../firebase";

interface Timestamp {
  day: number;
  hour: number;
  minute: number;
  month: number;
  seconds: number;
  year: number;
}

interface ImageMetadata {
  image_link: string;
  post_id: number;
  tags: any;
  timestamp: Timestamp;
  uploader_buffalo_id: string;
  uploader_is_anonymous: boolean;
  upvotes: {
    downvoter_buffalo_ids: any;
    num_downvotes: number;
    num_upvotes: number;
    upvoter_buffalo_ids: any;
  };
}

export default class FirebaseController {
  public getHomepageImageMetadata = async (
    _request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    await firebaseDatabase
      .ref("image_metadata_test")
      .once("value", snapshot => {
        console.log(snapshot.val());
      })
      .then(imageMetadata => {
        response.status(200).json(imageMetadata);
      });
  };

  public uploadImageMetadata = async (
    request: Request,
    response: Response,
    _next: NextFunction
  ): Promise<void> => {
    const { image_link }: { image_link: string } = request.body;
    const post_id: number = await this.getPostId();
    const currentTimestamp = this.getCurrentTimestamp();

    const imageMetadata = {
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
    this.pushImageMetadataToFirebase(imageMetadata);
    this.incrementFirebasePostId(post_id);
    response.sendStatus(201);
  };

  private getCurrentTimestamp = (): Timestamp => {
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
    let postId: any;
    await firebaseDatabase
      .ref("database_metadata/post_id")
      .once("value", snapshot => {
        postId = snapshot.val();
      });
    return postId;
  };

  private incrementFirebasePostId = async (
    oldPostId: number
  ): Promise<void> => {
    firebaseDatabase.ref("database_metadata/post_id").set(oldPostId + 1);
  };

  private pushImageMetadataToFirebase = async (
    imageMetadata: ImageMetadata
  ) => {
    firebaseDatabase.ref("image_metadata_test").push(imageMetadata);
  };
}
