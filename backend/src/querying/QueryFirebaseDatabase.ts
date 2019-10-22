import { firebaseDatabase } from "../firebase";

// branch in the database used for testing post requests
const FIREBASE_FETCH_REF = "post_database";
// the metadata about the database itself
const FIREBASE_DATABASE_METADATA_REF = "database_metadata";
// the key for the post id from the database metadata
const POST_ID_KEY = "post_id";

/* This Class Fetches the data from Firebase Database. */
export default class QueryFirebaseDatabase {
  dataSnapshot : any;
  nextPostId = -1;

  // This function simply stores the wraps the data snapshot in an instance of this class.
  private setDataSnapshot(snapshot: any) {
    this.dataSnapshot = snapshot;
  }

  // Return the dataSnapshot stored in an instance of this class.
  public getDataSnapshot() {
    return this.dataSnapshot;
  }

  /* Fectches the entire database from Firebase; used for the Homepage,etc. */
  public fetchEntireDatabase = async () => {
    var self = this;
    await firebaseDatabase
    .ref(FIREBASE_FETCH_REF)
    .once("value")
    .then(function(snapshot) {
      self.setDataSnapshot(snapshot.val());
    });
  };

  // reutrns the next post id to upload to
  public getNextPostId() {
    let temp = this.nextPostId;
    this.nextPostId = -1;
    return temp;
  }

 /* Fetches the next post id to use for uploading. */
  public fetchNextPostId = async () => {
    let self = this;
    await firebaseDatabase
    .ref(FIREBASE_DATABASE_METADATA_REF)
    .child(POST_ID_KEY)
    .once("value")
    .then(function(snapshot) {
      self.nextPostId = snapshot.val();
    });
  }

}
