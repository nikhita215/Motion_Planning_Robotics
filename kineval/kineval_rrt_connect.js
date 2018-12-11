
/*-- |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/|

    KinEval | Kinematic Evaluator | RRT motion planning

    Implementation of robot kinematics, control, decision making, and dynamics 
        in HTML5/JavaScript and threejs
     
    @author ohseejay / https://github.com/ohseejay / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Creative Commons 3.0 BY-SA

|\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| --*/

//////////////////////////////////////////////////
/////     RRT MOTION PLANNER
//////////////////////////////////////////////////

// STUDENT: 
// compute motion plan and output into robot_path array 
// elements of robot_path are vertices based on tree structure in tree_init() 
// motion planner assumes collision checking by kineval.poseIsCollision()

/* KE 2 : Notes:
   - Distance computation needs to consider modulo for joint angles
   - robot_path[] should be used as desireds for controls
   - Add visualization of configuration for current sample
   - Add cubic spline interpolation
   - Add hook for random configuration
   - Display planning iteration number in UI
*/

/*
STUDENT: reference code has functions for:

*/

kineval.planMotionRRTConnect = function motionPlanningRRTConnect() {

    // exit function if RRT is not implemented
    //   start by uncommenting kineval.robotRRTPlannerInit 
    if (typeof kineval.robotRRTPlannerInit === 'undefined') return;

    if ((kineval.params.update_motion_plan) && (!kineval.params.generating_motion_plan)) {
        kineval.robotRRTPlannerInit();
        kineval.params.generating_motion_plan = true;
        kineval.params.update_motion_plan = false;
        kineval.params.planner_state = "initializing";
    }
    if (kineval.params.generating_motion_plan) {
        rrt_result = robot_rrt_planner_iterate();
        if (rrt_result === "reached") {
            kineval.params.update_motion_plan = false; // KE T needed due to slight timing issue
            kineval.params.generating_motion_plan = false;
            textbar.innerHTML = "planner execution complete";
            kineval.params.planner_state = "complete";
        }
        else kineval.params.planner_state = "searching";
    }
    else if (kineval.params.update_motion_plan_traversal||kineval.params.persist_motion_plan_traversal) {

        if (kineval.params.persist_motion_plan_traversal) {
            kineval.motion_plan_traversal_index = (kineval.motion_plan_traversal_index+1)%kineval.motion_plan.length;
            textbar.innerHTML = "traversing planned motion trajectory";
        }
        else
            kineval.params.update_motion_plan_traversal = false;

        // set robot pose from entry in planned robot path
        robot.origin.xyz = [
            kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[0],
            kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[1],
            kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[2]
        ];

        robot.origin.rpy = [
            kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[3],
            kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[4],
            kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[5]
        ];

        // KE 2 : need to move q_names into a global parameter
        for (x in robot.joints) {
            robot.joints[x].angle = kineval.motion_plan[kineval.motion_plan_traversal_index].vertex[q_names[x]];
        }

    }
}


    // STENCIL: uncomment and complete initialization function
kineval.robotRRTPlannerInit = function robot_rrt_planner_init() {

    // form configuration from base location and joint angles
    q_start_config = [
        robot.origin.xyz[0],
        robot.origin.xyz[1],
        robot.origin.xyz[2],
        robot.origin.rpy[0],
        robot.origin.rpy[1],
        robot.origin.rpy[2]
    ];

    q_names = {};  // store mapping between joint names and q DOFs
    q_index = [];  // store mapping between joint names and q DOFs

    for (x in robot.joints) {
        q_names[x] = q_start_config.length;
        q_index[q_start_config.length] = x;
        q_start_config = q_start_config.concat(robot.joints[x].angle);
    }

    // set goal configuration as the zero configuration
    var i; 
    q_goal_config = new Array(q_start_config.length);
    for (i=0;i<q_goal_config.length;i++) q_goal_config[i] = 0;

    // flag to continue rrt iterations
    rrt_iterate = true;
    rrt_iter_count = 0;

    // make sure the rrt iterations are not running faster than animation update
    cur_time = Date.now();

    Ta = tree_init(q_start_config); 
    if (!kineval.params.RRT_star) Tb = tree_init(q_goal_config);
   /* if (robot_obstacles.length != 0) {
    var  rad = robot_obstacles[0].radius;
    for (var i = 1; i < robot_obstacles.length; i++) {
        if (robot_obstacles[i].radius<rad) rad = robot_obstacles[i].radius;
    }
    eps = rad*2;
    }
    else eps = 1;*/
    eps = 1;
    kineval.motion_plan_traversal_index = 0;
     
}  



function robot_rrt_planner_iterate() {

    var i;
    rrt_alg = 1;  // 0: basic rrt (OPTIONAL), 1: rrt_connect (REQUIRED)
    rrt_iter_count += 1;
    var disg =0;
    if (rrt_iterate && (Date.now()-cur_time > 10)) {
        cur_time = Date.now();

    // STENCIL: implement single rrt iteration here. an asynch timing mechanism 
    //   is used instead of a for loop to avoid blocking and non-responsiveness 
    //   in the browser.
    //
    //   once plan is found, highlight vertices of found path by:
    //     tree.vertices[i].vertex[j].geom.material.color = {r:1,g:0,b:0};
    //
    //   provided support functions:
    //
    //   kineval.poseIsCollision - returns if a configuration is in collision
    //   tree_init - creates a tree of configurations
    //   tree_add_vertex - adds and displays new configuration vertex for a tree
    //   tree_add_edge - adds and displays new tree edge between configurations
    //rrtconnect 
    /*
    */

     //rrt-star
    if (kineval.params.RRT_star) {
        if (rrt_iter_count%10 == 0) for (var j = 0; j<q_goal_config.length; j++)  q_rand[j] = q_goal_config[j];

        else q_rand = random_config(robot.joints);
        for (var j = 0; j < 3; j++)  disg +=  Math.pow(Ta.vertices[Ta.newest].vertex[j] - q_goal_config[j], 2);
            disg =  Math.sqrt(disg);
        if(disg<2.5*eps) {
            q_rand[0] = -eps + q_goal_config[0] + eps*2*Math.random();
            q_rand[2] = -eps + q_goal_config[2]+ eps*2*Math.random();
            q_rand[4] = -eps + q_goal_config[4]+ eps*2*Math.random();} 

    var s = rrt_extend(Ta,q_rand);
    if (s == "reached") path_dfs(Ta);
    return s;
    }

    else{
    q_rand = random_config(robot.joints);
     var s = rrt_extend(Ta,q_rand);
     var b;
     if(s != "trapped")
        b = rrt_connect(Tb,q_new);
     if(b == "reached") find_path(Ta,Tb);
     [Ta,Tb]=[Tb,Ta];
     return b;
    }
    }
    
    
}

//////////////////////////////////////////////////
/////     STENCIL SUPPORT FUNCTIONS
//////////////////////////////////////////////////

function tree_init(q) {

    // create tree object
    var tree = {};

    // initialize with vertex for given configuration
    tree.vertices = [];
    tree.vertices[0] = {};
    tree.vertices[0].vertex = q;
    tree.vertices[0].edges = [];
    tree.vertices[0].parent = 0;
    tree.vertices[0].cost = 0;

    // create rendering geometry for base location of vertex configuration
    add_config_origin_indicator_geom(tree.vertices[0]);

    // maintain index of newest vertex added to tree
    tree.newest = 0;

    return tree;
}

function tree_add_vertex(tree,q) {


    // create new vertex object for tree with given configuration and no edges
    var new_vertex = {};
    new_vertex.edges = [];
    new_vertex.vertex = q;

    // create rendering geometry for base location of vertex configuration
    add_config_origin_indicator_geom(new_vertex);

    // maintain index of newest vertex added to tree
    tree.vertices.push(new_vertex);
    tree.newest = tree.vertices.length - 1;
}

function add_config_origin_indicator_geom(vertex) {

    // create a threejs rendering geometry for the base location of a configuration
    // assumes base origin location for configuration is first 3 elements 
    // assumes vertex is from tree and includes vertex field with configuration

    temp_geom = new THREE.CubeGeometry(0.1,0.1,0.1);
    temp_material = new THREE.MeshLambertMaterial( { color: 0xffff00, transparent: true, opacity: 0.7 } );
    temp_mesh = new THREE.Mesh(temp_geom, temp_material);
    temp_mesh.position.x = vertex.vertex[0];
    temp_mesh.position.y = vertex.vertex[1];
    temp_mesh.position.z = vertex.vertex[2];
    scene.add(temp_mesh);
    vertex.geom = temp_mesh;
}


function tree_add_edge(tree,q1_idx,q2_idx) {

    // add edge to first vertex as pointer to second vertex
    tree.vertices[q1_idx].edges.push(tree.vertices[q2_idx]);

    // add edge to second vertex as pointer to first vertex
    tree.vertices[q2_idx].edges.push(tree.vertices[q1_idx]);

    // can draw edge here, but not doing so to save rendering computation
}

//////////////////////////////////////////////////
/////     RRT IMPLEMENTATION FUNCTIONS
//////////////////////////////////////////////////


    // STENCIL: implement RRT-Connect functions here, such as:
    //   rrt_extend
function rrt_extend(tree,q_rand) {
    
    var dis=0;
    var dis1=0;
    var newv = true;
    q_near_index = nearest_neighbor(q_rand,tree);
    q_near = tree.vertices[q_near_index].vertex;
    q_new = new_config(q_near,q_rand);
    for (var i = 0; i < tree.vertices.length; i++) {
        for (var j = 0; j < q_rand.length; j++) {
            dis1 +=  Math.pow(q_new[j] - tree.vertices[i].vertex[j], 2);
        }
        dis1 = Math.sqrt(dis1);
        if(dis1<eps*0.9) 
            newv = false;

        for (x in robot.joints) {
            if (robot.joints[x].type  == "revolute" || robot.joints[x].type == "prismatic") 
            if(q_new[q_names[x]] < robot.joints[x].limit.lower ||  q_new[q_names[x]] > robot.joints[x].limit.upper) 
                newv = false;
           
        }
    }
    var d = kineval.poseIsCollision(q_new);

    if (kineval.params.RRT_star){
        if (d == false && newv) {
        tree_add_vertex(tree,q_new);
        parent(tree,q_near_index,q_new);
        rewire(tree);
        tree_add_edge(tree,tree.vertices[tree.newest].parent,tree.newest);
        for (var j = 0; j < q_new.length; j++)  dis +=  Math.pow(q_new[j] - q_goal_config[j], 2);
            dis =  Math.sqrt(dis);

        if (dis<=eps) {
            tree_add_vertex(tree,q_goal_config);
            tree.vertices[tree.newest].parent=tree.newest-1;
            tree_add_edge(tree,tree.vertices[tree.newest].parent,tree.newest);
            return "reached";}
        else return "advanced";
        }
    
    }
    else{
         if (d == false && newv) {
        tree_add_vertex(tree,q_new);
        tree.vertices[tree.newest].parent=q_near_index;
        tree_add_edge(tree,q_near_index,tree.newest);
       
            for (var j = 0; j < q_new.length; j++) {
            dis +=  Math.pow(q_new[j] - q_rand[j], 2);
            }
            dis =  Math.sqrt(dis);

            if (dis<eps)
            return "reached";
        else return "advanced";
        }

    }    
            
        
return "trapped";

}


function parent(tree,q_near_index,q_new){
    var cmin =0;
    var index = q_near_index;
    var cost;
    var dis=0;
    var l = 5*Math.pow(Math.log(tree.vertices.length)/tree.vertices.length,1/q_new.length)*eps;

    for (var j = 0; j < q_new.length; j++)  cmin +=  Math.pow(q_new[j] - tree.vertices[q_near_index].vertex[j], 2);
            cmin =  Math.sqrt(cmin)+tree.vertices[q_near_index].cost;

    for (var i = 0; i < tree.newest; i++) {
        for (var j = 0; j < q_new.length; j++)  dis +=  Math.pow(q_new[j] - tree.vertices[i].vertex[j], 2);
            dis =  Math.sqrt(dis);
        cost = tree.vertices[i].cost + dis;
        
        if (cost<cmin && dis< l) {

            if(steer(tree.vertices[i].vertex,tree.vertices[tree.newest].vertex) == false) {
                cmin = cost;
                index = i;
                }
        }
        
    }
tree.vertices[tree.newest].parent = index;
tree.vertices[tree.newest].cost = cmin;

}

function rewire(tree){

var cost;
var dis =0;
//var l = 10*Math.log(tree.vertices.length)/tree.vertices.length;
var l = 5*Math.pow(Math.log(tree.vertices.length)/tree.vertices.length,1/q_new.length)*eps;
    console.log(l);

    for (var i = 1; i < tree.newest; i++) {

        for (var j = 0; j < q_new.length; j++)  dis +=  Math.pow(tree.vertices[tree.newest].vertex[j] - tree.vertices[i].vertex[j], 2);
            dis =  Math.sqrt(dis);
        cost = tree.vertices[tree.newest].cost + dis;

        if(cost<tree.vertices[i].cost && dis<l && i != tree.vertices[tree.newest].parent) {
            
            if(steer(tree.vertices[i].vertex,tree.vertices[tree.newest].vertex) == false){
                tree.vertices[i].edges.shift();
                tree.vertices[i].cost = cost;
                tree.vertices[i].parent = tree.newest;
                tree_add_edge(tree,i,tree.newest);
                }
        }
    }

}

function steer(q1,q2){
    var qpdis=0;
    var valid = false;
    var qpath;
    for (var j = 0; j < q1.length; j++)  qpdis +=  Math.pow(q1[j] - q2[j], 2);
        qpdis =  Math.sqrt(qpdis);
        qpath = new_config(q1,q2);
    while(valid == false && qpdis>eps*0.5){
            qpdis = 0;
            valid = kineval.poseIsCollision(qpath);
            qpath = new_config(qpath,q2);
            for (var j = 0; j < q1.length; j++)  qpdis +=  Math.pow(q2[j] - qpath[j], 2);
            qpdis =  Math.sqrt(qpdis);
            }
return valid;
}
//   rrt_connect
function rrt_connect(tree,q) {
    var s=rrt_extend(tree,q);;
    while(s == "advanced") s = rrt_extend(tree,q);
    return s;
}
    //   random_config
function random_config(joints){
var  q =[];

    for (var i = 0; i < 3; i++) {
        q[i] = 2*robot_boundary[0][i] + Math.random()*2*[robot_boundary[1][i] - robot_boundary[0][i]];
    }
    q[4] = 2*Math.PI*Math.random();
    q[1] = 0;
    q[3] = 0;
    q[5] = 0;
    for (x in joints) {
        if (joints[x].type  == "revolute" || joints[x].type == "prismatic") 
        q[q_names[x]]= joints[x].limit.lower + Math.random() * [joints[x].limit.upper - joints[x].limit.lower];
            else if (joints[x].type == "continuous" || typeof joints[x].type === 'undefined') 
            q[q_names[x]]= Math.random() * 2*Math.PI;
            else q[q_names[x]] = 0;
    }

return q;
}
    //   new_config
function new_config(q1,q2){

var q=[];
var dis = 0;
    for (var j = 0; j < q1.length; j++)  dis +=  Math.pow(q1[j] - q2[j], 2);
      dis =  Math.sqrt(dis);
    for (var j = 0; j < q1.length; j++){
       q[j] = q1[j]+(q2[j]-q1[j])*eps/dis; 
    } 
return q;
}    
    //   nearest_neighbor
function nearest_neighbor(q,tree){
var q_index = 0;
var dis_min = 0;
var dis = 0;
  
    for (var j = 0; j < q.length; j++)  dis_min +=  Math.pow(q[j] - tree.vertices[0].vertex[j], 2);
      dis_min =  Math.sqrt(dis_min);

    for(i=1;i<tree.vertices.length;i++){
        for (var j = 0; j < q.length; j++)  dis +=  Math.pow(q[j] - tree.vertices[i].vertex[j], 2);
        dis =  Math.sqrt(dis);

        if (dis_min>dis) {
            q_index=i;
            dis_min = dis;}  
    }
return q_index;
}
    //   normalize_joint_state
function normalize_joint_state(){

}    
    //   find_path
function find_path(ta,tb){
var i=0;
var path = [];
var path_main = [];
    
    var ind = tb.newest;
    while(1){
        path[i] = tb.vertices[ind];
        tb.vertices[ind].geom.material.color = {r:1,g:0,b:0};
        if(ind == 0) break;
        ind = tb.vertices[ind].parent;
        i++;
    }
    for (var i = 0; i < path.length; i++) {
        path_main[i] = path[path.length-i-1];
    }
    ind2 = nearest_neighbor(tb.vertices[tb.newest].vertex, ta);
    i = path_main.length;
    while(1){
        path_main[i] = ta.vertices[ind2];
        ta.vertices[ind2].geom.material.color = {r:1,g:0,b:0};
        if(ind2 == 0) break;
        ind2 = ta.vertices[ind2].parent;
        i++;
    }
    if(path_main[0].vertex != q_start_config)
    for (var i = 0; i < path_main.length; i++) {
        kineval.motion_plan[i] = path_main[path_main.length-i-1];
    }
    else 
    for (var i = 0; i < path_main.length; i++) {
        kineval.motion_plan[i] = path_main[i];
    }
}
    //   path_dfs
function path_dfs(tree){
    var i=0;
    var path = [];
    var ind = tree.newest;
    while(1){
        path[i] = tree.vertices[ind];
        tree.vertices[ind].geom.material.color = {r:1,g:0,b:0};
        if(ind == 0) break;
        ind = tree.vertices[ind].parent;
        i++;
    }
    path[path.length] = tree.vertices[0];
    for (var i = 0; i < path.length; i++) {
        kineval.motion_plan[i] = path[path.length-i-1];
    }
}









