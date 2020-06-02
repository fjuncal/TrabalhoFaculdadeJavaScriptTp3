let criarComponentes4 = function (){
    let $divQ4 = document.querySelector('#q4')
    let $form = document.createElement('form')
    let $linha = document.createElement('hr')
    let $h5 = document.createElement('h5')
    let $h4 = document.createElement('h4')

    let $label1 = document.createElement('label')
    let $inputQtdNumeros = document.createElement('input')

    let $label2 = document.createElement('label')
    let $inputValorMinimo = document.createElement('input')

    let $label3 = document.createElement('label')
    let $inputValorMaximo = document.createElement('input')

    let $btnCriar = document.createElement('button')
    let $btnAtributoCriar = document.createAttribute('class')
    $btnAtributoCriar.value = 'btn btn-primary'
    $btnCriar.setAttribute('class', $btnAtributoCriar.value)


    $h5.innerText = 'Exercicio 4 - Criando Array de Números Randômicos'
    $label1.innerText = 'Quantidade de números: '
    $label2.innerText = 'Valor Mínimo: '
    $label3.innerText = 'Valor Máximo: '
    $btnCriar.innerText = 'Criar Array'

    let $atributoInput1 = document.createAttribute("type")
    $atributoInput1.value = "number"
    $inputQtdNumeros.setAttributeNode($atributoInput1)

    let atributoBootStrap = document.createAttribute('class')
    atributoBootStrap.value = 'form-control'
    $inputQtdNumeros.setAttribute('class', atributoBootStrap.value)
    $inputValorMaximo.setAttribute('class',atributoBootStrap.value)
    $inputValorMinimo.setAttribute('class',atributoBootStrap.value)

    let $atributoInput2 = document.createAttribute('type')
    $atributoInput2.value = 'number'
    $inputValorMinimo.setAttributeNode($atributoInput2)

    let $atributoInput3 = document.createAttribute('type')
    $atributoInput3.value = 'number'
    $inputValorMaximo.setAttributeNode($atributoInput3)


    $form.append($label1)
    $form.append($inputQtdNumeros)
    $form.append($label2)
    $form.append($inputValorMinimo)
    $form.append($label3)
    $form.append($inputValorMaximo)

    $divQ4.append($h5)
    $divQ4.append($form)
    $divQ4.append($btnCriar)
        function zerandoComponentes() {
            $inputQtdNumeros.value = ''
            $inputValorMaximo.value = ''
            $inputValorMinimo.value = ''

        }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $btnCriar.addEventListener('click', ev => {
        if ($inputQtdNumeros.value === ""){
            window.alert('Necessário Atribuir um valor para o tamanho do array')
        } else if ($inputValorMinimo.value === ''){
            window.alert('Necessário Atribuir um valor mínimo para gera números randômicos')
        } else if ($inputValorMaximo.value === ''){
            window.alert('Necessário Atribuir um valor máximo para gera números randômicos')
        } else if (parseInt($inputValorMaximo.value) < parseInt($inputValorMinimo.value)){
            window.alert('Valores incompatíveis')

        } else if (parseInt($inputValorMaximo.value) - parseInt($inputValorMinimo.value) < $inputQtdNumeros.value){
            window.alert('Valores incompatíveis')
        } else if (parseInt($inputQtdNumeros.value) <= 0){
            window.alert('ERRO:Quantidade de Números no Array menor ou igual a 0')

        } else {
            let qtdNumerosInput = $inputQtdNumeros.value
            let valorTotal = parseInt($inputValorMaximo.value) + parseInt($inputValorMinimo.value)
            let numeros = []

            if (qtdNumerosInput >= valorTotal) {
                window.alert('Operação inválida, falta de números ou valor minimo maior que o máximo')
            } else {
                while (numeros.length < qtdNumerosInput) {
                    let aleatorio = getRandomIntInclusive($inputValorMinimo.value, $inputValorMaximo.value)
                    if (numeros.includes(aleatorio) === false) {
                        numeros.push(aleatorio)
                    }

                }
                numeros.sort((x, y) => x - y)
                $h4.innerText = numeros
                $divQ4.append($h4)
                $divQ4.append($linha)
                zerandoComponentes()
            }
        }
    })

}
window.componentes.push(criarComponentes4)