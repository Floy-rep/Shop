<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210120114938 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE order_good (id INT AUTO_INCREMENT NOT NULL, order_id_id INT DEFAULT NULL, good_id_id INT DEFAULT NULL, INDEX IDX_21757485FCDAEAAA (order_id_id), INDEX IDX_2175748561E73083 (good_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_21757485FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES `order` (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_2175748561E73083 FOREIGN KEY (good_id_id) REFERENCES goods (id)');
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92D1CF98C70');
        $this->addSql('DROP INDEX IDX_563B92D1CF98C70 ON goods');
        $this->addSql('ALTER TABLE goods DROP good_id');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F52993988D9F6D38');
        $this->addSql('DROP INDEX IDX_F52993988D9F6D38 ON `order`');
        $this->addSql('ALTER TABLE `order` CHANGE order_id order_id_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_F5299398FCDAEAAA ON `order` (order_id_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE order_good');
        $this->addSql('ALTER TABLE goods ADD good_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92D1CF98C70 FOREIGN KEY (good_id) REFERENCES `order` (id)');
        $this->addSql('CREATE INDEX IDX_563B92D1CF98C70 ON goods (good_id)');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398FCDAEAAA');
        $this->addSql('DROP INDEX IDX_F5299398FCDAEAAA ON `order`');
        $this->addSql('ALTER TABLE `order` CHANGE order_id_id order_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F52993988D9F6D38 FOREIGN KEY (order_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_F52993988D9F6D38 ON `order` (order_id)');
    }
}
