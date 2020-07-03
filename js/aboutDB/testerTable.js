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



    var testData = document.getElementById("testData");

    var database = firebase.database();

    for(var AgeGroup=10;AgeGroup<=60;AgeGroup=AgeGroup+10) {
        var tableData = database.ref('tester/' + AgeGroup + '대');
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
                testData.innerHTML += '<tr>\n' +
                    '                                   <td>' + grade + '</td>\n' +
                    '                                  <td>' + name + '</td>\n' +
                    '                                   <td>' + age+'/'+sex + '</td>\n' +
                    '                                   <td>' + hobby + '</td>\n' +
                    '                                   <td>' + region + '</td>\n' +
                    '                                   <td>' + bank + '</td>\n' +
                    '                                  <td>' + nickname + '</td>\n' +
                    '                                   <td>' + device + '</td>\n' +
                    '                                   <td>' + job + '</td>\n' +
                    '                                   <td>' + inhabit + '</td>\n' +
                    '                                  <td>' + pet + '</td>\n' +
                    '                                   <td>' + vehicle + '</td>\n' +
                    '                                   <td>' + couple + '</td>\n' +
                    '                                   <td>' + daily + '</td>\n' +
                    '                                   <td>' + particiService + '</td>\n' +
                    '                                </tr>';
            }
        });
    }
};


