export interface SocialMediaContent {
  id: string; // Identifier of the content
  type: "image" | "video" | "audio" | "file"; // Can be added any type of content as is a list
  url: string; // Url of the content
}

export interface SocialMediaConnection {
  id: string; // Identifier of the connection
  platform: string; // Name of the platform
  name: string; // Name of the user
  username: string; // Username of the user
  content: SocialMediaContent[]; // List of content
}
