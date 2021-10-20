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

    public void saveExercise(FitnessTracing trening){
        String sql = "INSERT INTO trening (typeOvelse,antallSet,antallRep,tyngdeS1,tyngdeS2,tyngdeS3,tyngdeS4,tyngdeS5) VALUES(?,?,?,?,?,?,?,?)";
        db.update(sql,trening.getTypeOvelse(),trening.getAntallSet(),trening.getAntallRep(),trening.getTyngdeS1(),
                trening.getTyngdeS2(), trening.getTyngdeS3(), trening.getTyngdeS4(), trening.getTyngdeS5());
    }

    public List<FitnessTracing> getAll() {
        String sql = "SELECT * FROM TRENING";
        List<FitnessTracing> allExercises = db.query(sql,new BeanPropertyRowMapper(FitnessTracing.class));
        return allExercises;
    }

    public void SlettEn(FitnessTracing id){
        String sql = "DELETE FROM TRENING WHERE id = ?";
        db.update(sql,id);
    }

}
