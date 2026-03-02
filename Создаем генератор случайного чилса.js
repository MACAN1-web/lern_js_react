/*
Создаем генератор случайного пароля  
*/
function generatePassword (p){
    const pass =
    "qazxswcedvrHBUVYKMOLT648329#%*(*!@#())"
    let password ='';

    for (let i = 0; i<p ;i++){
        const paas = Math.floor(Math.random() * pass.length);
        password += pass[paas];
    }
    return password;
}
const randomPassword = generatePassword(90);
console.log(randomPassword)
