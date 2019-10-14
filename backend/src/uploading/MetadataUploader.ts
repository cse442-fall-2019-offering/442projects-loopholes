import { firebaseDatabase } from "../firebase";
import QueryFirebaseDatabase from "../querying/QueryFirebaseDatabase";
// branch in the database to post the data to
const FIREBASE_POST_REF = "post_database";
// the prefix of the key that the post is going to be sotred under
const FIREBASE_POST_METADATA_KEY_PREFIX = "post_metadata_";
// the metadata about the database itself
const FIREBASE_DATABASE_METADATA_REF = "database_metadata";
// the key for the post id from the database metadata
const POST_ID_KEY = "post_id";

/** MetadataUploader pushes a single instance of a post netadata to Firebase Databse. */
export default class MetadataUploader {

  private downloader: QueryFirebaseDatabase = new QueryFirebaseDatabase();
 /** Updates the nextpostId on firebase database that will be used as keys for posts. */
  public updateNextPostId = async () => {
    await this.downloader.fetchNextPostId();
    firebaseDatabase
    .ref(FIREBASE_DATABASE_METADATA_REF)
    .child(POST_ID_KEY)
    .set(this.downloader.getNextPostId() + 1);
  }

  /**
   * Pushes the supplied post as a json to the firebase database.
   * {@param jsonMetadata}: the post metadata to be pushed to the database.
   * {@param nextPostId} : used in the key for the dataSnapshot on firebase.
   * If successful, the function updates the nextPostId counnter in firebase itself
   * else logs an error.
   */
  public pushToDatabase = async (jsonMetadata: any, nextPostId: number) => {
    var self = this;
    let metadataKey = FIREBASE_POST_METADATA_KEY_PREFIX + nextPostId;
    firebaseDatabase
    .ref(FIREBASE_POST_REF)
    .child(metadataKey)
    .set(jsonMetadata)
    .then(function(res) { // if uploading postmetadata is successful, increment nextPostId
      self.updateNextPostId();
    },
    function(error) {
      console.log("unable to push metadata to firebase: " + error);
    });
  }
}
