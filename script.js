const input = document.getElementById("input");
const list = document.getElementById("addList");


function addTask(){
    if(input.value === ""){
        alert("Write something");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    input.value = "";
}
 
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        var div = e.target;
        div.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    const storeData = localStorage.getItem("data");
    if (storeData){
        list.innerHTML = storeData;
    }
}

function clearData(){
    localStorage.clear();
    list.innerHTML = "";
} 