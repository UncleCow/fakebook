const checkLogin = () => {
    const loginId = document.cookie;
    const arrayCookieNotHandle = loginId.split("; ");
    const arrayCookie = [];
    let id = undefined;
    arrayCookieNotHandle.forEach((e)=>{
        let objectmang = e.split("=");
        let name = objectmang[0];
        let value = objectmang[1];
        if(name === "id"){
            id = value;
        }
    })
    return id;
}

export default checkLogin;