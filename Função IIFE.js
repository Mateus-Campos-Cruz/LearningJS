// O prefixo 'javascript:' avisa ao navegador que o texto a seguir deve ser executado como código.
// A '(function(){ ... })();' é uma IIFE (Função Imediatamente Invocada).
// Ela cria um "escudo" para que suas variáveis não briguem com outras variáveis do site onde você rodar o script.
javascript:(function(){

    // 1. CRIAÇÃO DO ELEMENTO
    // Criamos um objeto de botão na memória do navegador, mas ele ainda não "nasceu" na página.
    const b = document.createElement('button');

    // 2. CONTEÚDO VISUAL
    // Definimos o texto que aparece dentro do botão.
    b.innerText = 'START';

    // 3. ESTILIZAÇÃO (O "CSS" DENTRO DO JS)
    // Object.assign permite aplicar várias propriedades de estilo de uma vez só ao elemento 'b'.
    Object.assign(b.style, {
        position: 'fixed',    // Faz o botão "flutuar" e ignorar a rolagem da página.
        bottom: '20px',      // Distância de 20px do fundo.
        right: '20px',       // Distância de 20px da direita.
        padding: '15px 25px', // Espaçamento interno para o botão ter corpo.
        backgroundColor: '#2563eb', // O azul que você está usando no projeto Automobile.
        color: '#ffffff',     // Cor do texto (branco).
        border: 'none',       // Remove aquela borda padrão feia dos navegadores.
        borderRadius: '50px', // Deixa o botão arredondado (estilo "pílula").
        fontWeight: '800',    // Texto em negrito bem pesado.
        fontSize: '14px',     // Tamanho da fonte.
        cursor: 'pointer',    // Faz a setinha do mouse virar a "mãozinha" de clique.
        
        // Sombra para dar profundidade (efeito de elevação).
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
        
        zIndex: '9999',       // Garante que o botão fique na frente de QUALQUER outro elemento do site.
        
        // Prepara o botão para animar suavemente quando o 'transform' mudar.
        transition: 'transform 0.2s ease'
    });

    // 4. INTERATIVIDADE (EVENTOS)
    // Quando o mouse entra no botão (Hover), ele aumenta 10% de tamanho (scale 1.1).
    b.onmouseover = () => b.style.transform = 'scale(1.1)';
    
    // Quando o mouse sai, ele volta ao tamanho normal (scale 1.0).
    b.onmouseout = () => b.style.transform = 'scale(1.0)';

    // 5. NASCIMENTO DO ELEMENTO
    // Agora pegamos o botão que estava na memória e o "penduramos" no corpo (body) do site oficial.
    document.body.appendChild(b);

    // 6. FEEDBACK PARA O DESENVOLVEDOR
    // Apenas uma confirmação no console (F12) para você saber que deu certo.
    console.log("Botão START flutuante carregado.");

})(); // O '();' no final executa a função imediatamente.