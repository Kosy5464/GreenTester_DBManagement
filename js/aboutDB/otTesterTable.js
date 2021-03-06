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



    var testerData = document.getElementById("testerData");
    var testerData2 = document.getElementById("testerData2");

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
            if (name != undefined&&onCheck==1) {
                testerData.innerHTML += '<tr class="testerList">\n' +
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
                    '                                   <td style="width:1%;"><input type="checkbox" name="TesterN" onclick="setBg(this)"></td>\n' +
                    '                                </tr>';
            }
            if (name != undefined&&onCheck==0) {
                testerData2.innerHTML += '<tr class="testerList2">\n' +
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
                    '                                   <td style="width:1%;"><input type="checkbox" name="TesterN2" onclick="setBg(this)"></td>\n' +
                    '                                </tr>';
            }
        });
    }
};

$(document).ready(function(){
    $("#Tester").click(function(){
        var rowData = new Array();
        var tdArr = new Array();
        var nickArr = new Array();

        var checkbox = $("input[name=TesterN]:checked");

        checkbox.each(function(i){
            var tr= checkbox.parent().parent().eq(i);
            var td = tr.children();

            rowData.push(tr.text());

            var tester = td.eq(1).text();
            tdArr.push(tester);

            var nickName = td.eq(5).text();
            nickArr.push(nickName);
        })

        $("#resultTester").val(tdArr);
        $("#changeTester").click(function() {
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
                            testerData.update({
                                O_onCheck: 0
                            })
                        }
                    })
                }
            }
        })
    })
    $("#Tester2").click(function(){
        var rowData = new Array();
        var tdArr = new Array();
        var nickArr = new Array();

        var checkbox = $("input[name=TesterN2]:checked");

        checkbox.each(function(i){
            var tr= checkbox.parent().parent().eq(i);
            var td = tr.children();

            rowData.push(tr.text());

            var tester = td.eq(1).text();
            tdArr.push(tester);

            var nickName = td.eq(5).text();
            nickArr.push(nickName);
        })

        $("#resultTester2").val(tdArr);
        $("#changeTester2").click(function() {
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
                            testerData.update({
                                O_onCheck: 1
                            })
                        }
                    })
                }
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
    table = document.getElementById("testerData");
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
    table = document.getElementById("testerData2");
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
    $("input[name=TesterN]").prop("checked",false);
    $(".testerList:odd").css("background-color","white");
    $(".testerList:even").css("background-color","#eeeeee");

   window.location.reload();
}
function setCheckBox2(){
    $("input[name=TesterN2]").prop("checked",false);
    $(".testerList2:odd").css("background-color","white");
    $(".testerList2:even").css("background-color","#eeeeee");

    window.location.reload();
}