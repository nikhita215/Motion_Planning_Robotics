
/*-- |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/|

    KinEval | Kinematic Evaluator | arm servo control

    Implementation of robot kinematics, control, decision making, and dynamics 
        in HTML5/JavaScript and threejs
     
    @author ohseejay / https://github.com/ohseejay / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Creative Commons 3.0 BY-SA

|\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| --*/

kineval.setpointDanceSequence = function execute_setpoints() {

    // if update not requested, exit routine
    if (!kineval.params.update_pd_dance) return;

    if (robot.name === 'baxter') {
         
    pose = 0;
    // STENCIL: implement FSM to cycle through dance pose setpoints
       
    pose_visit = true;
    
    for (x in robot.joints){
        if(Math.abs(robot.joints[x].angle - kineval.setpoints[kineval.params.dance_sequence_index[kineval.params.dance_pose_index]][x]) > 0.01){ 
            pose_visit = false ;
            break;}
    }
    if(pose_visit == true)   {
    
    if(kineval.params.dance_pose_index == kineval.params.dance_sequence_index.length-1) kineval.params.dance_pose_index = 0;
    else kineval.params.dance_pose_index += 1;           

    for (x in robot.joints) {
    kineval.params.setpoint_target[x] = kineval.setpoints[kineval.params.dance_sequence_index[kineval.params.dance_pose_index]][x];
    }

    } 

    if(kineval.params.dance_pose_index == 1){
       robot.control.rpy[1] = 0.08;
    }
    if(kineval.params.dance_pose_index == 2){
       robot.control.rpy[1] = -0.08;
    }
    if(kineval.params.dance_pose_index == 3){
       robot.control.rpy[1] = -0.08;
    }
    if(kineval.params.dance_pose_index == 4){
       robot.control.rpy[1] = 0.08;
    }
    if(kineval.params.dance_pose_index == 5){
       robot.control.xyz[0] = 0.01;
    }
    if(kineval.params.dance_pose_index == 6){
       robot.control.xyz[0] = -0.01;
    }
    if(kineval.params.dance_pose_index == 10){
       robot.control.rpy[1] = 0.08;
    }
    if(kineval.params.dance_pose_index == 11){
       robot.control.rpy[1] = -0.08;
    }
    if(kineval.params.dance_pose_index == 12){
       robot.control.rpy[1] = -0.08;
    }
    if(kineval.params.dance_pose_index == 13){
       robot.control.rpy[1] = 0.08;
    }
    if(kineval.params.dance_pose_index == 14){
       robot.control.xyz[0] = 0.01;
    }
    if(kineval.params.dance_pose_index == 15){
       robot.control.xyz[0] = -0.02;
    }
    if(kineval.params.dance_pose_index == 17){
       robot.control.xyz[0] = 0.01;
       robot.control.rpy[1] = 0.1525;
    }
}
/*
if(robot.name === 'fetch'){

    kineval.setpoints[1] = {"torso_lift_joint":0,"shoulder_pan_joint":0,"shoulder_lift_joint":-1.2200000000000009,"upperarm_roll_joint":-0.010000000000000031,"elbow_flex_joint":2.249999999999996,"forearm_roll_joint":0,"wrist_flex_joint":-0.9900000000000004,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[2] = {"torso_lift_joint":0.2900000000000001,"shoulder_pan_joint":1.5700000000000012,"shoulder_lift_joint":-0.000013304577193004099,"upperarm_roll_joint":-1.0905391141806662e-7,"elbow_flex_joint":0.000024537130069064855,"forearm_roll_joint":0,"wrist_flex_joint":-0.000010796337230388564,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[3] = {"torso_lift_joint":0.2900000000000001,"shoulder_pan_joint":-1.6000000000000012,"shoulder_lift_joint":-0.000013304577193004099,"upperarm_roll_joint":-1.0905391141806662e-7,"elbow_flex_joint":0.000024537130069064855,"forearm_roll_joint":0,"wrist_flex_joint":-0.000010796337230388564,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[4] = {"torso_lift_joint":0.15,"shoulder_pan_joint":-1.6000000000000012,"shoulder_lift_joint":-0.030013304577193006,"upperarm_roll_joint":0.009999890946088595,"elbow_flex_joint":-1.559975462869932,"forearm_roll_joint":0.03,"wrist_flex_joint":1.5499892036627707,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[5] = {"torso_lift_joint":0.3,"shoulder_pan_joint":1.6000000000000012,"shoulder_lift_joint":-0.030013304577193006,"upperarm_roll_joint":0.009999890946088595,"elbow_flex_joint":-1.559975462869932,"forearm_roll_joint":0.03,"wrist_flex_joint":1.5499892036627707,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[6] = {"torso_lift_joint":0.15,"shoulder_pan_joint":-1.6000000000000003,"shoulder_lift_joint":-0.030013304577192992,"upperarm_roll_joint":0.009999890946088589,"elbow_flex_joint":-0.8599754628699305,"forearm_roll_joint":0.009999999999999969,"wrist_flex_joint":0.8499892036627692,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[7] = {"torso_lift_joint":0.3,"shoulder_pan_joint":1.600000000000002,"shoulder_lift_joint":-0.030013304577192992,"upperarm_roll_joint":0.009999890946088589,"elbow_flex_joint":-0.8599754628699305,"forearm_roll_joint":0.009999999999999969,"wrist_flex_joint":0.8499892036627692,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[8] = {"torso_lift_joint":1.0032913137494056e-24,"shoulder_pan_joint":-0.8000000000000006,"shoulder_lift_joint":-1.2200000000000009,"upperarm_roll_joint":-0.16000000000000003,"elbow_flex_joint":-8.62805901850283e-23,"forearm_roll_joint":1.0032913020226253e-24,"wrist_flex_joint":8.52786774847993e-23,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.setpoints[9] = {"torso_lift_joint":1.0032913137494056e-24,"shoulder_pan_joint":0.5700000000000003,"shoulder_lift_joint":-1.2200000000000009,"upperarm_roll_joint":-0.16000000000000003,"elbow_flex_joint":-8.62805901850283e-23,"forearm_roll_joint":1.0032913020226253e-24,"wrist_flex_joint":8.52786774847993e-23,"wrist_roll_joint":0,"gripper_axis":0,"head_pan_joint":0,"head_tilt_joint":0,"torso_fixed_joint":0,"r_wheel_joint":0,"l_wheel_joint":0,"r_gripper_finger_joint":0,"l_gripper_finger_joint":0,"bellows_joint":0,"bellows_joint2":0,"estop_joint":0,"laser_joint":0};
    kineval.params.dance_sequence_index = [0,8,9,8,9,0,1,0,1,0,2,3,4,6,5,7,0];
    pose = 0;   
    pose_visit = true;
    
    for (x in robot.joints){
        if(Math.abs(robot.joints[x].angle - kineval.setpoints[kineval.params.dance_sequence_index[kineval.params.dance_pose_index]][x]) > 0.01){ 
            pose_visit = false ;
            break;}
    }
    if(pose_visit == true)   {
    
    if(kineval.params.dance_pose_index == kineval.params.dance_sequence_index.length-1) kineval.params.dance_pose_index = 0;
    else kineval.params.dance_pose_index += 1;           

    for (x in robot.joints) {
    kineval.params.setpoint_target[x] = kineval.setpoints[kineval.params.dance_sequence_index[kineval.params.dance_pose_index]][x];
    }

    } 
    if(kineval.params.dance_pose_index == 6){
       robot.control.xyz[2] = 0.01;
    }
    if(kineval.params.dance_pose_index == 8){
       robot.control.xyz[2] = 0.01;
    }
    if(kineval.params.dance_pose_index == 9){
       robot.control.xyz[2] = -0.02;
    }
    if(kineval.params.dance_pose_index == 10){
       robot.control.rpy[1] = 0.055;
    }
    if(kineval.params.dance_pose_index == 16){
       robot.control.rpy[1] = 0.156;
    }
}*/
}

kineval.setpointClockMovement = function execute_clock() {

    // if update not requested, exit routine
    if (!kineval.params.update_pd_clock) return; 

    var curdate = new Date();
    for (x in robot.joints) {
        kineval.params.setpoint_target[x] = curdate.getSeconds()/60*2*Math.PI;
    }
}


kineval.robotArmControllerSetpoint = function robot_pd_control () {
    // if update not requested, exit routine
    if ((!kineval.params.update_pd)&&(!kineval.params.persist_pd)) return; 

    kineval.params.update_pd = false; // if update requested, clear request and process setpoint control

    // STENCIL: implement P servo controller over joints
    if (robot.name === 'fetch') {
        for (x in robot.joints) {
        robot.joints[x].servo.p_gain = 0.16;
        robot.joints[x].control = robot.joints[x].servo.p_gain*(kineval.params.setpoint_target[x] - robot.joints[x].angle); 
    }
    }
    else
        
      for (x in robot.joints) {
        robot.joints[x].servo.p_gain = 0.118;
        robot.joints[x].control = robot.joints[x].servo.p_gain*(kineval.params.setpoint_target[x] - robot.joints[x].angle); 
    } 
    
    

}


