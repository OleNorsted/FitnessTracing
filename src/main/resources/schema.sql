CREATE TABLE trening
(
    id INTEGER AUTO_INCREMENT NOT NULL ,
    toId INTEGER ,
    typeOvelse INTEGER ,
    antallSet INTEGER ,
    antallRep INTEGER,
    tyngdeS1 INTEGER ,
    tyngdeS2 INTEGER ,
    tyngdeS3 INTEGER ,
    tyngdeS4 INTEGER ,
    tyngdeS5 INTEGER ,
    PRIMARY KEY (id)
);

CREATE TABLE treningsOkter
(
    toId INTEGER AUTO_INCREMENT NOT NULL,
    oppvarming VARCHAR (255) ,
    date DATE ,
    PRIMARY KEY (toId)
);
