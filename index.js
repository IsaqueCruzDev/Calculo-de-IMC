const form = document.querySelector('#formulario');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const valorPeso = Number(inputPeso.value);
    const valorAltura = Number(inputAltura.value);

    if (!valorPeso) { 
        setResultado('Peso Inválido', false);
        return;
    }
    
    if (!valorAltura) { 
        setResultado('Altura Inválida', false);
        return;
    }
    
    const imc = getImc(valorPeso, valorAltura); 
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} ${nivelImc}`;
    setResultado(msg, true);
    //continua o código
});

function getNivelImc(imc) { 
    const nivel = ['Abaixo do peso', 'Peso Normal', 'SobrePeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    
    if (imc >= 34.9) { 
        return nivel[4];
    }
    
    if (imc >= 29.9) { 
        return nivel[3]; 
    }
    
    if (imc >= 24.9) { 
        return nivel[2]; 
    }
    
    if (imc >= 18.5) { 
        return nivel[1];
    }
    
    if (imc < 18.5) { 
        return nivel[0];
    }
}

function getImc (peso, altura) { 
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() { 
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) { 
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else { 
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}
