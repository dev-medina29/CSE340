create table organization(
	organization_id serial primary key,
	name varchar(150) not null,
	description text not null,
	contact_email varchar(255) not null,
	logo_filename varchar(255) not null	
);
CREATE TABLE ServiceProjects (
    project_id INT PRIMARY KEY,
    organization_id INT NOT NULL,
    Title VARCHAR(150) NOT NULL,
    Description TEXT,
    Location VARCHAR(100),
    Date DATE,
    FOREIGN KEY (organization_id) REFERENCES organization(organization_id)
);

-- BrightFuture Builders Projects
INSERT INTO ServiceProjects (project_id,organization_id, Title, Description, Location, Date) VALUES
(101, 1, 'Community School Renovation', 'Renovating classrooms and facilities for local schools.', 'Brazzaville', '2026-04-10'),
(102, 1, 'Water Well Construction', 'Building sustainable wells to provide clean water.', 'Casablanca', '2026-05-15'),
(103, 1, 'Affordable Housing Pilot', 'Constructing eco-friendly housing units for low-income families.', 'Brazzaville', '2026-06-20'),
(104, 1, 'Bridge Repair Initiative', 'Repairing damaged bridges to improve rural connectivity.', 'Casablanca', '2026-07-05'),
(105, 1, 'Solar Lighting Project', 'Installing solar-powered street lights in underserved areas.', 'Brazzaville', '2026-08-12');

-- GreenHarvest Growers Projects
INSERT INTO ServiceProjects (project_id,organization_id, Title, Description, Location, Date) VALUES
(201, 2, 'Urban Garden Expansion', 'Expanding community gardens to increase local food supply.', 'Casablanca', '2026-04-18'),
(202, 2, 'Composting Workshop', 'Teaching sustainable composting practices to residents.', 'Brazzaville', '2026-05-22'),
(203, 2, 'Hydroponics Training', 'Training youth in hydroponic farming techniques.', 'Casablanca', '2026-06-30'),
(204, 2, 'Farm-to-Table Market', 'Launching a local market for fresh produce.', 'Brazzaville', '2026-07-25'),
(205, 2, 'School Nutrition Program', 'Providing fresh vegetables to school cafeterias.', 'Casablanca', '2026-08-14');

-- UnityServe Volunteers Projects
INSERT INTO ServiceProjects (project_id,organization_id, Title, Description, Location, Date) VALUES
(301, 3, 'Charity Run Event', 'Organizing a fundraising marathon for local charities.', 'Brazzaville', '2026-04-12'),
(302, 3, 'Food Distribution Drive', 'Distributing meals to homeless and vulnerable populations.', 'Casablanca', '2026-05-19'),
(303, 3, 'Blood Donation Campaign', 'Coordinating blood donation events with hospitals.', 'Brazzaville', '2026-06-28'),
(304, 3, 'Youth Mentorship Program', 'Pairing volunteers with students for mentorship.', 'Casablanca', '2026-07-15'),
(305, 3, 'Senior Care Visits', 'Providing companionship and support to elderly residents.', 'Brazzaville', '2026-08-09');
SELECT * FROM ServiceProjects;