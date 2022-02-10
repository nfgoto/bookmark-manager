import { linkMapper } from "../data/mappers/link";
import { getLinkRepository } from "../data/repositories/linkRepo";
import { getPhotoLinkRepository } from "../data/repositories/photoLinkRepo";
import { getVideoLinkRepository } from "../data/repositories/videoLinkRepo";
import { LinkMetadata } from "./oembed";

export const persist = async (
  consumerUrl: string,
  linkMetadata: LinkMetadata
) => {
  switch (linkMetadata.type) {
    case "photo": {
      const inputDAO = linkMapper(consumerUrl, linkMetadata);
      await getPhotoLinkRepository().insert(inputDAO);
      return;
    }
    case "video": {
      const inputDAO = linkMapper(consumerUrl, linkMetadata);
      await getVideoLinkRepository().insert(inputDAO);
      return;
    }

    default: {
      const inputDAO = linkMapper(consumerUrl, linkMetadata);
      await getLinkRepository().insert(inputDAO);
      return;
    }
  }
};

export const findAll = async () => {
  const videoLinks = await getVideoLinkRepository().find();
  const photoLinks = await getPhotoLinkRepository().find();
  const otherLinks = await getLinkRepository().find();
  return [...videoLinks, ...photoLinks, ...otherLinks];
};
