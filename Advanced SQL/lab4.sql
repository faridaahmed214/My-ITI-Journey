--q1--
select first_name,nationality from students;
update students set nationality = null where student_id=1;
select first_name, coalesce(nationality, 'unknown') as nationality 
from students;

--q2--
select first_name, gpa from students;
select first_name, gpa as real_gpa, nullif(gpa, 0.0) as not0
from students;

--q3--
select first_name, coalesce(nullif(gpa, 0.0)::text, 'not evaluated') as status 
from students;

--bonus--
select d.dept_name, count(s.student_id) as student_count
from departments d 
left join students s on d.dept_id = s.dept_id 
group by d.dept_name;
----------------------------------------------------------
select d.dept_name, count(s.student_id) as student_count, 
sum(s.gpa) / count(s.student_id) as avg_gpa 
from departments d 
left join students s on d.dept_id = s.dept_id 
group by d.dept_name;
----------------------------------------------------------
select d.dept_name, count(s.student_id) as student_count, 
coalesce(sum(s.gpa) / nullif(count(s.student_id), 0), 0) as avg_gpa 
from departments d 
left join students s on d.dept_id = s.dept_id 
group by d.dept_name;

--q4--
create temp table temp_course_stats as 
select course_code, course_name, count(student_id) as enrolled_count, avg(grade) as avg_grade 
from courses c join enrollments e on c.course_id = e.course_id 
group by course_code, course_name;
select * from temp_course_stats where avg_grade > 75;


--q5--
create index idx_std_dept on students(dept_id);

--q6--
create unique index idx_std_email on students(email);
insert into students (first_name, last_name, email, dept_id) 
values ('malak', 'ahmed', 'farida@mail.com', 1);

--q7--
create index idx_prof_active_sal on professors(salary) where is_active = true;

--q8--
create or replace view v_student_details as 
select s.student_id, (s.first_name || ' ' || s.last_name) as full_name, s.email, d.dept_name, f.faculty_name ,s.dept_id
from students s join departments d on s.dept_id = d.dept_id join faculties f on d.faculty_id = f.faculty_id;
select * from v_student_details where dept_id = 3;

update students set first_name = 'Farida' where student_id = 1;
select * from v_student_details where student_id = 1;

--q9--
create table enrollment_audit (audit_id serial primary key, student_id integer, old_grade numeric, new_grade numeric, changed_at timestamptz , changed_by text );


create or replace function log_grade_changes()
returns trigger as $$
begin
    if old.grade is distinct from new.grade then
        insert into enrollment_audit(student_id, old_grade, new_grade, changed_at, changed_by)
        values (old.student_id, old.grade, new.grade, now(), current_user);
    end if;
    
    return new;
end;
$$ language plpgsql;

create trigger trg_grade_audit
before update on enrollments
for each row
execute function log_grade_changes();

--q10--
select grade from enrollments where enrollment_id =1;
update enrollments set grade = 85 where enrollment_id = 1;
select * from enrollment_audit;

--q11--
create or replace function fix_prof_salary() returns trigger as $$ 
begin 
if new.salary is null or new.salary < 5000 then new.salary := 5000; end if; 
return new; end; $$ language plpgsql;

create trigger trg_salary_min before insert on professors for each row execute function fix_prof_salary();

insert into professors (first_name, last_name, salary, dept_id,email) 
values ('Ahmed', 'Ali', 3000, 1,'ahmed@gmail.com');
select * from professors where first_name = 'Ahmed';

-- q12
CREATE TABLE IF NOT EXISTS salary_log ( 
  log_id    SERIAL PRIMARY KEY, 
  prof_id   INTEGER, 
  old_salary NUMERIC, 
  new_salary NUMERIC, 
  changed_by TEXT DEFAULT CURRENT_USER, 
  changed_at TIMESTAMPTZ DEFAULT NOW() 
);

begin;

update professors 
set salary = salary * 1.10 
where dept_id = 1;

insert into salary_log (prof_id, old_salary, new_salary)
select prof_id, salary / 1.10, salary 
from professors 
where dept_id = 1;

select * from professors where dept_id = 1;
select * from salary_log;

commit;


-- q13: rollback
begin; delete from enrollments where student_id = 3; rollback;
select * from enrollments where student_id = 3; 


-- q14: savepoints

select faculty_id, budget from faculties where faculty_id in (1, 2);

begin; update faculties set budget = budget + 500000 where faculty_id = 1; 
savepoint sp1; update faculties set budget = budget + 500000 where faculty_id = 2; 
rollback to savepoint sp1; commit;

select faculty_id, budget from faculties where faculty_id in (1, 2);


--q15--
create role uni_readonly;
create role uni_readwrite;
grant usage on schema public to uni_readonly;
grant select on all tables in schema public to uni_readonly;
grant usage on schema public to uni_readwrite;
grant select, insert, update, delete on all tables in schema public to uni_readwrite;

select rolname from pg_roles where rolname like 'uni_%';

set role uni_readonly;
select * from students limit 5;
insert into students (first_name, last_name, email) 
values ('test', 'user', 'test@mail.com');
reset role;


--q16--
revoke delete on students from uni_readwrite;

set role uni_readwrite;
delete from students where student_id = 1; 
reset role;

revoke all privileges on all tables in schema public from uni_readonly;
revoke usage on schema public from uni_readonly;
