<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210216185641 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE eav_attribute DROP FOREIGN KEY FK_EDA4B188DF505F5A');
        $this->addSql('DROP INDEX IDX_EDA4B188DF505F5A ON eav_attribute');
        $this->addSql('ALTER TABLE eav_attribute CHANGE values_id category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE eav_attribute ADD CONSTRAINT FK_EDA4B18812469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_EDA4B18812469DE2 ON eav_attribute (category_id)');
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92DF920BBA2');
        $this->addSql('DROP INDEX IDX_563B92DF920BBA2 ON goods');
        $this->addSql('ALTER TABLE goods CHANGE value_id values_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DDF505F5A FOREIGN KEY (values_id) REFERENCES eav_value (id)');
        $this->addSql('CREATE INDEX IDX_563B92DDF505F5A ON goods (values_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE eav_attribute DROP FOREIGN KEY FK_EDA4B18812469DE2');
        $this->addSql('DROP INDEX IDX_EDA4B18812469DE2 ON eav_attribute');
        $this->addSql('ALTER TABLE eav_attribute CHANGE category_id values_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE eav_attribute ADD CONSTRAINT FK_EDA4B188DF505F5A FOREIGN KEY (values_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_EDA4B188DF505F5A ON eav_attribute (values_id)');
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92DDF505F5A');
        $this->addSql('DROP INDEX IDX_563B92DDF505F5A ON goods');
        $this->addSql('ALTER TABLE goods CHANGE values_id value_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DF920BBA2 FOREIGN KEY (value_id) REFERENCES eav_value (id)');
        $this->addSql('CREATE INDEX IDX_563B92DF920BBA2 ON goods (value_id)');
    }
}
