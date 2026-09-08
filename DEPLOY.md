# Deployment

Static-rendered Next.js app. The volunteer and Share-Your-Experience forms
send mail from the browser via [EmailJS](https://www.emailjs.com/) — there is
no backend. Ships as a Docker image built by GitHub Actions and run on a VPS
behind Caddy (auto HTTPS).

```
push to main ─▶ GitHub Actions ─▶ build image ─▶ push to GHCR
                                          │
                                          └─▶ ssh to VPS ─▶ docker compose pull && up -d
```

---

## 1. One-time: EmailJS

1. Create an account and add an **Email Service** (Gmail, your SMTP, etc.).
2. Create an **Email Template** that references these variables:
   `{{form_type}}`, `{{from_name}}`, `{{reply_to}}`, `{{message}}`.
   Set the template's *To* to the inbox that should receive submissions and
   its *Reply-To* to `{{reply_to}}`.
3. Note the **Service ID**, **Template ID**, and your account **Public Key**
   (Account → General).
4. Account → Security: turn on **Use allowed origins** and add
   `https://callfromhimalaya.org` (and `http://localhost:3000` for dev).
   Optionally enable reCAPTCHA on the template.

These three IDs are not secret — they ship in the page's JS regardless — but
we still keep them out of the repo and inject them at build time.

## 2. One-time: the VPS

Ubuntu/Debian box with a public IP and your domain's `A` record pointing at it.

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker "$USER"          # re-login after this

sudo mkdir -p /opt/trekking && sudo chown "$USER" /opt/trekking
cd /opt/trekking
```

Put `docker-compose.yml` and `Caddyfile` from this repo into `/opt/trekking`,
then create `/opt/trekking/.env`:

```dotenv
SITE_ADDRESS=callfromhimalaya.org
IMAGE=ghcr.io/pareekshitpokharel49/trekking:latest
```

First run:

```bash
docker login ghcr.io      # only if the GHCR package is private
docker compose pull
docker compose up -d
```

Open `https://callfromhimalaya.org` — Caddy fetches a certificate automatically.

## 3. One-time: GitHub

**Settings → Secrets and variables → Actions** — add repository secrets:

| Secret                            | Value                                                          |
| --------------------------------- | ------------------------------------------------------------- |
| `SSH_HOST`                        | VPS IP or hostname                                            |
| `SSH_USER`                        | SSH user (in the `docker` group)                              |
| `SSH_KEY`                         | private key whose public half is on the VPS                   |
| `SSH_PORT`                        | optional, defaults to `22`                                    |
| `GHCR_USER` / `GHCR_TOKEN`        | only if the image package is private (PAT: `read:packages`)   |

The EmailJS keys are baked into `app/lib/submitForm.ts` as defaults, so no
EmailJS secrets are required. To rotate them without a code change, set
`NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY` as Actions
secrets (they are already passed as build args in the workflow).

`GITHUB_TOKEN` is provided automatically and pushes the image to GHCR. Making
the GHCR package public lets you skip `GHCR_USER` / `GHCR_TOKEN`.

## 4. Deploy

Push to `main`, or run the **Deploy** workflow manually. It builds
`ghcr.io/pareekshitpokharel49/trekking:sha-<commit>` (+ `:latest`) with the
EmailJS build args, then SSHes in and rolls the container.

Rollback: on the VPS,
`IMAGE=ghcr.io/pareekshitpokharel49/trekking:sha-<older> docker compose up -d`.

---

## Local checks

```bash
cp .env.example .env.local        # fill in the EmailJS IDs
npm run build && npm start

# Or the container exactly as prod builds it:
docker build \
  --build-arg NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx \
  --build-arg NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx \
  --build-arg NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxx \
  -t trekking .
docker run --rm -p 3000:3000 trekking
```

## Notes

- `next.config.mjs` sets `output: "standalone"` — the image only carries the
  trimmed server bundle, `public/`, and `.next/static`.
- There is no server-side code now, so you *could* switch to
  `output: "export"` and serve the static files straight from Caddy. The
  standalone container is kept for flexibility.
- Spam controls: a hidden honeypot field in each form plus EmailJS allowed
  origins and (optional) reCAPTCHA. Free tier is 200 emails/month.
