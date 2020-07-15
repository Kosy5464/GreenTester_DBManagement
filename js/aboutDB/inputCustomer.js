//파이어 베이스 관련 js입니다
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
                    '                                   <td style="width:3%;"><input type="checkbox" name="TesterNum" onclick="setBg(this)"></td>\n' +
                    '                                </tr>';
            }
        });
    }
};

$(document).ready(function(){
    //test지의 필수 입력값을 검사하는 부분
    $('button#testpage').click(function(){
        var client = $('input#client').val();
        var inputAW = $('input#inputAW').val();
        var inputService = $('textarea#inputService').val();
        var testDetails = $('textarea#testDetails').val();

        if(!client||!inputAW||!inputService||!testDetails) {
            alert("필수 입력 값을 확인해주세요.")
            location.href = '#test1'
        }
        else{ location.href = '#about'}
    })
    //tester 입력 확인 부분
    $('button#tester').click(function(){
        var tester = $('input#resultTester').val();
        if(!tester){
            alert('선택한 테스터 ID를 확인 해주세요.');
        }
        else{ location.href = '#about2'}
    })
    $('button#dataSubmit').click(function(){

        //event.preventDefault();
        //test지 Input값 받아오는 부분
        var client = $('input#client').val();
        var inputAW = $('input#inputAW').val();
        var inputService = $('textarea#inputService').val();
        var age = $('input:checkbox[name="Age"]:checked');
        var ageArr = new Array();
        age.each(function(i){
            ageArr.push(age.eq(i).val());
        })
        var device = $('input:checkbox[name="device"]:checked');
        var deviceArr = new Array();
        device.each(function (i) {
            deviceArr.push(device.eq(i).val());
        })
        var testDetails = $('textarea#testDetails').val();

        //testerID 값 받아오는 부분
        var tester = $("input#resultTester").val();

        //test지 밑 부분 값
        var checklist = $('input:text[name="check"]');
        var checkArr = new Array();
        checklist.each(function(i){
            checkArr.push(checklist.eq(i).val());
        })
        var question = $('input:text[name="question"]');
        var quesArr = new Array();
        question.each(function(i){
            if(question.eq(i).val()=="")
                quesArr.push(question.eq(i).attr('placeholder').substring(4,question.eq(i).attr('placeholder').length));
            else{
                quesArr.push(question.eq(i).val());
            }
        })

        //Email, phonenumber 값 가져오는 부분
        var clEmail = $('input#InputEmail').val();
        var clPhoneNum = $('input#InputPhone').val();

        //이메일, 연락처 빈 값 검사 부분
        if(!clEmail||!clPhoneNum){
            event.preventDefault();

            document.getElementById("modal").innerHTML ='<div class="modal-dialog" role="document">\n' +
                '                            <div class="modal-content">\n' +
                '                                <div class="modal-body">\n' +
                '                                   <h3>필수 입력값을 확인해주세요.</h3>\n' +
                '                                </div>\n' +
                '                                <div class="modal-footer">\n' +
                '                                    <button type="button" class="btn btn-default"  data-dismiss="modal">확인</button>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>';
            //event.preventDefault();

        }
        else {
            event.preventDefault();
            document.getElementById("modal").innerHTML = ' <div class="modal-dialog modal-lg" role="document">\n' +
                '                            <div class="modal-content">\n' +
                '                                <div class="modal-header">\n' +
                '                                    <h5 class="modal-title" id="exampleModalLabel">입력 내용 확인</h5>\n' +
                '                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                                        <span aria-hidden="true">&times;</span>\n' +
                '                                    </button>\n' +
                '                                </div>\n' +
                '                                <div class="modal-body" id="modalContent">\n' +
                '                                    ...\n' +
                '                                </div>\n' +
                '                                <div class="modal-footer">\n' +
                '                                    <button type="button" class="btn btn-primary"  id="finalSubmit" onclick="location.href=\'CustomerPage.html\'">확인</button>\n' +
                '                                    <button type="button" class="btn btn-default"  data-dismiss="modal">취소</button>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>';
            document.getElementById("modalContent").innerHTML = '<br><br><b>의뢰인</b> : ' + client + '<br>' + '<b>App/Web 명</b> : ' + inputAW + '<br>' +
                '<b>대상연령</b> : ' + ageArr + '<br>' + '<b>사용기기</b> : ' + deviceArr + '<br><br>-------<br><br>' + '<h3>서비스 요약</h3> : ' + inputService + '<br><br>' + '<h3>테스트 요청사항</h3>' + testDetails + '<br><br>' + '<h3>체크 사항</h3>' + checkArr +
                '<br><br>' + '<h3>질문 리스트</h3>' + 'Q1.' + quesArr[0] + '<br>Q2.' + quesArr[1] + '<br>Q3.' + quesArr[2] + '<br>Q4.' + quesArr[3] + '<br>Q5.' + quesArr[4] + '<br><br><br>-------<br><br><b>Tester ID</b> :' + tester + '<br><br>-------<br><br>' + '<b>E-mail</b> : ' + clEmail + '<br>' + '<b>연락처</b> : ' + clPhoneNum + '<br><br>';
        }
        //파이어베이스에 값 넣기
        $('button#finalSubmit').click(function(){
            firebase.database().ref('/customer/'+inputAW).set({
                A_clientName:client,
                B_AppWeb: inputAW,
                C_service: inputService,
                D_age:ageArr,
                E_device:deviceArr,
                F_testDetails:testDetails,
                G_checklist: checkArr,
                H_question:quesArr,
                I_testerID:tester,
                J_clientEmail: clEmail,
                K_clientTel: clPhoneNum,
                L_onCheck:0
            });
            alert('제출이 완료되었습니다.')
        })
    })

})
//체크박스에 따라서 나오는 값
$(document).ready(function(){
    $("#test").click(function(){

        var rowData = new Array();
        var tdArr = new Array();
        var checkbox = $("input[name=TesterNum]:checked");

        // 체크된 체크박스 값을 가져온다
        checkbox.each(function(i) {

            // checkbox.parent() : checkbox의 부모는 <td>이다.
            // checkbox.parent().parent() : <td>의 부모이므로 <tr>이다.
            var tr = checkbox.parent().parent().eq(i);
            var td = tr.children();

            // 체크된 row의 모든 값을 배열에 담는다.
            rowData.push(tr.text());

            // 0번이 번호 이므로 번호를 가져옴
            var number = td.eq(0).text()+" "

            // 가져온 값을 배열에 담는다.
            tdArr.push(number);

        });
        $("#resultTester").val(tdArr);
    });
});
//검색하여 나오는 함수, 현재 Name에 맞춰져 있음.
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
        //선택된 라디오 버튼에 맞는 검색값 출력
        if(radiogaga[0].selected){
            //전체 카테고리
            td = tr[i];
        }
        else
        { //테이블 헤더 카테고리
            for (var j = 1; j < radiogaga.length; j++) {
                if (radiogaga[j].selected) {
                    //console.log(radiogaga[j].selected);
                    td = tr[i].getElementsByTagName("td")[j];

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

//체크박스 선택시 해당 행 배경색 변경
function setBg(t){
    tr = t.parentNode.parentNode;
    tr.style.backgroundColor=(t.checked)? "#d4edda":"";
}

//Tester Reset 부분(체크 취소, 색상 원상태, TesterID 보여준 값 지우기)
function setCheckBox() {
    $("input[name=TesterNum]").prop("checked", false);
    $(".testerList:odd").css("background-color", "white");
    $(".testerList:even").css("background-color", "#eeeeee");

    //reset버튼 누른 후 hover 이벤트 처리 __ 이걸하면 check시 색변하는게 안됨.
    // $(".testerList").hover(function () {
    //   $(this).css("background-color","#d4edda");
    //},function(){
    //  $(".testerList:odd").css("background-color","white");
    //$(".testerList:even").css("background-color","#eeeeee");
    //})

    $("#resultTester").val(null);
}