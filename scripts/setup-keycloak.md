# Keycloak Setup Guide

After `docker compose up -d`, configure Keycloak:

## 1. Access Keycloak Admin Console

Go to `https://auth.vaqueroisi.org` and log in with the admin credentials from `.env`.

## 2. Create the "visi" Realm

1. Click the realm dropdown (top-left) → "Create Realm"
2. Name: `visi`
3. Click "Create"

## 3. Create the OAuth2 Client

1. Go to Clients → "Create client"
2. Client ID: `visi-lab`
3. Client authentication: **ON**
4. Authentication flow: check **Standard flow**
5. Click "Next" → "Save"
6. Under the "Settings" tab:
   - Valid redirect URIs: `https://lab.vaqueroisi.org/oauth2/callback`
   - Web origins: `https://lab.vaqueroisi.org`
7. Under the "Credentials" tab:
   - Copy the **Client secret** → paste into `.env` as `OAUTH2_CLIENT_SECRET`

## 4. Create Users

1. Go to Users → "Add user"
2. Fill in username, email, first/last name
3. Click "Create"
4. Go to the "Credentials" tab → "Set password"
5. Uncheck "Temporary" if you don't want forced password change

## 5. Generate Cookie Secret

Run this and paste the output into `.env` as `OAUTH2_COOKIE_SECRET`:

```bash
python3 -c 'import os,base64; print(base64.urlsafe_b64encode(os.urandom(32)).decode())'
```

## 6. Restart oauth2-proxy

```bash
docker compose restart oauth2-proxy
```

## Flow

1. User clicks "Login" on vaqueroisi.org
2. Redirects to `https://lab.vaqueroisi.org`
3. oauth2-proxy sees no session → redirects to Keycloak login
4. User authenticates with Keycloak
5. Keycloak redirects back to `https://lab.vaqueroisi.org/oauth2/callback`
6. oauth2-proxy validates the token, sets a session cookie
7. User sees the lab content
