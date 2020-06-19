//파이어 베이스 관련 js입니다
<!-- Page level plugins -->
document.write("<script src=\"vendor/datatables/jquery.dataTables.min.js\"></script>");
document.write("<script src=\"vendor/datatables/dataTables.bootstrap4.min.js\"></script>");
<!-- Page level custom scripts -->
document.write("<script src=\"js/demo/datatables-demo.js\"></script>");

document.write(" <link href=\"vendor/datatables/dataTables.bootstrap4.min.css\" rel=\"stylesheet\">");

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

            document.getElementById('testerTable').innerHTML=' <div class="table-responsive">\n' +
            '                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">\n' +
            '                                <thead>\n' +
            '                                <tr>\n' +
            '                                    <th>TesterID</th>\n' +
            '                                    <th>등급</th>\n' +
            '                                    <th>이름</th>\n' +
            '                                    <th>나이</th>\n' +
            '                                    <th>기기</th>\n' +
            '                                    <th>직업/전공</th>\n' +
            '                                    <th>취미</th>\n' +
            '                                    <th>자취여부</th>\n' +
            '                                    <th>반려견여부</th>\n' +
            '                                    <th>자차보유여부</th>\n' +
            '                                    <th>거주지역</th>\n' +
            '                                    <th>자신의 일상</th>\n' +
            '                                    <th>진행중 테스트</th>\n' +
            '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody id="testData">\n' +
            '                                <tr></tr>\n' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '                        </div>';
    document.getElementById('testerTable').setAttribute('id','dataTable');

    var testData = document.getElementById("testData");

    var database = firebase.database();

    var tableData = database.ref('tester');
    tableData.on('child_added',function(snapshot){
        var data = snapshot.val();
        var grade = data.A_grade;
        var name = data.B_name;//data.text;
        var age = data.C_age;
        var device = data.D_device;
        var job = data.E_job;
        var hobby = data.F_hobby;
        var inhabit = data.G_inhabit;
        var pet = data.H_pet;
        var vehicle = data.I_vehicle;
        var region = data.J_region;
        var daily = data.K_daily;
        var ingTest = data.L_ingTest;
        if(name!=undefined){
            testData.innerHTML +='<tr>\n' +
                '                                    <td></td>\n' +
                '                                   <td>'+grade+'</td>\n' +
                '                                  <td>'+name+'</td>\n' +
                '                                   <td>'+age+'</td>\n' +
                '                                   <td>'+device+'</td>\n' +
                '                                   <td>'+job+'</td>\n' +
                '                                   <td>'+hobby+'</td>\n' +
                '                                  <td>'+inhabit+'</td>\n' +
                '                                   <td>'+pet+'</td>\n' +
                '                                   <td>'+vehicle+'</td>\n' +
                '                                   <td>'+region+'</td>\n' +
                '                                  <td>'+daily+'</td>\n' +
                '                                   <td>'+ingTest+'</td>\n' +
                '                                </tr>' ;
        }
    });
};

