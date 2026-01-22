# Full-Stack Docker Compose Demo

Complete three-tier application with Docker Compose.

## Architecture

```
Browser → Frontend (nginx:3000) → Backend (FastAPI:8000) → Database (PostgreSQL:5432)
```

## Quick Start

```bash
# Build and start all services
docker compose up -d --build

# Check status
docker compose ps

# View logs
docker compose logs -f
```

## Access

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## Test Endpoints

```bash
# Health check
curl http://localhost:8000/health

# Get items
curl http://localhost:8000/api/items

# Get info
curl http://localhost:8000/api/info
```

## Stop

```bash
# Stop containers (keep data)
docker compose down

# Stop and delete data
docker compose down -v
```

## What You'll Learn

1. **Multi-container orchestration** with Docker Compose
2. **Service dependencies** using `depends_on`
3. **Health checks** for startup ordering
4. **Internal networking** - containers talk by service name
5. **Volume persistence** for database
6. **Multi-stage builds** for small frontend images
