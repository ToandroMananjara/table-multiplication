let container = document.createElement('div')
let body = document.querySelector('body')
container.classList.add('container')
body.appendChild(container)

for (let i = 1 ; i<=10; i++){
    let div = document.createElement('div')
    div.classList.add('table')
    
    let h2 = document.createElement('h2')
    div.appendChild(h2)
    container.appendChild(div)
    for (let j = 0 ; j<=10 ; j++){
        h2.innerHTML = 'Table '+ i

        div.innerHTML += i+'*'+ j +' = ' + i*j + '</br>' 
    }
}