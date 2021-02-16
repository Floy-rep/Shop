<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210216191211 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE eav_value ADD good_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE eav_value ADD CONSTRAINT FK_4589807A1CF98C70 FOREIGN KEY (good_id) REFERENCES goods (id)');
        $this->addSql('CREATE INDEX IDX_4589807A1CF98C70 ON eav_value (good_id)');
        $this->addSql('ALTER TABLE goods DROP FOREIGN KEY FK_563B92DDF505F5A');
        $this->addSql('DROP INDEX IDX_563B92DDF505F5A ON goods');
        $this->addSql('ALTER TABLE goods DROP values_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE eav_value DROP FOREIGN KEY FK_4589807A1CF98C70');
        $this->addSql('DROP INDEX IDX_4589807A1CF98C70 ON eav_value');
        $this->addSql('ALTER TABLE eav_value DROP good_id');
        $this->addSql('ALTER TABLE goods ADD values_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE goods ADD CONSTRAINT FK_563B92DDF505F5A FOREIGN KEY (values_id) REFERENCES eav_value (id)');
        $this->addSql('CREATE INDEX IDX_563B92DDF505F5A ON goods (values_id)');
    }
}
