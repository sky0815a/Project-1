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
// const disk1Array = [3,2,1];
const disk2 = document.querySelector(".disk2");
// const disk2Array = [];
const disk3 = document.querySelector(".disk3");
// const disk3Array = [];


const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");

var element = document.getElementById('diskNum');
var value = parseInt(element.innerHTML);
var countBest = document.getElementById('countBest');
var bestNum = parseInt(countBest.innerHTML);

function incrementButton() {
    if (value < 7) {
        bestNum = bestNum + 2**value;
        ++value;
        document.getElementById('diskNum').innerHTML = value;
        document.getElementById('countBest').innerHTML = bestNum;
    }
    else {
        alert("You can't add more!");
    }
}

function decrementButton() {
    if (value > 3) {
        --value;
        bestNum = bestNum - 2**value;
        document.getElementById('diskNum').innerHTML = value;
        document.getElementById('countBest').innerHTML = bestNum;
    }
    else {
        alert("You can't reduce more!");
    }
}

(function() {
    const disk1Array = [3,2,1];
    const disk2Array = [];
    const disk3Array = [];
    
    var dragged, listener;
    var countDrop = 0;
    dragged = null;
    

    listener = document.addEventListener;

    listener("dragstart", (event) => {
    //   console.log("start !");
      return dragged = event.target;
    });

    listener("dragend", (event) => {
    //   return console.log("end !");
    });

    listener("dragover", function(event) {
      return event.preventDefault();
    });

    listener("drop", (event) => {
        // console.log("drop !");
        countDrop += 1;
        
        document.getElementById("count").innerHTML = countDrop;
        event.preventDefault();

//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 2 from 1 ///////////////
//////////////////////////////////////////////////////////////// 

    // Declare where are we working at
    const currentTower = dragged.parentNode
    // console.log(currentTower);   

        if (event.target.className === "column2" && currentTower === column1) {
            // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                    disk2Array.push(disk1Array[disk1Array.length -1]);
                    disk1Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }

            // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk2Array[disk2Array.length -1] != 1) {
                    disk2Array.push(disk1Array[disk1Array.length -1]);
                    disk1Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk2Array.length) {
                    disk2Array.push(disk1Array[disk1Array.length -1]);
                    disk1Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
        }
//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 3 from 1 ///////////////
//////////////////////////////////////////////////////////////// 

        if (event.target.className === "column3" && currentTower === column1)  {
            // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                    disk3Array.push(disk1Array[disk1Array.length -1]);
                    disk1Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }

            // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk3Array[disk3Array.length -1] != 1) {
                    disk3Array.push(disk1Array[disk1Array.length -1]);
                    disk1Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk3Array.length) {
                    disk3Array.push(disk1Array[disk1Array.length -1]);
                    disk1Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
        }

//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 3 from 2 ///////////////
////////////////////////////////////////////////////////////////

        if (event.target.className === "column3" && currentTower === column2) {
            // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                    disk3Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
        
            // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk3Array[disk3Array.length -1] != 1) {
                    disk3Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk3Array.length) {
                    disk3Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
        }

//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 1 from 2 ///////////////
////////////////////////////////////////////////////////////////

        if (event.target.className === "column1" && currentTower === column2) {
           // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                disk1Array.push(disk2Array[disk2Array.length -1]);
                disk2Array.pop();
                // console.log(disk1Array);
                // console.log(disk2Array);
                // console.log(disk3Array);
                dragged.parentNode.removeChild(dragged);
                return event.target.prepend(dragged);
            }

            // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk1Array[disk1Array.length -1] != 1) {
                    disk1Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk1Array.length) {
                    disk1Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
        }

//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 3 from 2 ///////////////
////////////////////////////////////////////////////////////////

        if (event.target.className === "column3" && currentTower === column2) {
            // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                disk3Array.push(disk2Array[disk2Array.length -1]);
                disk2Array.pop();
                // console.log(disk1Array);
                // console.log(disk2Array);
                // console.log(disk3Array);
                dragged.parentNode.removeChild(dragged);
                return event.target.prepend(dragged);
            }

        // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk3Array[disk3Array.length -1] != 1) {
                    disk3Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk3Array.length) {
                    disk3Array.push(disk2Array[disk2Array.length -1]);
                    disk2Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
        }

//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 1 from 3 ///////////////
////////////////////////////////////////////////////////////////

        if (event.target.className === "column1" && currentTower === column3) {
            // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                disk1Array.push(disk3Array[disk3Array.length -1]);
                disk3Array.pop();
                // console.log(disk1Array);
                // console.log(disk2Array);
                // console.log(disk3Array);
                dragged.parentNode.removeChild(dragged);
                return event.target.prepend(dragged);
            }

            // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk1Array[disk3Array.length -1] != 1) {
                    disk1Array.push(disk3Array[disk3Array.length -1]);
                    disk3Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk1Array.length) {
                    disk1Array.push(disk3Array[disk3Array.length -1]);
                    disk3Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
        }

//////////////////////////////////////////////////////////////// 
/////////////// If the Target Column is 2 from 3 ///////////////
////////////////////////////////////////////////////////////////


        if (event.target.className === "column2" && currentTower === column3) {
            // And if disk 1 can be pushed anywhere anytimes (because its the smallest one)
            if (dragged === disk1) {
                disk2Array.push(disk3Array[disk3Array.length -1]);
                disk3Array.pop();
                // console.log(disk1Array);
                // console.log(disk2Array);
                // console.log(disk3Array);
                dragged.parentNode.removeChild(dragged);
                return event.target.prepend(dragged);
            }

            // And if disk 2 is selected
            else if (dragged === disk2) {
                // As long as the last disk is not 1, you can move
                if (disk2Array[disk2Array.length -1] != 1) {
                    disk2Array.push(disk3Array[disk3Array.length -1]);
                    disk3Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                    return event.target.prepend(dragged);
                }
            }
            // And if disk 3 is selected
            else if (dragged === disk3) {
                // You can move disk3 If and Only If the tower is empty.
                if (!disk2Array.length) {
                    disk2Array.push(disk3Array[disk3Array.length -1]);
                    disk3Array.pop();
                    // console.log(disk1Array);
                    // console.log(disk2Array);
                    // console.log(disk3Array);
                    dragged.parentNode.removeChild(dragged);
                return event.target.prepend(dragged);
                }
            }
        }
    });
}).call(this);
