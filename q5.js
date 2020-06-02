let criarComponentes5 = function (){
    let $divQ5 = document.querySelector('#q5')
    let $linha = document.createElement('hr')

    let $btnCalcularArea = document.createElement('button')
    let $btnAtributoArea = document.createAttribute('class')
    $btnAtributoArea.value = 'btn btn-primary'
    $btnCalcularArea.setAttribute('class', $btnAtributoArea.value)



    let $h5 = document.createElement("h5")
    let $h4 = document.createElement('h4')

    let $labelA = document.createElement('label')
    let $inputA = document.createElement('input')

    let $labelB = document.createElement('label')
    let $inputB = document.createElement('input')

    let $labelC = document.createElement('label')
    let $inputC = document.createElement('input')

    let $form = document.createElement('form')

    let atributoBootstrap = document.createAttribute('class')
    atributoBootstrap.value = 'form-control'
    $inputA.setAttribute('class',atributoBootstrap.value)
    $inputB.setAttribute('class',atributoBootstrap.value)
    $inputC.setAttribute('class',atributoBootstrap.value)

    $labelA.innerText = 'Lado A: '
    $labelB.innerText = 'Lado B: '
    $labelC.innerText = 'Lado C: '
    $h5.innerText = 'Exercicio 5 - Calcular Tipo de Quadrado'
    $btnCalcularArea.innerText = 'Calcular área'

    let $atributoInputA = document.createAttribute("type")
    $atributoInputA.value = "number"
    $inputA.setAttributeNode($atributoInputA)

    let $atributoInputB = document.createAttribute("type")
    $atributoInputB.value = "number"
    $inputB.setAttributeNode($atributoInputB)

    let $atributoInputC = document.createAttribute("type")
    $atributoInputC.value = "number"
    $inputC.setAttributeNode($atributoInputC)

    $form.append($labelA)
    $form.append($inputA)
    $form.append($labelB)
    $form.append($inputB)
    $form.append($labelC)
    $form.append($inputC)

    $divQ5.append($h5)
    $divQ5.append($form)
    $divQ5.append($btnCalcularArea)




    function tipoTriangulo(a, b, c) {
        if(a === b && b === c){
            return $h4.innerText = 'Triângulo classificado como: Equilátero'
        }
        if(a !== b && b !== c && c !== a){
            return $h4.innerText = 'Triângulo classificado como: Escaleno'
        }
        return $h4.innerText = 'Triângulo classificado como: Isósceles'
    }

    $btnCalcularArea.addEventListener('click', ev => {
        if ($inputA.value === "" ){
            window.alert('Necessário preencher o Lado A!')
        }else if($inputB.value === ""){
            window.alert('Necessário preencher o Lado B!')
        } else if ($inputC.value === ""){
            window.alert('Necessário preencher o Lado C!')
        } else {
            tipoTriangulo($inputA.value, $inputB.value, $inputC.value)

            $divQ5.append($h4)
            $divQ5.append($linha)

            $inputA.value = ''
            $inputB.value = ''
            $inputC.value = ''
        }
    })
}
window.componentes.push(criarComponentes5)