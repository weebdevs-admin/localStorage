let elInput = document.querySelector('input')
let elBtn = document.querySelector('.add')
let elClear = document.querySelector('.clear')
let elTitle = document.querySelector('h1')
let elList = document.querySelector('.list')





let data = []

elBtn.addEventListener('click', (e) => {
    let getData = window.localStorage.getItem('add')
    
    
    
    
    e.preventDefault()
    const input = elInput.value
    data.push(input)
    const local = localStorage.setItem('add', JSON.stringify(data))
    
    console.log(data);
    i.textContent = "Qo'shildi: "+data
    
    
    
})

elClear.addEventListener('click', function (e) {
    e.preventDefault()
    window.localStorage.clear()
    i.textContent = "Tozalandi"
    
})
let i = document.createElement('li')
elList.appendChild(i)



i.classList.add('newli')