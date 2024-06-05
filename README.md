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

1. View Client Details Page:
   ![image](https://github.com/Shilpa1100/CrawlerApp/assets/171326323/f0ffa0c8-680c-4637-b809-fe4bf778c14b)

2. Add Client Details Page:
   ![image](https://github.com/Shilpa1100/CrawlerApp/assets/171326323/39def838-a6f3-4687-83e1-01936b1f15a2)
   
3. Update Client Details Page:
   ![image](https://github.com/Shilpa1100/CrawlerApp/assets/171326323/6775cb73-c13b-4eec-856d-5e14306d6399)

4. Search Client Details By id:
   ![image](https://github.com/Shilpa1100/CrawlerApp/assets/171326323/02099af9-9290-469d-8d9e-cba174c22b39)

