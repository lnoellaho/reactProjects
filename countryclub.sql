CREATE TABLE members (
  id serial PRIMARY KEY,
  surname varchar,
  first_name varchar,
  address varchar,
  zipcode integer,
  telephone varchar,
  recommended_by integer REFERENCES members(id),
  join_date timestamp without time zone
  );

CREATE TABLE facilities (
    id serial PRIMARY KEY,
    name varchar,
    member_cost numeric,
    guest_cost numeric,
    initial_out_lay numeric,
    monthly_maintenance numeric
);

CREATE TABLE bookings (
    id serial PRIMARY KEY,
    facility_id integer REFERENCES facilities(id),
    member_id integer REFERENCES members(id),
    start_time timestamp,
    slots integer
);


SELECT b.start_time
FROM bookings b JOIN members m ON b.member_id = m.id
WHERE m.surname = 'Farrell' AND m.first_name = 'David';

------------------------------------------------------------------------------

SELECT b.start_time, f.first_name
FROM bookings AS b JOIN facilities AS f ON b.facility_id = f.id
WHERE DATE(b.start_time)= '2012-09-21'
ORDER BY b.start_time ASC;

-----------------------------------------------------------------------------

SELECT DISTINCT m.first_name, m.surname, f.name
FROM members AS m
JOIN bookings as b ON m.id=b.member_id, bookings AS bb JOIN facilities AS f ON bb.facility_id = f.id
WHERE DATE(b.start_time) = '2012-09-21'
ORDER BY m.first_name ASC;

-----------------------------------------------------------------------------

SELECT DISTINCT m.first_name, m.surname, f.name, COUNT(f.name)
FROM members AS m
JOIN bookings as b ON m.id=b.member_id, bookings AS bb JOIN facilities AS f ON bb.facility_id = f.id
WHERE DATE(b.start_time) = '2012-09-21'
GROUP BY m.first_name, b.start_time, m.surname, f.name
ORDER BY m.first_name ASC;

-----------------------------------------------------------------------------

SELECT DISTINCT m.first_name, m.surname, f.name, COUNT(f.name)
FROM members AS m
JOIN bookings as b ON m.id=b.member_id, bookings AS bb JOIN facilities AS f ON bb.facility_id = f.id
WHERE m.first_name = 'Nancy' AND m.surname= 'Dare'
GROUP BY m.first_name, b.start_time, m.surname, f.name
ORDER BY m.first_name ASC;

-----------------------------------------------------------------------------

SELECT DISTINCT m.first_name, m.surname
FROM members AS m
JOIN members AS mm ON m.id = mm.recommended_by
ORDER BY m.surname ASC;

-----------------------------------------------------------------------------

SELECT DISTINCT m.first_name || ' ' || m.surname AS member,
(SELECT mm.first_name || ' ' || mm.surname AS recommender
FROM members AS mm
WHERE m.recommended_by = mm.id)
FROM members AS m;
//changed names for clarification
SELECT DISTINCT originalmember.first_name || ' ' || originalmember.surname AS member,
(SELECT recommember.first_name || ' ' || recommember.surname AS recommender
FROM members AS recommember
WHERE originalmember.recommended_by = recommember.id)
FROM members AS originalmember;
