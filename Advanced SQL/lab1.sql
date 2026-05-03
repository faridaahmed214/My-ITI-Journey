--Q1--
CREATE SCHEMA archive;
CREATE TABLE archive.test (id INT, info TEXT);
DROP SCHEMA archive CASCADE;

--Q2--
SELECT first_name as name, enroll_date AS start 
FROM students 
WHERE gender = 'Female' and enroll_date > '2021-01-01' AND is_active = TRUE;

--Q3--
SELECT first_name as name 
FROM professors 
WHERE (first_name LIKE 'S%' OR first_name LIKE 'K%') and is_active = TRUE;

--Q4--
SELECT first_name as name 
FROM students 
WHERE phone IS NULL;

--Q5--
(SELECT first_name as name, salary, 'high' as Rank FROM professors order by salary DESC LIMIT 5)
UNION ALL
(SELECT first_name AS name, salary, 'Low' AS Rank FROM professors ORDER BY salary ASC LIMIT 5);

--Q6--
SELECT course_name AS name 
FROM courses 
WHERE course_name ILIKE '%Systems%' OR course_name ILIKE '%Analysis%';

--Q7--
SELECT first_name AS name, gpa 
FROM students 
WHERE dept_id NOT IN (1, 3, 5) AND gpa > 3.0;

--Q8--
SELECT d.dept_name AS dept,COUNT(s.student_id) AS total,AVG(s.gpa) AS average,MIN(s.gpa) AS min,MAX(s.gpa) AS max
FROM departments d LEFT JOIN students s ON d.dept_id = s.dept_id
GROUP BY d.dept_name;

--Q9--
SELECT f.faculty_name AS faculty, SUM(p.salary) AS budget
FROM faculties f
JOIN departments d ON f.faculty_id = d.faculty_id
JOIN professors p ON d.dept_id = p.dept_id
GROUP BY f.faculty_name;

--Q10--
SELECT p.first_name AS prof, m.first_name AS manager
FROM professors p
LEFT JOIN professors m ON p.manager_id = m.prof_id;

--q11--
SELECT s.first_name AS name, d.location AS city
FROM students s
JOIN departments d ON s.dept_id = d.dept_id
WHERE d.location = 'Cairo';

--q12--
UPDATE enrollments 
SET grade = 98, letter_grade = 'A+'
WHERE student_id = 1 AND course_id = 3 AND semester = 'Fall' AND year = 2022;

--q13--
ALTER TABLE students ADD COLUMN verified BOOLEAN DEFAULT FALSE;

--q14--
ALTER TABLE professors ADD CONSTRAINT salary_limit CHECK (salary BETWEEN 5000 AND 100000);

--q15--
ALTER TABLE students RENAME COLUMN verified TO is_phone_verified;
ALTER TABLE students DROP COLUMN is_phone_verified;