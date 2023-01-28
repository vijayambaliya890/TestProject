-- CreateTable
CREATE TABLE `Sale` (
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `customerId` VARCHAR(191) NULL,
    `id` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NULL,
    `totalPrice` INTEGER NULL,
    `orderId` VARCHAR(191) NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
