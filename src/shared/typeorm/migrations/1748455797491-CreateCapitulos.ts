import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCapitulos1748455797491 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //await pq o método é assíncrono e executado no banco de dados
        await queryRunner.createTable(
            new Table({
                name: 'capitulos',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },

                    { name: 'title', type: 'varchar' },
                    { name: 'pages_url', type: 'varchar'},
                    { name: 'pages_total', type: 'int' },
                    { name: 'release_date', type: 'timestamp' },

                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('capitulos');
    }
}
