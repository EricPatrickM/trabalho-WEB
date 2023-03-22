import Customer from "../../../customer/typeorm/entities/Customer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('publishes')
export default class Publish{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    tag:string;

    @Column({length:100})
    preview:string;

    @Column('int')
    views:number;

    @Column()
    title:string;

    @Column()
    content:string;

    @Column()
    available:boolean;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=>Customer, customer => customer.publishes)
    @JoinColumn({name:'customer_id'})
    customer:Customer
}