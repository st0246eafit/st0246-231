mysql -u root -p

create database tienda;

use tienda;

create table productos(
    id integer not null auto_increment,
    nombre varchar(255),
    precio decimal(5, 2),
    primary key(id)
);

// No requiere crear el usuario en AWS RDS, cuando crea el servicio se crea el usuario:
create user "dbuser"@"%" identified with mysql_native_password BY "Eafit2023.";

grant all privileges on tienda.* to "dbuser"@"%";
flush privileges;

insert into productos (nombre,precio) values("martillo",19.00);
insert into productos (nombre,precio) values("destornillador",10.50);