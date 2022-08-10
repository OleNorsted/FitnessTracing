package ole.norsted.fitnesstracing;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FitnessTracingRepository {

    @Autowired
    public JdbcTemplate db;

    public void saveNewExercise(FitnessTracing E){
        String sql = "INSERT INTO exercise (sId, typeOvelse,antallSet,antallRep,tyngdeS1,tyngdeS2,tyngdeS3,tyngdeS4,tyngdeS5) VALUES(?,?,?,?,?,?,?,?,?)";
        db.update(sql,E.getsId(), E.getTypeOvelse(),E.getAntallSet(),E.getAntallRep(),E.getTyngdeS1(),
                E.getTyngdeS2(), E.getTyngdeS3(), E.getTyngdeS4(), E.getTyngdeS5());
    }

    public List<FitnessTracing> getExercise() {
        String sql = "SELECT * FROM exercise";
        List<FitnessTracing> allExercises = db.query(sql,new BeanPropertyRowMapper(FitnessTracing.class));
        return allExercises;
    }

    public void saveNewSession(TrainingSession TS){
        String sql = "INSERT INTO trainingSession (sesName , date ,oppvarming) VALUES (?,?,?)";
        db.update(sql, TS.getSesName(), TS.getDate(), TS.getOppvarming());
    }

    public List<TrainingSession> getSession(){
        String sql = "SELECT * FROM trainingSession";
        List<TrainingSession> allSessions =  db.query(sql,new BeanPropertyRowMapper(TrainingSession.class));
        return allSessions;
    }

    public void saveNewTypeOfExercise(TypeOfExercise TOE){
        String sql = "INSERT INTO typeOfExercise (type) VALUES (?)";
        db.update(sql, TOE.getType());
    }

    public List<TypeOfExercise> getTypeOfExercise(){
        String sql = "SELECT * FROM typeOfExercise";
        List<TypeOfExercise> allTypes = db.query(sql, new BeanPropertyRowMapper(TypeOfExercise.class));
        return allTypes;
    }

    public void deleteAExercise(int id){
        String sql = "DELETE FROM exercise WHERE eId = ?";
        db.update(sql,id);
    }

}
