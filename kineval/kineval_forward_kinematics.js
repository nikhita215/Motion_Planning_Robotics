
/*-- |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/|

    KinEval | Kinematic Evaluator | forward kinematics

    Implementation of robot kinematics, control, decision making, and dynamics 
        in HTML5/JavaScript and threejs
     
    @author ohseejay / https://github.com/ohseejay / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Creative Commons 3.0 BY-SA

|\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| --*/


kineval.robotForwardKinematics = function robotForwardKinematics () { 

    if (typeof kineval.buildFKTransforms === 'undefined') {
        textbar.innerHTML = "forward kinematics not implemented";
        return;
    }

 //m = [[11,9,24,2],[1,5,2,6],[3,17,18,1],[2,5,7,1]];
 //m = [[1,1,1],[0,0,1],[2,3,1]];
 //b= [[2],[2],[0]];
    //mat = matrix_inverse(m);
   // mat = linear_solve(m,b);
    // STENCIL: implement kineval.buildFKTransforms(); 
    kineval.buildFKTransforms();
   
}


kineval.buildFKTransforms = function buildFKTransforms() {
    
    var mat = [];
    var x;
    //matrix_stack = new Object();
    matrix_stack = [];

    
   // robot.origin.xyz[2]=1;
   
    mat = matrix_multiply(generate_rotation_matrix_Y(robot.origin.rpy[1]),generate_rotation_matrix_X(robot.origin.rpy[0]));
    mat = matrix_multiply(generate_rotation_matrix_Z(robot.origin.rpy[2]),mat);
    mat = matrix_multiply(generate_translation_matrix(robot.origin.xyz),mat); 
   
     if(robot.links_geom_imported)
{
   offsetm = matrix_multiply(generate_rotation_matrix_Y(-Math.PI/2),generate_rotation_matrix_X(-Math.PI/2));
    mat = matrix_multiply(mat,offsetm);
}
   

    matrix_stack[0] = generate_identity(4);
    matrix_stack[1] = mat;

    for (x in robot.joints) {
        visit[x] = false;
    }
    traverseFKBase();
   // robot.links[robot.base].xform[1][3] += 1; 
}


function traverseFKBase(){

    //len = 0;
    var mat = [];
    robot.links[robot.base].xform = matrix_stack[1];
    
   robot_heading = matrix_multiply(robot.links[robot.base].xform,[[0],[0],[1],[1]]);
   robot_lateral = matrix_multiply(robot.links[robot.base].xform,[[1],[0],[0],[1]]);
    
   if(robot.links_geom_imported){
        
        robot_heading = matrix_multiply(robot.links[robot.base].xform,[[1],[0],[0],[1]]);
        robot_lateral= matrix_multiply(robot.links[robot.base].xform,[[0],[1],[0],[1]]);
}

    visit[robot.links[robot.base].children[0]] = true;
    traverseFKLink(robot.links[robot.base].children[0]);

}

function traverseFKLink(b){

    var mat,q = [];

    mat = matrix_multiply(generate_rotation_matrix_Y(robot.joints[b].origin.rpy[1]),generate_rotation_matrix_X(robot.joints[b].origin.rpy[0]));
    mat = matrix_multiply(generate_rotation_matrix_Z(robot.joints[b].origin.rpy[2]),mat);
    mat = matrix_multiply(generate_translation_matrix(robot.joints[b].origin.xyz),mat); 
     

    if(robot.joints[b].type == "prismatic"){
        trans = generate_translation_matrix(robot.joints[b].axis);
        for (var i = 0; i < 3; i++) {
           trans[i][3] *= robot.joints[b].angle; 
        }
        mat = matrix_multiply(mat, trans);
    }
    else if(robot.joints[b].type === "revolute" || robot.joints[b].type === "continuous" || typeof robot.joints[b].type === 'undefined'){
       q = quaternion_from_axisangle(robot.joints[b]);
       mat = matrix_multiply(mat, quaternion_to_rotation_matrix(q));
    }
    
    mat = matrix_multiply(matrix_stack[matrix_stack.length-1],mat);
    matrix_stack[matrix_stack.length] = mat;
    robot.joints[b].xform = matrix_stack[matrix_stack.length-1];
    traverseFKJoint(robot.joints[b].child);
    
}

function traverseFKJoint(a){

    var b,c;

    robot.links[a].xform = matrix_stack[matrix_stack.length - 1];
     if(robot.links[a].children.length == 0 ){
        matrix_stack.pop();
      // c = gotoparent(a);
        b = robot.links[a].parent;
        c = robot.joints[b].parent;
        
        while(robot.links[c].children.length < 2 || visit[robot.links[c].children[(robot.links[c].children.length)-1]] ){
        if(c == robot.base) break;
        b = robot.links[c].parent;
        c = robot.joints[b].parent;
        matrix_stack.pop();
        }
        
        
        len = robot.links[c].children.length; 
        children1 = 0;

        if(len > 1 ){
         while(1){
            if(visit[robot.links[c].children[children1]] == false || children1 == len-1) break;
            children1 += 1;}   
        
        if(visit[robot.links[c].children[children1]] == false){
        visit[robot.links[c].children[children1]] = true;
        traverseFKLink(robot.links[c].children[children1]);}
        } 
        else if(visit[robot.links[c].children[len-1]] == false){
        visit[robot.links[c].children[len-1]] = true;
        traverseFKLink(robot.links[c].children[len-1]);
         }
        
    }
    else { 
        visit[robot.links[a].children[0]] = true;
        traverseFKLink(robot.links[a].children[0]);
}
}

      


    // STENCIL: reference code alternates recursive traversal over 
    //   links and joints starting from base, using following functions: 
    //     traverseFKBase
    //     traverseFKLink
    //     traverseFKJoint
    //
    // user interface needs the heading (z-axis) and lateral (x-axis) directions
    //   of robot base in world coordinates stored as 4x1 matrices in
    //   global variables "robot_heading" and "robot_lateral"
    //
    // if geometries are imported and using ROS coordinates (e.g., fetch),
    //   coordinate conversion is needed for kineval/threejs coordinates:
    //

