Criando o projeto:

No terminal execute os dois comandos abaixo, o primeiro para a instalação do Angular CLI, caso já tenha instalado pule para o passo 2.

	1º npm install -g @angular/cli
	2º ng new poc-componente + enter duas vezes
	
Referências:
	
	Compatibilidade Angular:
		
		https://v17.angular.io/guide/versions
	
	Angular CLI (Command Line Interface - Interface de Linha de Comando):
	
		https://v17.angular.io/cli
		

Criando os componentes:

	No terminal execute o comando abaixo:

	1º ng generate component components/primeiro-componente
	
	Depois crie o segundo componente:
	
	2º ng generate component components/segundo-componente
	

Utilizando o componente criado:

	No arquivo que for receceber o componente basta usar a tag com o seletor criado, no nosso exemplo:

	<app-primeiro-componente></app-primeiro-componente>
	
	
