# Life Insurance Recommendation MVP

## Overview
A simple prototype that takes basic life insurance recommendation.

## Tech Stack
- **Frontend**: Next.js + TypeScript
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL
- **Containerization**: Docker + Docker Compose
- **Deployment**: AWS ECS / Elastic Beanstalk (notes below)

## Getting Started

1. **Clone & Install**
   ```bash
   git clone ... && cd insurance-mvp

2. **Install**
    ```bash
   npm install
    ```
3. **Build and Start**
   ```bash
    make start
    ```

### Description
Mono repo structure with a single service for the life insurance recommendation system.
This is a minimal viable product (MVP) for a life insurance recommendation system. It uses a simple rule-based engine to provide recommendations based on user input.

### AWS Deployment Notes
- Push your Docker images to ECR.
- Configure ECS service/task definitions with port mappings.
- Set up RDS instance for PostgreSQL.
- Update service env vars: DATABASE_URL.
