/*import { PostMetadata } from "../objects"

export default class SortPosts {

  private convertToDate = async (post: PostMetadata): Promise<Date>
  => {
    let date = new Date();
    date.setHours(post.timestamp.hour, post.timestamp.minute,
      post.timestamp.seconds);
    date.setFullYear(post.timestamp.year, post.timestamp.month,
      post.timestamp.day);
    return date;
  }

  public sortNewest = async (posts: PostMetadata[])
    : Promise<PostMetadata[]> => {
      return posts.sort(function(lhs, rhs) {
        return convertToDate(rhs).getTime() - convertToDate(lhs).getTime();
      });
    }

}
*/
