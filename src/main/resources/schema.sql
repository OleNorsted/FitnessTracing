CREATE TABLE trainingSession
(
    sId INTEGER AUTO_INCREMENT NOT NULL ,
    sesName VARCHAR (255) ,
    date DATE ,
    oppvarming VARCHAR (255) ,
    PRIMARY KEY (sId)
);

CREATE TABLE exercise
(
    eId INTEGER AUTO_INCREMENT NOT NULL ,
    sId INTEGER NOT NULL,
    typeOvelse VARCHAR (255),
    antallSet INTEGER ,
    antallRep INTEGER,
    tyngdeS1 INTEGER ,
    tyngdeS2 INTEGER ,
    tyngdeS3 INTEGER ,
    tyngdeS4 INTEGER ,
    tyngdeS5 INTEGER ,
    PRIMARY KEY (eId)
    /*FOREIGN KEY (trainSesh_id) REFERENCES trainingSession(trainSesh_id)*/
);

CREATE TABLE typeOfExercise
(
    type VARCHAR (255)
)


