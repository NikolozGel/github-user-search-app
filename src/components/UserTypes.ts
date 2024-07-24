export interface UserType {
  login: string;
  id: string;
  name: string;
  created_at: string;
  public_repos: string;
  followers: string;
  following: string;
  twitter_userName: string | null;
  avatar_url: string | undefined;
  location: string | null;
  blog: string | null;
  company: string | null;
}