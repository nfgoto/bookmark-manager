import { join } from "path";
import { Connection, createConnection, EntityTarget } from "typeorm";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { SQLITE_DB_PATH } from "../utils/constants";
import { Link } from "./entity/Link";
import { PhotoLink } from "./entity/PhotoLink";
import { VideoLink } from "./entity/VideoLink";

const connectionConfig: SqliteConnectionOptions = {
  type: "sqlite",
  database: join(__dirname, SQLITE_DB_PATH),
  entities: [Link, PhotoLink, VideoLink],
  synchronize: true,
};

class AppDAO {
  private connection!: Connection;

  async connect() {
    this.connection = await createConnection(connectionConfig);
    return this.connection;
  }

  buildRepository<T>(entity: EntityTarget<T>) {
    return this.connection.getRepository(entity);
  }
}

export const dao = new AppDAO();
