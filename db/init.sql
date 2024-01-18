SELECT 'CREATE DATABASE projectsdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'projectsdb')\gexec