// Validação do formulário
document.getElementById('torcedorForm').addEventListener('submit', function(e) {
    e.preventDefault();
   
    let isValid = true;
    document.querySelectorAll('[required]').forEach(input => {
        if (!input.value) {
            input.classList.add('input-error');
            isValid = false;
        } else {
            input.classList.remove('input-error');
        }
    });
   
    if (isValid) {
        // Simulação de envio
        alert('Cadastro realizado com sucesso! Bem-vindo à Nação Tricolor!');
        this.reset();
    } else {
        // Rolando até o primeiro erro
        const firstError = document.querySelector('.input-error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});


// Remover erro ao digitar
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('input-error');
    });
});


// Máscaras
function applyMask(input, pattern) {
    let value = input.value.replace(/\D/g, '');
    let result = pattern;
   
    for (let i = 0; i < value.length; i++) {
        result = result.replace('_', value[i]);
    }
   
    result = result.replace(/_/g, '');
    input.value = result;
}


document.querySelector('input[placeholder="000.000.000-00"]')?.addEventListener('input', function(e) {
    applyMask(this, '___.___.___-__');
});


document.querySelector('input[placeholder="(00) 00000-0000"]')?.addEventListener('input', function(e) {
    applyMask(this, '(__) _____-____');
});


document.querySelector('input[placeholder="00000-000"]')?.addEventListener('input', function(e) {
    applyMask(this, '_____-___');
});


// Preenchimento automático de CEP
document.querySelector('input[placeholder="00000-000"]')?.addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.querySelector('input[placeholder="Nome da rua"]').value = data.logradouro || '';
                    document.querySelector('input[placeholder="Nome do bairro"]').value = data.bairro || '';
                    document.querySelector('input[placeholder="Nome da cidade"]').value = data.localidade || '';
                    document.querySelector('select').value = data.uf || '';
                }
            });
    }
});
