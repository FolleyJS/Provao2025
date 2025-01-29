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


