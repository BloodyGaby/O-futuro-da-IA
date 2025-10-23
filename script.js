const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        
        enunciado:
        "1. Qual foi a primeira IA a ser utilizada? ",

        alternativas:[
            "Alexa",
             "Logic Theorist"
        ]
    },
    {
        enunciado:
        "2.Qual dos seguintes é um exemplo de aplicação de IA no dia a dia",

        alternativas:[
            "Apenas jogos de computador complexos.",
             "Assistentes virtuais, como a Siri ou a Alexa, e sistemas de recomendação da Netflix"
        ]
    },
    {
        enunciado:
        "3.Qual é o principal objetivo do aprendizado de máquina (machine learning)?",

        alternativas:[
            "Apenas criar bancos de dados e armazenar informações de forma organizada.",
             "Fazer com que os computadores aprendam a partir de dados sem serem explicitamente programados para cada tarefa."
        ]
    },
    {
        enunciado:
        "4. O que é IA generativa?",

        alternativas:[
            "Um tipo de inteligência artificial que cria novos dados, como texto, imagens ou música." ,
             "Um tipo de inteligência artificial que apenas analisa e classifica dados existentes."
        ]
    },
    {
        enunciado:
        "5. O que se espera sobre os modelos de linguagem no futuro próximo?",

        alternativas:[
            "Serão mais eficientes, personalizados e com menor consumo de energia",
             "Serão sempre maiores, mais lentos e inacessíveis ao público geral"
        ]
    },
]
    let atual = 0;
    let pergutaAtual;
    let historiaFinal = "";

    function mostraPergunta(){
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    }

    function mostraAlternativa(){
        for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);    
        }
    }
    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal = afirmacoes;
        atual++;
        mostraPergunta();
    }

    mostraPergunta();


