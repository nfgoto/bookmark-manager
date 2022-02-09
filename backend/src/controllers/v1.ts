import type { Request, Response } from "express";
import { getLinkMetadata } from "../services/oembed";

interface CreateLinkPayload {
  provider: string;
  consumerUrl: string;
}

export const getLinks = async (_: Request, res: Response) => {
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

export const createLink = async ({ body }: Request, res: Response) => {
  const { provider, consumerUrl } = body as CreateLinkPayload;
  const linkMetadata = await getLinkMetadata(provider, consumerUrl);

  // TODO: save metadata in DB

  res.json({ linkMetadata });
};
