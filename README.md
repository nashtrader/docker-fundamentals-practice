# Docker Fundamentals - Practice Examples

Hands-on examples from the Docker Fundamentals presentation.

## Prerequisites

- Docker Desktop installed and running
- Terminal/Command Prompt

## Examples

### 01-flask-hello
**Your first Dockerfile** - Simple Flask "Hello World" app.

```bash
cd 01-flask-hello
docker build -t flask-hello .
docker run -p 5000:5000 flask-hello
# Visit: http://localhost:5000
```

---

### 02-fastapi-backend
**Backend API** - FastAPI with health endpoint and auto-docs.

```bash
cd 02-fastapi-backend
docker build -t fastapi-backend .
docker run -p 8000:8000 fastapi-backend
# Visit: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

---

### 03-frontend-multistage
**Multi-Stage Build** - Node.js build → nginx production image.

```bash
cd 03-frontend-multistage
docker build -t frontend-demo .
docker run -p 8080:80 frontend-demo
# Visit: http://localhost:8080

# Check image size (should be ~25MB, not 1GB!)
docker images frontend-demo
```

---

### 04-compose-postgres
**Docker Compose Basics** - PostgreSQL with persistent volume.

```bash
cd 04-compose-postgres
docker compose up -d
# Connect: docker compose exec db psql -U demo -d myapp
docker compose down
```

---

### 05-fullstack-compose
**Full-Stack Application** - Frontend + Backend + Database.

```bash
cd 05-fullstack-compose
docker compose up -d --build
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
docker compose down -v
```

---

## Quick Test All Examples

```bash
# Test each build (without running)
cd 01-flask-hello && docker build -t test-flask . && cd ..
cd 02-fastapi-backend && docker build -t test-fastapi . && cd ..
cd 03-frontend-multistage && docker build -t test-frontend . && cd ..
cd 04-compose-postgres && docker compose config && cd ..
cd 05-fullstack-compose && docker compose config && cd ..

echo "✅ All examples validated!"
```

## Cleanup

```bash
# Remove test images
docker rmi flask-hello fastapi-backend frontend-demo test-flask test-fastapi test-frontend 2>/dev/null

# Remove compose volumes
cd 04-compose-postgres && docker compose down -v && cd ..
cd 05-fullstack-compose && docker compose down -v && cd ..

# Prune unused resources
docker system prune -f
```
