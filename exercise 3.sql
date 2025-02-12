CREATE SCHEMA `shopleft_database` ;
USE shopleft_database;

-- users table
CREATE TABLE `shopleft_database`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));
  
  
  -- products table
  
  CREATE TABLE `shopleft_database`.`products` (
  `product_code` VARCHAR(40) NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_price` DECIMAL(5,2) NOT NULL,
  `product_quantity` INT NOT NULL,
  PRIMARY KEY (`product_code`));
  
  -- information for the products table
  INSERT INTO `shopleft_database`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) VALUES ('baro1', 'Bar One', '9.99', '20');
INSERT INTO `shopleft_database`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) VALUES ('hand1', 'Handy Andy', '19.00', '5');
INSERT INTO `shopleft_database`.`products` (`product_code`, `product_name`, `product_price`, `product_quantity`) VALUES ('pota1', 'Potatoes', '38.99', '10');
 
 -- data for the usets table
 
 


