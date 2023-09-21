# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas
As personas selecionadas durante o nosso debate acerca do tema escolhido pelo nosso grupo estão representadas a seguir com suas devidas características apresentadas:

Quadro Personas — 1
 	Rafaela Alves Guimarães
•	Idade: 30
•	Ocupação: Empreendedora, dona de uma startup de sucesso que atua na área de crowdfunding, mãe de 3 filhos 
•	Gênero: Feminino
•	Estado Civil: Solteira	Aplicativos
•	Instagram
•	Linkedin
  Motivações
•	Devido a vida corrida pelos compromissos de trabalho, sempre deixa para depois a gestão financeira da familia.
•	Precisa de algo externo que a ajude realizar o controle financeiro, podendo dividir essa responsabilidade com os filhos.	      
  Frustrações:
•	Ocorreu o desconforto de dever um valor maior que seus proventos	História
•	tem uma rotina cansativa de trabalho e o tempo que sobra ela investe nos filhos, não conseguindo se organizar financeiramente.

Quadro Personas — 2

  Fernando Almeida
•	Idade: 26
•	Ocupação:  Estudante de Engenharia de Software, estagiário de uma empresa que atua na criação de games. 
•	Gênero: Masculino
•	Estado Civil: Solteiro
	 Aplicativos:
•	Facebook
•	Linkedin
•	Instagram
  Motivações
•	Mindset voltado para automatização de processos em detrimento de processos manuais e demorados.
•	Já possui contato direto com a área da tecnologia e acredita que ela seja uma facilitadora de diversas situações na vida dos indivíduos.
	 Frustrações
•	Atrasou a mensalidade da faculdade.
	 História
•	É uma pessoa extremamente criativa e prática. Gostaria que cada vez mais a tecnologia fosse utilizada no dia-a-dia com o intuito, principalmente, de democratizar, disponibilizar informações e acelerar processos a partir de soluções inteligentes.


Quadro Personas — 3
 
  Luiz Gonçalves
•	Idade: 43
•	Ocupação: Garçom 
•	Gênero: Masculino
•	Estado Civil: Casado
 	Aplicativos:
•	Facebook
•	Instagram
  Motivações
•	Tem contato com vários tipos de pessoas, de diversos lugares diferentes e conversa sobre vários temas distintos.	Frustrações
•	Não consegue economizar para comprar a casa própria.
  História
•	Trabalha como garçom há mais de 10 anos com um bom salário, mas não consegue poupar.


Quadro Personas — 4

  Marisa Bastos
•	Idade: 56
•	Ocupação: Coach
•	Gênero: Feminino
•	Estado Civil: Divorciada
  Aplicativos
•	Instagram
•	Facebook
  Motivações
•	Maior retorno financeiro.
•	Por em pratica o que é ensinado por ela.	Frustrações:
•	Sabe em detalhes como se faz para controlar as finanças, mas não consegue executar	História
•	Administra sua agência sempre prezando por alternativas atrativas  e facilitadoras para seus clientes. 
Fonte: Autoria do grupo (2023)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rafaela Alves   | Um site que possibilite fazer controle financeiro de forma rápida, automática e simples.| Organizar as finanças|
|Fernando Almeida    | Uma aplicação que me avise quando o meu consumo financeiro esteja próximo de acabar| Permitir que possam administrar contas |
|Marisa Bastos       | Alguma tecnologia que me permita a colocar em pratica meu conhecimento financeiro| Ferramenta para trabalho|
|Luiz Gonçalves      | Um aplicativo que calcule uma porcentagem dos meus ganhos, para ser direcionado para poupanças                 | Economizar |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve conter uma página inicial com informações sobre os principais objetivos e propostas para os usuários.  | ALTA | 
|RF-002| A aplicação deve conter uma página de cadastro dos usuários e suas principais características.   | ALTA |
|RF-003| A aplicação deve conter uma página de Login para os usuários acessarem de forma instantânea | ALTA | 
|RF-004| A aplicação deve contar uma página de suporte aos usuários. | ALTA | 
|RF-005| A aplicação deve conter uma página “sobre” com as principais informações e propostas para os usuários. | ALTA | 
|RF-006| A aplicação deve apresentar a opção de atualizar e remover informações de cadastro dos usuários. | ALTA | 
|RF-007| A aplicação deve conter uma página de criação e busca de interesses. | ALTA | 
|RF-008| A aplicação deve conter página de contato para usuários interessados em saber mais sobre a aplicação, propor sugestões e sanar quaisquer dúvidas que venham apresentar.  | ALTA | 
|RF-009| A aplicação deve disponibilizar ao usuário a opção de recebimento de e-mails informativos sobre interesses específicos da aplicação, dicas e outros | BAIXA | 
|RF-010| A aplicação irá disponibilizar ao usuário a opção de se desvincular da plataforma, sendo assim, o registro de e-mail e qualquer envio automático serão desabilitados. | BAIXA | 
|RF-011| A aplicação disponibilizará a possibilidade dos usuários realizarem cadastros de entradas e saídas financeiras. | BAIXA | 
|RF-012| A aplicação disponibilizará a possibilidade do usuário configurar seus dados bancários, para que toda sua movimentação financeira seja preenchida de forma automática. | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser estruturado de forma a facilitar a utilização por pessoas de quaisquer idades. | ALTA | 
|RNF-002| A aplicação deve conter tags auxiliares em quaisquer imagens, vídeos e componentes visuais, a fim de permitir a utilização de leitores para pessoas com baixa visão. |  ALTA |
|RNF-003| A aplicação deverá estar apta a funcionar em qualquer dispositivo, utilizando técnicas de responsividade. |  ALTA | 
|RNF-004| As informações de cadastro dos usuários deverão ser armazenadas para fins de segurança.  |  ALTA | 
|RNF-005| Deverá ser implementado um sistema de verificação de autenticidade para os usuários.  |  ALTA | 
|RNF-006| A aplicação será visualmente leve e evitar cores muito contrastantes para um maior conforto do usuário. |  MÉDIA | 
|RNF-007| A aplicação irá utilizar de cache no navegador para facilitar o retorno do usuário a etapas anteriores a que se encontravam |  BAIXA | 
|RNF-008| A aplicação deverá realizar comunicações via API com as instituições bancárias |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|  O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2023. |
|02|  O aplicativo deve restringir aplicações de frontend e backend. |
|03|  O projeto deve ser realizado pela equipe e não terceirizado por outros membros fora da instituição  |
|04|  O projeto deve seguir normas de privacidade da web e mostrar termos de política de privacidade e uso da ferramenta  |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

![Casos de uso (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-family-spend/assets/103543979/14dec86d-09ad-4024-b90d-d0aadcc17fa6)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-family-spend/assets/103543979/2a9a48da-b5b0-4224-814b-566a57103d82)



# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade
envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-family-spend/assets/103543979/3964cd02-9ee5-4878-8262-1b443167c310)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t6-family-spend/assets/103543979/f9a30c34-24db-411f-bf6d-0a21e29f80df)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
