-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `middleName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `mobile` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `admin` TINYINT NULL DEFAULT 1,
    `registered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastLogin` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_mobile_key`(`mobile`),
    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_password_key`(`password`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
