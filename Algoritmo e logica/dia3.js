const resp1 = prompt("Gostaria de seguir na área de Front-end ou Back-end?");

let todasRespostas = ""; 

if (resp1 === "Front-end") {
    const resp2 = prompt("Quer aprender React ou Vue?");
    const resp3 = prompt(`Deseja continuar se especializando em ${resp2} ou Aprender Back-end para se tornar full-stack?`);
    let resp4 = prompt("Tem mais alguma tecnologia que gostaria de aprender?");
    
    while (resp4 !== '') {
        todasRespostas += `${resp4}\n`; 
        resp4 = prompt("Tem mais alguma tecnologia que gostaria de aprender?");
    }
} else if (resp1 === "Back-end") {
    let resp2 = prompt("Quer aprender C# ou Java?");
    let resp3 = prompt(`Deseja continuar se especializando em ${resp2} ou Aprender Front-end para se tornar full-stack?`);
    let resp4 = prompt("Tem mais alguma tecnologia que gostaria de aprender?");
    
    while (resp4 !== '') {
        todasRespostas += `${resp4}\n`; 
        resp4 = prompt("Tem mais alguma tecnologia que gostaria de aprender?");
    }
}

// Exibe todas as respostas coletadas em um alert
alert(`Respostas:\n\n${todasRespostas}`);
