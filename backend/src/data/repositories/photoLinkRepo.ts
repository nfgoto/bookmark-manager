import { dao } from "../appDao";
import { PhotoLink } from "../entity/PhotoLink";

export const getPhotoLinkRepository = () => dao.buildRepository(PhotoLink);
