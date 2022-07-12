namespace Login {
    interface Data {
        username: string;
        password: string;
    }

    document.getElementById("loginButton")?.addEventListener("click", signUp);

    async function signUp(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let login: Data = { username: formData.get("username").toString(), password: formData.get("pw").toString() };
        let query: URLSearchParams = new URLSearchParams(<any>login);
        let url: string = "https://adventuretext.herokuapp.com/";
        url = url + "?" + query.toString();
        let answer: Response = await fetch(url);
        console.log(await answer.text());
        
    }
}