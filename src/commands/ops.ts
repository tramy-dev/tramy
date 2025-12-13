/**
 * DevOps Engineer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateOpsCommands(): CommandTemplate[] {
  return [
    {
      path: 'ops/ci.md',
      roleId: 'devops-engineer',
      content: `# Setup CI Pipeline

Setup CI pipeline for: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Create a CI pipeline.

## GitHub Actions CI

\`\`\`yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: \${{ github.workflow }}-\${{ github.ref }}
  cancel-in-progress: true

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run typecheck

  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test
        env:
          DATABASE_URL: postgres://postgres:postgres@localhost:5432/test

  build:
    runs-on: ubuntu-latest
    needs: [lint, typecheck, test]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: build
          path: dist/
\`\`\`

## Pipeline Stages
1. Lint - Code style
2. Typecheck - Type safety
3. Test - Unit/Integration
4. Build - Compile/Bundle
5. Security Scan - Vulnerabilities

## Checklist
- [ ] Caching configured
- [ ] Parallel jobs where possible
- [ ] Secrets properly managed
- [ ] Artifacts uploaded
- [ ] Notifications set up
`,
    },
    {
      path: 'ops/cd.md',
      roleId: 'devops-engineer',
      content: `# Setup CD Pipeline

Setup CD pipeline for: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Create a CD pipeline.

## GitHub Actions CD

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      image_tag: \${{ steps.meta.outputs.tags }}
    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}

      - name: Docker meta
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ghcr.io/\${{ github.repository }}
          tags: |
            type=sha,prefix=

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: \${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to staging
        run: |
          # Deploy using kubectl, helm, or cloud CLI
          kubectl set image deployment/app app=\${{ needs.build.outputs.image_tag }}

  deploy-production:
    needs: [build, deploy-staging]
    runs-on: ubuntu-latest
    environment: production
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          kubectl set image deployment/app app=\${{ needs.build.outputs.image_tag }}
\`\`\`

## Deployment Checklist
- [ ] Build artifact created
- [ ] Tests passed
- [ ] Security scan passed
- [ ] Staging deployment successful
- [ ] Smoke tests passed
- [ ] Production approval
`,
    },
    {
      path: 'ops/infra.md',
      roleId: 'devops-engineer',
      content: `# Create Infrastructure

Create infrastructure for: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Define infrastructure as code.

## Terraform Configuration

\`\`\`hcl
# main.tf
terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "terraform-state"
    key    = "$ARGUMENTS/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = var.region
}

# VPC
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "\${var.project}-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = var.environment != "production"
}

# ECS Cluster
resource "aws_ecs_cluster" "main" {
  name = "\${var.project}-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

# RDS Database
module "rds" {
  source  = "terraform-aws-modules/rds/aws"
  version = "~> 6.0"

  identifier = "\${var.project}-db"

  engine         = "postgres"
  engine_version = "15"
  instance_class = var.db_instance_class

  allocated_storage = 20
  storage_encrypted = true

  db_name  = var.db_name
  username = var.db_username
  port     = 5432

  vpc_security_group_ids = [module.security_group.security_group_id]
  subnet_ids             = module.vpc.private_subnets
}
\`\`\`

\`\`\`hcl
# variables.tf
variable "region" {
  default = "us-east-1"
}

variable "project" {
  type = string
}

variable "environment" {
  type = string
}

variable "db_instance_class" {
  default = "db.t3.micro"
}
\`\`\`

## Commands
\`\`\`bash
terraform init
terraform plan
terraform apply
\`\`\`
`,
    },
    {
      path: 'ops/docker.md',
      roleId: 'devops-engineer',
      content: `# Dockerize Service

Dockerize service: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Create Docker configuration.

## Dockerfile (Multi-stage)

\`\`\`dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Prune dev dependencies
RUN npm prune --production

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Add non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 appuser

# Copy built application
COPY --from=builder --chown=appuser:nodejs /app/dist ./dist
COPY --from=builder --chown=appuser:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:nodejs /app/package.json ./

USER appuser

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "dist/main.js"]
\`\`\`

## Docker Compose

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/app
      - REDIS_URL=redis://redis:6379
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: app
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d app"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
\`\`\`

## Checklist
- [ ] Multi-stage build
- [ ] Non-root user
- [ ] Health check
- [ ] .dockerignore configured
- [ ] Image size optimized
`,
    },
    {
      path: 'ops/k8s.md',
      roleId: 'devops-engineer',
      content: `# Kubernetes Deployment

Create Kubernetes deployment: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Create Kubernetes manifests.

## Deployment

\`\`\`yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: $ARGUMENTS
  labels:
    app: $ARGUMENTS
spec:
  replicas: 3
  selector:
    matchLabels:
      app: $ARGUMENTS
  template:
    metadata:
      labels:
        app: $ARGUMENTS
    spec:
      containers:
        - name: $ARGUMENTS
          image: ghcr.io/org/$ARGUMENTS:latest
          ports:
            - containerPort: 3000
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: $ARGUMENTS-secrets
                  key: database-url
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
          readinessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 15
            periodSeconds: 20
\`\`\`

## Service

\`\`\`yaml
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: $ARGUMENTS
spec:
  selector:
    app: $ARGUMENTS
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP
\`\`\`

## Ingress

\`\`\`yaml
# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: $ARGUMENTS
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
    - hosts:
        - $ARGUMENTS.example.com
      secretName: $ARGUMENTS-tls
  rules:
    - host: $ARGUMENTS.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: $ARGUMENTS
                port:
                  number: 80
\`\`\`

## HPA

\`\`\`yaml
# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: $ARGUMENTS
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: $ARGUMENTS
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
\`\`\`
`,
    },
    {
      path: 'ops/monitor.md',
      roleId: 'devops-engineer',
      content: `# Setup Monitoring

Setup monitoring for: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Configure monitoring and alerting.

## Prometheus Metrics

\`\`\`typescript
// metrics.ts
import { Counter, Histogram, Registry } from 'prom-client';

export const registry = new Registry();

export const httpRequestsTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'path', 'status'],
  registers: [registry],
});

export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'path'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 5],
  registers: [registry],
});

// Middleware
app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer({
    method: req.method,
    path: req.path,
  });

  res.on('finish', () => {
    httpRequestsTotal.inc({
      method: req.method,
      path: req.path,
      status: res.statusCode,
    });
    end();
  });

  next();
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', registry.contentType);
  res.end(await registry.metrics());
});
\`\`\`

## Grafana Dashboard

Key panels:
- Request rate (rps)
- Error rate (%)
- Latency (p50, p95, p99)
- Active connections
- CPU/Memory usage

## Alerting Rules

\`\`\`yaml
# alerts.yaml
groups:
  - name: $ARGUMENTS
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: High error rate detected

      - alert: HighLatency
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: High latency detected
\`\`\`

## Checklist
- [ ] Metrics exposed
- [ ] Dashboards created
- [ ] Alerts configured
- [ ] On-call rotation set
- [ ] Runbooks written
`,
    },
    {
      path: 'ops/deploy.md',
      roleId: 'devops-engineer',
      content: `# Deploy to Environment

Deploy to: $ARGUMENTS

## Instructions

You are acting as a **DevOps Engineer**. Execute deployment.

## Pre-deployment Checklist
- [ ] All tests passing
- [ ] Security scan passed
- [ ] Database migrations ready
- [ ] Feature flags configured
- [ ] Rollback plan documented

## Deployment Steps

### 1. Create Release
\`\`\`bash
git tag v1.x.x
git push origin v1.x.x
\`\`\`

### 2. Run Migrations
\`\`\`bash
kubectl exec -it deploy/app -- npm run migrate
\`\`\`

### 3. Deploy Application
\`\`\`bash
kubectl set image deployment/app app=image:v1.x.x
kubectl rollout status deployment/app
\`\`\`

### 4. Verify Deployment
\`\`\`bash
# Check pods
kubectl get pods -l app=app

# Check logs
kubectl logs -l app=app --tail=100

# Health check
curl https://api.example.com/health
\`\`\`

### 5. Smoke Tests
- [ ] Homepage loads
- [ ] API responds
- [ ] Auth works
- [ ] Critical flows work

## Rollback Procedure
\`\`\`bash
kubectl rollout undo deployment/app
kubectl rollout status deployment/app
\`\`\`

## Post-deployment
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify logs
- [ ] Update status page
`,
    },
  ];
}
