//전체 테스터 테이블 출력 부분

window.onload = function() {
    const config = {
        apiKey: "AIzaSyD3JYOzS03azOnDWPE_egzd-MeAQcRK6yc",
        authDomain: "greentesterbeta.firebaseapp.com",
        databaseURL: "https://greentesterbeta.firebaseio.com",
        projectId: "greentesterbeta",
        storageBucket: "greentesterbeta.appspot.com",
        messagingSenderId: "326184805949",
        appId: "1:326184805949:web:c95f62e62eca17c0002c54",
        measurementId: "G-5Z9VEYY7B7"
    };
    firebase.initializeApp(config);



    var customerData = document.getElementById("customerData");
    var customerData2 = document.getElementById("customerData2");
    var customerData3 = document.getElementById("customerData3");

    var database = firebase.database();
    var tableData = database.ref('customer');

    tableData.on('child_added',function(snapshot){
        var data = snapshot.val();
        var AppWeb = data.B_AppWeb;
        var clientName = data.A_clientName;//data.text;
        var device = data.E_device;
        var age = data.D_age;
        var testDetails = data.F_testDetails;
        var clientEmail = data.J_clientEmail;
        var clientTel = data.K_clientTel;
        var testCheck = data.L_onCheck;
        if(AppWeb!=undefined&&testCheck==1){
            customerData.innerHTML +='<tr class="customerList">\n' +
                '                                    <td style="width:7%;">'+AppWeb+'</td>\n' +
                '                                   <td style="width:8%;">'+clientName+'</td>\n' +
                '                                  <td style="width:8%;">'+device+'</td>\n' +
                '                                   <td style="width:9%;">'+age+'</td>\n' +
                '                                   <td style="width:16%;">'+testDetails+'</td>\n' +
                '                                   <td style="width:6%;">'+clientEmail+'</td>\n' +
                '                                   <td style="width:6%;">'+clientTel+'</td>\n' +
                '                                   <td style="width:2%;"><input type="checkbox" name="CustomerN" onclick="setBg(this)"></td>\n' +
                '                                </tr>' ;
        }
        if(AppWeb!=undefined&&testCheck==0){
            customerData2.innerHTML +='<tr class="customerList2">\n' +
                '                                    <td style="width:7%;">'+AppWeb+'</td>\n' +
                '                                   <td style="width:8%;">'+clientName+'</td>\n' +
                '                                  <td style="width:8%;">'+device+'</td>\n' +
                '                                   <td style="width:9%;">'+age+'</td>\n' +
                '                                   <td style="width:16%;">'+testDetails+'</td>\n' +
                '                                   <td style="width:6%;">'+clientEmail+'</td>\n' +
                '                                   <td style="width:6%;">'+clientTel+'</td>\n' +
                '                                   <td style="width:2%;"><input type="checkbox" name="CustomerN2" onclick="setBg(this)"></td>\n' +
                '                                </tr>' ;
        }
        if(AppWeb!=undefined&&testCheck==2){
            customerData3.innerHTML +='<tr class="customerList3">\n' +
                '                                    <td style="width:7%;">'+AppWeb+'</td>\n' +
                '                                   <td style="width:8%;">'+clientName+'</td>\n' +
                '                                  <td style="width:8%;">'+device+'</td>\n' +
                '                                   <td style="width:9%;">'+age+'</td>\n' +
                '                                   <td style="width:16%;">'+testDetails+'</td>\n' +
                '                                   <td style="width:6%;">'+clientEmail+'</td>\n' +
                '                                   <td style="width:6%;">'+clientTel+'</td>\n' +
                '                                   <td style="width:2%;"><input type="checkbox" name="CustomerN3" onclick="setBg(this)"></td>\n' +
                '                                </tr>' ;
        }
    });
};

$(document).ready(function(){
    //진행중 체크리스트 처리 부분
    $("#Customer").click(function(){
        var rowData = new Array();
        var tdArr = new Array();
        var checkbox = $("input[name=CustomerN]:checked");

        checkbox.each(function (i) {
            var tr=checkbox.parent().parent().eq(i);
            var td = tr.children();

            rowData.push(tr.text());

            var ServiceName = td.eq(0).text();
            tdArr.push(ServiceName);
        });
        $("#resultCustomer").val(tdArr);
        $("#changeCustomer").click(function(){
            var database = firebase.database();
            for(var k=0;k<tdArr.length;k++){
                console.log(tdArr[k]);
                var tableData = database.ref('customer/'+tdArr[k]);
                tableData.update({
                    L_onCheck:2
                })
            }
        })
    })
    //진행 전 체크리스트 처리 부분
    $("#Customer2").click(function(){
        var rowData = new Array();
        var tdArr = new Array();
        var checkbox = $("input[name=CustomerN2]:checked");

        checkbox.each(function (i) {
            var tr=checkbox.parent().parent().eq(i);
            var td = tr.children();

            rowData.push(tr.text());

            var ServiceName = td.eq(0).text();
            tdArr.push(ServiceName);
        });
        $("#resultCustomer2").val(tdArr);
        $("#changeCustomer2").click(function(){
            var database = firebase.database();
            for(var k=0;k<tdArr.length;k++){
                var tableData = database.ref('customer/'+tdArr[k]);
                tableData.update({
                    L_onCheck:1
                })
            }
        })
    })
    //진행중 체크리스트 처리 부분
    $("#Customer3").click(function(){
        var rowData = new Array();
        var tdArr = new Array();
        var checkbox = $("input[name=CustomerN3]:checked");

        checkbox.each(function (i) {
            var tr=checkbox.parent().parent().eq(i);
            var td = tr.children();

            rowData.push(tr.text());

            var ServiceName = td.eq(0).text();
            tdArr.push(ServiceName);
        });
        $("#resultCustomer3").val(tdArr);
        $("#changeCustomer3").click(function(){
            var database = firebase.database();
            for(var k=0;k<tdArr.length;k++){
                var tableData = database.ref('customer/'+tdArr[k]);
                tableData.remove();
            }
        })
    })
})

//검색 부분
function myFunction() {
    var radiogaga = document.getElementsByName("search1");

    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("customerData");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        //[]인덱스 안에 번호에 따라서 name의 검색할지 Countrty에 검색할지 결정
        //td = tr[i].getElementsByTagName("td")[1];
        if(radiogaga[0].selected){
            td=tr[i];
        }
        else {
            for (var j = 1; j < radiogaga.length; j++) {
                if (radiogaga[j].selected) {
                    td = tr[i].getElementsByTagName("td")[j-1];
                }
            }
        }
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myFunction2() {
    var radiogaga2 = document.getElementsByName("search2");

    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("customerData2");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        //[]인덱스 안에 번호에 따라서 name의 검색할지 Countrty에 검색할지 결정
        //td = tr[i].getElementsByTagName("td")[1];
        if(radiogaga2[0].selected){
            td=tr[i];
        }
        else {
            for (var j = 1; j < radiogaga2.length; j++) {
                if (radiogaga2[j].selected) {
                    td = tr[i].getElementsByTagName("td")[j-1];
                }
            }
        }
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myFunction3() {
    var radiogaga2 = document.getElementsByName("search2");

    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("customerData2");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        //[]인덱스 안에 번호에 따라서 name의 검색할지 Countrty에 검색할지 결정
        //td = tr[i].getElementsByTagName("td")[1];
        if(radiogaga2[0].selected){
            td=tr[i];
        }
        else {
            for (var j = 1; j < radiogaga2.length; j++) {
                if (radiogaga2[j].selected) {
                    td = tr[i].getElementsByTagName("td")[j-1];
                }
            }
        }
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
//check된 배경색
function setBg(t){
    tr = t.parentNode.parentNode;
    tr.style.backgroundColor=(t.checked)? "#d4edda":"";
}

function setCheckBox(){
    $("input[name=CustomerN]").prop("checked",false);
    $(".customerList:odd").css("background-color","white");
    $(".customerList:even").css("background-color","#eeeeee");

    window.location.reload();
}
function setCheckBox2(){
    $("input[name=CustomerN2]").prop("checked",false);
    $(".customerList2:odd").css("background-color","white");
    $(".customerList2:even").css("background-color","#eeeeee");

    window.location.reload();
}
function setCheckBox3(){
    $("input[name=CustomerN3]").prop("checked",false);
    $(".customerList3:odd").css("background-color","white");
    $(".customerList3:even").css("background-color","#eeeeee");

    window.location.reload();
}