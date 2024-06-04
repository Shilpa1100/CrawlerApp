# CrawlerApp

## Description 
  
This is Crawer server web Application for client details. Using this user can parse URL https://bit.ly/3lmNMTA and store data in database. Through UI users can view, add, edit, search and delete client details.


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
  

## Installation

Server Installation:

1. `git clone` the repo down to your local.
2. Run `npm install` in order to install the following npm package dependencies.
3. Start server by running `npm start` in the command line.

UI installation:

1. Go inside UI folder
2. Run `npm install` in order to install the following npm package dependencies.
3. Start UI by running `npm run dev` in the command line.


## Usage 

Install Mysql and create database `crawler_db` and update username and password in `dbConnection.js` file.

Create `clientDetails` table with following fields:
![clientDetailsTabledesc](https://github.com/Shilpa1100/CrawlerApp/assets/171326323/970fa325-3f11-49fc-a75a-dc3381360457)

## Methodology

The application utilizes components for UI. UI components are present in `UI/src/components` folder.
