create database empresa;
use empresa;
create table Empleados(
id int primary key auto_increment,
cargo varchar(10)default 2000 comment 'Cargo del empleado por defecto')
;
create table departamentos(
id int primary key auto_increment,
area varchar(10)default 2000 comment 'area a la que pertenece')
;
create table servicios(
id int primary key auto_increment,
area varchar(10)default 2000 comment 'area a la que pertenece')
;
desc Empleados;
desc departamentos;
desc servicios;
show tables;
select current_date();
create table ciudad6(
nombre char(20)NOT NULL,
poblacion int null default 5000,primary key(nombre) );

create table persona(
tipo_documento char(2)not null,
documento_identidad char(10) not null,
nombre char(30),
primary key(tipo_documento,documento_identidad));

desc persona;

create table sena(
carnet char(6)not null,
numero_ficha char(12) not null,
nombre char(30)not null,
primary key(nombre,numero_ficha));

desc sena;

create table indices1(
nombre varchar(20),
id int,
index(nombre));
desc indices1;
create table indice2(
nombre varchar(20),
id int,
key(id));
desc indice2;

create table indice3(
nombre char(20),
id int,
unique (id));
desc indice3;

create table persona1(
id_persona int auto_increment primary key,
nombres varchar(40)not null, 
fecha date);
create table telefonos(
persona_id int not null references persona1(id) on delete cascade on update cascade,
numero varchar(20) primary key,
tipo varchar(10));
desc telefonos;


