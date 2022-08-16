package ole.norsted.fitnesstracing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FitnessTracingController {

    @Autowired
    FitnessTracingRepository rep;


    @PostMapping("/saveNewExercise")
    public void saveNewExercise(Exercise innExercise){
        rep.saveNewExercise(innExercise);
    }

    @GetMapping("/getExercise")
    public List<Exercise> getExercise(){
        return rep.getExercise();
    }

    @PostMapping("/saveNewSession")
    public void SaveNewSession(TrainingSession innSession){
        rep.saveNewSession(innSession);
    }

    @GetMapping("/getSession")
    public List<TrainingSession> getSession(){
        return rep.getSession();}

    @PostMapping("/saveNewTypeOfExercise")
    public void saveNewTypeOfExercise(TypeOfExercise innType){rep.saveNewTypeOfExercise(innType);}

    @GetMapping("/getTypeOfExercise")
    public  List<TypeOfExercise> getTypeOfExercise(){
        return  rep.getTypeOfExercise();}

    @PostMapping("/deleteAExercise")
    public void deleteAExercise(int exId){rep.deleteAExercise(exId);}

    @PostMapping("/deleteASession")
    public void deleteASession(int sId){rep.deleteASession(sId);}

    @GetMapping("/getSessionQuery")
    public List<TrainingSession> getSessionQuery(@RequestParam String sqlS){
        return rep.getSessionQuery(sqlS);
    }

    @GetMapping("/getExerciseQuery")
    public List<Exercise> getExerciseQuery(@RequestParam String sqlE){
        return rep.getExerciseQuery(sqlE);}


}
