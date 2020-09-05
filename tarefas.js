//1) Criar uma tela -ok

        //2) criar um array para guardar as tarefas
         
        var arrTarefas = []

        //3) criar uma funçao para registrar tarefas 
        
        function registrarTarefas(){
            //ler dados da tela 
            let desc = document.getElementById("desc").value
            //criar tarefa
            let t = {descricao:desc, concluido:false}
            //console.log(t);
            //limpar campo
            document.getElementById("desc").value = ""
            
            //colocar no array
            arrTarefas.push(t)
        }

        //4) criar uma funçao para listar tarefas
        function listarTarefas(){
            let saidaHTML="";

            for(let i=0; i<arrTarefas.length; i++){
               // console.log(arrTarefas[i].descricao);
                saidaHTML = saidaHTML + `<div> ${arrTarefas[i].descricao}</div>`
                
            }
            document.getElementById("saida").innerHTML = saidaHTML
        }
        function limparLista(){
            arrTarefas= []

            document.getElementById("saida").innerHTML=""
        }


