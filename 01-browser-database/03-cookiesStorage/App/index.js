async function getCookies() {
    const cookieStore = new CookieStore();
    const cookies = await cookieStore.getAll();
    console.log(cookies);
}

getCookies();


async function setCookie(name, value, options = {}) {
    const cookieStore = new CookieStore();
    await cookieStore.set(name, value, options);
}

setCookie("name", "Ande Praveen", { path: '/', expires: 7 });


async function deleteCookie(name) {
    const cookieStore = new CookieStore();
    await cookieStore.delete(name);
}

deleteCookie("name");
