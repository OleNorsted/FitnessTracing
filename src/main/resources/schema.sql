CREATE TABLE trainingSession
(

    date DATE NOT NULL,
    oppvarming VARCHAR (255) ,
    PRIMARY KEY (date)
);

CREATE TABLE exercise
(
    eId INTEGER AUTO_INCREMENT NOT NULL ,
    typeOvelse INTEGER ,
    antallSet INTEGER ,
    antallRep INTEGER,
    tyngdeS1 INTEGER ,
    tyngdeS2 INTEGER ,
    tyngdeS3 INTEGER ,
    tyngdeS4 INTEGER ,
    tyngdeS5 INTEGER ,
    /*trainSesh INTEGER NOT NULL,*/
    PRIMARY KEY (eId)
    /*FOREIGN KEY (trainSesh_id) REFERENCES trainingSession(trainSesh_id)*/
);


