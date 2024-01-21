let people=document.querySelectorAll('.tab')
let content=document.querySelectorAll('.content')


people.forEach(element => {
  element.addEventListener('click', ()=> {
    people.forEach(ele => {
      ele.classList.remove('tab-active')
    });
    content.forEach(e => {
      e.classList.remove('active')
    })
    element.classList.add('tab-active')
    console.log(element)
    if (element.classList.contains('tabBeatrice')) {
      document.querySelector(".beatrice").classList.add('active')
    }
    if (element.classList.contains('tabJean')) {
      document.querySelector(".jean").classList.add('active')
    }
    if (element.classList.contains('tabLaeticia')) {
      document.querySelector(".laeticia").classList.add('active')
    }

  })

})