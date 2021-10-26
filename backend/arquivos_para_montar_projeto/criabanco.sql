CREATE TABLE aviso(
id serial PRIMARY KEY,
titulo VARCHAR (100) NOT NULL,
resumo VARCHAR (200) NOT NULL,
thumb VARCHAR (50) NOT NULL,
imagem VARCHAR (50),
texto TEXT NOT NULL,
data TIMESTAMP WITH TIME ZONE NOT NULL
);
insert into aviso (id,titulo,resumo,thumb,imagem,texto,data) 
	values(DEFAULT, 'Atenção para o prazo de programação de férias!!!',
		   'O prazo de programação de férias, para quem quer sair no próximo mês, termina dia 5 deste mês.',
		   'thumb1.png',
		   'praia1.png',
		   'Se você está pensando em tirar férias no próximo mês (Outubro) é importante ficar atento e solicitar suas férias até o dia 5. Procure o seu Supervisor ou entre no link <a href="https://siscorp.xpto.rede/adm/ferias">de férias</a> e preencha o formulário.',
		   '2021-09-02 10:10:05-3'
		  );
insert into aviso (id,titulo,resumo,thumb,imagem,texto,data) 
	values(DEFAULT, 'O horário do refeitório mudou!!!',
		   'Desde Agosto o horário do refeitório mudou, procure saber o horário da sua unidade.',
		   'thumb2.png',
		   'imagem2.png',
		   'O horário do refeitório mudou desde Agosto. Procure o seu Supervisor ou entre no link <a href="https://siscorp.xpto.rede/adm/refeitorio">do refeitório</a>.',
		   '2021-09-02 10:11:11-3'
		  );