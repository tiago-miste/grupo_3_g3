window.onload = function() {

    let form = document.querySelector('.form-horizontal')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let errores = [];

        let nombre = document.querySelector('#name')
        let descripcion = document.querySelector('#description')
    
        if (nombre.value.length < 2){
            errores.push('El nombre debe tener 2 o mas caracteres')
            nombre.classList.add('is-invalid')
        }else{
            nombre.classList.remove('is-invalid')
        }

        if (descripcion.value.length < 20){
            errores.push('La descripcion debe tener 20 o mas caracteres')
            descripcion.classList.add('is-invalid')
        }else{
            descripcion.classList.remove('is-invalid')
        }

        if (errores.length > 0){
            let ulErrores = document.querySelector('.errores')
            ulErrores.classList.add("alert-warning")
            ulErrores.innerHTML = ""
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `<li> ${errores[i]} </li>`
            }
        }
        else {
            form.submit()
        }

    })
}