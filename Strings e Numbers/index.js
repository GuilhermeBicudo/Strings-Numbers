function verificar() {
  const tipoValor = document.querySelector("input#txtvalor").value;
  const res = document.getElementById("res");

  if (isNaN(tipoValor)) {
    res.innerHTML = `(${tipoValor}) Não é tipo <strong><u>NUMBER</u></strong>, Esse valor (${tipoValor}) é tipo <strong><u>STRING</u></strong>.`;
  } else {
    res.innerHTML = `(${tipoValor}) É tipo <strong><u>NUMBER</u></strong> e não tipo <strong><u>STRING</u></strong>.`;
  }
}
