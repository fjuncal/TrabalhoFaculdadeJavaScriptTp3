let criarComponentes2 = function (){
    let $divQ2 = document.querySelector('#q2')
    let $form = document.createElement('form')

    let $formAtributo = document.createAttribute('class')
    $formAtributo.value = 'form-group'
    $form.setAttribute('class', $formAtributo.value)

    let $label = document.createElement('label')


    let $input = document.createElement('input')
    let $inputAtributo = document.createAttribute('class')
    $inputAtributo.value = 'form-control'
    $input.setAttribute('class', $inputAtributo.value)
    let $h5 = document.createElement('h5')

    let $btnFatorial = document.createElement('button')
    let $btnAtributoFatorial = document.createAttribute('class')
    $btnAtributoFatorial.value = 'btn btn-primary'
    $btnFatorial.setAttribute('class', $btnAtributoFatorial.value)


    let $h4 = document.createElement('h4')

    let $linha = document.createElement('hr')

    $h5.innerText = 'Exercicio 2 - Calcular Fatorial'
    $label.innerText = 'Digite um Número: '
    $btnFatorial.innerText = 'Calcular fatorial'

    let $atributoInput = document.createAttribute("type")
    $atributoInput.value = "number"
    $input.setAttributeNode($atributoInput)

    $form.append($label)
    $form.append($input)

    $divQ2.append($h5)
    $divQ2.append($form)
    $divQ2.append($btnFatorial)


    $btnFatorial.addEventListener('click', ev => {
        if ($input.value === ""){
            window.alert('Necessário atribuir um valor')
        } else {
            let inicio = Math.floor(new Date().getTime())
            let resultado = 1
            for (let i = 1; i <= $input.value; i++) {
                resultado *= i
            }
            let fim = Math.floor(new Date().getTime())
            let total = fim - inicio
            $h4.innerText = `O fatorial de ${$input.value}! é igual a: ${resultado} (${total} milisegundos para calcular)`
            $divQ2.append($h4)
            $divQ2.append($linha)
        }
    })

}
window.componentes.push(criarComponentes2)