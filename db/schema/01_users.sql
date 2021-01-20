drop table if exists users cascade;
create table users (
	id serial primary key not null,
	email varchar(255) not null,
	passsugar varchar(255) not null,
	passhash varchar(255) not null,
)