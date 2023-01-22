const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert ("Dia já incluso 🔴")
    return
  }

  alert ("Dia adicionado com sucesso ✅️")
  nlwSetup.addDay(today)
}


function save() {
  localStorage.setItem('dataSaving', JSON.stringify(nlwSetup.data))
}


//const data = {
//  run: ["01-02", "01-05", "01-06", "01-08"],
//  water: ["01-01", "01-04", "01-05", "01-06"],
//  strong: ["01-03", "01-06", "01-07", "01-09"],
//}

const data = JSON.parse(localStorage.getItem('dataSaving')) || {}
nlwSetup.setData(data)
nlwSetup.load()