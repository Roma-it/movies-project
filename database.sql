drop database if exists movies_database;
create database if not exists movies_database;
use movies_database;

create table personas(
id int not null auto_increment,
name varchar(255) not null,
last_name varchar(255) not null,
age int not null,
primary key (id)
);

create table roles(
id int not null auto_increment,
name varchar(255) not null,
primary key(id)
);

create table movies(
id int not null auto_increment,
title varchar(255) not null,
year int not null,
primary key (id)
);

create table personas_movies(
id int not null auto_increment,
persona_id int not null,
movie_id int not null,
role_id int not null,
primary key (id),
foreign key (persona_id)references personas(id),
foreign key (movie_id) references movies(id),
foreign key (role_id) references roles(id)
);

insert into roles values (null, "Actor / Actress");
insert into roles values (null, "Director");
insert into roles values (null, "Productor");

insert into personas values (null, "Leonardo", "DiCaprio", 42);
insert into personas values (null, "Matt", "Damon", 44);
insert into personas values (null, "Steven", "Spielberg", 62);
insert into personas values (null, "Julia", "Roberts", 48);

insert into movies values (null, "Titanic", 2000);
insert into movies values (null, "Bourne", 2002);
insert into movies values (null, "Erin Brocovich", 1994);
insert into movies values (null, "ET", 1984);

insert into personas_movies values (null, 1,1,1);
insert into personas_movies values (null, 1,1,2);
insert into personas_movies values (null, 1,1,3);
insert into personas_movies values (null, 1,5,1);
insert into personas_movies values (null, 2,2,1);
insert into personas_movies values (null, 2,4,1);
insert into personas_movies values (null, 2,3,2);
insert into personas_movies values (null, 2,2,3);
insert into personas_movies values (null, 3,4,1);
insert into personas_movies values (null, 3,4,3);
insert into personas_movies values (null, 3,1,1);
insert into personas_movies values (null, 4,3,2);
insert into personas_movies values (null, 4,3,1);
insert into personas_movies values (null, 4,3,3);
insert into personas_movies values (null, 4,1,1);