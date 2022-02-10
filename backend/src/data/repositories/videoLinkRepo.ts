import { dao } from "../appDao";
import { VideoLink } from "../entity/VideoLink";

export const getVideoLinkRepository = () => dao.buildRepository(VideoLink);
