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

        if(AppWeb!=undefined){
            customerData.innerHTML +='<tr>\n' +
                '                                    <td style="width:11%;">'+AppWeb+'</td>\n' +
                '                                   <td style="width:12%;">'+clientName+'</td>\n' +
                '                                  <td style="width:12%;">'+device+'</td>\n' +
                '                                   <td style="width:14%;">'+age+'</td>\n' +
                '                                   <td style="width:24%;">'+testDetails+'</td>\n' +
                '                                   <td style="width:14%;">'+clientEmail+'</td>\n' +
                '                                   <td style="width:14%;">'+clientTel+'</td>\n' +
                '                                   <td style="width:6%;"><input type="checkbox" name="DeleteCustomer" onclick="setBg(this)"></td>\n' +
                '                                </tr>' ;
        }
    });
};

$(document).ready(function(){
    $("#dataDelete").click(function () {
        var checkbox = $("input[name=DeleteCustomer]:checked").length;
        if(checkbox==0){
            document.getElementById("modal").innerHTML =
                '                                 <div class="modal-dialog modal-lg" role="document">\n' +
                '                                                           <div class="modal-content">\n' +
                '                                                                 <div class="modal-header">\n' +
                '                                                                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                                                                                    <span aria-hidden="true">&times;</span>\n' +
                '                                                                                </button>\n' +
                '                                                                        </div>\n' +
                '                                                                   <div class="modal-body" id="modalContent">\n' +
                '                                                                        <h2>체크된 값이 읍썽!!!</h2>\n' +
                '                                                                        </div>\n' +
                '                                                                    <div class="modal-footer">\n' +
                '                                                                            <button type="button" class="btn btn-default"  data-dismiss="modal">닫기</button>\n' +
                '                                                                        </div>\n' +
                '                                                                </div>\n' +
                '                                                       </div>\n'
        }
        else{
            document.getElementById("modal").innerHTML =
                '                                 <div class="modal-dialog modal-lg" role="document">\n' +
                '                                                           <div class="modal-content">\n' +
                '                                                                 <div class="modal-header">\n' +
                '                                                                         <h5 class="modal-title">마지막으로 다시 묻겠어</h5>\n' +
                '                                                                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                                                                                    <span aria-hidden="true">&times;</span>\n' +
                '                                                                                </button>\n' +
                '                                                                        </div>\n' +
                '                                                                   <div class="modal-body" id="modalContent">\n' +
                '                                                                        정말 삭제하시겠습니까?\n' +
                '                                                                        </div>\n' +
                '                                                                    <div class="modal-footer">\n' +
                '                                                                        <button class="btn btn-outline-danger"  id="deleteCustomer">삭제</button>\n' +
                '                                                                            <button type="button" class="btn btn-default"  data-dismiss="modal">취소</button>\n' +
                '                                                                        </div>\n' +
                '                                                                </div>\n' +
                '                                                       </div>\n'
            $("#deleteCustomer").click(function(){
                var rowData = new Array();
                var tdArr = new Array();
                var checkbox = $("input[name=DeleteCustomer]:checked");

                checkbox.each(function (i) {
                    var tr=checkbox.parent().parent().eq(i);
                    var td = tr.children();

                    rowData.push(tr.text());

                    var ServiceName = td.eq(0).text();
                    tdArr.push(ServiceName);
                });
                var database = firebase.database();
                for(var k=0;k<tdArr.length;k++) {
                    var tableData = database.ref('customer/' + tdArr[k]);
                    tableData.remove();
                }
                window.location.reload();
            })
        }
    })
})

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
//check된 배경색
function setBg(t){
    tr = t.parentNode.parentNode;
    tr.style.backgroundColor=(t.checked)? "#d4edda":"";
}