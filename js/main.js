let elForm = document.querySelector('.form')
let elInp = document.querySelector('.input')
let elList = document.querySelector('.list')
const Data = []
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    elList.innerHTML = ''
    Data.push(elInp.value)
    window.localStorage.setItem('data', JSON.stringify(Data))
    const data = JSON.parse(window.localStorage.getItem('data'))
    mapper(data)
    elInp.value = ''
})
const data = JSON.parse(window.localStorage.getItem('data'))
if (data) {
    mapper(data)
}

function mapper(data) {
    data.forEach((e) => {
        let newLi = document.createElement('li')
        let newText = document.createElement('p')
        let newButton = document.createElement('button')
        newText.textContent = e 
        newButton.id = e
        newButton.textContent = 'Remove'
        newButton.id = e
        newButton.classList = 'remove'
        newLi.appendChild(newText)
        newLi.appendChild(newButton)
        elList.appendChild(newLi)

        newButton.addEventListener('click', (e) => {
            const localData = JSON.parse(window.localStorage.getItem('data'))
            const filData = localData.filter((f) => f != e.target.id)
            elList.innerHTML = ''
            mapper(filData)
            window.localStorage.setItem('data', JSON.stringify(filData)) 
        })
    })
}


