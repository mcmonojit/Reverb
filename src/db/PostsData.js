import p1 from "../assets/images/profileImg/p1.jpg";
import p2 from "../assets/images/profileImg/p2.jpg";
import p3 from "../assets/images/profileImg/p3.jpg";
import p4 from "../assets/images/profileImg/p4.jpg";
import p5 from "../assets/images/profileImg/p5.jpg";
import p6 from "../assets/images/profileImg/p6.jpg";

import post1 from "../assets/images/postImg/post1.jpg";
import post2 from "../assets/images/postImg/post2.jpg";
import post3 from "../assets/images/postImg/post3.jpg";
import post4 from "../assets/images/postImg/post4.jpg";
import post5 from "../assets/images/postImg/post5.jpg";

export const PostsData = [
  {
    id: 1,
    userName: "CES",
    userId: 1,
    pofilePic: p1,
    likes: 173999,
    postText: "CES 2023 How to watch keynotes from Sony, Samsung and more",
    image: post1,
    createdAt: "2023-07-10T10:00:00Z",
    isBookmarked: false,
    tags: ["technology", "business", "convention"],
    comments: [
      {
        commentId: "101",
        userName: "Gerard Cross",
        userId: 5,
        profilePic: p5,
        likes: 0,
        commentText: "Expecting lots of amazing tech and products this year",
        createdAt: "2023-07-10T12:01:00Z",
      },
      {
        commentId: "102",
        userName: "Grant Oakley",
        userId: 6,
        profilePic: p6,
        likes: 0,
        commentText: "Exited about the VR technology from Meta",
        createdAt: "2023-07-10T13:00:00Z",
      },
    ],
  },
  {
    id: 2,
    userName: "Gary Vaynerchuk",
    userId: 2,
    pofilePic: p2,
    likes: 9299,
    postText:
      "Legacy is greater than currency. Whether you’re 9 or 90, stop trying to fix the things you’re bad at, and focus on the things you’re good at. When it call comes down to it, nothing trumps execution. Your legacy is being written by yourself. Make the right decisions.",
    image: post2,
    createdAt: "2023-06-30T09:23:00Z",
    isBookmarked: false,
    tags: ["technology", "business", "convention"],
    comments: [],
  },
  {
    id: 3,
    userName: "Jenn Johnson",
    userId: 3,
    pofilePic: p3,
    likes: 1359,
    postText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore recusandae, ratione harum possimus non odio alias",
    image: post3,
    createdAt: "2023-06-24T13:32:00Z",
    isBookmarked: false,
    tags: ["technology", "business", "convention"],
    comments: [],
  },
  {
    id: 4,
    userName: "Dominic Sutherland",
    userId: 4,
    pofilePic: p4,
    likes: 4200,
    postText: "We remain commited to our goals of COP 27",
    image: post4,
    createdAt: "2023-06-25T12:58:00Z",
    isBookmarked: false,
    tags: ["technology", "business", "convention"],
    comments: [],
  },
  {
    id: 5,
    userName: "Gerard Cross",
    userId: 5,
    pofilePic: p5,
    likes: 900,
    postText: "Cvent Looks at Buyout Targets for Growth",
    image: post5,
    createdAt: "2023-06-12T16:11:00Z",
    isBookmarked: false,
    tags: ["technology", "business", "convention"],
    comments: [],
  },
];
