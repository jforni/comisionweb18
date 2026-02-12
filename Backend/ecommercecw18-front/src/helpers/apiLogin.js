const url = "http://localhost:3000/api/auth/login";

export const authLogin = async (datos) => {
    try {
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })

        const data = await resp.json()

        return data;
        
    } catch (error) {
        console.error(error);
        return {msg: "No se conectó con el backend!"}
    }
}