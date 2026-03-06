#!/bin/bash
# Initialize SSL certificates using Let's Encrypt
#
# Usage: ./scripts/init-ssl.sh your-email@example.com
#
# Run this ONCE on the Pi to get initial certificates.
# After that, the certbot container handles renewals automatically.

set -e

DOMAIN="vaqueroisi.org"
SUBDOMAINS="auth.vaqueroisi.org lab.vaqueroisi.org"
EMAIL="${1:?Usage: $0 <email>}"
COMPOSE_FILE="docker-compose.yml"

echo "==> Creating certbot directories..."
mkdir -p certbot/conf certbot/www

echo "==> Starting nginx for ACME challenge..."
docker compose -f "$COMPOSE_FILE" up -d nginx

echo "==> Requesting certificates..."
docker compose -f "$COMPOSE_FILE" run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN" \
    -d $SUBDOMAINS

echo "==> Restarting nginx with SSL..."
docker compose -f "$COMPOSE_FILE" restart nginx

echo "==> Done! SSL certificates installed for $DOMAIN and subdomains."
