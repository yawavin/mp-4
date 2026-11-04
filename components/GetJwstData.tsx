'use server';

export async function GetJwstData() {
    const res = await fetch('https://api.jwstapi.com/all/type/jpg?page=1&perPage=50', {
        headers: {'X-API-KEY': process.env.API_KEY!}, });
    const json = await res.json();

    const data = json.body;
    return data;
}
