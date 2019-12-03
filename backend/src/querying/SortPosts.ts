import { PostMetadata } from "../objects/PostMetadata";
/**
 * Sorts the posts based on different criteria.
 */
export default class SortPosts {

  /**
   * Sort by the upload time.
   * {@param posts}: json array containing the post metadata
   */
   public sortNewest (posts) {
      return posts.sort(function(lhs, rhs) {
        return rhs.UploadDate - lhs.UploadDate;
      });
  }

  /**
   * Sort by the event time.
   * {@param posts}: json array containing the post metadata
   */
  public sortEventTime(posts) {
      return posts.sort(function(lhs, rhs) {
        return lhs.EventDate - rhs.EventDate;
      });
  }

}
