// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

// Setup elements:

const vanisher = document.getElementById("btn-1");
const crimson = document.getElementById("btn-2");
const liteblue = document.getElementById("btn-3");
const shaky = document.getElementById("btn-4");
const reset = document.getElementById("reset");

document.querySelector("body").style.backgroundColor = "black";  // Ahh, that's easier on the eyes.

// Initial properties now in a function. Runs at the outset, and is called by the reset button:

function initializer() {
    for (let i = 1; i <=4; i++) {
        document.getElementById(`btn-${i}`).style.backgroundColor = "gold";
        document.getElementById(`btn-${i}`).style.opacity = "100";
    }
    if (shaky.classList.contains("jitters")) shaky.classList.remove("jitters");
};

function toggleSwitch(event) {
    console.log("Button clicked");
    let targ = event.target.id;
    switch(targ) {
        case("btn-1"):
            (vanisher.style.opacity === "100") ? (vanisher.style.opacity = "1%") : (vanisher.style.opacity = "100%");
            break;
        case("btn-2"):
            (crimson.style.backgroundColor === "gold") ? crimson.style.backgroundColor = "crimson" : crimson.style.backgroundColor = "gold";
            break;
        case("btn-3"):
            (liteblue.style.backgroundColor === "gold") ? liteblue.style.backgroundColor = "lightblue" : liteblue.style.backgroundColor = "gold";
            break;
        case("btn-4"):
            (shaky.classList.contains("jitters")) ? (shaky.classList.remove("jitters")) : (shaky.classList.add("jitters"));
            break;
        case("reset"):
            initializer();
            break;
    }
};

initializer();

document.addEventListener("click", toggleSwitch);