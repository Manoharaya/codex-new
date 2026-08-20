# Real-Time Event Streaming Data Pipeline

Detailed schema and data flow blueprint for migrating legacy batch processing into a sub-10ms latency event-driven architecture.

## Visual Blueprint

```mermaid
sequenceDiagram
    participant Web as Web/Mobile Clients
    participant Gateway as API Gateway
    participant Kafka as Apache Kafka (Event Bus)
    participant ClickHouse as ClickHouse (OLAP DB)
    participant Dash as Analytics Dashboard
    
    Web->>Gateway: 1. Send User Action Event (e.g. Click)
    Gateway->>Kafka: 2. Publish to 'user_events' Topic
    Kafka-->>ClickHouse: 3. Materialized View consumes Stream
    ClickHouse-->>ClickHouse: 4. Aggregates data in real-time
    Dash->>ClickHouse: 5. Query sub-second analytics
    ClickHouse->>Dash: 6. Render real-time charts
```

## Architecture Summary
- **Message Broker:** Apache Kafka acts as the central nervous system handling millions of events/sec.
- **Analytics DB:** ClickHouse natively ingests Kafka topics and aggregates data on the fly.
- **CDC:** Debezium (optional) captures database changes and pipes them to Kafka.

*Note: This document provides the high-level topology. For detailed config snippets, contact the Codex Neural engineering team.*
