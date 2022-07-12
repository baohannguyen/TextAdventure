"use strict";
var Login;
(function (Login) {
    document.getElementById("loginButton")?.addEventListener("click", signUp);
    async function signUp() {
        let formData = new FormData(document.forms[0]);
        let login = { username: formData.get("username").toString(), password: formData.get("pw").toString() };
        let query = new URLSearchParams(login);
        let url = "https://adventuretext.herokuapp.com/";
        url = url + "?" + query.toString();
        let answer = await fetch(url);
        console.log(await answer.text());
    }
})(Login || (Login = {}));
//# sourceMappingURL=client.js.map