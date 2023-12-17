const input = document.querySelector("input"),
showHide = document.querySelector(".show_hide"),
indicator = document.querySelector(".indicator"),
iconText = document.querySelector(".icon-text"),
text = document.querySelector(".text");


showHide.addEventListener("click", () => {
    if(input.type === "password"){
        input.type = "text";
        showHide.classList.replace("fa-eye-slash", "fa-eye")
    } else{
        input.type = "password";
        showHide.classList.replace("fa-eye", "fa-eye-slash")
    }
})

//regex 

let alphabet = /[a-zA-Z]/, //give us all alphabet from a to z
Number = /[0-9]/, //give us all num from 0 to 9
characters = /[!,"<£$%^&*():@{}?]/; //give us all num from 0 to 9

input.addEventListener("keyup", () => {
    indicator.classList.add("active");

    let val = input.value;
    if(val.match(alphabet) || val.match(Number) || val.match(characters)){
        text.textContent = "password is weak";
        input.style.borderColor = "red";
        showHide.style.color = "red";
        iconText.style.color = "red";
    }
    if(val.match(alphabet) && val.match(Number) && val.length >= 6){
        text.textContent = "password is Meduim";
        input.style.borderColor = "orange";
        showHide.style.color = "orange";
        iconText.style.color = "orange";
    }
    if(val.match(alphabet) && val.match(Number)&& val.match(characters) && val.length >= 9){
        text.textContent = "password is Strong";
        input.style.borderColor = "green";
        showHide.style.color = "green";
        iconText.style.color = "green";
    }

    if(val == ""){
    indicator.classList.remove("active");
        input.style.borderColor = "#a6a6a6";
        showHide.style.color = "#a6a6a6";
        iconText.style.color = "#a6a6a6";
    }
})