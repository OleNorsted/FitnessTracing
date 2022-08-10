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

    @PostMapping("/saveNewSession")
    public void SaveNewSession(TrainingSession innSession){
        rep.saveNewSession(innSession);
    }

    @GetMapping("/getExercise")
    public List<FitnessTracing> getExercise(){
        return rep.getExercise();
    }

    @GetMapping("/getSession")
    public List<TrainingSession> getSession(){
        return rep.getSession();}

}
