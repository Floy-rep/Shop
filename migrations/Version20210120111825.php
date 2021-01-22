<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210120111825 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6491AD5CDBF');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, order_id INT DEFAULT NULL, good_id INT DEFAULT NULL, INDEX IDX_F52993988D9F6D38 (order_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F52993988D9F6D38 FOREIGN KEY (order_id) REFERENCES user (id)');
        $this->addSql('DROP TABLE cart');
        $this->addSql('ALTER TABLE goods ADD good_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92D1CF98C70 FOREIGN KEY (good_id) REFERENCES `order` (id)');
        $this->addSql('CREATE INDEX IDX_563B92D1CF98C70 ON goods (good_id)');
        $this->addSql('DROP INDEX IDX_8D93D6491AD5CDBF ON user');
        $this->addSql('ALTER TABLE user DROP cart_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92D1CF98C70');
        $this->addSql('CREATE TABLE cart (id INT AUTO_INCREMENT NOT NULL, item_id INT DEFAULT NULL, taken INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP INDEX IDX_563B92D1CF98C70 ON goods');
        $this->addSql('ALTER TABLE goods DROP good_id');
        $this->addSql('ALTER TABLE user ADD cart_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6491AD5CDBF FOREIGN KEY (cart_id) REFERENCES cart (id)');
        $this->addSql('CREATE INDEX IDX_8D93D6491AD5CDBF ON user (cart_id)');
    }
}
