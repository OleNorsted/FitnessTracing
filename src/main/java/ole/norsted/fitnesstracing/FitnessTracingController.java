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

    @PostMapping("/saveOne")
    public void saveExercise(FitnessTracing innExercise){
        rep.saveExercise(innExercise);
    }
   /* @PostMapping("/saveNew")
    public void SaveNewExercise(FitnessTracing innExercise){
        /*rep.saveNewExercise(innExercise);
    }*/
    @GetMapping("/getAll")
    public List<FitnessTracing> getAll(){
        return rep.getAll();
    }

}
