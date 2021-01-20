drop table if exists users cascade;
create table users (
	user_id INT GENERATED ALWAYS AS IDENTITY,
	username varchar(255) not null,
	email varchar(255) not null,
	membership_type varchar(10) not null,
	membership_start_date varchar(20) not null,
	membership_end_date varchar(20) not null,
	billed_type varchar(10) not null,
	auto_billing varchar(3) not null,
	passsugar varchar(255) not null,
	passhash varchar(255) not null,
		primary key (user_id)
)