package ole.norsted.fitnesstracing;

public class TrainingSession {
    private int sId;
    private String sesName;
    private String oppvarming;
    private String date;


    public TrainingSession( String sesName, String date, String oppvarming) {
        this.sesName = sesName;
        this.oppvarming = oppvarming;
        this.date = date;
    }


    public TrainingSession(){
    }

   /* public int getTrainSesh_id() {return trainSesh_id;}

    public void setTrainSesh_id(int trainSesh_id) {this.trainSesh_id = trainSesh_id;}*/

    public int getsId() {
        return sId;
    }

    public void setsId(int sId) {
        this.sId = sId;
    }

    public String getSesName() {
        return sesName;
    }

    public void setSesName(String sesName) {
        this.sesName = sesName;
    }

    public String getOppvarming() {return oppvarming;}

    public void setOppvarming(String oppvarming) {this.oppvarming = oppvarming;}

    public String getDate() {return date;}

    public void setDate(String date) {this.date = date;}
}
