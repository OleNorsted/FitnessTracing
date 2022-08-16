package ole.norsted.fitnesstracing;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.websocket.Session;
import java.util.List;

@Repository
public class FitnessTracingRepository {

    @Autowired
    public JdbcTemplate db;

    public void saveNewExercise(Exercise E){
        String sql = "INSERT INTO exercise (sId, typeOvelse,antallSet,antallRep,tyngdeS1,tyngdeS2,tyngdeS3,tyngdeS4,tyngdeS5) VALUES(?,?,?,?,?,?,?,?,?)";
        db.update(sql,E.getsId(), E.getTypeOvelse(),E.getAntallSet(),E.getAntallRep(),E.getTyngdeS1(),
                E.getTyngdeS2(), E.getTyngdeS3(), E.getTyngdeS4(), E.getTyngdeS5());
    }

    public List<Exercise> getExercise() {
        String sql = "SELECT * FROM exercise";
        List<Exercise> allExercises = db.query(sql,new BeanPropertyRowMapper(Exercise.class));
        return allExercises;
    }

    public void saveNewSession(TrainingSession TS){
        String sql = "INSERT INTO session (sesName , date ,oppvarming) VALUES (?,?,?)";
        db.update(sql, TS.getSesName(), TS.getDate(), TS.getOppvarming());
    }

    public List<TrainingSession> getSession(){
        String sql = "SELECT * FROM session";
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
    public void deleteASession(int id){
        String sql1 = "DELETE FROM exercise WHERE sId = ?";
        db.update(sql1,id);
        String sql2 = "DELETE FROM session WHERE sId = ?";
        db.update(sql2, id);
    }

    public List<TrainingSession> getSessionQuery(String sql){
        List <TrainingSession> query = db.query(sql, new BeanPropertyRowMapper(TrainingSession.class));
        return query;
    }

    public List<Exercise> getExerciseQuery(String sql){
        List <Exercise> query = db.query(sql, new BeanPropertyRowMapper(Exercise.class));
        return query;
    }

}
