/**
 * Filter In or Out posts from the list of posts visible on the website according
 * to what the user wants.
 */
export default class FilterPosts {

  /** Filter in posts that have containg the {@param searchString}.
   *  <p> Adds matching metadata to {@param filteredPosts}.
   */
  private filterInHelper(post, searchString, filteredPosts) {
    for (var key in post) {
        if (typeof(post[key]) === 'object') {
            this.filterInHelper(post[key], searchString, filteredPosts);
        } else {
            if(post[key].toString().includes(searchString)) {
                filteredPosts.add(post);
            }
        }
    }
  }

  /** Filter in posts that have containg the {@param searchString}. */
  public filterIn(posts, searchString) {
    let filteredPosts = new Set();
    for (let metadata of posts) {
      this.filterInHelper(metadata, searchString, filteredPosts);
    }
    return Array.from(filteredPosts);
  }
}
