import "mocha";
import { expect } from "chai";
import { PostMetadata } from "../objects/PostMetadata";
import  SortPosts from "./SortPosts";

const sorter = new SortPosts();

// tests that the posts are sorted by their upload epoch time
describe("Test SortNewest", () => {
  it("The posts should be sorted by their UploadTime in increasing order", async () => {
    let testPosts = [{"UploadDate": 0}, {"UploadDate":100}, {"UploadDate": 50}];
    const expectedPosts = [{"UploadDate": 100}, {"UploadDate": 50}, {"UploadDate": 0}];
    let actualPosts = sorter.sortNewest(testPosts);
    expect(expectedPosts).deep.equal(actualPosts);
  });
});
