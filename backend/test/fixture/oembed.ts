export const vimeoEndpointUrl = "https://vimeo.com/api/oembed.{format}";
export const vimeoConsumerUrl = "https://vimeo.com/216330850";
export const flickrEndpointUrl = "https://www.flickr.com/services/oembed/";
export const flickrConsumerUrl = "http://www.flickr.com/photos/bees/2341623661";

export const vimeoProviderName = "vimeo";
export const vimeoProviderMetadata = {
  provider_name: "Vimeo",
  provider_url: "https://vimeo.com/",
  endpoints: [
    {
      schemes: [
        "https://vimeo.com/*",
        "https://vimeo.com/album/*/video/*",
        "https://vimeo.com/channels/*/*",
        "https://vimeo.com/groups/*/videos/*",
        "https://vimeo.com/ondemand/*/*",
        "https://player.vimeo.com/video/*",
      ],
      url: "https://vimeo.com/api/oembed.{format}",
      discovery: true,
    },
  ],
};
export const vimeoMetadata = {
  type: "video",
  version: "1.0",
  provider_name: "Vimeo",
  provider_url: "https://vimeo.com/",
  title: "Why Scala is always better than Node.js",
  author_name: "Scala Node",
  author_url: "https://vimeo.com/user66324313",
  is_plus: "0",
  account_type: "basic",
  html: '<iframe src="https://player.vimeo.com/video/216330850?h=06d6792315&amp;app_id=122963" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Why Scala is always better than Node.js"></iframe>',
  width: 640,
  height: 360,
  duration: 177,
  description:
    "Tyrone, a developer with 15 years of experience programming in Scala and Node.js, tells us why Scala is categorically better than Node.js. Through personal anecdotes and incisive commentary, Tyrone forcefully argues that developers should always choose Scala over Node.js.",
  thumbnail_url:
    "https://i.vimeocdn.com/video/633289389-26c5df6f1a93615127b95c5305d87669887f8f5efeff5e530c3adfb1592413f2-d_640",
  thumbnail_width: 640,
  thumbnail_height: 360,
  thumbnail_url_with_play_button:
    "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F633289389-26c5df6f1a93615127b95c5305d87669887f8f5efeff5e530c3adfb1592413f2-d_640&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
  upload_date: "2017-05-06 17:52:54",
  video_id: 216330850,
  uri: "/videos/216330850",
};

export const flickrProviderName = "flickr";
export const flickrProviderMetadata = {
  provider_name: "Flickr",
  provider_url: "https://www.flickr.com/",
  endpoints: [
    {
      schemes: [
        "http://*.flickr.com/photos/*",
        "http://flic.kr/p/*",
        "https://*.flickr.com/photos/*",
        "https://flic.kr/p/*",
        "https://*.*.flickr.com/*/*",
        "http://*.*.flickr.com/*/*",
      ],
      url: "https://www.flickr.com/services/oembed/",
      discovery: true,
    },
  ],
};
export const flickrMetadata = {
  type: "photo",
  flickr_type: "photo",
  title: "ZB8T0193",
  author_name: "‮‭‬bees‬",
  author_url: "https://www.flickr.com/photos/bees/",
  width: 1024,
  height: 683,
  url: "https://live.staticflickr.com/3123/2341623661_7c99f48bbf_b.jpg",
  web_page: "https://www.flickr.com/photos/bees/2341623661/",
  thumbnail_url:
    "https://live.staticflickr.com/3123/2341623661_7c99f48bbf_q.jpg",
  thumbnail_width: 150,
  thumbnail_height: 150,
  web_page_short_url: "https://flic.kr/p/4yVr8K",
  license: "All Rights Reserved",
  license_id: 0,
  html: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/bees/2341623661/" title="ZB8T0193 by ‮‭‬bees‬, on Flickr"><img src="https://live.staticflickr.com/3123/2341623661_7c99f48bbf_b.jpg" width="1024" height="683" alt="ZB8T0193"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
  version: "1.0",
  cache_age: 3600,
  provider_name: "Flickr",
  provider_url: "https://www.flickr.com/",
};
export const flickrPayload = { linkMetadata: flickrMetadata };
