drop table if exists users cascade;
create table users (
	id serial primary key not null,
	citation varchar(1000) not null,
	userid foreign key not null,
)