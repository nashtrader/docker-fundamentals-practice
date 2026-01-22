# PostgreSQL mit Docker Compose

## Starten

```bash
docker compose up -d
```

## Verbinden

```bash
# Mit psql im Container
docker compose exec db psql -U demo -d myapp

# Oder mit externem Client
psql -h localhost -U demo -d myapp
# Password: secret123
```

## Test: Daten bleiben erhalten!

```bash
# 1. Datenbank erstellen
docker compose exec db psql -U demo -d myapp -c "CREATE TABLE test (id INT, name TEXT);"
docker compose exec db psql -U demo -d myapp -c "INSERT INTO test VALUES (1, 'Docker rocks!');"

# 2. Container stoppen und löschen
docker compose down

# 3. Wieder starten
docker compose up -d

# 4. Daten sind noch da!
docker compose exec db psql -U demo -d myapp -c "SELECT * FROM test;"
```

## Aufräumen (ACHTUNG: Löscht Daten!)

```bash
docker compose down -v
```
