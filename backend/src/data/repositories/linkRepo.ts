import { dao } from "../appDao";
import { Link } from "../entity/Link";

export const getLinkRepository = () => dao.buildRepository(Link);
