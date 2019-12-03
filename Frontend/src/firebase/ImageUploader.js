import { firebaseStorage } from "./index";
import * as Endpoint from "../constants/Endpoint";

/**
 * upload a single image to firebaseStorage
 */
export default class ImageUploader {
  imageFile = "";
  fileName = "";
  imageURL = "";
  eventTitle = "";
  eventDate = "";
  eventTime = "";
  eventLocation = "";

  /**
   * @param imageFile the image file to be uploaded to firebase storage
   * double check that it is an image.
   * @param fileName please pass in a timestamp as a string followed by
   * an image format such as 20191007201031.jpg.
   */
  constructor(
    imageFile,
    fileName,
    eventTitle,
    eventDate,
    eventTime,
    eventLocation
  ) {
    this.imageFile = imageFile;
    this.fileName = fileName;
    this.eventTitle = eventTitle;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.eventLocation = eventLocation;
  }

  sendImageToFirebaseStorage = async () => {
    try {
      const uploadTask = await firebaseStorage
        .ref(`Images/${this.fileName}`)
        .put(this.imageFile);
      const downloadURL = await uploadTask.ref.getDownloadURL();
      this.imageURL = downloadURL;
      fetch(
        process.env.REACT_APP_BACKEND_API + Endpoint.UPLOAD_IMAGE_METADATA,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image_link: this.imageURL,
            event_title: this.eventTitle,
            event_date: this.eventDate,
            event_time: this.eventTime,
            event_location: this.eventLocation,
            event_time_epoch: this.getEventEpochTime(
              this.eventDate,
              this.eventTime
            ),
            upload_time_epoch: Date.now()
          })
        }
      );
      alert(
        "Image successfully uploaded, please return to the homepage to view it!"
      );
    } catch (error) {
      console.log("Unable to upload file: " + this.fileName + "\n" + error);
      alert("Uploading image failed!");
    }
  };

  /**
   * {@parm event_date} the event time in string
   * @return an epoch time of eventTime
   */
  getEventEpochTime = (eventDay, startTime) => {
    // get the time of day in milliseconds first
    let timeArray = startTime.split(":");
    let timeOfDay =
      (Number(timeArray[0]) * 3600 + Number(timeArray[1]) * 60) * 1000;
    // then add it to the epoch time of the event date
    return new Date(eventDay).getTime() + timeOfDay;
  };
  /** @return a link to the image on firebase that will be stored in the
   * image metadata.
   */
  getImageDownloadURL = () => {
    return this.imageURL;
  };
}
