<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210216180858 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1DF505F5A');
        $this->addSql('CREATE TABLE eav_attribute (id INT AUTO_INCREMENT NOT NULL, values_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_EDA4B188DF505F5A (values_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE eav_attribute ADD CONSTRAINT FK_EDA4B188DF505F5A FOREIGN KEY (values_id) REFERENCES category (id)');
        $this->addSql('DROP TABLE eav_category_attribute');
        $this->addSql('DROP TABLE eav_category_value');
        $this->addSql('DROP INDEX IDX_64C19C1DF505F5A ON category');
        $this->addSql('ALTER TABLE category DROP values_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE eav_category_attribute (id INT AUTO_INCREMENT NOT NULL, values_id INT DEFAULT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_51B76914DF505F5A (values_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE eav_category_value (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE eav_category_attribute ADD CONSTRAINT FK_51B76914DF505F5A FOREIGN KEY (values_id) REFERENCES category (id)');
        $this->addSql('DROP TABLE eav_attribute');
        $this->addSql('ALTER TABLE category ADD values_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1DF505F5A FOREIGN KEY (values_id) REFERENCES eav_category_value (id)');
        $this->addSql('CREATE INDEX IDX_64C19C1DF505F5A ON category (values_id)');
    }
}
