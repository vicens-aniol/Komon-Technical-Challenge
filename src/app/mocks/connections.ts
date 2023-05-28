// Simulating a JSON token by an API call with sample data

import { SocialMediaConnection, SocialMediaContent } from '../types';

const mockContent: SocialMediaContent[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    type: 'video',
    url: 'https://example.com/video1.mp4',
  },
  {
    id: '3',
    type: 'audio',
    url: 'https://example.com/audio1.mp3',
  },
  {
    id: '4',
    type: 'file',
    url: 'https://example.com/file1.pdf',
  },
];

export const mockConnections: SocialMediaConnection[] = [
  {
    id: '1',
    platform: 'Instagram',
    name: 'John Instagram Account',
    username: 'username1',
    content: mockContent,
  },
  {
    id: '2',
    platform: 'Facebook',
    name: 'Marie Facebook Page',
    username: 'username2',
    content: mockContent,
  },
  {
    id: '3',
    platform: 'Twitter',
    name: 'Sam Twitter Profile',
    username: 'username3',
    content: mockContent,
  },

  {
    id: '4',
    platform: 'LinkedIn',
    name: 'Emily LinkedIn Profile',
    username: 'username4',
    content: mockContent,
  },

  {
    id: '5',
    platform: 'Snapchat',
    name: 'Alex Snapchat Account',
    username: 'username5',
    content: mockContent,
  },

  {
    id: '6',
    platform: 'Pinterest',
    name: 'Olivia Pinterest Account',
    username: 'username6',
    content: mockContent,
  },

  {
    id: '7',
    platform: 'Tumblr',
    name: 'Daniel Tumblr Blog',
    username: 'username7',
    content: mockContent,
  },

  {
    id: '8',
    platform: 'Reddit',
    name: 'Sophia Reddit Profile',
    username: 'username8',
    content: mockContent,
  },

  {
    id: '9',
    platform: 'YouTube',
    name: 'Michael YouTube Channel',
    username: 'username9',
    content: mockContent,
  },

  {
    id: '10',
    platform: 'TikTok',
    name: 'Emma TikTok Account',
    username: 'username10',
    content: mockContent,
  },

  {
    id: '11',
    platform: 'Pinterest',
    name: 'Liam Pinterest Account',
    username: 'username11',
    content: mockContent,
  },
  {
    id: '12',
    platform: 'Snapchat',
    name: 'Ava Snapchat Account',
    username: 'username12',
    content: mockContent,
  },
];
