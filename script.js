const lcheck = document.querySelector("#label_check");
const show = document.querySelector("#show");

show.addEventListener('click',function () {
    const pass = document.querySelector(".out");
    const userpass = document.querySelector("#userpass");
    console.log(userpass.value);
    if(userpass.value == "123456"){
        lcheck.innerHTML = ""
        pass.style.display = "block";
    }
    else{
        lcheck.innerHTML = "Enter correct password"
    }
})

const change = document.querySelector("#change");

change.addEventListener('click', function(){
    const inpChange = document.querySelector("#prom");
    const inpPass = document.getElementById("newpass");
    //console.log(inpPass.value);

    const nodeList = document.querySelectorAll(".passname")
    nodeList.forEach(function(item){
        if(item.innerHTML == inpChange.value){
            item.parentElement.childNodes[1].innerHTML = `${inpPass.value}`;
            console.log(item.parentElement.childNodes[1].innerHTML);
        } 
    })
})
