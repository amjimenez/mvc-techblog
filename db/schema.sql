-- DROP DATABASE
DROP DATABASE IF EXISTS tech_blog;

-- CREATE DATABASE
CREATE DATABASE tech_blog;

-- CREATE TABLES
CREATE TABLE `tech_blog`.`user` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT uc_user UNIQUE (`username`)
) ENGINE=InnoDB;

CREATE TABLE `tech_blog`.`blog` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `user_id` INT unsigned NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `contents` TEXT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    CONSTRAINT uc_blog UNIQUE (`title`),
    CONSTRAINT `user_id_fk1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `tech_blog`.`comment` (
    `id` INT unsigned NOT NULL AUTO_INCREMENT,
    `blog_id` INT unsigned NOT NULL,
    `user_id` INT unsigned NOT NULL,
    `contents` TEXT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    CONSTRAINT `blog_id_fk` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT `user_id_fk2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;