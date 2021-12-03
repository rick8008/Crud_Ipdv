
CREATE SCHEMA IF NOT EXISTS `ipdv_crud`;

CREATE TABLE `ipdv_crud`.`centros_de_custo` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `nome` varchar(255) NOT NULL,
   PRIMARY KEY (`id`),
   UNIQUE KEY `nome_UNIQUE` (`nome`)
 ) ENGINE=InnoDB 

CREATE TABLE `ipdv_crud`.`departamentos` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `nome` varchar(255) NOT NULL,
   `centro_de_custo_id` int(11) NOT NULL,
   PRIMARY KEY (`id`),
   UNIQUE KEY `nome_UNIQUE` (`nome`),
   KEY `fk_departamentos_centros_de_custo1` (`centro_de_custo_id`),
   CONSTRAINT `fk_departamentos_centros_de_custo3` FOREIGN KEY (`centro_de_custo_id`) REFERENCES `centros_de_custo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) ENGINE=InnoDB


CREATE TABLE `ipdv_crud`.`usuarios` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `nome` varchar(255) NOT NULL,
   `cargo` varchar(255) NOT NULL,
   `departamento_id` int(11) NOT NULL,
   PRIMARY KEY (`id`),
   KEY `fk_usuarios_departamentos2` (`departamento_id`),
   CONSTRAINT `fk_usuarios_departamentos2` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
 ) ENGINE=InnoDB 

CREATE TABLE `ipdv_crud`.`session_token` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NULL,
  `created_at` VARCHAR(255) NULL,
  PRIMARY KEY (`id`, `nome`),
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC));