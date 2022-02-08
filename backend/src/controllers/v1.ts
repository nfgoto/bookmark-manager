import type { RequestHandler } from "express";

export const getLinks: RequestHandler = (_, res) => {
  const links = [
    {
      id: 1,
      url: "https://vimeo.com/216330850",
      title: "Why Scala is always better than Node.js",
      author: "Scala Node",
      added: new Date().toISOString(),
    },
    {
      id: 2,
      url: "https://vimeo.com/216330850",
      title: "Why Scala is always better than Node.js",
      author: "Scala Node",
      added: new Date().toISOString(),
    },
    {
      id: 3,
      url: "https://vimeo.com/216330850",
      title: "Why Scala is always better than Node.js",
      author: "Scala Node",
      added: new Date().toISOString(),
    },
    {
      id: 4,
      url: "https://vimeo.com/216330850",
      title: "Why Scala is always better than Node.js",
      author: "Scala Node",
      added: new Date().toISOString(),
    },
  ];

  res.json({ links });
};
