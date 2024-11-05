class Cadastro {
  constructor(nome, idade, genero, CPF, email, senha) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.CPF = CPF;
    this.email = email;
    this.senha = senha;
  }
}

let historicoCadastrados = {
  cadastrados: [],
};

const title2 = document.getElementById("title2");
title2.style.display = "none";

document
  .getElementById("btnCadastrar")
  .addEventListener("click", function (para) {
    para.preventDefault();

    const nome = document.getElementById("Nome").value;
    const idade = document.getElementById("Idade").value;
    const genero = document.getElementById("Sexo").value;
    const CPF = document.getElementById("CPF").value;
    const email = document.getElementById("Email").value;
    const senha = document.getElementById("Senha").value;

    let pessoa = new Cadastro(nome, idade, genero, CPF, email, senha);

    historicoCadastrados.cadastrados.push(pessoa);

    mostraTela();
  });

function mostraTela() {
  const sessao = document.getElementById("sessao-divs");
  sessao.innerHTML = "";

  historicoCadastrados.cadastrados.forEach((pessoa, contar) => {
    const registrador = document.createElement("div");
    const apagar = document.createElement("button");
    const editar = document.createElement("button");

    editar.className = "editar";
    registrador.className = "registrador";
    apagar.className = "button-apagar";

    registrador.innerHTML = `
            <h2>Estudante ${contar + 1}</h2>
            <p><h4>Nome Completo:</h4> ${pessoa.nome}</p>
            <p><h4>Idade:</h4> ${pessoa.idade}</p> 
            <p><h4>Gênero:</h4> ${pessoa.genero}</p>
            <p><h4>CPF:</h4> ${pessoa.CPF}</p>
            <p><h4>Email:</h4> ${pessoa.email}</p> 
        `;

    editar.innerHTML = "Editar";
    editar.addEventListener("click", () => {
      inputar(contar, registrador);
    });

    apagar.innerHTML = "Remover Cadastro";
    apagar.addEventListener("click", () => {
      apagarCadastro(contar);
    });

    registrador.appendChild(apagar);
    registrador.appendChild(editar);
    sessao.appendChild(registrador);
  });

  title2.style.display = "block";
  console.log(`Total de Pessoas: ${historicoCadastrados.cadastrados.length}`);
}

function apagarCadastro(dado) {
  historicoCadastrados.cadastrados.splice(dado, 1);
  mostraTela();

  if (historicoCadastrados.cadastrados.length === 0) {
    title2.style.display = "none";
  } else {
    title2.style.display = "block";
  }
}

function inputar(contador, registrador) {
  let inputnome = document.createElement("input");
  registrador.appendChild(inputnome);
  inputnome.value = historicoCadastrados.cadastrados[contador].nome;
  inputnome.className = "inputsEdit";
  inputnome.placeholder = "Nome";

  let inputIdade = document.createElement("input");
  registrador.appendChild(inputIdade);
  inputIdade.value = historicoCadastrados.cadastrados[contador].idade;
  inputIdade.className = "inputsEdit";
  inputIdade.placeholder = "Idade";
  inputIdade.type = "number";

  let inputGenero = document.createElement("input");
  registrador.appendChild(inputGenero);
  inputGenero.value = historicoCadastrados.cadastrados[contador].genero;
  inputGenero.className = "inputsEdit";
  inputGenero.placeholder = "Gênero";

  let inputCPF = document.createElement("input");
  registrador.appendChild(inputCPF);
  inputCPF.value = historicoCadastrados.cadastrados[contador].CPF;
  inputCPF.className = "inputsEdit";
  inputCPF.placeholder = "CPF";

  let inputEmail = document.createElement("input");
  registrador.appendChild(inputEmail);
  inputEmail.value = historicoCadastrados.cadastrados[contador].email;
  inputEmail.className = "inputsEdit";
  inputEmail.placeholder = "Email";

  let inputSenha = document.createElement("input");
  registrador.appendChild(inputSenha);
  inputSenha.value = historicoCadastrados.cadastrados[contador].senha;
  inputSenha.className = "inputsEdit";
  inputSenha.placeholder = "Senha";
  inputSenha.type = "password";

  let atualizar = document.createElement("button");
  atualizar.className = "botaoAtualizar";
  registrador.appendChild(atualizar);
  atualizar.innerHTML = "Atualizar";
  atualizar.addEventListener("click", () => {
    editando(
      contador,
      inputnome,
      inputIdade,
      inputGenero,
      inputCPF,
      inputEmail,
      inputSenha
    );
  });
}

function editando(
  contador,
  inputnome,
  inputIdade,
  inputGenero,
  inputCPF,
  inputEmail,
  inputSenha
) {
  const pessoa = historicoCadastrados.cadastrados[contador];

  pessoa.nome = inputnome.value;
  pessoa.idade = inputIdade.value;
  pessoa.genero = inputGenero.value;
  pessoa.CPF = inputCPF.value;
  pessoa.email = inputEmail.value;
  pessoa.senha = inputSenha.value;

  mostraTela();
}
