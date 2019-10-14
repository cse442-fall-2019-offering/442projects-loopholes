import { firebaseDatabase } from "../firebase";
import  QueryFirebaseDatabase from "../querying/QueryFirebaseDatabase";
import MetadataUploader from "./MetadataUploader";
import { expect } from "chai";
import "mocha";

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
