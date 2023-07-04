-- Active: 1678859769284@@127.0.0.1@3306

DROP DATABASE IF EXISTS  banking1;

CREATE DATABASE banking1;
USE banking1;


CREATE TABLE accounts(id INT PRIMARY KEY AUTO_INCREMENT,
					  acctnumber VARCHAR(20) NOT NULL,
                      accttype ENUM('savings','business','current'),
                      ifsccode VARCHAR(20),
                      balance DOUBLE,
                      registereddate DATE ,
                      peopleid INT NOT NULL
                      );
                      
CREATE TABLE operations(operationid INT PRIMARY KEY AUTO_INCREMENT,
					  acctId INT NOT NULL,
                      CONSTRAINT fk_acctId FOREIGN KEY(acctId) REFERENCES accounts(id) ON UPDATE CASCADE ON DELETE CASCADE,
                       acctnumber VARCHAR(20) NOT NULL,
                      amount DOUBLE,
                      operationdate DATETIME ,
                      operationmode CHAR
                      );

 
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('39025546601','savings','MAHB0000286',200000,'2023-03-01',1);
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('39025546612','savings','BARBO0000286',225700,'2023-03-04',2);        
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('12656767876','savings','AXIS0000296',2352500,'2021-07-01',3);   
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('67675456546','savings','AXIS0000296',789000,'2021-06-01',4); 
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('45656577687','savings','AXIS0000296',2352500,'2022-03-11',5); 
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('46556565566','savings','AXIS0000296',2352500,'2022-04-21',6); 
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('56423234233','savings','AXIS0000296',2352500,'2021-11-11',7);
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('56423234234','savings','BARBO0000286',2352500,'2021-11-11',1);
INSERT INTO accounts(acctnumber,accttype,ifsccode,balance,registereddate,peopleid)VALUES('56423234235','savings','AXIS0000296',2352500,'2021-11-11',1);

select * from accounts;
CREATE TABLE
    transactions(
        id INT PRIMARY KEY AUTO_INCREMENT,
        fromoperationid INT NOT NULL,
        tooperationid INT NOT NULL,
        CONSTRAINT fk_operationid FOREIGN KEY(fromoperationid) REFERENCES operations(operationid) ON UPDATE CASCADE ON DELETE CASCADE,
        CONSTRAINT fk_rooperationid FOREIGN KEY(tooperationid) REFERENCES operations(operationid) ON UPDATE CASCADE ON DELETE CASCADE
    );

DELIMITER $$
CREATE PROCEDURE fundtransfer(IN fromaccountnumber VARCHAR(20),IN toaccountnumber VARCHAR(20),
                             IN fromifsccode VARCHAR(20),IN toifsccode VARCHAR(20),
                             IN amount DOUBLE,OUT transactionId INT)
BEGIN
DECLARE fromaccountid INT DEFAULT 0;
DECLARE toaccountid INT DEFAULT 0;
DECLARE fromoperationid INT DEFAULT 0;
DECLARE tooperationid INT DEFAULT 0;
DECLARE fromaccountbalance DOUBLE DEFAULT 0;
DECLARE toaccountbalance DOUBLE DEFAULT 0;
SELECT id,balance INTO fromaccountid,fromaccountbalance FROM accounts WHERE  acctnumber=fromaccountnumber AND ifsccode=fromifsccode;
SELECT id,balance INTO toaccountid,toaccountbalance FROM accounts WHERE  acctnumber=toaccountnumber AND ifsccode =toifsccode;    
INSERT INTO operations(acctId,acctnumber,amount,operationmode,operationdate)
VALUES(fromaccountid,fromaccountnumber,amount,'W',NOW());
SET fromoperationid=LAST_INSERT_ID();
UPDATE accounts SET balance=fromaccountbalance-amount WHERE id=fromaccountid;
INSERT INTO operations(acctId,acctnumber,amount,operationmode,operationdate)
VALUES(toaccountid,toaccountnumber,amount,'D',NOW());
SET tooperationid=LAST_INSERT_ID();
UPDATE accounts SET balance=toaccountbalance+amount WHERE id=toaccountid;
INSERT INTO transactions (fromoperationid,tooperationid) VALUES (fromoperationid,tooperationid);
SET transactionId=LAST_INSERT_ID();
END 
$$ DELIMITER 



CALL fundtransfer("39025546601","39025546612","MAHB0000286" ,"BARBO0000286",1000,@transactionId);
SELECT @transactionId;

SELECT * FROM operations;
SELECT * FROM transactions;
SELECT * FROM accounts;
