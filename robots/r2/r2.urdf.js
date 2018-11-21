

robot = {

name:"r2" ,
base: "r2_robot_base",
origin:{ xyz: [0,1.88,0], rpy:[0,0,0] },
 // rpy:[-Math.PI/2,Math.PI,-Math.PI/2] },
links:{
     "r2_robot_base": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Thumb_Proximal.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
   
     "r2_waist_center": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Body.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
     "r2_body_cover": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Body_Cover.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_left_arm_shoulder_jr3": {
      visual : { 
        origin : { xyz: [0.145521,0.0,-0.118106], rpy:[0,0,0.25] },
        geometry : { mesh : { filename : "Left_Shoulder_Upper.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_left_shoulder_pitch": {
      visual : { 
        origin : { xyz: [0.0,0.0,0.0466596], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Shoulder_Lower.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_left_upper_arm": {
      visual : { 
        origin : { xyz: [0.0,0.0,-0.067724], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Upper_Arm.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_left_elbow": {
      visual : { 
        origin : { xyz: [0.0,0.0,0.0313243], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Elbow.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_left_lower_arm": {
      visual : { 
        origin : { xyz: [0,0.0,0.0458777], rpy:[0,1.57,0] },
        geometry : { mesh : { filename : "Left_Forearm.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_left_palm": {
      visual : { 
        origin : { xyz: [0,0.0,0], rpy:[3.1416 ,0 ,1.5708] },
        geometry : { mesh : { filename : "Left_Palm.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
     "r2_left_index_proximal": {
      visual : { 
        origin : { xyz: [0.0, 0.0, 0.0], rpy:[0 ,0, 1.5708] },
        geometry : { mesh : { filename : "Finger_Proximal.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
     "r2_right_arm_shoulder_jr3": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Shoulder_Upper.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_right_shoulder_pitch": {
      visual : { 
        origin : { xyz: [0.0,0.0,0], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Shoulder_Lower.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_right_upper_arm": {
      visual : { 
        origin : { xyz: [0.0,0.0,-0.067724], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Upper_Arm.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_right_elbow": {
      visual : { 
        origin : { xyz: [0.0,0.0,0.0313243], rpy:[0,0,0] },
        geometry : { mesh : { filename : "Left_Elbow.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_right_lower_arm": {
      visual : { 
        origin : { xyz: [0,0.0,0.0458777], rpy:[0,1.57,0] },
        geometry : { mesh : { filename : "Left_Forearm.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_right_palm": {
      visual : { 
        origin : { xyz: [0,0.0,0], rpy:[3.1416 ,0 ,1.5708] },
        geometry : { mesh : { filename : "Left_Palm.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
     "r2_right_index_proximal": {
      visual : { 
        origin : { xyz: [0.0, 0.0, 0.0], rpy:[0 ,0, 1.5708] },
        geometry : { mesh : { filename : "Finger_Proximal.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
      "r2_neck_lower": {
      visual : { 
        origin : { xyz: [0.0,0.0,0.0285749], rpy:[-1.5708,1.5708,0] },
        geometry : { mesh : { filename : "Neck_Lower.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_neck_upper": {
      visual : { 
        origin : { xyz: [0.0762002,0,-0.0762004], rpy:[0,0,1.5708] },
        geometry : { mesh : { filename : "Neck_Upper.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_head": {
      visual : { 
        origin : { xyz: [0.0,0.07,0.0074676], rpy:[0,1.5708,0] },
        geometry : { mesh : { filename : "Head.dae" } },
        material : { color : { rgba : [0.086, 0.506, 0.767, 1] } }
      }
    },
    "r2_pelvis": {
      visual : { 
        origin : { xyz: [0.0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_pelvis.dae" } }
      }
    },
    "r2_left_hip_roll": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone3.dae" } }
      }
    },
    "r2_left_hip_pitch": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone1.dae" } }
      }
    },
    "r2_left_upper_leg": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone2.dae" } }
      }
    },
    "r2_left_knee": {
      visual : { 
        origin : { xyz: [0.0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone1.dae" } }
      }
    },
    "r2_left_lower_leg": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone2.dae" } }
      }
    },
     "r2_left_ankle_pitch": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone1.dae" } }
      }
    },
    "r2_left_leg_foot": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "foot_body.dae" } }
      }
    },
    "r2_right_hip_roll": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone3.dae" } }
      }
    },
    "r2_right_hip_pitch": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone1.dae" } }
      }
    },
    "r2_right_upper_leg": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone2.dae" } }
      }
    },
    "r2_right_knee": {
      visual : { 
        origin : { xyz: [0.0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone1.dae" } }
      }
    },
    "r2_right_lower_leg": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone2.dae" } }
      }
    },
     "r2_right_ankle_pitch": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "r2cl_ext_bone1.dae" } }
      }
    },
    "r2_right_leg_foot": {
      visual : { 
        origin : { xyz: [0,0,0], rpy:[0, 0, 0] },
        geometry : { mesh : { filename : "foot_body.dae" } }
      }
    },


}
  


}

robot.endeffector = {};
robot.endeffector.frame = "r2_fixed_right_wrist_yaw_right_palm";
robot.endeffector.position = [[0.1],[0],[0],[1]];

robot.joints = {};


robot.joints.r2_waist_joint0= {parent:"r2_robot_base", child:"r2_waist_center"};
robot.joints.r2_waist_joint0.axis = [0,1,0];
robot.joints.r2_waist_joint0.type = "revolute";
robot.joints.r2_waist_joint0.origin = {xyz: [0,0,0], rpy:[-Math.PI/2,Math.PI,-Math.PI/2]};
robot.joints.r2_waist_joint0.limit = {lower:-1, upper:1};
  
robot.joints.r2_fixed_waist_center_body_cover= {parent:"r2_waist_center", child:"r2_body_cover"};
robot.joints.r2_fixed_waist_center_body_cover.axis = [0,0,0];
robot.joints.r2_fixed_waist_center_body_cover.type = "fixed";
robot.joints.r2_fixed_waist_center_body_cover.origin = {xyz: [0,0,0], rpy:[0,0,0]};

robot.joints.r2_fixed_waist_center_left_shoulder_jr3= {parent:"r2_waist_center", child:"r2_left_arm_shoulder_jr3"};
robot.joints.r2_fixed_waist_center_left_shoulder_jr3.axis = [1,0,0];
robot.joints.r2_fixed_waist_center_left_shoulder_jr3.type = "revolute";
robot.joints.r2_fixed_waist_center_left_shoulder_jr3.origin = {xyz: [-0.1,0.03,0], rpy:[0.3,-1.57,0]};
robot.joints.r2_fixed_waist_center_left_shoulder_jr3.limit = {lower:-0.7, upper:0.55};

robot.joints.r2_left_arm_joint1= {parent:"r2_left_arm_shoulder_jr3", child:"r2_left_shoulder_pitch"};
robot.joints.r2_left_arm_joint1.axis = [0,0,1];
robot.joints.r2_left_arm_joint1.type = "revolute";
robot.joints.r2_left_arm_joint1.origin = {xyz: [0.0054611,0,0.210022], rpy:[0.0,-1.5708,-1.5708] };
robot.joints.r2_left_arm_joint1.limit = {lower:-0.5, upper:2.2};

robot.joints.r2_left_arm_joint2= {parent:"r2_left_shoulder_pitch", child:"r2_left_upper_arm"};
robot.joints.r2_left_arm_joint2.axis = [0,0,1];
robot.joints.r2_left_arm_joint2.type = "revolute";
robot.joints.r2_left_arm_joint2.origin = {xyz: [0.1,0,0], rpy:[-1.5708,1.5,-1.57] };
robot.joints.r2_left_arm_joint2.limit = {lower:-2, upper:0};
 
robot.joints.r2_left_arm_joint3= {parent:"r2_left_upper_arm", child:"r2_left_elbow"};
robot.joints.r2_left_arm_joint3.axis = [0,0,1];
robot.joints.r2_left_arm_joint3.type = "revolute";
robot.joints.r2_left_arm_joint3.origin = {xyz: [0.045,0.013243,0.25006], rpy:[0.0,-1.5708,1.57] };
robot.joints.r2_left_arm_joint3.limit = {lower:0, upper:2.2};

robot.joints.r2_fixed_left_lower_arm_left_forearm= {parent:"r2_left_elbow", child:"r2_left_lower_arm"};
robot.joints.r2_fixed_left_lower_arm_left_forearm.axis = [0,0,0];
robot.joints.r2_fixed_left_lower_arm_left_forearm.type = "fixed";
robot.joints.r2_fixed_left_lower_arm_left_forearm.origin = {xyz: [0.084, 0.04, 0.0], rpy:[0,1.57,0] };

robot.joints.r2_fixed_left_wrist_yaw_left_palm= {parent:"r2_left_lower_arm", child:"r2_left_palm"};
robot.joints.r2_fixed_left_wrist_yaw_left_palm.axis = [1,0,0];
robot.joints.r2_fixed_left_wrist_yaw_left_palm.type = "revolute";
robot.joints.r2_fixed_left_wrist_yaw_left_palm.origin = {xyz: [0,0.04,0.27], rpy:[1.57,-1.57,1.57] };
robot.joints.r2_fixed_left_wrist_yaw_left_palm.limit = {lower:-0.5, upper:0.5};

robot.joints.r2_left_arm_hand_index_proximal= {parent:"r2_left_palm", child:"r2_left_index_proximal"};
robot.joints.r2_left_arm_hand_index_proximal.axis = [0,0,1];
robot.joints.r2_left_arm_hand_index_proximal.type = "revolute";
robot.joints.r2_left_arm_hand_index_proximal.origin = {xyz: [0.04,0.03, 0 ], rpy:[1.5708, 1.57, 3.14 ] };
robot.joints.r2_left_arm_hand_index_proximal.limit = {lower:-1.44, upper:0};

robot.joints.r2_fixed_waist_center_right_shoulder_jr3= {parent:"r2_waist_center", child:"r2_right_arm_shoulder_jr3"};
robot.joints.r2_fixed_waist_center_right_shoulder_jr3.axis = [1,0,0];
robot.joints.r2_fixed_waist_center_right_shoulder_jr3.type = "revolute";
robot.joints.r2_fixed_waist_center_right_shoulder_jr3.origin = {xyz: [0.2,0.02,0], rpy:[0.3,1.57,0]};
robot.joints.r2_fixed_waist_center_right_shoulder_jr3.limit = {lower:-0.7, upper:0.55};

robot.joints.r2_right_arm_joint1= {parent:"r2_right_arm_shoulder_jr3", child:"r2_right_shoulder_pitch"};
robot.joints.r2_right_arm_joint1.axis = [0,0,1];
robot.joints.r2_right_arm_joint1.type = "revolute";
robot.joints.r2_right_arm_joint1.origin = {xyz: [-0.0054611,0,0.210022], rpy:[0.0,-1.57,-1.57] };
robot.joints.r2_right_arm_joint1.limit = {lower:-2.2, upper:0.5};

robot.joints.r2_right_arm_joint2= {parent:"r2_right_shoulder_pitch", child:"r2_right_upper_arm"};
robot.joints.r2_right_arm_joint2.axis = [0,0,1];
robot.joints.r2_right_arm_joint2.type = "revolute";
robot.joints.r2_right_arm_joint2.origin = {xyz: [0.1,0,0], rpy:[-1.5708,1.5,-1.57]};
robot.joints.r2_right_arm_joint2.limit = {lower:0, upper:2};

robot.joints.r2_right_arm_joint3= {parent:"r2_right_upper_arm", child:"r2_right_elbow"};
robot.joints.r2_right_arm_joint3.axis = [0,0,1];
robot.joints.r2_right_arm_joint3.type = "revolute";
robot.joints.r2_right_arm_joint3.origin = {xyz: [0.045,0.013243,0.25006], rpy:[0.0,-1.5708,1.57] };
robot.joints.r2_right_arm_joint3.limit = {lower:0, upper:2.2};

robot.joints.r2_fixed_right_lower_arm_right_forearm= {parent:"r2_right_elbow", child:"r2_right_lower_arm"};
robot.joints.r2_fixed_right_lower_arm_right_forearm.axis = [0,0,0];
robot.joints.r2_fixed_right_lower_arm_right_forearm.type = "fixed";
robot.joints.r2_fixed_right_lower_arm_right_forearm.origin = {xyz: [0.084, 0.04, 0.0], rpy:[0,1.57,0] };

robot.joints.r2_fixed_right_wrist_yaw_right_palm= {parent:"r2_right_lower_arm", child:"r2_right_palm"};
robot.joints.r2_fixed_right_wrist_yaw_right_palm.axis = [1,0,0];
robot.joints.r2_fixed_right_wrist_yaw_right_palm.type = "revolute";
robot.joints.r2_fixed_right_wrist_yaw_right_palm.origin = {xyz: [0,0.04,0.27], rpy:[1.57,-1.57,1.57] };
robot.joints.r2_fixed_right_wrist_yaw_right_palm.limit = {lower:-0.5, upper:0.5};

robot.joints.r2_right_arm_hand_index_proximal= {parent:"r2_right_palm", child:"r2_right_index_proximal"};
robot.joints.r2_right_arm_hand_index_proximal.axis = [0,0,1];
robot.joints.r2_right_arm_hand_index_proximal.type = "revolute";
robot.joints.r2_right_arm_hand_index_proximal.origin = {xyz: [0.05,0.03, 0.0 ], rpy:[1.5708, 1.57, 3.14 ] };
robot.joints.r2_right_arm_hand_index_proximal.limit = {lower:0, upper:1.44};

robot.joints.r2_neck_joint0= {parent:"r2_waist_center", child:"r2_neck_lower"};
robot.joints.r2_neck_joint0.axis = [0,0,1];
robot.joints.r2_neck_joint0.type = "revolute";
robot.joints.r2_neck_joint0.origin = {xyz: [0.05,0.048,0.07], rpy:[-1.5708,0.0,0.0]};
robot.joints.r2_neck_joint0.limit = {lower:-0.72, upper:0.72};

robot.joints.r2_neck_joint1= {parent:"r2_neck_lower", child:"r2_neck_upper"};
robot.joints.r2_neck_joint1.axis = [0,0,1];
robot.joints.r2_neck_joint1.type = "fixed";
robot.joints.r2_neck_joint1.origin = {xyz: [0, 0, 0], rpy:[0,0.0,0.0]};

robot.joints.r2_neck_joint2= {parent:"r2_neck_upper", child:"r2_head"};
robot.joints.r2_neck_joint2.axis = [0,0,1];
robot.joints.r2_neck_joint2.type = "revolute";
robot.joints.r2_neck_joint2.origin = {xyz: [0,0,0.265], rpy:[1.5708,0.0,0.0]};
robot.joints.r2_neck_joint2.limit = {lower:-0.44, upper:0.44};

robot.joints.r2_fixed_robot_base_pelvis= {parent:"r2_robot_base", child:"r2_pelvis"};
robot.joints.r2_fixed_robot_base_pelvis.axis = [0,0,1];
robot.joints.r2_fixed_robot_base_pelvis.type = "fixed";
robot.joints.r2_fixed_robot_base_pelvis.origin = {xyz: [0, 0.045, -0.65], rpy:[0 ,0, 0] };
  
robot.joints.r2_left_leg_joint0= {parent:"r2_pelvis", child:"r2_left_hip_roll"};
robot.joints.r2_left_leg_joint0.axis = [0,0,1];
robot.joints.r2_left_leg_joint0.type = "revolute";
robot.joints.r2_left_leg_joint0.origin = {xyz: [0, -0.09, -0.03], rpy:[0 ,2.1, -1.57]};
robot.joints.r2_left_leg_joint0.limit = {lower:-1.14, upper:1.52};

robot.joints.r2_left_leg_joint1= {parent:"r2_left_hip_roll", child:"r2_left_hip_pitch"};
robot.joints.r2_left_leg_joint1.axis = [0,0,1];
robot.joints.r2_left_leg_joint1.type = "revolute";
robot.joints.r2_left_leg_joint1.origin = {xyz: [0.050629765, +0.0022860, 0.103498576], rpy:[-1.570796,  -0.5, 0.0000000] };
robot.joints.r2_left_leg_joint1.limit = {lower:-1.18, upper:1.23};

robot.joints.r2_left_leg_joint2= {parent:"r2_left_hip_pitch", child:"r2_left_upper_leg"};
robot.joints.r2_left_leg_joint2.axis = [0,0,1];
robot.joints.r2_left_leg_joint2.type = "revolute";
robot.joints.r2_left_leg_joint2.origin = {xyz: [0.200, -0.050, 0.004], rpy:[1.570796, 3.14, 1.570796] };
robot.joints.r2_left_leg_joint2.limit = {lower:-1.4, upper:1.38};

robot.joints.r2_left_leg_joint3= {parent:"r2_left_upper_leg", child:"r2_left_knee"};
robot.joints.r2_left_leg_joint3.axis = [0,0,1];
robot.joints.r2_left_leg_joint3.type = "revolute";
robot.joints.r2_left_leg_joint3.origin = {xyz: [-0.002, -0.050, 0.157], rpy:[0.0 ,-1.570796 ,3.14159] };
robot.joints.r2_left_leg_joint3.limit = {lower:-2.13, upper:0};

robot.joints.r2_left_leg_joint4= {parent:"r2_left_knee", child:"r2_left_lower_leg"};
robot.joints.r2_left_leg_joint4.axis = [0,0,1];
robot.joints.r2_left_leg_joint4.type = "revolute";
robot.joints.r2_left_leg_joint4.origin = {xyz: [0.200, -0.050, 0.004], rpy:[0 ,1.570796 ,0] };
robot.joints.r2_left_leg_joint4.limit = {lower:-1.57, upper:1.57};

robot.joints.r2_left_leg_joint5= {parent:"r2_left_lower_leg", child:"r2_left_ankle_pitch"};
robot.joints.r2_left_leg_joint5.axis = [0,0,1];
robot.joints.r2_left_leg_joint5.type = "revolute";
robot.joints.r2_left_leg_joint5.origin = {xyz: [-0.002, -0.050, 0.157], rpy:[0.0, -1.570796, 3.14159] };
robot.joints.r2_left_leg_joint5.limit = {lower:-1.45, upper:1.45};
 
robot.joints.r2_left_leg_foot= {parent:"r2_left_ankle_pitch", child:"r2_left_leg_foot"};
robot.joints.r2_left_leg_foot.axis = [0,0,1];
robot.joints.r2_left_leg_foot.type = "revolute";
robot.joints.r2_left_leg_foot.origin = {xyz: [0.2 ,-0.03, 0], rpy:[1.57, 3.14, 1.57] };
robot.joints.r2_left_leg_foot.limit = {lower:-1.57, upper:1.57};

robot.joints.r2_right_leg_joint0= {parent:"r2_pelvis", child:"r2_right_hip_roll"};
robot.joints.r2_right_leg_joint0.axis = [0,0,1];
robot.joints.r2_right_leg_joint0.type = "revolute";
robot.joints.r2_right_leg_joint0.origin = {xyz: [0, 0.09, -0.03], rpy:[0 ,2.1, 1.57] };
robot.joints.r2_right_leg_joint0.limit = {lower:-1.52, upper:1.14};

robot.joints.r2_right_leg_joint1= {parent:"r2_right_hip_roll", child:"r2_right_hip_pitch"};
robot.joints.r2_right_leg_joint1.axis = [0,0,1];
robot.joints.r2_right_leg_joint1.type = "revolute";
robot.joints.r2_right_leg_joint1.origin = {xyz: [0.050629765, -0.0022860, 0.103498576], rpy:[-1.570796,  -0.5, 0.0000000] };
robot.joints.r2_right_leg_joint1.limit = {lower:-1.18, upper:1.23};

robot.joints.r2_right_leg_joint2= {parent:"r2_right_hip_pitch", child:"r2_right_upper_leg"};
robot.joints.r2_right_leg_joint2.axis = [0,0,1];
robot.joints.r2_right_leg_joint2.type = "revolute";
robot.joints.r2_right_leg_joint2.origin = {xyz: [0.200, -0.050, 0.004], rpy:[-1.570796, 3.14, -1.570796] };
robot.joints.r2_right_leg_joint2.limit = {lower:-1.4, upper:1.38};

robot.joints.r2_right_leg_joint3= {parent:"r2_right_upper_leg", child:"r2_right_knee"};
robot.joints.r2_right_leg_joint3.axis = [0,0,1];
robot.joints.r2_right_leg_joint3.type = "revolute";
robot.joints.r2_right_leg_joint3.origin = {xyz: [-0.002, -0.050, 0.157], rpy:[0.0 ,-1.570796 ,3.14159] };
robot.joints.r2_right_leg_joint3.limit = {lower:-2.13, upper:0};

robot.joints.r2_right_leg_joint4= {parent:"r2_right_knee", child:"r2_right_lower_leg"};
robot.joints.r2_right_leg_joint4.axis = [0,0,1];
robot.joints.r2_right_leg_joint4.type = "revolute";
robot.joints.r2_right_leg_joint4.origin = {xyz: [0.200, -0.050, 0.004], rpy:[0 ,1.570796 ,0] };
robot.joints.r2_right_leg_joint4.limit = {lower:-1.57, upper:1.57};

robot.joints.r2_right_leg_joint5= {parent:"r2_right_lower_leg", child:"r2_right_ankle_pitch"};
robot.joints.r2_right_leg_joint5.axis = [0,0,1];
robot.joints.r2_right_leg_joint5.type = "revolute";
robot.joints.r2_right_leg_joint5.origin = {xyz: [-0.002, -0.050, 0.157], rpy:[0.0, -1.570796, 3.14159] };
robot.joints.r2_right_leg_joint5.limit = {lower:-1.45, upper:1.45};

robot.joints.r2_right_leg_foot= {parent:"r2_right_ankle_pitch", child:"r2_right_leg_foot"};
robot.joints.r2_right_leg_foot.axis = [0,0,1];
robot.joints.r2_right_leg_foot.type = "revolute";
robot.joints.r2_right_leg_foot.origin = {xyz: [0.2 ,-0.03, 0], rpy:[1.57, 3.14, 1.57] };
robot.joints.r2_right_leg_foot.limit = {lower:-1.57, upper:1.57};

robot.links_geom_imported = true;

links_geom = {};

  // KE: replace hardcoded robot directory
  // KE: replace file extension processing
i = 0;
for (x in robot.links) {
  //geom_index = robot.links[x].visual.geometry.mesh.filename.split('_adjusted')[0];
  //geom_extension = robot.links[x].visual.geometry.mesh.filename.split('_adjusted')[1];
  filename_split = robot.links[x].visual.geometry.mesh.filename.split('.');
  geom_index = filename_split[0];
  geom_extension = filename_split[filename_split.length-1];
  console.log(geom_index + "  " + geom_extension);
  //assignFetchModel('./robots/sawyer/'+robot.links[x].visual.geometry.mesh.filename,geom_index);
  if (geom_extension === "dae") { // extend to use regex
    assignFetchModelCollada('./robots/r2/meshes/'+robot.links[x].visual.geometry.mesh.filename,x);
  }
  else if (geom_extension === "DAE") { // extend to use regex
    assignFetchModelCollada('./robots/r2/meshes/'+robot.links[x].visual.geometry.mesh.filename,x);
  }
  else {
    assignFetchModelSTL('./robots/r2/meshes/'+robot.links[x].visual.geometry.mesh.filename,robot.links[x].visual.material,x);
  }
  i++;
}

function assignFetchModelCollada(filename,index) {

    console.log("assignFetchModel : "+filename+" - "+index); 
    var collada_loader = new THREE.ColladaLoader();
    var val = collada_loader.load(filename, 
       function ( collada ) {
            links_geom[index] = collada.scene;
        },
        function (xhr) {
            console.log(filename+" - "+index+": "+(xhr.loaded / xhr.total * 100) + '% loaded' );
        }
    );
}

function assignFetchModelCollada2(filename,index) {

    console.log("assignFetchModel : "+filename+" - "+index); 
    var collada_loader = new ColladaLoader2();
    var val = collada_loader.load(filename, 
       function ( collada ) {
            links_geom[index] = collada.scene;
        },
        function (xhr) {
            console.log(filename+" - "+index+": "+(xhr.loaded / xhr.total * 100) + '% loaded' );
        }
    );
}


function assignFetchModelSTL(filename,material_urdf,linkname) {

    console.log("assignFetchModel : "+filename+" - "+linkname); 
    var stl_loader = new THREE.STLLoader();
    var val = stl_loader.load(filename, 
       function ( geometry ) {
            // ocj: add transparency
            var material_color = new THREE.Color(material_urdf.color.rgba[0], material_urdf.color.rgba[1], material_urdf.color.rgba[2]);
            var material = new THREE.MeshLambertMaterial( {color: material_color, side: THREE.DoubleSide} );
            links_geom[linkname] = new THREE.Mesh( geometry, material ) ;
        } //,
        //function (xhr) {
        //    console.log(filename+" - "+linkname+": "+(xhr.loaded / xhr.total * 100) + '% loaded' );
        //}
    );
}