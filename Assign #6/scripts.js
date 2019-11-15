// function to get values entered by user when submit is clicked
// and then call functions to create multiplication table based
// on those numbers
function sub(){
    var num1, num2, num3, num4;
    var allNums = document.getElementsByClassName("inputNum");
    // set the input values to newly created variables and use parseInt to make sure they are used as integers
    num1 = parseInt(allNums[0].value, 10);
    num2 = parseInt(allNums[1].value, 10);
    num3 = parseInt(allNums[2].value, 10);
    num4 = parseInt(allNums[3].value, 10);

    createMultTable(num1, num2, num3, num4); // call function to actually create the mult table using the inputted values
}

function createMultTable(n1, n2, n3, n4){

    var tableSpace = document.getElementById("mTContainer"); // get the place in the HTML file where we will be adding the table
    table = document.createElement("table"); // create the table element
    table.setAttribute("id", "multTable"); // add an id to the table for styling

    //place table tag into html file, in the specified table area
    tableSpace.replaceChild(table, tableSpace.childNodes[0]);

    // The nested for loops below create the multiplication table by
    // going row by row, and multiplying each row value by the column
    // value.
    for (i=n3; i<=n4; i++){
        tr = document.createElement("tr"); //create a new row each iteration of the outer for loop
        tr.setAttribute("class", "row"); // set class of table's row to "row" for easy styling

        for (j=n1; j<=n2; j++){
            td =document.createElement("td"); // create a new column item within the row during each iteration of the inner loop
            td.setAttribute("class", "column"); // set this column class to "column" for easy styling later on
            td.innerHTML = i*j; // set the inner html of each place in the table to the proper multiplication product
            tr.appendChild(td); // add the product to the row
        }
        table.appendChild(tr); // Add the row with all the products to the table, and then repeat for the user specified range
    }
}
