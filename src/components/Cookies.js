const keys = {
    DOMAIN: 'http://localhost:3000',
}

export const getJwtFromCookie = (key) => {
    return  document.cookie!==""?document.cookie.split(";").filter(s => s.includes(key))[0].split("=").pop():null; 
}

export const clearAllCookies=()=>{
    document.cookie=`jwt=;Path=/; Domaine=${keys.DOMAIN};Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export const setJwtInCookie=(jwt)=>{
    document.cookie = "jwt"+"="+jwt+";path=/";
}