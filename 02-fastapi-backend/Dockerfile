# Dockerfile - FastAPI Backend
FROM python:3.11-slim

WORKDIR /app

# Copy and install dependencies first (for caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Document the port
EXPOSE 8000

# Start uvicorn server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
