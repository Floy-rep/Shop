<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210216134224 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE eav_value (id INT AUTO_INCREMENT NOT NULL, value_string VARCHAR(255) DEFAULT NULL, value_integer INT DEFAULT NULL, value_bool TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE eav_category_attribute DROP FOREIGN KEY FK_51B76914DF505F5A');
        $this->addSql('ALTER TABLE eav_category_attribute ADD CONSTRAINT FK_51B76914DF505F5A FOREIGN KEY (values_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE goods ADD value_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DF920BBA2 FOREIGN KEY (value_id) REFERENCES eav_value (id)');
        $this->addSql('CREATE INDEX IDX_563B92DF920BBA2 ON goods (value_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92DF920BBA2');
        $this->addSql('DROP TABLE eav_value');
        $this->addSql('ALTER TABLE eav_category_attribute DROP FOREIGN KEY FK_51B76914DF505F5A');
        $this->addSql('ALTER TABLE eav_category_attribute ADD CONSTRAINT FK_51B76914DF505F5A FOREIGN KEY (values_id) REFERENCES eav_category_value (id)');
        $this->addSql('DROP INDEX IDX_563B92DF920BBA2 ON goods');
        $this->addSql('ALTER TABLE goods DROP value_id');
    }
}
