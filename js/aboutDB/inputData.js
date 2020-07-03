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

  firebase.database().ref('/tester/').set({
        A_grade:'B',
        B_name: '나영석',
        C_age: '1976/03/12',
        D_sex: '남자',
        E_hobby: '게임제작(5)/야외취침(4)',
        F_region: '충청북도 청주',
        G_bank: '기업/11230213123',
        H_nickName: '나노',
        I_device: 'Android/갤럭시S20',
        J_job: 'CJ ENM(프로듀서)',
        K_inhabit: '함',
        L_pet: '없음',
        M_vehicle:'있음',
        N_couple:'결혼',
        O_onCheck:'0',
        P_daily:'아침에 누군가에게 까나리액젓을 먹여요.',
        Q_participatingService:'지오픽'
    });
};
