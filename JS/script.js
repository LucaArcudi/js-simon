

const buttonElement = document.querySelector("button")

console.log(buttonElement);

let counter = 0;



buttonElement.addEventListener("click", function () {
    
    
    buttonElement.innerHTML = `# ${counter}`;

    let stop = true;

    if (!stop){
        if (counter < 10){
            counter++
            buttonElement.innerHTML = `# ${counter}`;
        } else {
            stop = true;


            setTimeout(() => {
                stop = false;
                counter = 0;
                buttonElement.innerHTML = `# ${counter}`;

            }, 4000);
        }
    }

})