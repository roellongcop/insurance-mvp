-- backend/src/db/migration.sql
CREATE TABLE submissions (
     id SERIAL PRIMARY KEY,
     age INT NOT NULL,
     income INT NOT NULL,
     dependents INT NOT NULL,
     risk VARCHAR(10) NOT NULL,
     recommended_plan TEXT NOT NULL,
     explanation TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
