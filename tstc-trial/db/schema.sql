-- Drops visitors_db if it already exists
DROP DATABASE IF EXISTS visitor_log_db;

-- Creates DB "visitorLog_db" (only works on local connections)
CREATE DATABASE visitor_log_db;

-- Use visitor_log_db
Use visitor_log_db;

-- Create table visitor_hits
CREATE TABLE visitor_hits (
  ID int AUTO_INCREMENT NOT NULL,
  hitDate date,
  hitTime VARCHAR(30),
  appName VARCHAR(30),
  appCodeName VARCHAR(30),
  platform VARCHAR(30),
  product VARCHAR(30),
  appVersion VARCHAR(150),
  userAgent VARCHAR(150),
  language VARCHAR(30),
  onLine BOOLEAN,
  javaEnabled BOOLEAN,
  hostname VARCHAR(30),
  locale VARCHAR(30),
  timeZone VARCHAR(30),
  viewportHeight int,
  viewportWidth int,
  PRIMARY KEY (ID)
);