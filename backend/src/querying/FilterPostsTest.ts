import  FilterPosts from "./FilterPosts";
import { expect } from "chai";
import "mocha";

// tests that matching posts are returned
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

// tests that if no posts match, then an empty array is returned
describe("Test FilterIn no matches", () => {
  it("No matches from the database should result in an empty array", async () => {
    const testPosts = [{"category":"meme", "UploadDate":5},
      {"category":"not me-me", "UploadDate":15}, {"category":"memes", "UploadDate":50}];
    const expectedPosts =  [];
    const filter = new FilterPosts();
    let actualPosts = filter.filterIn(testPosts, "posters");
    expect(expectedPosts).deep.equal(actualPosts);
  });
});
