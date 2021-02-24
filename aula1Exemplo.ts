
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