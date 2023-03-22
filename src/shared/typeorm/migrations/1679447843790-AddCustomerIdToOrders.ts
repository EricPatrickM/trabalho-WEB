import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddCustomerIdToOrders1679447843790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('publishes',
            new TableColumn({
                name:'customer_id',
                type:'uuid',
                isNullable:true
            })
        );

        await queryRunner.createForeignKey('publishes',
            new TableForeignKey({
                name:'ActorPublish',
                columnNames: ['customer_id'],
                referencedTableName:'customers',
                referencedColumnNames:['id'],
                onDelete: 'SET NULL',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('publishes', 'ActorPublish');
        await queryRunner.dropColumn('publishes', 'customer_id');
    }

}
