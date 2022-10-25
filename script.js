const diskPink = document.querySelector(".disk1")
const empites = document.querySelector(".column1")


// Fill Listeners
diskPink.addEventListener('dragstart', dragStart);
diskPink.addEventListener('dragstart', dragEnd);

// Drag Functions
function dragStart() {
    console.log("start");
}

function dragEnd() {
    console.log("end")
}