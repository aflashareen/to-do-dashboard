const input=document.getElementById("input");
const btn =document.getElementById("btn");
const container = document.querySelector(".container")

// input.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");
//     document.body.classList.toggle("light");

//     if(document.body.classList.contains("dark")){
//         btn.innerText
//     }
// });
// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");
//     document.body.classList.toggle("light");
// })

btn.addEventListener("click",()=>{
    if(input.value === ""){
        console.error("No task entered");
        return;
    }

    const text = input.value;

    const li = document.createElement("li");
    li.textContent=text;
    li.classList.add("task");

    li.addEventListener("click",()=>{
        li.classList.toggle("completed");

        if(li.classList.contains("completed")){
            li.firstChild.textContent= text;
            container.appendChild(li);
        }else{
            li.firstChild.textContent=text;
        }
    })

    const delBtn=document.createElement("button");
    delBtn.textContent="Delete";
    delBtn.classList.add("deleteBtn");

    delBtn.addEventListener("click",()=>{
        li.remove();
    });
    li.appendChild(delBtn)
    container.appendChild(li);

    input.value ="";
})















