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



    var testData = document.getElementById("myTable");

    var database = firebase.database();


    for(var AgeGroup=10;AgeGroup<=60;AgeGroup=AgeGroup+10) {
        var tableData = database.ref('tester/' + AgeGroup + '대');

        //table 출력
        tableData.on('child_added', function (snapshot) {
            var data = snapshot.val();
            var grade = data.A_grade;
            var name = data.B_name;//data.text;
            var age = data.C_age;
            var sex = data.D_sex;
            var hobby = data.E_hobby;
            var region = data.F_region;
            var bank = data.G_bank;
            var nickname = data.H_nickName;
            var device = data.I_device;
            var job = data.J_job;
            var inhabit = data.K_inhabit;
            var pet = data.L_pet;
            var vehicle = data.M_vehicle;
            var couple = data.N_couple;
            var onCheck = data.O_onCheck;
            var daily = data.P_daily;
            var particiService = data.Q_participatingService;
            if (name != undefined) {
                testData.innerHTML += '<tr class="testerList">\n' +
                    '                                   <td style="width:4%;">' + grade + '</td>\n' +
                    '                                  <td style="width:6%;">' + name + '</td>\n' +
                    '                                   <td style="width:7%;">' + age+'/'+sex + '</td>\n' +
                    '                                   <td style="width:8%;">' + hobby + '</td>\n' +
                    '                                   <td style="width:8%;">' + region + '</td>\n' +
                    '                                  <td style="width:6%;">' + nickname + '</td>\n' +
                    '                                   <td style="width:7%;">' + device + '</td>\n' +
                    '                                   <td style="width:7%;">' + job + '</td>\n' +
                    '                                   <td style="width:6%;">' + bank + '</td>\n' +
                    '                                   <td style="width:5%;">' + inhabit + '</td>\n' +
                    '                                  <td style="width:5%;">' + pet + '</td>\n' +
                    '                                   <td style="width:5%;">' + vehicle + '</td>\n' +
                    '                                   <td style="width:5%;">' + couple + '</td>\n' +
                    '                                   <td style="width:12%;">' + daily + '</td>\n' +
                    '                                   <td style="width:7%;">' + particiService + '</td>\n' +
                    '                                   <td style="width:3%;"><input type="checkbox" name="DeleteTester" onclick="setBg(this)"></td>\n' +
                    '                                </tr>';
            }
        });
    }
};

$(document).ready(function(){
    $("#dataDelete").click(function () {
        var checkbox = $("input[name=DeleteCustomer]:checked").val();
        console.log(checkbox);

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
                '                                                                        <button class="btn btn-outline-danger"  id="deleteTester">삭제</button>\n' +
                '                                                                            <button type="button" class="btn btn-default"  data-dismiss="modal">취소</button>\n' +
                '                                                                        </div>\n' +
                '                                                                </div>\n' +
                '                                                       </div>\n'
            $("#deleteTester").click(function(){
                var tdArr = new Array();
                var nickArr = new Array();
                var checkbox = $("input[name=DeleteTester]:checked");

                checkbox.each(function(i){
                    var tr= checkbox.parent().parent().eq(i);
                    var td = tr.children();

                    var tester = td.eq(1).text();
                    tdArr.push(tester);

                    var nickName = td.eq(5).text();
                    nickArr.push(nickName);
                })
                    var database = firebase.database();
                    for (var k = 0; k < nickArr.length; k++) {
                        for (var AgeGroup = 10; AgeGroup <= 60; AgeGroup = AgeGroup + 10) {
                            var tableData = database.ref('tester/' + AgeGroup + '대');
                            tableData.on('child_added', function (snapshot) {
                                var data = snapshot.val();
                                var ageGroup = data.R_AgeGroup;
                                var nickName = data.H_nickName;
                                if (nickArr[k] == nickName) {
                                    var testerData = database.ref('tester/' + ageGroup + '/' + nickArr[k]);
                                    testerData.remove();
                                }
                            })
                        }
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
    table = document.getElementById("myTable");
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