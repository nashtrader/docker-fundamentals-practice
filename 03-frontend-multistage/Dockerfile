# ══════════════════════════════════════════════════════════════
# MULTI-STAGE BUILD EXAMPLE
# ══════════════════════════════════════════════════════════════

# ──────────────────────────────────────────────────────────────
# STAGE 1: Build Environment
# ──────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files (for npm ci caching)
COPY package*.json ./

# Install dependencies (none needed for this demo, but shown for pattern)
RUN npm install 2>/dev/null || true

# Copy source and build
COPY . .
RUN npm run build

# At this point: /app/dist/ contains the built files
# This stage is ~150MB (Node.js + npm + source)

# ──────────────────────────────────────────────────────────────
# STAGE 2: Production Environment
# ──────────────────────────────────────────────────────────────
FROM nginx:alpine

# Copy ONLY the built files from stage 1
# Everything else (Node.js, npm, source code) is discarded!
COPY --from=builder /app/dist /usr/share/nginx/html

# Document the port
EXPOSE 80

# nginx runs by default, but we'll be explicit
CMD ["nginx", "-g", "daemon off;"]

# Final image: ~25MB (nginx + HTML)
# That's ~6x smaller than keeping Node.js!
