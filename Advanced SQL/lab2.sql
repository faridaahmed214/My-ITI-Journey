--Q1--	
insert into faculties (faculty_name, dean, building, budget) 
values ('faculty of law', 'dr. hany aziz', 'g', 8000000) 
returning faculty_id;

--Q2--
update professors set salary = salary * 1.15 
where dept_id = 3 
returning first_name, (salary / 1.15) as old_salary, salary as new_salary;

--Q3--
update students set is_active = false 
where gpa < 2.0 and enroll_date < '2022-01-01' 
returning first_name, last_name;

--Q4--
insert into enrollments (student_id, course_id, semester, year) 
values (5, 1, 'fall', 2023) 
on conflict (student_id, course_id, semester, year) do nothing;

--Q5--
update enrollments set grade = 98, letter_grade = 'A+' 
where student_id = 1 and course_id = 3 and semester = 'fall' and year = 2022;

--Q6--
merge into students as target 
using (values (99, 'giza', 'farida@mail.com', 'farida', 'ahmed')) as source (student_id, address, email, first_name, last_name) 
on target.student_id = source.student_id 
when matched then update set address = source.address 
when not matched then insert (student_id, address, email, first_name, last_name) values (source.student_id, source.address, source.email, source.first_name, source.last_name);

--Q7--
select * into high_gpa_students 
from students where gpa >= 3.5;

--Q8--
create table dept_summary as 
select d.dept_name, count(s.student_id) as student_count, avg(s.gpa) as average_gpa, sum(sc.amount) as total_scholarships 
from departments d 
left join students s on d.dept_id = s.dept_id 
left join scholarships sc on s.student_id = sc.student_id 
group by d.dept_name;

--Q9--
create table enrollments_struct as select * from enrollments where false;
create table enrollments_all (like enrollments including all);
insert into enrollments_all 
select * from enrollments;

--Q10--
create table exam_results (
  id serial primary key, 
  status varchar(15) default 'pending', 
  score int default 0, 
  exam_date date default current_date, 
  created_by text default current_user
);
insert into exam_results (id) values (default);
insert into exam_results (status, score, exam_date, created_by) values ('success', 99, '2026-03-24', 'farida');

--Q11--
select first_name, metadata -> 'hobbies' ->> 0 as first_hobby, array_length(metadata -> 'languages') as langCount, metadata ->> 'laptop' as hasLaptop 
from students 
where metadata is not null;


--Q12--
create type student_level as enum ('freshman', 'sophomore', 'junior', 'senior');
alter table students add column level student_level;
update students set level = 'freshman' where gpa < 2.5;
update students set level = 'sophomore' where gpa >= 2.5 and gpa < 3.0;
update students set level = 'junior' where gpa >= 3.0 and gpa < 3.5;
update students set level = 'senior' where gpa >= 3.5;

--Q13--
create type contact_info as (phone text, email text, city text);
create table student_contacts (student_id int references students(student_id), info contact_info);