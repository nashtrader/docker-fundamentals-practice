# main.py - FastAPI Backend with Database
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Fullstack Demo API")

# Allow frontend to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://localhost/test")


@app.get("/")
def read_root():
    return {"message": "Hello from Backend!", "database": DATABASE_URL.split("@")[1] if "@" in DATABASE_URL else "local"}


@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "backend"}


@app.get("/api/items")
def get_items():
    # In real app, this would query the database
    return {
        "items": [
            {"id": 1, "name": "Docker", "category": "Container"},
            {"id": 2, "name": "Kubernetes", "category": "Orchestration"},
            {"id": 3, "name": "PostgreSQL", "category": "Database"},
        ]
    }


@app.get("/api/info")
def get_info():
    return {
        "app": "Fullstack Demo",
        "version": "1.0.0",
        "database_configured": "@" in DATABASE_URL,
        "running_in_container": os.path.exists("/.dockerenv"),
    }
