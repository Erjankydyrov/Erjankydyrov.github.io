let button = document.querySelector("button");
let input1 = document.querySelector("#name");
let input2 = document.querySelector("#massage");
let input3 = document.querySelector("#color");

button.addEventListener("click", function() {

    fetch("https://live-chat-7d71f-default-rtdb.firebaseio.com/chat.json" , {
        method: "POST",
        body: JSON.stringify({
            name: input1.value,
            massage: input2.value,
            color: input3.value,
        }),
    })

    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);

    let div = document.createElement("div");
    let spantext = document.createElement("span");
    let spanmass = document.createElement("span");

    spantext.innerText = input1.value + ':';
    spanmass.innerText = input2.value;
    spantext.style.color = input3.value;
    div.append(spantext);
    div.append(spanmass);
    document.body.append(div)   
})
