import java.util.*;

public member class{
    public class member class() {

    }
    //name, surname, registrationDate, endDate, cardID, etc.
    private String name;
    private String surname;
    private Date registrationDate;
    private Date membershipEndDate;
    private card memberCard;
    private String packageID;
    private String phoneNr;
    private double height;
    private double weight;
    private String dietPlanID;
    private String bodyMuscleInformation;
    private String bodyFatInformation;
    private String waterInformation;
    public double loadMoney(double amount){}
    public double buySupplements(String suplementID){}
    
}

public card class{
    public class card class() {

    }
    
    private String ID;
    private List<String> allowedHalls;
    private double balance;
    private String lockerID;
    private String currentSessionID;
    public void enterHall(String hallID){}
    public void openLocker(){}
    
}

public manager class{
    public class manager class() {}

    private String name;
    private String surname;
    private void registerVitaminBar(String vitamineName, double price){};
    private void sendSMS(String message, member m){};
    
    public member registerMember(String name, String surname, String phoneNr){} 
}

public trainer class{
    public class trainer class() {}

    public void determineTrainingsPlan(List<String> trainingIDs){}
    public void viewTrainingPlan(member m){}

    
    
}


public dieticians class{
    public class dieticians class() {}
    public void viewHealth (member m) {}
    public void viewDietPlan (member m) {}
    public void enterMembersBodyCompositionInformation (member m) {}
    public void viewMembersBodyCompositionInformation (member m) {}



}