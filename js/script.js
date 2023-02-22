const data = []

let allUser = []
let oldSchool = []
let newSchool = []

let form = document.forms.login
let table = document.querySelector('table')

let ageShow = document.querySelector('.ageShow')

let btn = document.querySelector('.show')
let trs = document.querySelector('tr')
let tbody = document.querySelector('tbody')

let container = document.querySelector('.container')
let young = document.querySelector('.young')
let oldes = document.querySelector('.oldes')
let all = document.querySelector('.all')

function nameGenerate(arr) {
    tbody.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr')
        const tdnum = document.createElement('td')
        const tdName = document.createElement('td')
        const tdyear = document.createElement('td')
        const del = document.createElement('td')
        const add = document.createElement('td')

        tdnum.innerText = i + 1
        tdName.innerText = arr[i].name
        tdyear.innerText = arr[i].year

        tr.append(tdnum, tdName, tdyear,)
        tbody.append(tr)
    }
    btn.onclick = (event) => {
        event.preventDefault();
        let nameInp = document.querySelector('#name').value
        let ageInp = document.querySelector('#age').value


        let user = [
            {
                id: 1,
                name: nameInp,
                year: ageInp,
            }
        ]
        user.forEach(i => {
            data.push(i)
            allUser.push(i)

        })
        
        nameGenerate(data.sort((x, y) => x.year - y.year))
    }
    return
}
nameGenerate(data)

ageShow.onclick = (event) => {
    event.preventDefault()
    container.style.display = 'flex'
    reload(allUser)
}
// new Date().getFullYear()

function reload(arr) {
    oldes.innerHTML = ''
    young.innerHTML = ''
    all.innerHTML = ''
    table.innerHTML = ''
    for (let item of arr) {
        let elm = document.createElement('div')
        let elem_row = document.createElement('div')
        let h3 = document.createElement('h3')

        let text_age = document.createElement('p')
        let age_text = document.createElement('p')

        elm.classList.add('elem')
        elem_row.classList.add('elem_row')

        h3.innerText = item.name

        text_age.innerText = 'Age'
        age_text.innerText = item.year

        if (item.year <= 25) {
            elem_row.append(h3, text_age, age_text)
            elm.append(h3, elem_row)
            young.append(elm)
        } else if (item.year > 25 && item.year <= 50) {
            elem_row.append(text_age, age_text)
            elm.append(h3, elem_row)
            oldes.append(elm)
        } else {

            elem_row.append(h3, text_age, age_text)
            elm.append(h3, elem_row)
            all.append(elm)
        }
    }
}