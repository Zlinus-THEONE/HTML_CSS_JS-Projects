let loading_text = document.getElementById("loading-text")
let bar = document.getElementById("bar")

let loading_bar = document.getElementById("loading-bar")
let h2_div = document.getElementById("h2-div")
let img_div = document.getElementById("img-div")

let connect_text = document.getElementById("Connect-text");         
let neural_text = document.getElementById("Neural-text");   
let s1_text = document.getElementById("s1-text");  
let s2_text = document.getElementById("s2-text");  


let dot = ".";
let loop = 0;
let t = 0;
let loeadingPercentage = 0;

async function showText() {

   dotLoader("ACQUIRING NEURAL DATA");
    dot = "."
    await new Promise(resolve => setTimeout(resolve, 5000));

    dotLoader("ANALYZING BIOLOGICAL STRUCTURE");
    dot = "."
    await new Promise(resolve => setTimeout(resolve, 5000));

    dotLoader("NEURAL NETWORK MAPPING")
    dot = "."
    await new Promise(resolve => setTimeout(resolve, 7000));

    loading_text.innerText = "LOADING 0%"
    loading_bar.style.display = "flex";

    for (let i = 0; i <= 100; i++) {

        if (i < 95) {
            await new Promise(resolve => setTimeout(resolve, 100));
        } else {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        loading_text.innerText = "LOADING " + i + "%";
        bar.style.width = i+"%";
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    loading_text.innerText = "CONSCIOUSNESS PRESERVED";
    await new Promise(resolve => setTimeout(resolve, 3000));
    h2_div.style.display = "none";
    img_div.style.display = "flex";

    await typeWriter(connect_text, "CONNECTION:ESTABLISHED");
    await typeWriter(neural_text, "NEURAL_LINK: STABLE");
    await new Promise(resolve => setTimeout(resolve, 1000));
    await typeWriter(s1_text, "SUBJECT_01: Michael");
    await new Promise(resolve => setTimeout(resolve, 1000));
    await typeWriter(s2_text, "SUBJECT_02: Cee");

}


async function dotLoader(text) {
    for (let i =0; i < 9; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        loading_text.innerText = text+dot;
        dot = "."+dot; 
        loop ++; 
        
        if (loop == 3) {
            dot = "."
            loop = 0
        }
    }
}

function typeWriter(textVar, text) {
    return new Promise(resolve => {
        let i = 0;
        textVar.innerText = "";

        function type() {
            if (i < text.length) {
                textVar.innerText += text.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                resolve();
            }
        }

        type();
    });
}

addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        showText();
    }
})
