

var lines = ["hello", "one", "two", "three"];
var counter = 0;
var line = document.getElementById("typewriter-" + lines[counter]);

typewriter();
function typewriter() {
    line.addEventListener("animationend", function () {
        setTimeout(() => {
            if(counter !== 3){
                line.classList.remove("add-border");
            }
            document.getElementById("typewriter-" + lines[counter + 1]).classList.add("add-border");
            counter++;
            line = document.getElementById("typewriter-" + lines[counter]);
            typewriter();
        }, 1000);

    });
}