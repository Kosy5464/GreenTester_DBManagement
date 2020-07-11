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

  firebase.database().ref('/tester/20대/수박바').set({
        A_grade:'A',
        B_name: '이수박',
        C_age: '1996/10/19',
        D_sex: '여자',
        E_hobby: '씨뿌리기(5)/빨개지기(4)',
        F_region: '경기도 화성',
        G_bank: '하나/1021231215213',
        H_nickName: '수박바',
        I_device: 'ios/아이폰XS',
        J_job: '싱어송라이터',
        K_inhabit: '함',
        L_pet: '강아지',
        M_vehicle:'있음',
        N_couple:'없음',
        O_onCheck:'0',
        P_daily:'초록색 부분이 맛있죠.',
        Q_participatingService:'',
        R_AgeGroup:'20대'
    });
};
