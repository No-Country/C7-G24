-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema users_bancoalim
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema users_bancoalim
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `users_bancoalim` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `users_bancoalim` ;

-- -----------------------------------------------------
-- Table `users_bancoalim`.`donante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_bancoalim`.`donante` (
  `id_donante` INT NOT NULL AUTO_INCREMENT,
  `dni` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(25) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_donante`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `users_bancoalim`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_bancoalim`.`empresa` (
  `id_empresa` INT NOT NULL AUTO_INCREMENT,
  `name_emp` VARCHAR(45) NOT NULL,
  `cuit_emp` VARCHAR(45) NOT NULL,
  `tipo_emp` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_empresa`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `users_bancoalim`.`donacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_bancoalim`.`donacion` (
  `id_donacion` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  `perecedero` TINYINT NOT NULL,
  `cantidad` VARCHAR(45) NULL DEFAULT NULL,
  `id_donante` INT NULL DEFAULT NULL,
  `id_empresa` INT NULL DEFAULT NULL,
  `f_vencimiento` DATE NULL DEFAULT NULL,
  `detalles` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_donacion`),
  INDEX `id_donante` (`id_donante` ASC) VISIBLE,
  INDEX `id_empresa` (`id_empresa` ASC) VISIBLE,
  CONSTRAINT `donacion_ibfk_1`
    FOREIGN KEY (`id_donante`)
    REFERENCES `users_bancoalim`.`donante` (`id_donante`),
  CONSTRAINT `donacion_ibfk_2`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `users_bancoalim`.`empresa` (`id_empresa`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `users_bancoalim`.`ong`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_bancoalim`.`ong` (
  `id_ong` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `cuit_ong` VARCHAR(45) NOT NULL,
  `direcc_ong` VARCHAR(45) NOT NULL,
  `barrio_ong` VARCHAR(45) NOT NULL,
  `razon` VARCHAR(100) NOT NULL,
  `nameResp` VARCHAR(45) NOT NULL,
  `lastnameResp` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_ong`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `users_bancoalim`.`voluntario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users_bancoalim`.`voluntario` (
  `id_voluntario` INT NOT NULL AUTO_INCREMENT,
  `dni_voluntario` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `vehicle` VARCHAR(45) NULL DEFAULT NULL,
  `time` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_voluntario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
