const buttons = document.querySelectorAll('button');
const screen = document.querySelector('#screen')

for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        const txt = e.target.innerText;
        if (screen.value === 'Invalid Operation')
            screen.value ="";
        if (txt === 'C') {
            screen.value = "";
        }
        else if(txt === 'X') {
            screen.value += '*';
        }
        else if (txt === '=') {
            try{
                screen.value = eval(screen.value);
            }
            catch {
                screen.value = 'Invalid Operation'
            }
        }
        else {
            screen.value += txt;
        }
    })
}