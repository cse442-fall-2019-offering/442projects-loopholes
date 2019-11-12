import  FilterPosts from "./FilterPosts";
import { expect } from "chai";
import "mocha";

// tests if there is a connection to the firebase database
describe("Test FilterIn", () => {
  it("Only the post that have metadata containing the search string should be included", async () => {
    const testPosts = [{"category":"meme", "UploadDate":5},
      {"category":"not me-me", "UploadDate":15}, {"category":"memes", "UploadDate":50}];
    const expectedPosts =  [{"category":"meme", "UploadDate":5},
      {"category":"memes", "UploadDate":50}];

    const filter = new FilterPosts();
    let actualPosts = filter.filterIn(testPosts, "meme");
    expect(expectedPosts).deep.equal(actualPosts);
  });
});
