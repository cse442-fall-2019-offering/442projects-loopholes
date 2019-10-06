// stores a single comment in a post
interface Comment {
  comment_text: string;
  commenter_buffalo_id: string;
}

// stores the time when the post was uploaded
interface Timestamp {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  seconds: number;
}

// stores information about individual votes to avoid spamming
interface Votes {
  num_upvotes: number;
  num_downvotes: number;
  upvoter_buffalo_ids: Map<string, boolean>;
  downvoter_buffalo_ids:Map<string, boolean>;
}

// metadata of a post
export interface PostMetadata {
  post_id: number;
  uploader_buffalo_id: string;
  uploader_is_anonymous: boolean;
  comments: Comment[];
  media_link: string;
  tags: Map<string, boolean>;
  timestamp: Timestamp;
  votes: Votes;
}
