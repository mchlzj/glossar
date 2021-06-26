let helloWorld = document.getElementById("helloworld");

const changeText = (text) => helloWorld.innerHTML = text;
const eventHandler = (e) => {
    changeText(e.target.value);
    console.log(e.target.value);
}

let input = document.getElementById("input");
input.addEventListener("input", eventHandler);

let content = document.getElementById("content");

let button = document.getElementById("button");
let changeContent = () => {
        content.innerHTML = '<object type="text/html" data="firstEntry.html" ></object>';
}
let handleChange = () => {
    changeContent();
}

button.addEventListener("click", handleChange);