console.log(
    "Javascript Calculator Made by Asesh raj\https://github.com/asesh561"
);
document.getElementById("ipt").readOnly = true; 
let screen = document.getElementById("ipt");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "*") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "clear") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value=eval(screenValue);
        } else if (buttonText == "del") {
            buttonText = "delete";
            screenValue += buttonText;
            screen.value = screenValue;
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
