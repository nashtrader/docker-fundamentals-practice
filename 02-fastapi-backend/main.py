# main.py - FastAPI Backend
from fastapi import FastAPI

app = FastAPI(title="Docker Demo API")


@app.get("/")
def read_root():
    return {"message": "Hello Docker!"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}


@app.get("/info")
def info():
    return {
        "app": "FastAPI Docker Demo",
        "version": "1.0.0",
        "container": True
    }
