// for storage this number -->array

var studentScours=[20,30,50,90];
console.log(studentScours);

// appare-number-2
console.log(studentScours[2]);

// for add number to specifec Number

// studentScours[0]= studentScours[0]+[3];
// console.log(studentScours[0]= studentScours[0]+[3] );

/* <loap> to add numbers to all scours */

var index= 0;
while (index <=4) {
    studentScours[index]=studentScours[index] +4;
    console.log(studentScours[index]);
    index=index+1;
}
