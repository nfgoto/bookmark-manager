import { LinkMetadata } from "../../services/oembed";

export const linkMapper = (consumerUrl: string, input: LinkMetadata) => {
  return {
    url: consumerUrl,
    title: input.title,
    type: input.type,
    author: input.author_name,
    uploadDate: input.upload_date ?? new Date(),
    width: input.width,
    height: input.height,
    ...(input.duration && { duration: input.duration }),
  };
};
