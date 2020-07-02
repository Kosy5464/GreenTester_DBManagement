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
/**/
    var tableData = database.ref('10대');
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
                '                                    <td>'+ +'</td>\n' +
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

