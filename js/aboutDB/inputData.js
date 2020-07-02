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

  /* firebase.database().ref('/tester/60대/1').set({
        A_grade:'B',
        B_name: '이외수',
        C_age: '70세',
        D_device: '아이스크림2',
        E_job: '시인',
        F_hobby: '독서(5)/글쓰기(4)',
        G_inhabit: 'O',
        H_pet: '고양이',
        I_vehicle: 'O',
        J_region: '경상남도 부산',
        K_daily: '아침에 일어나 독서를 하고 점심때 산책을 하며 저녁때 글을 씁니다.',
        L_ingTest: ''
    });*/
};
