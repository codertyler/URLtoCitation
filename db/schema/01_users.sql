drop table if exists users cascade;

create table users (
	user_id INT GENERATED ALWAYS AS IDENTITY,
	email varchar(255) not null,
	membership_type varchar(10) not null,
	verified boolean default 'no',
	membership_start_date time with time zone,
	membership_end_date time with time zone,
	billed_type varchar(10) not null,
	auto_billing boolean default 'yes',
	password varchar(255) not null,
		primary key (user_id)
);

