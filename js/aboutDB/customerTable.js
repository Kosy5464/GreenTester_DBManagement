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
                '                                </tr>' ;
        }
    });
};

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