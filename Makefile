build-backend:
	echo "Building backend..."
	npm run build -w backend

build-frontend:
	echo "Building frontend..."
	npm run build -w frontend

build:
	make build-backend
	make build-frontend

start:
	echo "Starting application..."
	make build
	docker-compose down -v
	docker-compose up

