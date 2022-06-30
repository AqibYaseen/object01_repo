let employees=[];

let employe = {
    name:"0",
    phone:"0",
    id:0,
    email:"0"
}
let input = document.getElementsByTagName("input");


document.querySelector("BUTTON").addEventListener("click",function(e){
    employe.name=document.querySelector("#name").value;
    employe.phone=document.querySelector("#phone").value;
    employe.id=document.querySelector("#idd").value;
    employe.email=document.querySelector("#mail").value ;
    employees.push(employe);
    
    let i=0;
    
    // document.querySelector("#result").innerHTML+=employees[i].name;
    if(input[0].value !=""&& input[1].value !="" && input[2].value !=""&& input[3].value){
    document.querySelector("tbody").innerHTML+=` <tr>
    <td>${employees[i].name}</td>
    <td>${"+91 " +employees[i].phone}</td>
    <td>${employees[i].id}</td>
    <td>${employees[i].email}</td>
    </tr>`   
    i++;
    for(let x=0;x<input.length;x++){
        input[x].value="";
    }
}
else{
    alert("Input Fields cannot be Empty!!! ");
}
});
