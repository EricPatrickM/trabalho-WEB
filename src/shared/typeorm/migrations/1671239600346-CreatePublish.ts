import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePublish1671239600346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'publishes',
                columns:[
                    {name:'id', type:'uuid', isPrimary:true, generationStrategy:'uuid', default:'uuid_generate_v4()'},
                    {name:'tag', type:'varchar'},
                    {name:'preview', type:'varchar', length:'100'},
                    {name:'views', type:'int'},
                    {name:'title', type:'varchar'},
                    {name:'content', type:'varchar'},
                    {name:'actor', type:'varchar'},
                    {name:'available', type:'boolean'},
                    {name:'created_at', type:'timestamp', default:'now()'},
                    {name:'updated_at', type:'timestamp', default:'now()'}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('publishes')
    }

}
