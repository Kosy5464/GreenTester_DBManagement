
$(document).ready(function(){
    //radiobutton 처리 부분
    $("#radioButton").click(function(event){
        var radioDevice = $("input:radio[name='device']:checked").val();
        var radioInhabit = $("input:radio[name='inhabit']:checked").val();
        var radioCouple = $("input:radio[name='couple']:checked").val();
        var radioPet = $("input:radio[name='pet']:checked").val();
        var table, tr, td, i, txtValue;
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i];
            console.log(td);
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(radioCouple) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    })
})