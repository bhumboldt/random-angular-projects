export interface FeedItem {
  id: string;
  image: string;
  description: string;
  time_posted_at: Date;
  poster: {
    first_name: string;
    last_name: string;
    profile_photo: string;
  }
}