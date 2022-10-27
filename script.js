// Basic Logic:
// Assign each disk a Numeric value of their size, EX: 1,2,3 and bigger the Number, bigger the Disk.
// Assign each column an empty Array

// Moving the disk into the other column == pushing a Number into the other Array

// *** Important Condition will be: ***
// 0. The starting Column = [1,2,3] ( which mean 3 disks. Later, you can add more like [1,2,3,4,5,6,7])
// 1. if an array (the other columns) is Empty, you can push the Number into that array ( == you can move the disk)
// 2. else, if the last value of the array is bigger then the number of the pushing Number, you can move.Array
//         else pop message saying that "the disk is bigger"
// 3. If array.length = initial array.length (that means all the disk has been moved properly) 


const disk1 = document.querySelector(".disk1");
const disk1Array = [3,2];
const disk2 = document.querySelector(".disk2");
const disk2Array = [1];
const disk3 = document.querySelector(".disk3");
const disk3Array = [];

const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");

// instead of writing each disk code, how can I change it for what User Click?
// Like diskClick = userClick
// diskClick.addEventListener('dragstart', dragStart);
// diskClick.addEventListener('dragstart', dragEnd);

disk1.addEventListener('dragstart', dragStart);
disk1.addEventListener('dragend', dragEnd);

disk2.addEventListener('dragstart', dragStart);
disk2.addEventListener('dragend', dragEnd);

disk3.addEventListener('dragstart', dragStart);
disk3.addEventListener('dragend', dragEnd);

/////////////////////////////////////////////////////


// Can I concise the repeated code?

column1.addEventListener('dragover', dragOver); 
column1.addEventListener('dragenter', dragEnter); 
column1.addEventListener('dragleave', dragLeave); 
column1.addEventListener('drop', dragDrop); 

column2.addEventListener('dragover', dragOver); 
column2.addEventListener('dragenter', dragEnter); 
column2.addEventListener('dragleave', dragLeave); 
column2.addEventListener('drop', dragDrop); 

column3.addEventListener('dragover', dragOver); 
column3.addEventListener('dragenter', dragEnter); 
column3.addEventListener('dragleave', dragLeave); 
column3.addEventListener('drop', dragDrop); 


///////////////////////////////////////////////////////

// Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
};

function dragEnd() {
    this.className = 'disk1';
};

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    console.log('entered')
}

function dragLeave(e) {
    e.preventDefault();
    console.log('leave')

}

function dragDrop(e) {
    e.preventDefault();
    this.className

}


// //////////////////////////////////
// Things I want to make now:

// 1. Align Disks in Center of the column     <=========     Done, through the Office Hour


// 2. Algin Disk from the Bottom xx pixe of the Column    <=========     Done, through the Office Hour

// 3. When disk is Dropped into the other column, I want to remove that Disk DIV from that column to the other colum
//    Will be done by using Creat & Delete class


// for example,

{/* <div class="column1">
    <div class="disk1" draggable="true"></div>
</div>
<div class="column2"></div>
<div class="column3"></div>

to be 

<div class="column1"></div>
<div class="column2">
    <div class="disk1" draggable="true"></div>
</div>
<div class="column3"></div> */}

// /////////////////////////////////////