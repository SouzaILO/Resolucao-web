
// Get the modal

//btn to open modal adding aluno
const btn_add_aluno = document.getElementById("alunos-add-btn");
btn_add_aluno.addEventListener("click", openModal_add_aluno);


function openCheck(dialog) {
    if (dialog.open) {
      console.log("Dialog open");
    } else {
      console.log("Dialog closed");
    }
  }

//open popup for adding aluno
 function openModal_add_aluno(){
    const modal = document.getElementById("pop-add-aluno");
    modal.showModal();
    openCheck(modal);
  };

//Form cancel button closes the dialog box
function closeModal_add_aluno(){
    const modal = document.getElementById("pop-add-aluno");
    modal.close("cancelado");
    openCheck(modal);
  };


//open popup for edit aluno
function openModal_edit_aluno(aluno){

  const modal = document.getElementById("pop-edit-aluno");
  modal.showModal(aluno.querySelector("th").textContent);

  //Preenchimento do formulario para edicao
  document.getElementById("label-Matricula-Edit").innerHTML = "Matricula: " + aluno.querySelector("th").textContent;
  document.getElementById("input-Matricula-Edit").value = aluno.querySelector("th").textContent;
  document.getElementById("input-Nome-Edit").setAttribute("value", aluno.querySelector("td:nth-child(2)").textContent);
  document.getElementById("input-Email-Edit").setAttribute("value", aluno.querySelector("td:nth-child(3)").textContent);
  document.getElementById("input-Edc-Edit").setAttribute("value", aluno.querySelector("td:nth-child(4)").textContent);
  document.getElementById("input-Cid-Edit").setAttribute("value", aluno.querySelector("td:nth-child(5)").textContent);
  document.getElementById("input-CEP-Edit").setAttribute("value", aluno.querySelector("td:nth-child(6)").textContent);
  document.getElementById("input-Telefone-Edit").setAttribute("value", aluno.querySelector("td:nth-child(7)").textContent);
  document.getElementById("input-Escola-Edit").setAttribute("value", aluno.querySelector("td:nth-child(8)").textContent);
  document.getElementById("input-Idade-Edit").setAttribute("value", aluno.querySelector("td:nth-child(9)").textContent);

  //matricula to delete
  document.getElementById("input-Matricula-DEL").value = aluno.querySelector("th").textContent;

  openCheck(modal);
};

//Form cancel button closes the dialog box
function closeModal_edit_aluno(){
  const modal = document.getElementById("pop-edit-aluno");
  modal.close("cancelado");
  openCheck(modal);
};


