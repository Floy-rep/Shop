<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210208173714 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, category_name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, order_id_id INT DEFAULT NULL, INDEX IDX_F5299398FCDAEAAA (order_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_good (id INT AUTO_INCREMENT NOT NULL, order_id INT DEFAULT NULL, good_id INT DEFAULT NULL, unic_id INT NOT NULL, taken INT NOT NULL, INDEX IDX_217574858D9F6D38 (order_id), INDEX IDX_217574851CF98C70 (good_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, cart VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_217574858D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_217574851CF98C70 FOREIGN KEY (good_id) REFERENCES goods (id)');
        $this->addSql('ALTER TABLE goods ADD category_id INT DEFAULT NULL, ADD count INT NOT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92D12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_563B92D12469DE2 ON goods (category_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92D12469DE2');
        $this->addSql('ALTER TABLE order_good DROP FOREIGN KEY FK_217574858D9F6D38');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398FCDAEAAA');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE order_good');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP INDEX IDX_563B92D12469DE2 ON goods');
        $this->addSql('ALTER TABLE goods DROP category_id, DROP count');
    }
}
