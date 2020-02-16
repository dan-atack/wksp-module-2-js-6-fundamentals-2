// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const disappearer = document.getElementById("btn-1");
const crimson = document.getElementById("btn-2");
const lightblue = document.getElementById("btn-3");
const shaky = document.getElementById("btn-4");

function clickSwitch(event) {
    let targ = event.target.id;
    switch (targ) {
        case("btn-1"):
            document.getElementById(targ).style.visibility = "hidden";
            break;
        case("btn-2"):
            document.getElementById(targ).style.backgroundColor = "crimson";
            break;
        case("btn-3"):
            document.getElementById(targ).style.backgroundColor = "lightblue";
            break;
        case("btn-4"):  // Added a toggle; all that jittering was making me uncomfortable.
            (document.getElementById(targ).classList.contains("jitters")) ? document.getElementById(targ).classList.remove("jitters") : document.getElementById(targ).classList.add("jitters");
            break;
    }
};

document.addEventListener("click", clickSwitch);