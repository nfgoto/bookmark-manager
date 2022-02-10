import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity()
@Index(["url"], { unique: true })
export class Link {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Column()
  url!: string;

  @Column()
  title!: string;

  @Column()
  type!: string;

  @Column()
  author!: string;

  @Column("date")
  uploadDate!: Date;

  @Column("integer")
  width!: number;

  @Column("integer")
  height!: number;
}
