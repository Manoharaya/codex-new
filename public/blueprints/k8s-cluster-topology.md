# Zero-Downtime E-Commerce Cluster Topology

High-res topology map demonstrating how we scale e-commerce infrastructure to 50k RPS with instant HPA triggers and Multi-AZ failover.

## Visual Blueprint

```mermaid
flowchart TB
    Traffic((Internet Traffic)) --> ALB[AWS Application Load Balancer]
    
    subgraph EKS Cluster [Kubernetes EKS Cluster]
        ALB --> Ingress[NGINX Ingress Controller]
        
        subgraph AZ1 [Availability Zone A]
            Ingress --> Pod1[Frontend Pods]
            Pod1 --> Svc1[Checkout Service]
        end
        
        subgraph AZ2 [Availability Zone B]
            Ingress --> Pod2[Frontend Pods]
            Pod2 --> Svc2[Checkout Service]
        end
    end
    
    Svc1 --> Master[(PostgreSQL Master)]
    Svc2 --> Replica[(PostgreSQL Replica)]
    
    Master -.->|Async Sync| Replica
    
    style Traffic fill:#6F3FF5,color:#fff
    style Master fill:#3b82f6,color:#fff
    style Replica fill:#93c5fd,color:#000
```

## Architecture Summary
- **Orchestration:** Kubernetes (EKS) across multiple Availability Zones for zero downtime.
- **Ingress:** NGINX / ALB handling SSL termination and rate limiting.
- **Database:** PostgreSQL HA via Patroni with async replication.

*Note: This document provides the high-level topology. For detailed config snippets, contact the Codex Neural engineering team.*
