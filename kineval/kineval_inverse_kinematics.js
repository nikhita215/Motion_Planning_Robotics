
/*-- |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/|

    KinEval | Kinematic Evaluator | inverse kinematics

    Implementation of robot kinematics, control, decision making, and dynamics 
        in HTML5/JavaScript and threejs
     
    @author ohseejay / https://github.com/ohseejay / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Creative Commons 3.0 BY-SA

|\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| --*/

kineval.robotInverseKinematics = function robot_inverse_kinematics(endeffector_target_world, endeffector_joint, endeffector_position_local) {
   // kineval.iterateIK(endeffector_target_world, endeffector_joint, endeffector_position_local);
    // compute joint angle controls to move location on specified link to Cartesian location
    if ((kineval.params.update_ik)||(kineval.params.persist_ik)) { 
        // if update requested, call ik iterator and show endeffector and target
        kineval.iterateIK(endeffector_target_world, endeffector_joint, endeffector_position_local);
        if (kineval.params.trial_ik_random.execute)
            kineval.randomizeIKtrial();
        else // KE: this use of start time assumes IK is invoked before trial
            kineval.params.trial_ik_random.start = new Date();
    }

    kineval.params.update_ik = false; // clear IK request for next iteration
}

kineval.randomizeIKtrial = function randomIKtrial () {

   // update time from start of trial
   cur_time = new Date();
   kineval.params.trial_ik_random.time = cur_time.getTime()-kineval.params.trial_ik_random.start.getTime();

   // get endeffector Cartesian position in the world
   endeffector_world = matrix_multiply(robot.joints[robot.endeffector.frame].xform,robot.endeffector.position);

   // compute distance of endeffector to target
   kineval.params.trial_ik_random.distance_current = Math.sqrt(
           Math.pow(kineval.params.ik_target.position[0][0]-endeffector_world[0][0],2.0)
           + Math.pow(kineval.params.ik_target.position[1][0]-endeffector_world[1][0],2.0)
           + Math.pow(kineval.params.ik_target.position[2][0]-endeffector_world[2][0],2.0) );

   // if target reached, increment scoring and generate new target location
   // KE 2 : convert hardcoded constants into proper parameters
   if (kineval.params.trial_ik_random.distance_current < 0.01) {
       kineval.params.ik_target.position[0][0] = 1.2*(Math.random()-0.5);
       kineval.params.ik_target.position[1][0] = 1.2*(Math.random()-0.5)+1.5;
       kineval.params.ik_target.position[2][0] = 0.7*(Math.random()-0.5)+0.5;
       kineval.params.trial_ik_random.targets += 1;
       textbar.innerHTML = "IK trial Random: target " + kineval.params.trial_ik_random.targets + " reached at time " + kineval.params.trial_ik_random.time;
   }

}

kineval.iterateIK = function iterate_inverse_kinematics(endeffector_target_world, endeffector_joint, endeffector_position_local) {
    // STENCIL: implement inverse kinematics iteration
   
    var joint_position_local = [],joint_axis = [],joint_position_world = [],joint_axis_world = [],joint_axis_local =[], jacobian = [], endpoint_error=[];
    var r=[],q =[] ;
    var a=endeffector_joint, link, n=0;
    endeffector_world = new Object(); 
    endeffector_world.orientation = [];

    while(1){
        if(robot.joints[a].type === "fixed") n-=1;
        if(robot.joints[a].parent !== robot.base) {
            n+=1;
            link = robot.joints[a].parent; 
            a = robot.links[link].parent;
        }
        else break;
    }
    for (var i = 0; i < 6; i++) { jacobian[i] = []; endpoint_error[i]=[]; }
    for (var i = 0; i < 4; i++) {joint_axis_local[i] = []; joint_position_local[i]=[];}

    a=endeffector_joint;

    endeffector_world.position = matrix_multiply(robot.joints[endeffector_joint].xform,endeffector_position_local);
    for (var i = 0; i < 3; i++) { endpoint_error[i][0] = endeffector_target_world.position[i] - endeffector_world.position[i] ;}   
    for (var i = 3; i < 6; i++) { endpoint_error[i][0] = 0 ; } 

if (kineval.params.ik_orientation_included) {
/*   
    endeffector_world.orientation[1] = Math.asin(-robot.joints[endeffector_joint].xform[2][0]);
    if(robot.joints[endeffector_joint].xform[2][0] == 1){
    endeffector_world.orientation[0] = 0;
    endeffector_world.orientation[2] = -Math.atan2(robot.joints[endeffector_joint].xform[1][2],robot.joints[endeffector_joint].xform[1][1]) ; 
    }
    else if(robot.joints[endeffector_joint].xform[2][0] == -1){
    endeffector_world.orientation[0] = 0;
    endeffector_world.orientation[2] = -Math.atan2(-robot.joints[endeffector_joint].xform[1][2],robot.joints[endeffector_joint].xform[1][1]) ; 
    }
    else{
    endeffector_world.orientation[0] = Math.atan2(robot.joints[endeffector_joint].xform[2][1],robot.joints[endeffector_joint].xform[2][2]);
    endeffector_world.orientation[2] = Math.atan2(robot.joints[endeffector_joint].xform[1][0],robot.joints[endeffector_joint].xform[0][0]);
    }
*/    
    
if (robot.joints[endeffector_joint].xform[0][2] < 1 || robot.joints[endeffector_joint].xform[0][2] > -1) {
    endeffector_world.orientation[1] = Math.asin(robot.joints[endeffector_joint].xform[0][2]); 
    endeffector_world.orientation[0] = Math.atan2(-robot.joints[endeffector_joint].xform[1][2],robot.joints[endeffector_joint].xform[2][2]); 
    endeffector_world.orientation[2] = Math.atan2(-robot.joints[endeffector_joint].xform[0][1], robot.joints[endeffector_joint].xform[0][0]);
}

else if(robot.joints[endeffector_joint].xform[0][2] == 1){
    endeffector_world.orientation[1] = Math.PI/2;;
    endeffector_world.orientation[0] = Math.atan2(robot.joints[endeffector_joint].xform[1][0],robot.joints[endeffector_joint].xform[1][1]); 
    endeffector_world.orientation[2] = 0;
}
else{
    endeffector_world.orientation[1] = -Math.PI/2;;
    endeffector_world.orientation[0] = -Math.atan2(robot.joints[endeffector_joint].xform[1][0],robot.joints[endeffector_joint].xform[1][1]); 
    endeffector_world.orientation[2] = 0;
}
for (var i = 0; i < 3; i++) { endpoint_error[i+3][0] = (endeffector_target_world.orientation[i]-endeffector_world.orientation[i])/2; } 

}  
for (var j = n; j >= 0; j--) {


    for (var i = 0; i < 3; i++) { joint_axis_local[i][0] = robot.joints[a].axis[i];}
    joint_axis_local[3][0] = 1;
    joint_axis = matrix_multiply(robot.joints[a].xform,joint_axis_local);

    for (var i = 0; i < 3; i++) { joint_position_local[i][0] = robot.joints[a].origin.xyz[i];}
    joint_position_local[3][0] = 1;
    link = robot.joints[a].parent; 
    
    joint_position_world = matrix_multiply(robot.links[link].xform,joint_position_local);

    for (var i = 0; i < 3; i++) {
         joint_axis_world[i] = joint_axis[i]-joint_position_world[i];
    }
    for (var i = 0; i < 3; i++) {
         r[i] = endeffector_world.position[i] - joint_position_world[i];
    }
    
    if(robot.joints[a].type === "prismatic"){

        for (var i = 0; i < 3; i++) {
        jacobian[i][j] = joint_axis_world[i];
        }
        for (var i = 3; i < 6; i++) {
        jacobian[i][j] = 0;
        }

    }
    else if(robot.joints[a].type === "revolute" || robot.joints[a].type === "continuous" || typeof robot.joints[a].type === 'undefined'){
        c = vector_cross(joint_axis_world,r);

        for (var i = 0; i < 3; i++) {
        jacobian[i][j] = c[i];
        }
        for (var i = 3; i < 6; i++) {
        jacobian[i][j] = joint_axis_world[i-3];
        }
    
    }
    else if(robot.joints[a].type === "fixed"){

    j+=1;
    
    }   

    a = robot.links[link].parent;
} 
a=endeffector_joint;  

if(kineval.params.ik_pseudoinverse){
if(jacobian.length>jacobian[0].length){
r = matrix_multiply(matrix_transpose(jacobian), jacobian);
//r = matrix_multiply(numeric.inv(r), matrix_transpose(jacobian));
r = matrix_multiply(matrix_inverse(r), matrix_transpose(jacobian));
}  
else{
r = matrix_multiply(jacobian,matrix_transpose(jacobian));
r = matrix_multiply(matrix_transpose(jacobian),matrix_inverse(r));
//r = matrix_multiply(matrix_transpose(jacobian),numeric.inv(r));
}
q = matrix_multiply(r, endpoint_error);
}
else{
q = matrix_multiply(matrix_transpose(jacobian),endpoint_error); 
}
for (var j = n; j >= 0; j--) {
    if(robot.joints[a].type !== "fixed")
        if(kineval.params.trial_ik_random.execute)
            if (kineval.params.trial_ik_random.distance_current > 0.2) 
            robot.joints[a].control = kineval.params.trial_ik_random.distance_current * q[j]*1.5;
            else if(kineval.params.trial_ik_random.distance_current > 0.08) 
            robot.joints[a].control = kineval.params.trial_ik_random.distance_current * q[j]*10;
            else if(kineval.params.trial_ik_random.distance_current > 0.03) 
            robot.joints[a].control = kineval.params.trial_ik_random.distance_current * q[j]*20;
            else robot.joints[a].control = 0.955 * q[j];
        else
        robot.joints[a].control = kineval.params.ik_steplength * q[j];    
    else j+=1;
    
   
    link = robot.joints[a].parent; 
    a = robot.links[link].parent;
}


//cyclic coordinate descent
/*
if(cyclic_coordinate_descent == true){
 a=endeffector_joint;

var endeffector_local=[],target_local=[], target_world=[];
var endeffector_world = matrix_multiply(robot.joints[endeffector_joint].xform,endeffector_position_local);

for (var i = 0; i < 4; i++) {target_world[i] = [];}
for (var i = 0; i < 3; i++) { target_world[i][0] = endeffector_target_world.position[i];}
target_world[3][0] = 1; 
link = robot.joints[a].parent; 
    a = robot.links[link].parent;
for (var j = 0; j < iter; j++) {
    link = robot.joints[a].parent; 
    a = robot.links[link].parent;
    }

    
    xform_inv = numeric.inv(robot.joints[a].xform);
    endeffector_local= matrix_multiply(xform_inv,endeffector_world);
    target_local= matrix_multiply(xform_inv,target_world);

    var v = 0
    for (var i = 0; i < 3; i++) {
        v += endeffector_local[i][0]*target_local[i][0];
    }
    v = Math.acos(v);
   robot.joints[a].control = v; 

    
iter += 1; 
if(iter == n) iter = 0;  
}
*/

}



