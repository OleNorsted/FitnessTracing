INSERT INTO typeOfExercise (type) Values
('Type Of Exercise'),('Row'),('Tricep Extension'),('Pulldown'),('Chest Press');

INSERT INTO session (sesName, date, oppvarming) VALUES
('Session 1', '2022-08-16', 'Løp i 10 min'),('Session 2', '2022-08-16', 'Jogget i 10 min');

INSERT INTO exercise (sId, typeOvelse, antallSet, antallRep, tyngdeS1, tyngdeS2, tyngdeS3, tyngdeS4, tyngdeS5) VALUES
(1,'Row',3,10,18,18,18,0,0),(2,'Row',3,10,22,22,22,0,0);