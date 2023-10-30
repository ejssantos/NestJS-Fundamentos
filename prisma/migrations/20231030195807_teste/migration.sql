/*
  Warnings:

  - Made the column `birthAt` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `password` VARCHAR(127) NULL,
    MODIFY `birthAt` DATE NOT NULL;
