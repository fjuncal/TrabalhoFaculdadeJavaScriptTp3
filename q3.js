let criarComponentes3 = function (){

    class Aluno {
        constructor(nr,nota, situacao) {
            this._nr = nr;
            this._nota = nota;
            this._situacao = situacao;
        }

        getsituacao() {
            return this._situacao;
        }

        setsituacao(value) {
            this._situacao = value;
        }

        getnr() {
            return this._nr;
        }

        setnr(value) {
            this._nr = value;
        }

        getnota() {
            return this._nota;
        }

        setnota(value) {
            this._nota = value;
        }
    }
    let $tabela = document.createElement('table')
    let tableaAtributo= document.createAttribute('class')
    tableaAtributo.value = 'table table-striped'
    $tabela.setAttribute('class', tableaAtributo.value)

    let $cabecalho = document.createElement('thead')
    let cabecalhoAtributo = document.createAttribute('class')
    cabecalhoAtributo.value = 'thead-dark'
    $cabecalho.setAttribute('class', cabecalhoAtributo.value)



    let $corpo = document.createElement('tbody')

    let $btnLimparTabela = document.createElement('button')
    let $btnAtributoLimpar = document.createAttribute('class')
    $btnAtributoLimpar.value = 'btn btn-primary'
    $btnLimparTabela.setAttribute('class', $btnAtributoLimpar.value)

    let $btn = document.createElement('button')
    let btnAtributo = document.createAttribute('class')
    btnAtributo.value = 'btn btn-primary'
    $btn.setAttribute('class', btnAtributo.value)


    let $divQ3 = document.querySelector('#q3')
    let $divQ4 = document.querySelector('#q4')
    let $divTabela = document.createElement('div')
    let $h5 = document.createElement('h5')
    let $h1 = document.createElement('h1')

    let $th1 = document.createElement('th')
    let $th2 = document.createElement('th')
    let $th3 = document.createElement('th')


    let $tr = document.createElement('tr')
    let $col = document.createAttribute('scope')
    $col.value = 'col'

    $th1.setAttribute('scope', $col.value)
    $th2.setAttribute('scope', $col.value)
    $th3.setAttribute('scope', $col.value)

    $btnLimparTabela.innerText = 'Remover Tabela'
    $btn.innerText = 'Criar Relatório'
    $h5.innerText = 'Exercicio 3 - Notas dos Alunos'




    $cabecalho.append($tr)
    $th1.innerText = 'ALUNO'
    $tr.append($th1)




    $th2.innerText = 'NOTA'
    $tr.append($th2)



    $th3.innerText = 'SITUACAO'
    $tr.append($th3)

    $tr.append($th1)
    $tr.append($th2)
    $tr.append($th3)





    $divQ3.append($h5)
    $divQ3.append($btn)
    $divQ3.append($btnLimparTabela)
   document.body.insertBefore($divTabela, $divQ4)
    $divTabela.append($tabela)

    $btnLimparTabela.addEventListener('click', ev => {
        $divTabela.removeChild($tabela)
        $divTabela.removeChild($h1)
    })


    $btn.addEventListener('click', ev => {
        $divTabela.append($tabela)
        $tabela.append($cabecalho)
        $tabela.append($corpo)
        let qtd_alunos = 20
        let aprovados = 0
        let alunos = []
        for(let i = 1; i <= qtd_alunos; i++){
            let aleatoria =  Math.floor(Math.random() * 100)
            let situacao
            if(aleatoria < 60){
                situacao = 'reprovado'
            } else {
                situacao = 'aprovado'
                aprovados++
            }
            let aluno = new Aluno(i, aleatoria,situacao)
            alunos.push(aluno)
            let $linhaTabela = document.createElement('tr')
            let $td1 = document.createElement('td')
            $td1.innerText = aluno.getnr()

            let $td2 = document.createElement('td')
            $td2.innerText = aluno.getnota()

            let $td3 = document.createElement('td')
            $td3.innerText = aluno.getsituacao()

            $corpo.append($linhaTabela)
            $linhaTabela.append($td1)
            $linhaTabela.append($td2)
            $linhaTabela.append($td3)
            $divTabela.append($h1)


        }
        let reprovados = qtd_alunos - aprovados
        let p_aprovado = (aprovados / qtd_alunos) * 100
        let p_reprovado = (reprovados / qtd_alunos) * 100

        $h1.innerText = `Alunos: APROVADOS: ${aprovados} (${p_aprovado.toFixed()}%) | REPROVADOS: ${reprovados} (${p_reprovado.toFixed()}%)`
    })

}
window.componentes.push(criarComponentes3)