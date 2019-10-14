import { firebaseDatabase } from "../firebase";

// branch in the database used for testing post requests
const FIREBASE_FETCH_REF = "post_database";

/* This Class Fetches the data from Firebase Database. */
export default class QueryFirebaseDatabase {
  dataSnapshot : any;

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
    .then(function(snapshot){
      self.setDataSnapshot(snapshot.val());
    });
  };

}
