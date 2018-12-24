// GET THE TABLE THAT CONTAINS ALL THE PROVINCES
let $provincesTable = document.getElementById("provinces_table");
// GET THE FIRST <td> ELEMENT OF EACH PROVINCE ROW <tr>
let $provinces = $provincesTable.querySelectorAll("tbody tr td:first-child");
// CONVERT THE ARRAY-LIKE OBJECT $provinces TO AN ARRAY IN ORDER TO USE .map()
$provinces = Array.from( $provinces );
// GET THE SEARCH INPUT ELEMENT
let $search = document.getElementById("province_search");
// EXECUTE A FUNCTION EVERYTIME THE USER PRESSES A KEY ON THE SEARCH INPUT
$search.addEventListener( "keyup", function(){

  let current = $provinces.map(((province, idx)=>{

    // this REFERS TO THE $search ELEMENT OBJECT
    if ( this.value === "" || this.value.toLowerCase() === province.textContent.trim().toLowerCase() ){
      province.parentNode.style.display = "table-row";
    } else {
      province.parentNode.style.display = "none";
    }

  }));

});