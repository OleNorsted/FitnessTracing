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

    public void saveNewExercise(FitnessTracing exercise){
        String sql = "INSERT INTO exercise (sId, typeOvelse,antallSet,antallRep,tyngdeS1,tyngdeS2,tyngdeS3,tyngdeS4,tyngdeS5) VALUES(?,?,?,?,?,?,?,?,?)";
        db.update(sql,exercise.getsId(), exercise.getTypeOvelse(),exercise.getAntallSet(),exercise.getAntallRep(),exercise.getTyngdeS1(),
                exercise.getTyngdeS2(), exercise.getTyngdeS3(), exercise.getTyngdeS4(), exercise.getTyngdeS5());
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

    public List<FitnessTracing> getExercise() {
        String sql = "SELECT * FROM exercise";
        List<FitnessTracing> allExercises = db.query(sql,new BeanPropertyRowMapper(FitnessTracing.class));
        return allExercises;
    }



    public void SlettEn(FitnessTracing id){
        String sql = "DELETE FROM exercise WHERE id = ?";
        db.update(sql,id);
    }

}
