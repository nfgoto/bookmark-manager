import { Column, Entity } from "typeorm";
import { Link } from "./Link";

@Entity()
export class VideoLink extends Link {
  @Column("integer")
  duration!: number;
}
