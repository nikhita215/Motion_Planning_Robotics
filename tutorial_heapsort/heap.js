/*|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\

    Heap Sort Stencil | JavaScript support functions

    Quick JavaScript Code-by-Example Tutorial 
     
    @author ohseejay / https://github.com/ohseejay
                     / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Michigan Honor License

|\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/|
||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/
/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\
\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/||\/*/


 
minheaper = {}; 

function minheap_insert(heap, new_element) {

heap[heap.length] = new_element;
				
if (heap.length > 1) {
index = heap.length - 1;
while (heap[index] < heap[parent(index)]) {
						
[heap[parent(index)], heap[index]] = [heap[index], heap[parent(index)]];
					if (parent(index) > 0) {
						index = parent(index);}
						 else {break;};
				};
			
		}; 
	
}

function parent(h) {
if(h%2==0)
        {return (h-2)/2;}

    else{return (h-1)/2;};
}

minheaper.insert = minheap_insert;

function minheap_extract(heap) {

smallest= heap[0];
index=heap.length-1;
[heap[0], heap[index]] = [heap[index], heap[0]];
heap.length-- ;
current=0;

//if(heap.length = 1){return heap[0];}

if(heap.length < 3){
if(heap[0]>heap[1]){[heap[0], heap[1]] = [heap[1], heap[0]];}
else{;}
}

else{
if(heap[1]<heap[2]){child=1;}
else{child=2;}

while(heap[child]< heap[current]){
[heap[child], heap[current]] = [heap[current], heap[child]];

current= child;
if(left_child(current)== heap.length){break;}

else if(right_child(current) == heap.length){ child = left_child(current);}
else{
if(	heap[left_child(current)]< heap[right_child(current)])
{child= left_child(current);}
	else{child= right_child(current);}

	if (child < (index+1)) {;}
	else {break;};
}				
}
}
return smallest;
   
}



function left_child(h) {
return 2*h+1 ;
}

function right_child(h){
return 2*h+2;
}



minheaper.extract = minheap_extract;
