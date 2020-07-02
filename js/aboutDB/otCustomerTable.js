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
        var testCheck = data.L_onCheck;
        if(AppWeb!=undefined&&testCheck==1){
            customerData.innerHTML +='<tr>\n' +
                '                                    <td>'+AppWeb+'</td>\n' +
                '                                   <td>'+clientName+'</td>\n' +
                '                                  <td>'+device+'</td>\n' +
                '                                   <td>'+age+'</td>\n' +
                '                                   <td>'+testDetails+'</td>\n' +
                '                                   <td>'+clientEmail+'</td>\n' +
                '                                   <td>'+clientTel+'</td>\n' +
                '                                </tr>' ;
        }
    });
};

