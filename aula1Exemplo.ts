
interface DadosDeEnviarEmail{
  para: string,
  id: string,
  assunto: string,
  texto: string
}

function enviarEmail({ para, id, assunto, texto}: DadosDeEnviarEmail){
  console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario{
  send(){
    enviarEmail({
      para: "iago@lider.com",
      id: "8764",
      assunto: "ola",
      texto: "tudo bem?"});
  }
}

// Aula 1 - #rumoaoproximonivel
// Aula 2 - #jornadainfinita
// Aula 4 - #focopraticagrupo

/*Obs: 
-É preciso mudar o script posttest para cada computador. O que ta la é para onde o projeto foi feito.
  Foi o unico jeito que conseguir de apagar o arquivo via codigo.
  É só mudar o local de onde ta o arquivo, bem simples.
*/
