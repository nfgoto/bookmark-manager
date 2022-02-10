import { axiosInstance } from "./axios";
import { OEMBED_PROVIDERS_URL } from "../utils/constants";

type OEmbedProvider = {
  provider_name: string;
  provider_url: string;
  endpoints: {
    schemes: string[];
    url: string;
    discovery: boolean;
  }[];
};

export interface LinkMetadata {
  type: string;
  title: string;
  width: number;
  height: number;
  author_name: string;
  duration?: number; // vimeo
  upload_date?: Date; // vimeo
}

/**
 * retrieve provider metadata from oEmbed providers repository
 * @param provider
 * @returns
 */
export const getProviderMetadata = async (provider: string) => {
  const { data: providers } = await axiosInstance.get<OEmbedProvider[]>(
    OEMBED_PROVIDERS_URL
  );

  const providerMetadata = providers.find(({ provider_name }) =>
    provider_name.toLowerCase().match(provider)
  );

  if (!providerMetadata) {
    throw new Error("OEmbed provider not found");
  }

  return providerMetadata;
};

/**
 * build oEmbed link based on provider endpoint and consumer URL
 * @param endpointUrl
 * @param consumerUrl
 * @returns
 */
export const buildOEmbedRequestUrl = (
  endpointUrl: string,
  consumerUrl: string
): string => {
  switch (true) {
    case endpointUrl.includes(".{format}"): {
      const urlWithFormatInPath = endpointUrl.replace(".{format}", ".json");
      const url = new URL(urlWithFormatInPath);
      url.searchParams.set("url", consumerUrl);
      return url.href;
    }

    default: {
      const url = new URL(endpointUrl);
      url.searchParams.set("format", "json");
      url.searchParams.set("url", consumerUrl);
      return url.href;
    }
  }
};

/**
 * retriece oEmbed link metadata from provided consumer link based on provider
 * @param provider
 * @param consumerUrl
 * @returns
 */
export const getLinkMetadata = async (
  provider: string,
  consumerUrl: string
): Promise<LinkMetadata> => {
  const {
    endpoints: [{ url: endpointUrl }],
  } = await getProviderMetadata(provider);

  const oEmbedUrl = buildOEmbedRequestUrl(endpointUrl, consumerUrl);
  const { data: linkMetadata } = await axiosInstance.get<LinkMetadata>(
    oEmbedUrl
  );

  return linkMetadata;
};
