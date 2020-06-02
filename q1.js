let criarComponentes1 = function (){
    let $divQ1 = document.querySelector('#q1')
    let $labelValorMinimo = document.createElement('label')
    let $labelValorMaximo = document.createElement('label')
    let $h5 = document.createElement('h5')
    let $h4 = document.createElement('h4')

    let $form = document.createElement('form')

    let $inputValorMinimo = document.createElement('input')
    let $atributoValorMinimo = document.createAttribute('class')
    $atributoValorMinimo.value = 'form-control'
    $inputValorMinimo.setAttribute('class', $atributoValorMinimo.value)


    let $inputValorMaximo = document.createElement('input')
    $inputValorMaximo.setAttribute('class', $atributoValorMinimo.value)


    let $btnCalcular = document.createElement('button')
    let $btnAtributoCalcular = document.createAttribute('class')
    $btnAtributoCalcular.value = 'btn btn-primary'
    $btnCalcular.setAttribute('class', $btnAtributoCalcular.value)

    $h5.innerText = 'Exercicio 1 - Números Múltiplos de 2 e 3'
    $btnCalcular.innerText = 'Calcular'
    $labelValorMinimo.innerText = 'Valor Minimo'
    $labelValorMaximo.innerText = 'Valor Máximo'

    let $atributoInputValorMinimo = document.createAttribute("type")
    $atributoInputValorMinimo.value = "number"
    $inputValorMinimo.setAttributeNode($atributoInputValorMinimo)

    let $atributoInputValorMaximo = document.createAttribute("type")
    $atributoInputValorMaximo.value = "number"
    $inputValorMaximo.setAttributeNode($atributoInputValorMaximo)

    $form.appendChild($labelValorMinimo)
    $form.appendChild($inputValorMinimo)

    $form.appendChild($labelValorMaximo)
    $form.appendChild($inputValorMaximo)

    let $linha = document.createElement('hr')

    $divQ1.append($h5)
    $divQ1.append($form)
    $divQ1.append($btnCalcular)

    $btnCalcular.addEventListener('click', ev =>{
        if ($inputValorMinimo.value === ''){
            window.alert('Porfavor, insira o algum valor no Input de Valor Mínimo')
        } else if ($inputValorMaximo.value === ''){
            window.alert('Porfavor, insira o algum valor no Input de Valor Máximo')
        } else if (parseInt($inputValorMinimo.value) >= parseInt($inputValorMaximo.value)){
            window.alert('ERRO: Valores inseridos estão incorretos')
        } else {
            let cont = 0
            for (let i = parseInt($inputValorMinimo.value); i < parseInt($inputValorMaximo.value); i++) {
                if ((i % 2 === 0) && (i % 3 === 0)) {
                    cont++
                }
            }
            $h4.innerText = `Números múltiplos de 2 e 3 entre ${$inputValorMinimo.value} e ${$inputValorMaximo.value}: ${cont} número(s)`
            $divQ1.append($h4)
            $divQ1.append($linha)

            $inputValorMinimo.value = ''
            $inputValorMaximo.value = ''
        }

    })

}

window.componentes.push(criarComponentes1)