// 예제 데이터 집어넣는 부분

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

    firebase.database().ref('/Customer/1').set({
        A_:'C',
        B_name: '포텥오칩',
        C_age: '나이',
        D_device: '기기기기기기기',
        E_job: '직업직업직업',
        F_hobby: '취미취미취미',
        G_inhabit: 'O',
        H_pet: 'O',
        I_vehicle: 'O',
        J_region: '경기도 용인시',
        K_daily: '일상입니다만',
        L_ingTest: ''
    });
};
