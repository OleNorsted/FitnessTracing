package ole.norsted.fitnesstracing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FitnessTracingController {

    @Autowired
    FitnessTracingRepository rep;

    @PostMapping("/saveNewExercise")
    public void saveNewExercise(FitnessTracing innExercise){
        rep.saveNewExercise(innExercise);
    }

    @GetMapping("/getExercise")
    public List<FitnessTracing> getExercise(){
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

}
