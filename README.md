# Docker Fundamentals - Praxis-Beispiele

Hands-on Beispiele aus der Docker Fundamentals Präsentation.

## Voraussetzungen

- Docker Desktop installiert und gestartet
- Terminal/Kommandozeile

## Beispiele

### 01-flask-hello
**Dein erstes Dockerfile** - Einfache Flask "Hello World" App.

```bash
cd 01-flask-hello
docker build -t flask-hello .
docker run -p 5000:5000 flask-hello
# Öffne: http://localhost:5000
```

---

### 02-fastapi-backend
**Backend API** - FastAPI mit Health-Endpunkt und Auto-Dokumentation.

```bash
cd 02-fastapi-backend
docker build -t fastapi-backend .
docker run -p 8000:8000 fastapi-backend
# Öffne: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

---

### 03-frontend-multistage
**Multi-Stage Build** - Node.js Build → nginx Production-Image.

```bash
cd 03-frontend-multistage
docker build -t frontend-demo .
docker run -p 8080:80 frontend-demo
# Öffne: http://localhost:8080

# Image-Größe prüfen (sollte ~25MB sein, nicht 1GB!)
docker images frontend-demo
```

---

### 04-compose-postgres
**Docker Compose Grundlagen** - PostgreSQL mit persistentem Volume.

```bash
cd 04-compose-postgres
docker compose up -d
# Verbinden: docker compose exec db psql -U demo -d myapp
docker compose down
```

---

### 05-fullstack-compose
**Full-Stack Anwendung** - Frontend + Backend + Datenbank.

```bash
cd 05-fullstack-compose
docker compose up -d --build
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
docker compose down -v
```

---

## Alle Beispiele testen

```bash
# Jeden Build testen (ohne zu starten)
cd 01-flask-hello && docker build -t test-flask . && cd ..
cd 02-fastapi-backend && docker build -t test-fastapi . && cd ..
cd 03-frontend-multistage && docker build -t test-frontend . && cd ..
cd 04-compose-postgres && docker compose config && cd ..
cd 05-fullstack-compose && docker compose config && cd ..

echo "✅ Alle Beispiele validiert!"
```

## Aufräumen

```bash
# Test-Images entfernen
docker rmi flask-hello fastapi-backend frontend-demo test-flask test-fastapi test-frontend 2>/dev/null

# Compose Volumes entfernen
cd 04-compose-postgres && docker compose down -v && cd ..
cd 05-fullstack-compose && docker compose down -v && cd ..

# Ungenutzte Ressourcen aufräumen
docker system prune -f
```

## Kurs-Materialien

Diese Beispiele gehören zum **Docker Fundamentals** Kurs.
- Teil 1: Docker Fundamentals (dieses Repo)
- Teil 2: Kubernetes Fundamentals
- Teil 3: Kubernetes & Helm

Präsentationen verfügbar unter: [neurawork.de](https://neurawork.de)
