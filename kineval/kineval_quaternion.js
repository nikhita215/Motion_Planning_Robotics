//////////////////////////////////////////////////
/////     QUATERNION TRANSFORM ROUTINES 
//////////////////////////////////////////////////

    // STENCIL: reference quaternion code has the following functions:
    //   quaternion_from_axisangle
    function quaternion_from_axisangle(x){
    	var q=[];
    	q[0] = Math.cos(x.angle/2);
    	q[1] = Math.sin(x.angle/2)*x.axis[0];
    	q[2] = Math.sin(x.angle/2)*x.axis[1];
    	q[3] = Math.sin(x.angle/2)*x.axis[2];
    	q = quaternion_normalize(q);

    	return q;
    }
    //   quaternion_normalize
    function quaternion_normalize(q){
    	mod_q = Math.sqrt(q[0]*q[0]+q[1]*q[1]+q[2]*q[2]+q[3]*q[3]);
    	for (var i = 0; i < 4; i++) {
    		q[i] = q[i]/mod_q;
    	}

    	return q;
    }
    //   quaternion_to_rotation_matrix
    function quaternion_to_rotation_matrix(q) {
    	var mat = [];
   		var i,j;

    for (i=0;i<4;i++) {
        mat[i] = [];
        for (j=0;j<4;j++) { 
            mat[i][j] = 0;
        }
    }
    mat[0][0] = 1-2*(q[2]*q[2]+q[3]*q[3]);
    mat[0][1] = 2*(q[1]*q[2]-q[0]*q[3]);
    mat[0][2] = 2*(q[0]*q[2]+q[1]*q[3]);

    mat[1][0] = 2*(q[1]*q[2]+q[0]*q[3]);
    mat[1][1] = 1-2*(q[1]*q[1]+q[3]*q[3]);
    mat[1][2] = 2*(q[2]*q[3]-q[0]*q[1]);

    mat[2][0] = 2*(q[1]*q[3]-q[0]*q[2]);
    mat[2][1] = 2*(q[0]*q[1]+q[2]*q[3]);
    mat[2][2] = 1-2*(q[1]*q[1]+q[2]*q[2]);

    mat[3][3] = 1;


    return mat;
    }
    //   quaternion_multiply
    function quaternion_multiply(q1,q2){
    	var q=[];
    	q[0] = q1[0]*q2[0]-q1[1]*q2[1]-q1[2]*q2[2]-q1[3]*q2[3];
    	q[1] = q1[0]*q2[1]+q1[1]*q2[0]+q1[2]*q2[3]-q1[3]*q2[2];
    	q[2] = q1[0]*q2[2]-q1[1]*q2[3]+q1[2]*q2[0]+q1[3]*q2[1];
    	q[3] = q1[0]*q2[3]+q1[1]*q2[2]-q1[2]*q2[1]+q1[3]*q2[0];

    	return q;
    }

