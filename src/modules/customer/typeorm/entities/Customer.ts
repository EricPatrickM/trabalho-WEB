import publish from "../../../publish/typeorm/entities/publish";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('customers')
export default class Customer{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(()=>publish, publish => publish.customer, {cascade:true})
  @JoinColumn({ name: "customer_id" })
  publishes:publish[];
}