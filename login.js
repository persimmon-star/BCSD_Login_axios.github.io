axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(function (response) {
         // response  
        const CatImgUrl = response.data[0].url
        document.getElementById('cat').src=CatImgUrl;
      
    }).catch(function (error) {
        // Error발생시 실행
    }).then(function() {
      
    });



function submit_check(){
    let id = document.getElementById("username");
    let pw = document.getElementById("password");
        
    let email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email.test(id.value)) {
        alert("이메일 형식의 아이디를 입력하세요.");
        id.focus();
        return false;
    }else if (pw.value ==""){
        alert("비밀번호를 입력하세요.");
        pw.focus();
        return false;
    } else{
        alert("제출");
        submit();
    }
};
