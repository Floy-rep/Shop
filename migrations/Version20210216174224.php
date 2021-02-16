<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210216174224 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, values_id INT DEFAULT NULL, category_name VARCHAR(50) NOT NULL, INDEX IDX_64C19C1DF505F5A (values_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE eav_category_attribute (id INT AUTO_INCREMENT NOT NULL, values_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_51B76914DF505F5A (values_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE eav_category_value (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE eav_value (id INT AUTO_INCREMENT NOT NULL, value_string VARCHAR(255) DEFAULT NULL, value_integer INT DEFAULT NULL, value_bool TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `order` (id INT AUTO_INCREMENT NOT NULL, order_id_id INT DEFAULT NULL, INDEX IDX_F5299398FCDAEAAA (order_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_good (id INT AUTO_INCREMENT NOT NULL, order_id INT DEFAULT NULL, good_id INT DEFAULT NULL, unic_id INT NOT NULL, taken INT NOT NULL, INDEX IDX_217574858D9F6D38 (order_id), INDEX IDX_217574851CF98C70 (good_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, cart VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1DF505F5A FOREIGN KEY (values_id) REFERENCES eav_category_value (id)');
        $this->addSql('ALTER TABLE eav_category_attribute ADD CONSTRAINT FK_51B76914DF505F5A FOREIGN KEY (values_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE `order` ADD CONSTRAINT FK_F5299398FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_217574858D9F6D38 FOREIGN KEY (order_id) REFERENCES `order` (id)');
        $this->addSql('ALTER TABLE order_good ADD CONSTRAINT FK_217574851CF98C70 FOREIGN KEY (good_id) REFERENCES goods (id)');
        $this->addSql('ALTER TABLE goods ADD category_id INT DEFAULT NULL, ADD value_id INT DEFAULT NULL, ADD count INT NOT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92D12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DF920BBA2 FOREIGN KEY (value_id) REFERENCES eav_value (id)');
        $this->addSql('CREATE INDEX IDX_563B92D12469DE2 ON goods (category_id)');
        $this->addSql('CREATE INDEX IDX_563B92DF920BBA2 ON goods (value_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE eav_category_attribute DROP FOREIGN KEY FK_51B76914DF505F5A');
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92D12469DE2');
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1DF505F5A');
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92DF920BBA2');
        $this->addSql('ALTER TABLE order_good DROP FOREIGN KEY FK_217574858D9F6D38');
        $this->addSql('ALTER TABLE `order` DROP FOREIGN KEY FK_F5299398FCDAEAAA');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE eav_category_attribute');
        $this->addSql('DROP TABLE eav_category_value');
        $this->addSql('DROP TABLE eav_value');
        $this->addSql('DROP TABLE `order`');
        $this->addSql('DROP TABLE order_good');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP INDEX IDX_563B92D12469DE2 ON goods');
        $this->addSql('DROP INDEX IDX_563B92DF920BBA2 ON goods');
        $this->addSql('ALTER TABLE goods DROP category_id, DROP value_id, DROP count');
    }
}
