import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('messages')
class Message {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  encrypted_name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { Message };
