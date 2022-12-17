import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('publishes')
export default class publish{
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
    actor:string;

    @Column()
    available:boolean;

    @CreateDateColumn()
    created_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;
}