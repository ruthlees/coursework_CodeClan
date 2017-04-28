package com.codeclan.example.magiceightball;

import java.util.Scanner;

/**
 * Created by user on 23/02/2017.
 */

public class Runner {


    public static void main(String[] args) {
        Scanner sc;
        String data;
        Answer reply = new Answer();
        System.out.println("Ask the Eight Ball a question you need an answer!");
        sc = new Scanner(System.in);
        data = sc.nextLine();
        System.out.flush();
        System.out.println(reply.getAnswer());
    }


}
