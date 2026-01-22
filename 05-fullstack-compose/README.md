# Full-Stack Docker Compose Demo

Komplette Drei-Schichten-Anwendung mit Docker Compose.

## Architektur

```
Browser → Frontend (nginx:3000) → Backend (FastAPI:8000) → Datenbank (PostgreSQL:5432)
```

## Schnellstart

```bash
# Alle Services bauen und starten
docker compose up -d --build

# Status prüfen
docker compose ps

# Logs anzeigen
docker compose logs -f
```

## Zugriff

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Dokumentation**: http://localhost:8000/docs

## Endpunkte testen

```bash
# Health Check
curl http://localhost:8000/health

# Items abrufen
curl http://localhost:8000/api/items

# Info abrufen
curl http://localhost:8000/api/info
```

## Stoppen

```bash
# Container stoppen (Daten behalten)
docker compose down

# Container stoppen und Daten löschen
docker compose down -v
```

## Was du lernst

1. **Multi-Container Orchestrierung** mit Docker Compose
2. **Service-Abhängigkeiten** mit `depends_on`
3. **Health Checks** für die Startreihenfolge
4. **Internes Networking** - Container kommunizieren über Service-Namen
5. **Volume-Persistenz** für die Datenbank
6. **Multi-Stage Builds** für kleine Frontend-Images
