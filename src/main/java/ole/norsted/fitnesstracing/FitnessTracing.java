package ole.norsted.fitnesstracing;

public class FitnessTracing {
    private int sId;
    private String typeOvelse;
    private int antallSet;
    private int antallRep;
    private int tyngdeS1;
    private int tyngdeS2;
    private int tyngdeS3;
    private int tyngdeS4;
    private int tyngdeS5;   //beregner at bruker ikke kjører flere en 5 sett på en øvelse

    public FitnessTracing(int sId, String typeOvelse, int antallSet, int antallRep, int tyngdeS1 , int tyngdeS2, int tyngdeS3, int tyngdeS4, int tyngdeS5) {
        this.sId = sId;
        this.typeOvelse = typeOvelse;
        this.antallSet = antallSet;
        this.antallRep = antallRep;
        this.tyngdeS1 = tyngdeS1;
        this.tyngdeS2 = tyngdeS2;
        this.tyngdeS3 = tyngdeS3;
        this.tyngdeS4 = tyngdeS4;
        this.tyngdeS5 = tyngdeS5;
    }

    public FitnessTracing(){
    }

   public int getsId() {return sId;}

   public void setsId(int sId) {this.sId = sId;}

    public String getTypeOvelse() {
        return typeOvelse;
    }

    public void setTypeOvelse(String typeOvelse) {
        this.typeOvelse = typeOvelse;
    }

    public int getAntallSet() {
        return antallSet;
    }

    public void setAntallSet(int antallSet) {
        this.antallSet = antallSet;
    }

    public int getAntallRep() {
        return antallRep;
    }

    public void setAntallRep(int antallRep) {
        this.antallRep = antallRep;
    }

    public int getTyngdeS1() {
        return tyngdeS1;
    }

    public void setTyngdeS1(int tyngdeS1) {
        this.tyngdeS1 = tyngdeS1;
    }

    public int getTyngdeS2() {
        return tyngdeS2;
    }

    public void setTyngdeS2(int tyngdeS2) {
        this.tyngdeS2 = tyngdeS2;
    }

    public int getTyngdeS3() {
        return tyngdeS3;
    }

    public void setTyngdeS3(int tyngdeS3) {
        this.tyngdeS3 = tyngdeS3;
    }

    public int getTyngdeS4() {
        return tyngdeS4;
    }

    public void setTyngdeS4(int tyngdeS4) {
        this.tyngdeS4 = tyngdeS4;
    }

    public int getTyngdeS5() {
        return tyngdeS5;
    }

    public void setTyngdeS5(int tyngdeS5) {
        this.tyngdeS5 = tyngdeS5;
    }
}



