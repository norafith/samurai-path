const state = {
  profile: {
    posts: [
      {
        date: "23.02.2022",
        text: "Sorry for what?",
        likeAmount: 5,
        username: "Bold Master",
      },
      {
        date: "24.02.2022",
        text: "Our daddy told us not to be ashamed of our dicks, especially since they are such good size and all",
        likeAmount: 25,
        username: "Bold Master",
      },
      {
        date: "25.02.2022",
        text: "It gets bigger when I pull on it",
        likeAmount: 35,
        username: "Bold Master",
      },
      {
        date: "25.02.2022",
        text: "Sometimes I pull it on so hard I rip the skin",
        likeAmount: 45,
        username: "Bold Master",
      },
      {
        date: "26.02.2022",
        text: "Can you show me?",
        likeAmount: 55,
        username: "Bold Master",
      },
    ],
  },
  dialogs: {
    chatOptions: [
      { userID: 1, name: "Sasha" },
      { userID: 2, name: "Julia" },
      { userID: 3, name: "Ira" },
      { userID: 4, name: "Mark" },
      { userID: 5, name: "John" },
    ],
    messages: [
      { text: "hello", messageID: 1, userID: 1 },
      { text: "sidney", messageID: 2, userID: 1 },
      { text: "can you see me?", messageID: 3, userID: 1 },
      { text: "what are you so scared of", messageID: 4, userID: 1 },
      { text: "0_0", messageID: 5, userID: 2 },
      { text: "no", messageID: 5, userID: 2 },
    ],
  },
};

export default state;
