import { firebaseStorage } from "./index";

/**
 * upload a single image to firebaseStorage
 */
export default class ImageUploader {
  imageFile = "";
  fileName = "";
  imageURL = "";

  /**
   * @param imageFile the image file to be uploaded to firebase storage
   * double check that it is an image.
   * @param fileName please pass in a timestamp as a string followed by
   * an image format such as 20191007201031.jpg.
   */
  constructor(imageFile, fileName) {
    this.imageFile = imageFile;
    this.fileName = fileName;
  }

  sendImageToFirebaseStorage = async () => {
    try {
      const uploadTask = await firebaseStorage
        .ref("Images/${fileName}")
        .put(this.imageFile);
      const downloadURL = await uploadTask.ref.getDownloadURL();
      this.imageURL = downloadURL;
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
