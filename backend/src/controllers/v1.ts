import type { Request, Response } from "express";
import { deleteByTypeAndId, findAll, persist } from "../services/db";
import { getLinkMetadata } from "../services/oembed";

interface CreateLinkPayload {
  provider: string;
  consumerUrl: string;
}

export const getLinks = async (_: Request, res: Response) => {
  const links = await findAll();
  res.json({ links });
};

export const createLink = async ({ body }: Request, res: Response) => {
  const { provider, consumerUrl } = body as CreateLinkPayload;
  const linkMetadata = await getLinkMetadata(provider, consumerUrl);
  await persist(consumerUrl, linkMetadata);
  res.status(201).end();
};

export const removeLink = async ({ params }: Request, res: Response) => {
  const { id, linkType } = params;
  await deleteByTypeAndId(linkType, id);
  res.status(200).end();
};
