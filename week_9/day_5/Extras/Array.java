import java.util.Scanner;


public class Array {

   
    public static void main(String[] args) {
        Scanner scanner;

        String[7][5] names = {
            {"Mr. ", "Mrs. ", "Ms. ", "Dr. ", "Miss. ", "Lord. ", "Lady. "},
            {"Forthingham", "Johnstone", "Windsor",  "Sutherland", "Browningham"}
        };


        // Mr. Forthingham
        System.out.println(names[0][0] + names[1][0]);

        // Ms. Jonnstone
        System.out.println(names[0][2] + names[1][1]);

        // Lord Browningham
        System.out.println(names[0][5] + names[1][4]);

        //Lady Windsor
        System.out.println(names[0][6] + names[1][2]);

        // Dr Sutherland
        System.out.println(names[0][3] + names[1][3]);

    }
}