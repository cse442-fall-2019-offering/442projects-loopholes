import { firebaseDatabase } from "../firebase";
import { expect } from "chai";
import "mocha";

// branch in the database used for testing post requests
const FIREBASE_FETCH_REF = "post_database";
// the metadata about the database itself
const FIREBASE_DATABASE_METADATA_REF = "database_metadata";
// the key for the post id from the database metadata
const POST_ID_KEY = "post_id";

// tests if there is a connection to the firebase database
describe("Test Connection", () => {
  it("The post_database reference should exist", async () => {
    let result = false;
    await firebaseDatabase
    .ref()
    .child(FIREBASE_FETCH_REF)
    .once("value")
    .then(function(snapshot) {
      result = true;
    })
    expect(result).to.equal(true);
  });
})
