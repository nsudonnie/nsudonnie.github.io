let slowTime = 200;
let normalTime = 50;

// the timer function, used to create a delay
function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function newLine() {
    let newElement = document.querySelector("p");
    newElement.innerHTML += "<br>";
}
        
// the typewriter function
async function typewriter(text) {

    let newElement = document.querySelector("p");

    for (let i = 0; i < text.length;) {

        newElement.innerHTML += text.charAt(i);
        i++;

        if (text.charAt(i - 1) === ".") {
            await timer(slowTime);
        } else if (text.charAt(i - 1) === "!") {
            await timer(slowTime);
        } else if (text.charAt(i - 1) === "?") {
            await timer(slowTime);
        } else if (text.charAt(i - 1) === ",") {
            await timer(slowTime);
        } else if (text.charAt(i - 1) === ";") {
            await timer(slowTime);
        } else if (text.charAt(i - 1) === ":") {
            await timer(slowTime);
        } else {
            await timer(normalTime);
        }

    }
            
    newElement.innerHTML += "<br>";
    await timer(500);

}
        
async function runTypewriter() {

    let element = document.querySelector("p")

    element.innerHTML = "[INITIALIZING, PLEASE WAIT...]";
    let prevText = document.querySelector("p").innerHTML;

    newLine();
    element.innerHTML += "[░░░░░░░░░░] 0%";
    await timer(2000)

    element.innerHTML = prevText;
    newLine();
    element.innerHTML += "[█░░░░░░░░░] 10%";
    await timer(2250)
            
    element.innerHTML = prevText;
    newLine();
    element.innerHTML += "[████░░░░░░] 40%";
    await timer(100)

    element.innerHTML = prevText;
    newLine();
    element.innerHTML += "[██████░░░░] 60%";
    await timer(150)

    element.innerHTML = prevText;
    newLine();
    element.innerHTML += "[█████████░] 90%";
    await timer(1000)

    element.innerHTML = prevText;
    newLine();
    element.innerHTML += "[██████████] 100%";
    await timer(1000)

    element.innerHTML = "[INITIALIZING COMPLETE.]" + "<br>" + "[██████████] 100%";
    await timer(2000);

    newLine();
    newLine();

    if (localStorage.visited) {

        await typewriter("yeah you've already seen this before")
        await typewriter("let's just get straight into the pages, shall we?")

    } else {

        await typewriter("hello, welcome to my intro website!");
        await typewriter("this is where you can learn some general information about me, like what my interests are!")
        await typewriter("i hope you have a good time reading!!")

        newLine();
        await typewriter("anyways, here's the pages that contain some general info about me.");
                
        localStorage.setItem("visited", true)

    }

    prevText = element.innerHTML;
    newLine();
    element.innerHTML += "[INITIALIZING PAGES...]";
    await timer(1000);

    let newLink = document.querySelectorAll("a");
    newLink[0].innerHTML = "<strong> " + "[INTRO]" + " </strong>" + " <br>";
    await timer(250);
    newLink[1].innerHTML = "<strong> " + "[SOCIALS]" + " </strong>" + " <br>";
            
    await timer(500);
    element.innerHTML = prevText;

    newLine();
    element.innerHTML += "[INIT PAGES...OK]";

}
        
runTypewriter();