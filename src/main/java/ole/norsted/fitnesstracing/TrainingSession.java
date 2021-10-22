package ole.norsted.fitnesstracing;

import java.sql.Date;

public class TrainingSession {
    private String oppvarming;
    private Date date;


    public TrainingSession(  Date date, String oppvarming) {
        this.oppvarming = oppvarming;
        this.date = date;
    }

   /* public int getTrainSesh_id() {return trainSesh_id;}

    public void setTrainSesh_id(int trainSesh_id) {this.trainSesh_id = trainSesh_id;}*/

    public String getOppvarming() {return oppvarming;}

    public void setOppvarming(String oppvarming) {this.oppvarming = oppvarming;}

    public Date getDate() {return date;}

    public void setDate(Date date) {this.date = date;}
}
