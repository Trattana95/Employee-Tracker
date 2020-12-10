USE employeeTracker_db;

INSERT INTO department 
(name)
VALUES 
("business"),
("engineering"),
("legal");

INSERT INTO role 
(title, salary, department_id)
VALUES 
("Business Lead",145000,1),
("Businessperson",90000,1),
("computer Engineer",175000,2),
("Software Engineer",150000,2),
("Senior Lawyer",145000,3),
("Lawyer",130000,3);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES 
("Morgan", "Kim", 1, null),
 ("Madison", "Bear", 2 , 1),
 ("Tyler", "Mark", 3, null),
 ("Tory", "Lanes", 4, 3),
 ("Tina", "Kitten", 5, null),
 ("Larry", "Billy", 6, 5);
