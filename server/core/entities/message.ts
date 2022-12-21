import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  msg: string;

  //   @Column('text')
  //   sender: string;
}
