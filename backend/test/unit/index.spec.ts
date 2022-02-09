import {
  buildOEmbedRequestUrl,
  getLinkMetadata,
  getProviderMetadata,
} from "../../src/services/oembed";
import {
  flickrEndpointUrl,
  flickrConsumerUrl,
  flickrMetadata,
  flickrProviderMetadata,
  flickrProviderName,
  vimeoConsumerUrl,
  vimeoEndpointUrl,
  vimeoMetadata,
  vimeoProviderMetadata,
  vimeoProviderName,
} from "../fixture/oembed";

describe("bookmark api unit", () => {
  describe("oEmbed service", () => {
    it("should build Vimeo oEmbed request URL", () => {
      const requestUrl = buildOEmbedRequestUrl(
        vimeoEndpointUrl,
        vimeoConsumerUrl
      );
      expect(requestUrl).toMatch(
        "https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F216330850"
      );
    });

    it("should build Flickr oEmbed request URL", () => {
      const requestUrl = buildOEmbedRequestUrl(
        flickrEndpointUrl,
        flickrConsumerUrl
      );
      expect(requestUrl).toMatch(
        "https://www.flickr.com/services/oembed/?format=json&url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fbees%2F2341623661"
      );
    });

    it("should get Vimeo provider metadata", async () => {
      const providerMetadata = await getProviderMetadata(vimeoProviderName);
      expect(providerMetadata).toMatchObject(vimeoProviderMetadata);
    });

    it("should get Vimeo link metadata", async () => {
      const metadata = await getLinkMetadata(
        vimeoProviderName,
        vimeoConsumerUrl
      );
      expect(metadata).toMatchObject(vimeoMetadata);
    });

    it("should get Flickr provider metadata", async () => {
      const providerMetadata = await getProviderMetadata(flickrProviderName);
      expect(providerMetadata).toMatchObject(flickrProviderMetadata);
    });

    it("should get Flickrr link metadata", async () => {
      const metadata = await getLinkMetadata(
        flickrProviderName,
        flickrConsumerUrl
      );
      expect(metadata).toMatchObject(flickrMetadata);
    });
  });
});
