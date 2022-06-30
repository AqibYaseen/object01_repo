let employees=[];
let counter=0;
let newArray=[];
let input = Array.from(document.getElementsByTagName("input"));

let employe = {
    name:"0",
    phone:"0",
    id:0,
    email:"0"
}

document.querySelector("BUTTON").addEventListener("click",function(e){
    employe.name=input[0].value;
    employe.phone=input[1].value;;
    employe.id=input[2].value;;
    employe.email=input[3].value;;
    // console.log(i);
    
    newArray[counter] = Object.assign({},employe);

    employees.push(newArray[counter]);
    
    
    // window.location.reload();

    // document.querySelector("#result").innerHTML+=employees[i].name;
    
    if(input[0].value !=""&& input[1].value !="" && input[2].value !=""&& input[3].value){
        if(input[1].value.length<10){
            alert("length of phone");
        }
        else{
            document.querySelector("tbody").innerHTML+=` <tr>
            <td>${counter+1+"."}</td>
            <td>${employees[counter].name}</td>
            <td>${"+91 "+employees[counter].phone}</td>
            <td>${employees[counter].id}</td>
            <td>${employees[counter].email}</td>
            </tr>`   
            // console.log(Array.of(input))
            // console.log(input);

            input.forEach(element =>element.value="");
            console.clear();    
            console.log(employees);
            }
    }else{
        alert("Input Fields cannot be Empty!!! ");
    }
    counter++;
});
