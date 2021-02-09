<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210120121146 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_good DROP FOREIGN KEY FK_2175748561E73083');
        $this->addSql('ALTER TABLE order_good DROP FOREIGN KEY FK_21757485FCDAEAAA');
        $this->addSql('DROP INDEX IDX_2175748561E73083 ON order_good');
        $this->addSql('DROP INDEX IDX_21757485FCDAEAAA ON order_good');
        $this->addSql('ALTER TABLE order_good ADD order_id INT DEFAULT NULL, ADD good_id INT DEFAULT NULL, DROP order_id_id, DROP good_id_id');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_217574858D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_217574851CF98C70 FOREIGN KEY (good_id) REFERENCES goods (id)');
        $this->addSql('CREATE INDEX IDX_217574858D9F6D38 ON order_good (order_id)');
        $this->addSql('CREATE INDEX IDX_217574851CF98C70 ON order_good (good_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_good DROP FOREIGN KEY FK_217574858D9F6D38');
        $this->addSql('ALTER TABLE order_good DROP FOREIGN KEY FK_217574851CF98C70');
        $this->addSql('DROP INDEX IDX_217574858D9F6D38 ON order_good');
        $this->addSql('DROP INDEX IDX_217574851CF98C70 ON order_good');
        $this->addSql('ALTER TABLE order_good ADD order_id_id INT DEFAULT NULL, ADD good_id_id INT DEFAULT NULL, DROP order_id, DROP good_id');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_2175748561E73083 FOREIGN KEY (good_id_id) REFERENCES goods (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_21757485FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES `order` (id)');
        $this->addSql('CREATE INDEX IDX_2175748561E73083 ON order_good (good_id_id)');
        $this->addSql('CREATE INDEX IDX_21757485FCDAEAAA ON order_good (order_id_id)');
    }

    public function isTransactional(): bool
    {
        return false;
    }
}
