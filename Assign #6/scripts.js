// function to get values entered by user when submit is clicked
// and then call functions to create multiplication table based
// on those numbers
function sub(){
    var num1, num2, num3, num4;
    var allNums = document.getElementsByClassName("inputNum");
    num1 = parseInt(allNums[0].value, 10);
    num2 = parseInt(allNums[1].value, 10);
    num3 = parseInt(allNums[2].value, 10);
    num4 = parseInt(allNums[3].value, 10);

    //alert("Button is Working");

    createMultTable(num1, num2, num3, num4);
}

function createMultTable(n1, n2, n3, n4){
    //alert("hello from mult table func");

    /*
    var tableSpace = document.getElementById("mTContainer");
    table = document.createElement("table");
    table.setAttribute("id", "multTable");
    tr = document.createElement("tr");
    tr.innerHTML = n1.toString();
    tableSpace.replaceChild(table, tableSpace.childNodes[0]);
    table.appendChild(tr);
    */

    var tableSpace = document.getElementById("mTContainer");
    table = document.createElement("table");
    table.setAttribute("id", "multTable");
    tr = document.createElement("tr");
    th = document.createElement("th");
    td = document.createElement("td");

    //place table tag into html file, in the specified table area
    tableSpace.replaceChild(table, tableSpace.childNodes[0]);

    for (i=n1; i<=n2; i++){
        tr = document.createElement("tr");
        tr.innerHTML = n1 - 1 + i;
        table.appendChild(tr);
        for (j=n3; j<=n4; j++){
            td = document.createElement("td");
            td.innerHTML = n3 - 1 + j;
            tr.appendChild(td);
        }
    }
}
