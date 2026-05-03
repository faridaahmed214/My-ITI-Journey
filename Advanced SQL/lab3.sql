--q1--
select first_name, salary, rank() over (order by salary desc) as rank_gaps, dense_rank() over (order by salary desc) as rank_no_gaps 
from professors;

--q2--
select first_name, enroll_date, gpa, lag(gpa) over (order by enroll_date) as prev_gpa, lead(gpa) over (order by enroll_date) as next_gpa 
from students;

--q3--
select scholarship_id, amount, start_date, 
sum(amount) over (order by start_date, scholarship_id) as running_total 
from scholarships;

--q4--
select first_name, gpa, 
case 
  when ntile(4) over (order by gpa desc) = 1 then 'top' 
  when ntile(4) over (order by gpa desc) = 2 then 'high' 
  when ntile(4) over (order by gpa desc) = 3 then 'average' 
  else 'low' end as gpa_label 
from students;

--q5--
select course_code, substring(course_code from 1 for 3) as prefix, substring(course_code from '[0-9]') as first_digit_val, position(substring(course_code from '[0-9]') in course_code) as digit_pos
from courses;

--q6--
create or replace function get_dept_student_count(p_dept_id integer) 
returns integer as $$ 
begin 
return (select count(*) from students where dept_id = p_dept_id); 
end; 
$$ language plpgsql;

select get_dept_student_count(1);

--q7--
create or replace function give_gpa_bonus(p_dept_id integer, p_bonus_percent numeric) 
returns table(student_name text, old_gpa numeric, new_gpa numeric) as $$ 
begin 
return query 
select first_name, gpa, (gpa * (1 + p_bonus_percent/100)) 
from students where dept_id = p_dept_id; 
end; 
$$ language plpgsql;

--q8--
create or replace procedure transfer_student(p_student_id int, p_new_dept_id int) 
language plpgsql as $$ 
begin 
update students set dept_id = p_new_dept_id where student_id = p_student_id; 
raise notice 'student % is now in department %', p_student_id, p_new_dept_id; 
end; 
$$;