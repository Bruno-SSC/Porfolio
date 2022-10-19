-> Clean code

1. Ser especifico em tudo. O main, por exemplo, não pode ser usado no css para organizar uma série de elementos porque o main vai mudar para dar espaço a outros elementos e ele vai aplicar a mesma organização? 
 -- Cada grupo de elementos tem que ter sua própria div
 -- O css tem que especificar o caminho completo
 -- Tamanhos que dependam da tela só podem ser aplicados para main, footer e header. 
 -- Elementos que contenham filhos diretos como as caixas de corpo e navbar tem que ter o clamp para definir um minimo, ideal e máximo. 
 -- Elementos filhos especificos como textos, imagens, botões só podem crescer ou diminuir de acordo seus pais que terao o 'juizo' de quando parar em ambos os casos. 
-- Usar inheritance é ruim porque não tem como saber quais elementos vão ser mudados no futuro e isso pode dar uma reação em cadeia.
-- Todos elementos tem que ter IDs que façam com que se evite duplicidade em event listener

É estranho como segmentar todo o código faz com que ele cresça, porém faz com que seja mais fácil de manutenir depois já que nada depende diretamente de nada.

2. Não se repita. Usando this dá para reutilizar a função se for o caso. 
3. Funções só podem ter um unico objetivo. Usar apenas funções especializadas em um fim.
4. If else = if com lógica invertida que dá em return 
5. O HTML tem que ter todo conteúdo a ser apresentado por questões de acessibilidade e SEO. O javascript não adiciona elementos, a menos que estritamente necessário. Apenas modifica classes preparadas com antecipação.
6. O HTML chama apenas um script. O qual se quebra em módulos menores se necessário, porém se mantendo o principal e apenas tendo auxiliares que possam ser removidos sem afetar o principal. Para isso, todos os scripts tem que ter funcionamento semi-autonomo.

-> HTML

Qualquer coisa é pseudocódigo contanto que represente o conteúdo final.

# alert

cabeçalho

corpo da página

    container
        titulo
        imagem
        container
            botão 1 
            botão 2
    
rodapé 

# HomeScreen

Cabeçalho
    container
        menu
            Opção 1
            Opção 2
            Opção 3
            Opção 4
            Opção 5

Corpo da página
    container
        container
            Texto principal 
            container 
                icones da redes sociais
            Texto secundário 
        container
            ilustração a direita

rodapé

# Projetos

cabeçalho
    container
        menu    
            opção 1 
            opção 2 
            opção 3 
            opção 4 
            opção 5

Corpo da página
    container
        container
            container de projeto
        container
        botão de ir para próxima tela

rodapé 

# bio

cabeçalho 
    container
        menu 
            opção 1
            opção 2
            opção 3
            opção 4
            opção 5

corpo da página 

container-pai
    container
        container
            container  
                botão 1 
                botão 2 
                botão 3 
            container conteudo
        container
            botão de voltar para home
    container 
        imagem do café
        paragrafo de texto
        outra imagem do café

rodapé 
    container
        copyright

-> scss

cabeçalho
    cor amarela
    altura 10vh
     
    container
        grid place item center
        menu 
            display flex 

corpo da página
    altura 80vh

    container pai dos pais
        display flex
        overflow hidden

        sumir com o scroll no visible ou deixar o conteúdo de fora escondido? Isso vai depender do comportamento da pagina sendo que header, footer e main vão ser 100vw. Como eu vou animar para que pareça um empurrão de uma div na outra?
            
        container alerta pai
            display flex column
            container botoes
                display flex

        container home pai
            container texto e sociais
            flex column
            container
                display flex
            container image

        container projetos pai
        flex
        container projetos
            grid linhas e colunas
        container botao
            place items center
            
        container bio pai
            container
                display flex

                container caixa bio
                flex
                    container botoes
                        flex column
                    container conteudo contatos
                    
                    container conteudo bio
                        
                    container conteudo references
            
                container botao
                    place items center
            container 
                display flex
        
rodapé
    altura 10vh
    cor amarela
    grid place items center
    container
        grid place items center

-> JS

Vai ser uma galeria de divs. Porém, só uma div é mostrada por vez porque existem várias e todas usam todo espaço da tela quando estão la. 

ao carregar, a tela de alert recebe a classe moved right para ela vir a tona

ao clicar em um dos botoes acontecem 3 eventos 
    -> 1. a tela alert recebe a classe 'moved-left' 
    -> 2. a tela home recebe a classe 'moved-right'
    -> 3. As options do li perdem a classe hidden e surgem devagar

ao clicar em projetos a tela home recebe moved left e a tela project recebe a moved-right 

ao clicar no botão de proxima tela, a bio recebe moved-right e os projetos moved-left

ao clicar no botão de proxima página, a tela home recebe moved-right e bio recebe moved-left

sempre 3 segundos após receber moved left, o elemento perde a classe e volta a posição original

Idealmente -> 
1. preparar todo o html com todo conteúdo e aninhamentos
2. Preparar todo scss incluindo as classes que serão usadas para gerar animações através do js
3. Usar o js para fazer com que os lugares clicáveis gerem as animações esperadas. Até lá, vai ser uma página com um scroll horizonal que percorre o conteudo do main ao invés de mudar.