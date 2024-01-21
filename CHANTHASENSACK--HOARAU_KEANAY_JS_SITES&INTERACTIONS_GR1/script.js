
let form=document.querySelector('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    let errorContainer = document.querySelector('.message-error')
    let errorlist = document.querySelector('.message-error ul')
    errorlist.innerHTML=''
    errorContainer.classList.remove('visible')


    let email=document.querySelector('#email')
    if(email.value==''){
        errorContainer.classList.add('visible')
        email.classList.remove('success')
        let err=document.createElement('li')
        err.innerText='le champ email ne peut être vide'
        errorlist.appendChild(err)
    } else {
        email.classList.add('success')
    }


    let pseudo=document.querySelector('#pseudo')
    if(pseudo.value.length<6){
        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')
        let err=document.createElement('li')
        err.innerText='le champ pseudo doit contenir au moins 6 caractères'
        errorlist.appendChild(err)
    } else {
        pseudo.classList.add('success')
    }


    let password=document.querySelector('#password')
    let passCheck= new RegExp(
        "^(?=.*[A-Z])(?=.*[-+_!@#$^&*.,?]).+$"
    )
    console.log(password.value)
    if(password.value<10|| passCheck.test(password.value)==false){
        console.log("ok")
        errorContainer.classList.add('visible')
        password.classList.remove('success')
        let err=document.createElement('li')
        err.innerText='le mot de passe doit faire 10 caractères minimum, contenir minuscules, majuscules, chiffre, caractère spécial'
        errorlist.appendChild(err)
    } else {
        console.log("pass ok")
        password.classList.add('success')
    }


    let passwordRepeat=document.querySelector('#password2')
    console.log(password.value==passwordRepeat.value)
    console.log(password.classList.contains("success"))
    if(password.value==passwordRepeat.value&&password.classList.contains("success")){
        passwordRepeat.classList.add('success')
    } else {
        errorContainer.classList.add('visible')
        password.classList.remove('success')
        let err=document.createElement('li')
        err.innerText='Les mots de passes sont différents'
        errorlist.appendChild(err)
    }



let successContainer=document.querySelector('.message-success')
successContainer.classList.remove('visible')

if(
    pseudo.classList.contains('success')&&
    email.classList.contains('success')&&
    password.classList.contains('success')&&
    passwordRepeat.classList.contains('success')
){
    successContainer.classList.add('visible)')
}
})
//*mdp test: OkeOkeOke?2//*
