import { firebaseStorage } from "./index";
import * as Endpoint from "../constants/Endpoint";
import UploadWait from "../components/uploadWait.js"

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
            event_location: this.eventLocation
          })
        }
      );
      // alert(
      //   "Image successfully uploaded, please return to the homepage to view it!"
      // );
      UploadWait.endLoad();
    } catch (error) {
      console.log("Unable to upload file: " + this.fileName + "\n" + error);
      alert("Uploading image failed!");
    }
  };

  /** @return a link to the image on firebase that will be stored in the
   * image metadata.
   */
  getImageDownloadURL = () => {
    return this.imageURL;
  };
}
