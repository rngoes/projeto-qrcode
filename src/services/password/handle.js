import permittedCharacters from "./utils/permitted-characters.js1";

async function handle() {
    let characters= [];
    let password = "";

    const passwordLenghth = process.env.PASSWORD_LENGTH;

    characters = await permittedCharactersters();
    
    for (let i = 0; i < passwordLenghth; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;