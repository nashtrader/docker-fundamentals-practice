# Dockerfile - Flask Hello World
FROM python:3.11-slim

WORKDIR /app

# Copy and install dependencies first (for caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Document the port
EXPOSE 5000

# Start command
CMD ["python", "app.py"]
