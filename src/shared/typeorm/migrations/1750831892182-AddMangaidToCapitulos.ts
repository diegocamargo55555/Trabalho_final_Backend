import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddMangaidToCapitulos1750831892182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { //AddCustomerIdToOrders         trocar Customers = Capitulos ; Orders to Mangas            //
        await queryRunner.addColumn(
            'capitulos',
            new TableColumn({
                name: 'manga_id',
                type: 'uuid',
                isNullable: true, //mesmo que não exista mais cliente, ainda guarda pedidos
            }),
        );

        await queryRunner.createForeignKey('capitulos',
            new TableForeignKey({
                name: 'CapitulosManga',
                columnNames: ['manga_id'],
                referencedTableName: 'mangas',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('capitulos', 'CapitulosManga');
        await queryRunner.dropColumn('capitulos', 'manga_id');
    }
}