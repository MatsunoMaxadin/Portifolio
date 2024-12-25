
let title = [
"TicTacToe", 
"WikiLock", 
"Repositorios",
"Async",
"darkMode",
"Fibonacci",
"Senha",
"SiteColegio",
"Mapex",
"Wiki-Multiverso-1.0",];
let i = 0;
let a = document.getElementById("link");
let frame = document.getElementById("frame");

let name = document.getElementById("name");

    a.setAttribute("href",`https://matsunomaxadin.github.io/${title[i]}/`);
    frame.setAttribute("src", `https://matsunomaxadin.github.io/${title[i]}/`);
    name.innerHTML = title[i];


function changeItem (symbol) {
    
    if (symbol ==='+' && i !== title.length - 1){
        
        i++;
    } else if (symbol === '-' && i!== 0) {
        i--;
    }
        
        
    
    
    a.setAttribute("href",`https://matsunomaxadin.github.io/${title[i]}/`);
    frame.setAttribute("src", `https://matsunomaxadin.github.io/${title[i]}/`);
    name.innerHTML = title[i];
    
    
    
    
}

