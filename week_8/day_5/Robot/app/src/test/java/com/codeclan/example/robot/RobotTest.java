package com.codeclan.example.robot;

import android.util.Log;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 10/03/2017.
 */

public class RobotTest {

    Robot robot;


    @Before
    public void setUp() throws Exception {
        robot = new Robot("Robert", "Gold", 3);


    }

    @Test
    public void getName() throws Exception {
        assertEquals("Robert", robot.getName());

    }

    @Test
    public void testHoover() throws Exception {
        robot.hover();
        assertEquals(90,robot.getBatterylevel());

    }
}
