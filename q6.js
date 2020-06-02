let criarComponentes6 = function (){
    let $divQ6 = document.querySelector('#q6')
    let $divLogado = document.createElement('div')
    let $h5 = document.createElement('h5')
    let $h4UsuarioLogado = document.createElement('h4')

    let $labelEmail = document.createElement('label')
    let $inputEmail = document.createElement('input')

    let $labelSenha = document.createElement('label')
    let $inputSenha = document.createElement('input')

    let $form = document.createElement('form')

    let $btnEntrar = document.createElement('button')
    let $btnAtributoEntrar = document.createAttribute('class')
    $btnAtributoEntrar.value = 'btn btn-primary'
    $btnEntrar.setAttribute('class', $btnAtributoEntrar.value)


    let $btnCadastrar = document.createElement('button')
    $btnCadastrar.setAttribute('class', $btnAtributoEntrar.value)


    let $btnDeslogar = document.createElement('button')
    $btnDeslogar.setAttribute('class', $btnAtributoEntrar.value)

    let atributoBootsrap = document.createAttribute('class')
    atributoBootsrap.value = 'form-control'
    $inputEmail.setAttribute('class',atributoBootsrap.value)
    $inputSenha.setAttribute('class',atributoBootsrap.value)


    let $atributoInputEmail = document.createAttribute("type")
    $atributoInputEmail.value = 'email'
    $inputEmail.setAttributeNode($atributoInputEmail)

    let $atributoInputSenha = document.createAttribute('type')
    $atributoInputSenha.value = 'password'
    $inputSenha.setAttributeNode($atributoInputSenha)

    $h5.innerText = 'Exercicio 6 - Autenticação do Usuário'
    $labelEmail.innerText = 'E-mail: '
    $labelSenha.innerText = 'Senha: '
    $btnEntrar.innerText = 'Entrar'
    $btnDeslogar.innerText = 'Sair'
    $btnCadastrar.innerText = 'Cadastrar'

    $form.append($labelEmail)
    $form.append($inputEmail)
    $form.append($labelSenha)
    $form.append($inputSenha)

    $divQ6.append($h5)
    $divQ6.append($form)
    $divQ6.append($btnEntrar)
    $divQ6.append($btnCadastrar)

    let user = {
        email: '', senha: ''
    }

    if (localStorage.getItem(user.email)){
        user = JSON.parse(localStorage.getItem(user.email))
    }
    

    $btnCadastrar.addEventListener('click', ev => {
        ev.preventDefault()
        if ($inputEmail.value === "" || $inputSenha.value === ""){
            window.alert('ERRO: Necessário preencher todos os campos')
        } else {
            user.email = $inputEmail.value
            user.senha = $inputSenha.value
            localStorage.setItem(user.email, JSON.stringify(user))

            window.alert('Parabéns, usuário cadastrado com sucesso!!')


            $inputEmail.value = ''
            $inputSenha.value = ''
        }
    })

    $btnEntrar.addEventListener('click', ev => {

        let usuarioLocal = JSON.parse(localStorage.getItem($inputEmail.value))


        if (usuarioLocal && $inputSenha.value === usuarioLocal.senha){
            $h4UsuarioLogado.innerText = `Parabéns, ${$inputEmail.value}. Você está autenticado!`

            $divQ6.removeChild($form)
            $divQ6.removeChild($btnEntrar)
            $divQ6.removeChild($btnCadastrar)

            document.body.appendChild($divLogado)
            $divLogado.append($h4UsuarioLogado)
            $divLogado.append($btnDeslogar)

    } else {
            window.alert('Usuário não está autenticado\n' +
                'Email ou senha Incorreta')
        }

        $inputEmail.value = ''
        $inputSenha.value = ''
    })
    $btnDeslogar.addEventListener('click', ev => {
        $divLogado.removeChild($h4UsuarioLogado)
        $divLogado.removeChild($btnDeslogar)

        $divQ6.appendChild($form)
        $divQ6.appendChild($btnEntrar)
        $divQ6.appendChild($btnCadastrar)

    })


}
window.componentes.push(criarComponentes6)