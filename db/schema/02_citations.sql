drop table if exists citations cascade;


create table citations (
	citations_id int generated always as identity,
  citation_url varchar(500) not null,
	citation varchar(1000) not null,
  citation_date varchar(20) not null,
  user_id int not null,
	constraint fk_user
    foreign key(user_id)
      references users(user_id)
      on delete cascade
)