create table organization(
	organization_id serial primary key,
	name varchar(150) not null,
	description text not null,
	contact_email varchar(255) not null,
	logo_filename varchar(255) not null	
);
INSERT INTO organization (organization_id, name, description, contact_email, logo_filename)
VALUES
(1, 'BrightFuture Builders',
 'A nonprofit focused on improving community infrastructure through sustainable construction projects.',
 'info@brightfuturebuilders.org',
 'brightfuture-logo.png'),

(2, 'GreenHarvest Growers',
 'An urban farming collective promoting food sustainability and education in local neighborhoods.',
 'contact@greenharvest.org',
 'greenharvest-logo.png'),

(3, 'UnityServe Volunteers',
 'A volunteer coordination group supporting local charities and service initiatives.',
 'hello@unityserve.org',
 'unityserve-logo.png');