-- Create database
CREATE DATABASE registration_db;

-- Use the created database
USE registration_db;

-- Create table for storing user registration data
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    address TEXT,
    contact_number VARCHAR(15)
);
