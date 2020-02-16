// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle. How shall I do that?? HAhaha!
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

const disappearer = document.getElementById("btn-1");
const crimson = document.getElementById("btn-2");
const lightblue = document.getElementById("btn-3");
const shaky = document.getElementById("btn-4");

// Make buttons gold at the outset:

for (let i = 1; i <= 4; i++) {
    document.getElementById(`btn-${i}`).style.backgroundColor = "gold";
};

// Set button 1's opacity here so it can be referred to in the switch statement to let it toggle:
document.getElementById("btn-1").style.opacity = "100%";

function toggleSwitch(event) {
    let targ = event.target.id;
    switch(targ) {
        case("btn-1"):
            // Button 1 alters opacity value rather than making it strictly disapper, so you can click it again:
            if (document.getElementById(targ).style.opacity === "0.01") {
                document.getElementById(targ).style.opacity = "100%";
            } else {
                document.getElementById(targ).style.opacity = "1%";
            }
        case("btn-2"):
            (document.getElementById(targ).style.backgroundColor === "gold") ? document.getElementById(targ).style.backgroundColor = "crimson" : document.getElementById(targ).style.backgroundColor =  "gold";
            break;
        case("btn-3"):
            (document.getElementById(targ).style.backgroundColor === "gold") ? document.getElementById(targ).style.backgroundColor = "lightblue" : document.getElementById(targ).style.backgroundColor =  "gold";
            break;
        case("btn-4"):
            (document.getElementById(targ).classList.contains("jitters")) ? document.getElementById(targ).classList.remove("jitters") : document.getElementById(targ).classList.add("jitters");
            break;
    }
};

document.addEventListener("click", toggleSwitch);

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

