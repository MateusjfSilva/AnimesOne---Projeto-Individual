CREATE DATABASE OnePieceTales;
drop database OnePieceTales;
USE OnePieceTales;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nick VARCHAR(20) NOT NULL,
	email VARCHAR(64) NOT NULL,
	senha VARCHAR(64) NOT NULL
);
insert into usuario(nick, email, senha) values
('dev_vedor', 'devv@test.com', '12345678'),
('Omega Dragon', 'odragon@test.com', '12345678'),
('Folqjolq', 'folq@test.com', '12345678'),
('Murdokinho', 'murdock@test.com', '12345678'),
('Black_Mage', 'mage@test.com', '12345678'),
('Anderson_TAKEO_BR', '', '12345678'),
('Ditto', 'ditto@test.com', '12345678'),
('Miguelz', 'miguelz@test.com', '12345678'),
('Bravo', 'bravo@test.com', '12345678'),
('Wawa', 'wawa@test.com', '12345678');

select * from usuario;


CREATE TABLE momento (
	id INT,
	titulo VARCHAR(64) NOT NULL,
    imagem VARCHAR(120) NOT NULL,
    urlVideo VARCHAR(120) NOT NULL,
    nota INT,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    PRIMARY KEY (id, fkUsuario)
);
insert into momento values
(1, 'Sanji quer voltar para o Sunny', 'Assents-cards/sanji-quer-voltar-para-o-sunny.jpg', 'Assents/videos/sanji-quer-voltar-para-o-sunny.mp4', 10, 1),
(1, 'Sanji quer voltar para o Sunny', 'Assents-cards/sanji-quer-voltar-para-o-sunny.jpg', 'Assents/videos/sanji-quer-voltar-para-o-sunny.mp4', 10, 2),
(1, 'Sanji quer voltar para o Sunny', 'Assents-cards/sanji-quer-voltar-para-o-sunny.jpg', 'Assents/videos/sanji-quer-voltar-para-o-sunny.mp4', 10, 3),
(2, 'Caminhada para Franky house', 'Assents-cards/caminhada-para-franky-house.jpg', 'Assents/videos/caminhada-para-franky-house.mp4', 6, 4),
(2, 'Caminhada para Franky house', 'Assents-cards/caminhada-para-franky-house.jpg', 'Assents/videos/caminhada-para-franky-house.mp4', 7, 7),
(2, 'Caminhada para Franky house', 'Assents-cards/caminhada-para-franky-house.jpg', 'Assents/videos/caminhada-para-franky-house.mp4', 4, 9),
(3, 'Robin - Eu quero viver!', 'Assents-cards/robin-quero-viver.jpg', 'Assents/videos/robin-quero-viver.mp4', 9, 8),
(3, 'Robin - Eu quero viver!', 'Assents-cards/robin-quero-viver.jpg', 'Assents/videos/robin-quero-viver.mp4', 9, 10),
(3, 'Robin - Eu quero viver!', 'Assents-cards/robin-quero-viver.jpg', 'Assents/videos/robin-quero-viver.mp4', 10, 3),
(4, 'Jinbe doa seu sangue à Luffy', 'Assents-cards/jinbe-doa-sangue-para-luffy.jpg', 'Assents/videos/jinbe-doa-sangue-para-luffy.mp4', 10, 10),
(4, 'Jinbe doa seu sangue à Luffy', 'Assents-cards/jinbe-doa-sangue-para-luffy.jpg', 'Assents/videos/jinbe-doa-sangue-para-luffy.mp4', 9, 2),
(4, 'Jinbe doa seu sangue à Luffy', 'Assents-cards/jinbe-doa-sangue-para-luffy.jpg', 'Assents/videos/jinbe-doa-sangue-para-luffy.mp4', 8, 3),
(5, 'Nami pede ajuda a Luffy', 'Assents-cards/nami-pede-sorroco-a-luffy.jpg', 'Assents/videos/nami-pede-sorroco-a-luffy.mp4', 9, 4),
(5, 'Nami pede ajuda a Luffy', 'Assents-cards/nami-pede-sorroco-a-luffy.jpg', 'Assents/videos/nami-pede-sorroco-a-luffy.mp4', 8, 1),
(5, 'Nami pede ajuda a Luffy', 'Assents-cards/nami-pede-sorroco-a-luffy.jpg', 'Assents/videos/nami-pede-sorroco-a-luffy.mp4', 8, 6),
(6, 'Luffy chama Franky para o bando', 'Assents-cards/luffy-recruta-franky.jpg', 'Assents/videos/luffy-recruta-franky.mp4', 4, 2),
(6, 'Luffy chama Franky para o bando', 'Assents-cards/luffy-recruta-franky.jpg', 'Assents/videos/luffy-recruta-franky.mp4', 5, 10),
(6, 'Luffy chama Franky para o bando', 'Assents-cards/luffy-recruta-franky.jpg', 'Assents/videos/luffy-recruta-franky.mp4', 3, 6),
(7, 'Luffy chama Zoro para o bando', 'Assents-cards/luffy-recruta-zoro.jpg', 'Assents/videos/luffy-recruta-zoro.mp4', 7, 1),
(7, 'Luffy chama Zoro para o bando', 'Assents-cards/luffy-recruta-zoro.jpg', 'Assents/videos/luffy-recruta-zoro.mp4', 6, 3),
(7, 'Luffy chama Zoro para o bando', 'Assents-cards/luffy-recruta-zoro.jpg', 'Assents/videos/luffy-recruta-zoro.mp4', 6, 6),
(8, 'Luffy chama Chopper para o bando', 'Assents-cards/Luffy-recruta-chopper.jpg', 'Assents/videos/Luffy-recruta-chopper.mp4', 9, 7),
(8, 'Luffy chama Chopper para o bando', 'Assents-cards/Luffy-recruta-chopper.jpg', 'Assents/videos/Luffy-recruta-chopper.mp4', 8, 1),
(8, 'Luffy chama Chopper para o bando', 'Assents-cards/Luffy-recruta-chopper.jpg', 'Assents/videos/Luffy-recruta-chopper.mp4', 7, 5),
(9, "Bink's Sake", 'Assents-cards/binks-sake.jpg', 'Assents/videos/binks-sake.mp4', 8, 9),
(9, "Bink's Sake", 'Assents-cards/binks-sake.jpg', 'Assents/videos/binks-sake.mp4', 8, 6),
(9, "Bink's Sake", 'Assents-cards/binks-sake.jpg', 'Assents/videos/binks-sake.mp4', 7, 5),
(10, 'Usopp sai do bando', 'Assents-cards/usopp-sai-do-bando.jpg', 'Assents/videos/usopp-sai-bando.mp4', 9, 5),
(10, 'Usopp sai do bando', 'Assents-cards/usopp-sai-do-bando.jpg', 'Assents/videos/usopp-sai-bando.mp4', 9, 1),
(10, 'Usopp sai do bando', 'Assents-cards/usopp-sai-do-bando.jpg', 'Assents/videos/usopp-sai-bando.mp4', 9, 9),
(11, 'Usopp se pede desculpas e volta para o bando', 'Assents-cards/usopp-volta-para-o-bando.jpg', 'Assents/videos/usopp-volta-para-o-bando.mp4', 8, 8),
(11, 'Usopp se pede desculpas e volta para o bando', 'Assents-cards/usopp-volta-para-o-bando.jpg', 'Assents/videos/usopp-volta-para-o-bando.mp4', 7, 9),
(11, 'Usopp se pede desculpas e volta para o bando', 'Assents-cards/usopp-volta-para-o-bando.jpg', 'Assents/videos/usopp-volta-para-o-bando.mp4', 7, 5);

select * from momento;
select *, truncate(avg(nota), 1) as notaMedia from momento group by id;
select *, truncate(avg(nota), 1) as notaMedia from momento group by id order by notaMedia desc limit 5;


CREATE TABLE frase (
	id INT PRIMARY KEY,
	fraseUsuario VARCHAR(64),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);
insert into frase(id, fraseUsuario, fkUsuario) values
(1, 'As pessoas só morrem quando são esquecidas!', 1),
(2, 'Não aconteceu NADA!', 2);

select * from frase;
truncate table frase;