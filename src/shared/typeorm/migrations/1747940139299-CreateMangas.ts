import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMangas1747940139299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //await pq o método é assíncrono e executado no banco de dados
        await queryRunner.createTable(
            new Table({
                name: 'mangas',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                    { name: 'name', type: 'varchar' },
                    { name: 'capitulos', type: 'int' },
                    { name: 'author', type: 'varchar' },
                    { name: 'description', type: 'varchar' },
                    { name: 'gender', type: 'varchar' },
                    { name: 'release_date', type: 'timestamp' },

                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('mangas');
    }
}
