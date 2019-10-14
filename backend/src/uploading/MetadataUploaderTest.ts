import { firebaseDatabase } from "../firebase";
import  QueryFirebaseDatabase from "../querying/QueryFirebaseDatabase";
import MetadataUploader from "./MetadataUploader";
import { expect } from "chai";
import "mocha";

// branch in the database to post the data to
const FIREBASE_POST_REF = "post_database";
// the prefix of the key that the post is going to be sotred under
const FIREBASE_POST_METADATA_KEY_PREFIX = "post_metadata_";

// fetch the post_id from the database, increment it and verify it has been incremented
describe("Test update post_id", () => {
  it("The post_id should be incremented by 1", async () => {
    // first get the old id
    let downloader = new QueryFirebaseDatabase();
    await downloader.fetchNextPostId();
    let oldId = downloader.getNextPostId();
    //update the id
    let uploader = new MetadataUploader();
    await uploader.updateNextPostId();
    // then check if it has been incremented by 1
    await downloader.fetchNextPostId();
    expect(downloader.getNextPostId()).to.equal(oldId + 1)
  });
});

// test that the json is going to the correct branch on firebase database
describe("Test upload post_metadata", () => {
  it("The JSON should be sent to the correct place in firebase", async () => {
    // first get the next post_id
    let downloader = new QueryFirebaseDatabase();
    await downloader.getNextPostId();
    let postId = downloader.getNextPostId();
    // send a dummy json
    let testData = {"data": {"name" : "test"}};
    let uploader = new MetadataUploader();
    await uploader.pushToDatabase(testData, postId);
    // verify that the data is there in the database
    var actualName = "none";
    await firebaseDatabase
    .ref(FIREBASE_POST_REF)
    .child(FIREBASE_POST_METADATA_KEY_PREFIX + postId)
    .once("value")
    .then(function(snapshot) {
      actualName = snapshot.child("data").child("name").val();
    });
    expect(actualName).to.equal("test");
    // clean up the dummy data from the database after testing is done
    await firebaseDatabase
    .ref(FIREBASE_POST_REF)
    .child(FIREBASE_POST_METADATA_KEY_PREFIX + postId)
    .remove();
  });
});
