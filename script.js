CLASSIFICADOS_PROVAO=[
    {
      "CURSO": "Análise e Desenvolvimento de Sistemas ",
      "CAMPUS": "Limeira",
      "GRUPO": "C",
      "COTA": "L3",
      "VAGAS": "",
      "NOTA": "74,9",
      "CLASSIFICAÇÃO": 3
    },
    {
      "CURSO": "Arquitetura e Urbanismo",
      "CAMPUS": "Unicamp",
      "GRUPO": "C",
      "COTA": "L1",
      "VAGAS": "",
      "NOTA": "75,445",
      "CLASSIFICAÇÃO": 1
    },
    {
      "CURSO": "Estatística (Bacharelado)",
      "CAMPUS": "Campinas",
      "GRUPO": "A",
      "COTA": "L1",
      "VAGAS": "Ampla",
      "NOTA": "80.111",
      "CLASSIFICAÇÃO": 1
    },
    {
      "CURSO": "Ciência da Computação",
      "CAMPUS": "Campinas",
      "GRUPO": "A",
      "COTA": "L3",
      "VAGAS": "Ampla",
      "NOTA": "77.667",
      "CLASSIFICAÇÃO": 8
    }
]


//funções

// seleciona o container tbody
var tableContainer = document.querySelector("#table-container")
//cria um TR e cria um td para cada um dos elementos do Json implementando no HTML


for(var classificados of CLASSIFICADOS_PROVAO){
    var rowTr = document.createElement("tr");

    rowTr.innerHTML = `
        <td>${classificados.CURSO}</td>
        <td>${classificados.CAMPUS}</td>
        <td>${classificados.GRUPO}</td>
        <td>${classificados.COTA}</td>
        <td>${classificados.VAGAS}</td>
        <td>${classificados.NOTA}</td>
        <td>${classificados.CLASSIFICAÇÃO}</td>
    `

    tableContainer.appendChild(rowTr)
}

//option course

var SelectCourse = document.querySelector("#select-course")
var optionsCourse = ''

for(var itemCurso of CLASSIFICADOS_PROVAO){
    optionsCourse += `<option>${itemCurso.CURSO}</option>`
}

SelectCourse.innerHTML = optionsCourse;

console.log(optionsCourse)


//option campus

var SelectCampus = document.querySelector("#select-campus");
var optionCampus = '';

for(var itemCampus of CLASSIFICADOS_PROVAO){
    optionCampus += `<option>${itemCampus.CAMPUS}</option>`
}

SelectCampus.innerHTML = optionCampus;

//option Grupo

var SelectGrupo = document.querySelector("#select-grupo");
var optionGrupo = '';

for (var itemGrupo of CLASSIFICADOS_PROVAO){
    optionGrupo += `<option>${itemGrupo.GRUPO}</option>`
}

SelectGrupo.innerHTML = optionGrupo;

// option Cota

var SelectCota = document.querySelector("#select-cota");
var optionCota = '';

for (var itemCota of CLASSIFICADOS_PROVAO){
    optionCota += `<option>${itemCota.COTA}</option>`
}

SelectCota.innerHTML = optionCota;


// condições


