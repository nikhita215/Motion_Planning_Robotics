//////////////////////////////////////////////////
/////     MATRIX ALGEBRA AND GEOMETRIC TRANSFORMS 
//////////////////////////////////////////////////

function matrix_copy(m1) {
    // returns 2D array that is a copy of m1

    var mat = [];
    var i,j;

    for (i=0;i<m1.length;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<m1[0].length;j++) { // for each column of m1
            mat[i][j] = m1[i][j];
        }
    }
    return mat;
}


    // STENCIL: reference matrix code has the following functions:
    //   matrix_multiply
function matrix_multiply(m1,m2){

    var mat = [];
    var i,j,k;
    var a=0;

    for (i=0;i<m1.length;i++) { // for each row of m1
        mat[i] = [];
        for (k=0;k<m2[0].length;k++) { // for each column of m1
            for(j=0;j<m2.length;j++){
                a += m1[i][j]*m2[j][k];
            }
            mat[i][k] = a;
            a=0;
        }
    }
    return mat;
}
    //   matrix_transpose
function matrix_transpose(m1) {
    // returns 2D array that is a copy of m1

    var mat = [];
    var i,j;
    /*
    if(typeof m1[0].length == 'undefined'){
        for (i=0;i<6;i++) { // for each row of m1
        mat[i] = [];}
        for (j=0;j<m1.length;j++) { // for each column of m1
            mat[j][0] = m1[j];
        }
    }
    */
    
    for (i=0;i<m1[0].length;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<m1.length;j++) { // for each column of m1
            mat[i][j] = m1[j][i];
        }
    }
    
    return mat;
}  
    //   matrix_pseudoinverse

    //   matrix_invert_affine
    //   vector_normalize
function vector_normalize(a){
   
    var c = [];
    var b;
    b = Math.abs(Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]));
    c[0] = a[0]/b;
    c[1] = a[1]/b;
    c[2] = a[2]/b;

    return c;
}   
    //   vector_cross
function vector_cross(a,b){
    
    var c = [];
    c[0] = a[1]*b[2] - a[2]*b[1];
    c[1] = a[2]*b[0] - a[0]*b[2];
    c[2] = a[0]*b[1] - a[1]*b[0];

    return c;
}
//   generate_identity
function generate_identity(a){
   
    var mat = [];
    var i,j;

    for (i=0;i<a;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<a;j++) { // for each column of m1
            mat[i][j] = 0;
            if(i == j) mat[i][j] = 1;
        }
    }
    
    return mat;

}
    //   generate_translation_matrix
function generate_translation_matrix(a,b,c){
   
    var mat = [];
    var i,j;

    for (i=0;i<4;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<4;j++) { // for each column of m1
            mat[i][j] = 0;
        }
    }
    mat[0][0] = 1;
    mat[1][1] = 1;
    mat[2][2] = 1;
    mat[3][3] = 1;
    mat[0][3] = a;
    mat[1][3] = b;
    mat[2][3] = c;
    return mat;

}

    //   generate_rotation_matrix_X
function generate_rotation_matrix_X(m) {
    
    var mat = [];
    var i,j;

    for (i=0;i<4;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<4;j++) { // for each column of m1
            mat[i][j] = 0;
        }
    }
    mat[0][0] = 1;
    mat[3][3] = 1;
    mat[1][1] = Math.cos(m);
    mat[1][2] = -Math.sin(m);
    mat[2][1] = Math.sin(m);
    mat[2][2] = Math.cos(m);
    return mat;

}
    //   generate_rotation_matrix_Y
function generate_rotation_matrix_Y(m) {
   
    var mat = [];
    var i,j;

    for (i=0;i<4;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<4;j++) { // for each column of m1
            mat[i][j] = 0;
        }
    }
    mat[0][0] = Math.cos(m);
    mat[3][3] = 1;
    mat[1][1] = 1;
    mat[0][2] = Math.sin(m);
    mat[2][0] = -Math.sin(m);
    mat[2][2] = Math.cos(m);
    return mat;

}
    //   generate_rotation_matrix_Z
function generate_rotation_matrix_Z(m) {
   
    var mat = [];
    var i,j;

    for (i=0;i<4;i++) { // for each row of m1
        mat[i] = [];
        for (j=0;j<4;j++) { // for each column of m1
            mat[i][j] = 0;
        }
    }
    mat[0][0] = Math.cos(m);
    mat[0][1] = -Math.sin(m);
    mat[1][0] = Math.sin(m);
    mat[1][1] = Math.cos(m);
    mat[2][2] = 1;
    mat[3][3] = 1;
    return mat;

}

function matrix_inverse(m){
var l,u,z,inv_a,m_orig = [];
var len = m[0].length;
u = matrix_copy(m);
m_orig = matrix_copy(m);
l = generate_identity(len);
I = generate_identity(len);
z = generate_identity(len);
inv_a = generate_identity(len);
for (var i = 0; i < len; i++) {
var max = u[i][i];
var maxIndex = i;

    for (var j = i+1; j < len; j++) {
        if (Math.abs(u[j][i]) > Math.abs(max)) {
            maxIndex = j;
            max = u[j][i];
        }
    }
    pivot = maxIndex;
    [u[pivot],u[i]] = [u[i],u[pivot]];
    [m[pivot],m[i]] = [m[i],m[pivot]];
    [I[pivot],I[i]] = [I[i],I[pivot]];
  
   for(var k=i+1; k<len; k++){
    var div = u[k][i]/u[i][i];
    if(u[i][i] == 0) div = 0;
    for(var n=i; n<len ;n++){
    u[k][n] = u[k][n] - div*u[i][n];}
   }
}

for(var i=1; i < len; i++){
    l[i][0] = m[i][0]/u[0][0];
for(var k=1; k < i; k++){
  
  var a=0;

  for(var j=0; j < k; j++){
  a += l[i][j]*u[j][k];}
  
  l[i][k] = [m[i][k] - a]/u[k][k];

}}

//console.log(l);
for(var k=1; k<len; k++){for(var n=0; n<k ;n++){u[k][n]=0;}}
//console.log(u);
//now finding inverse u(inv a) =z and l*z = I
    z[0][0] = I[0][0]/l[0][0];
for(var i=1; i < len; i++){
    z[0][i] = I[0][i]/l[0][0];
for(var k=0; k < len; k++){
  
  var a=0;

  for(var j=0; j < i; j++){
  a += l[i][j]*z[j][k];}
  
  z[i][k] = [I[i][k] - a]/l[i][i];
}}

    inv_a[len-1][len-1] = z[len-1][len-1]/u[len-1][len-1];
for(var k=len-1; k >= 0; k--){
    inv_a[len-1][k] = z[len-1][k]/u[len-1][len-1];
for(var i=len-2; i >= 0; i--){
  
  var a=0;

  for(var j=len-1; j > i; j--){
  a += u[i][j]*inv_a[j][k];}
  
  inv_a[i][k] = [z[i][k] - a]/u[i][i];

}}
//b=matrix_multiply(m_orig,inv_a);

return inv_a;
}

function linear_solve(m,b){

var l,u= [];
z= new Array();
x = new Array();
var len = m[0].length;
u = matrix_copy(m);
l = generate_identity(len);
I = generate_identity(len);

for (var i = 0; i < len; i++) {
    z[i] = [];
    x[i] = [];
var max = u[i][i];
var maxIndex = i;

    for (var j = i+1; j < len; j++) {
        if (Math.abs(u[j][i]) > Math.abs(max)) {
            maxIndex = j;
            max = u[j][i];
        }
    }
    pivot = maxIndex;
    [u[pivot],u[i]] = [u[i],u[pivot]];
    [m[pivot],m[i]] = [m[i],m[pivot]];
    [I[pivot],I[i]] = [I[i],I[pivot]];
    [b[pivot][0],b[i][0]] = [b[i][0],b[pivot][0]];
  
   for(var k=i+1; k<len; k++){
    var div = u[k][i]/u[i][i];
    if(u[i][i] == 0) div = 0;
    for(var n=i; n<len ;n++){
    u[k][n] = u[k][n] - div*u[i][n];}
   }
}

for(var i=1; i < len; i++){
    l[i][0] = m[i][0]/u[0][0];
for(var k=1; k < i; k++){
  
  var a=0;

  for(var j=0; j < k; j++){
  a += l[i][j]*u[j][k];}
  
  l[i][k] = [m[i][k] - a]/u[k][k];

}}
//now finding inverse u(x) =z and l*z = b
    z[0][0] = b[0]/l[0][0];

for(var k=1; k < len; k++){
  
  var a=0;

  for(var j=0; j < k; j++){
  a += l[k][j]*z[j][0];}
  
  z[k][0] = [b[k][0] - a]/l[k][k];
}

    x[len-1][0] = z[len-1][0]/u[len-1][len-1];

for(var i=len-2; i >= 0; i--){
  
  var a=0;

  for(var j=len-1; j > i; j--){
  a += u[i][j]*x[j][0];}
  
  x[i][0] = [z[i][0] - a]/u[i][i];
}

console.log(x);

return x;


}









