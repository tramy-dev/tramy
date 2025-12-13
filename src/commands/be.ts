/**
 * Backend Developer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateBECommands(): CommandTemplate[] {
  return [
    {
      path: 'be/api.md',
      roleId: 'backend-developer',
      content: `# Create REST API

Create REST API for: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Create a RESTful API endpoint.

## API Design

### Endpoint Definition
| Method | Path | Description |
|--------|------|-------------|
| GET | /api/v1/$ARGUMENTS | List all |
| GET | /api/v1/$ARGUMENTS/:id | Get one |
| POST | /api/v1/$ARGUMENTS | Create |
| PUT | /api/v1/$ARGUMENTS/:id | Update |
| DELETE | /api/v1/$ARGUMENTS/:id | Delete |

### Implementation (Express/NestJS)

\`\`\`typescript
// Controller
@Controller('$ARGUMENTS')
export class $ARGUMENTSController {
  constructor(private readonly service: $ARGUMENTSService) {}

  @Get()
  @ApiOperation({ summary: 'List all $ARGUMENTS' })
  async findAll(@Query() query: ListQueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get $ARGUMENTS by ID' })
  async findOne(@Param('id') id: string) {
    const item = await this.service.findOne(id);
    if (!item) throw new NotFoundException();
    return item;
  }

  @Post()
  @ApiOperation({ summary: 'Create $ARGUMENTS' })
  async create(@Body() dto: Create$ARGUMENTSDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update $ARGUMENTS' })
  async update(@Param('id') id: string, @Body() dto: Update$ARGUMENTSDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete $ARGUMENTS' })
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    await this.service.remove(id);
  }
}
\`\`\`

### DTO Validation

\`\`\`typescript
export class Create$ARGUMENTSDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
\`\`\`

## Checklist
- [ ] Input validation
- [ ] Error handling
- [ ] Authentication
- [ ] Authorization
- [ ] Rate limiting
- [ ] Tests
- [ ] OpenAPI docs
`,
    },
    {
      path: 'be/graphql.md',
      roleId: 'backend-developer',
      content: `# Create GraphQL Schema

Create GraphQL schema for: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Design and implement GraphQL schema.

## Schema Design

\`\`\`graphql
# types/$ARGUMENTS.graphql

type $ARGUMENTS {
  id: ID!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!

  # Relations
  author: User!
  tags: [Tag!]!
}

input Create$ARGUMENTSInput {
  name: String!
  description: String
  tagIds: [ID!]
}

input Update$ARGUMENTSInput {
  name: String
  description: String
  tagIds: [ID!]
}

type Query {
  $ARGUMENTS(id: ID!): $ARGUMENTS
  $ARGUMENTSs(
    first: Int
    after: String
    filter: $ARGUMENTSFilter
  ): $ARGUMENTSConnection!
}

type Mutation {
  create$ARGUMENTS(input: Create$ARGUMENTSInput!): $ARGUMENTS!
  update$ARGUMENTS(id: ID!, input: Update$ARGUMENTSInput!): $ARGUMENTS!
  delete$ARGUMENTS(id: ID!): Boolean!
}

type $ARGUMENTSConnection {
  edges: [$ARGUMENTSEdge!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type $ARGUMENTSEdge {
  node: $ARGUMENTS!
  cursor: String!
}
\`\`\`

## Resolver Implementation

\`\`\`typescript
@Resolver(() => $ARGUMENTS)
export class $ARGUMENTSResolver {
  constructor(private readonly service: $ARGUMENTSService) {}

  @Query(() => $ARGUMENTS, { nullable: true })
  async $ARGUMENTS(@Args('id') id: string) {
    return this.service.findOne(id);
  }

  @Query(() => $ARGUMENTSConnection)
  async $ARGUMENTSs(@Args() args: ConnectionArgs) {
    return this.service.findAll(args);
  }

  @Mutation(() => $ARGUMENTS)
  async create$ARGUMENTS(@Args('input') input: Create$ARGUMENTSInput) {
    return this.service.create(input);
  }

  @ResolveField(() => User)
  async author(@Parent() item: $ARGUMENTS) {
    return this.userService.findOne(item.authorId);
  }
}
\`\`\`

## Checklist
- [ ] Types defined
- [ ] Input validation
- [ ] Resolvers implemented
- [ ] N+1 queries prevented (DataLoader)
- [ ] Authorization
- [ ] Tests
`,
    },
    {
      path: 'be/auth.md',
      roleId: 'backend-developer',
      content: `# Implement Authentication

Implement authentication: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Implement secure authentication.

## JWT Authentication

### Token Generation
\`\`\`typescript
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) return null;

    return user;
  }

  async login(user: User) {
    const payload = { sub: user.id, email: user.email };

    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '15m' }),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refresh(refreshToken: string) {
    const payload = this.jwtService.verify(refreshToken);
    const user = await this.usersService.findOne(payload.sub);
    return this.login(user);
  }
}
\`\`\`

### JWT Guard
\`\`\`typescript
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: Error, user: User) {
    if (err || !user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
\`\`\`

### Protected Route
\`\`\`typescript
@UseGuards(JwtAuthGuard)
@Get('profile')
getProfile(@Request() req) {
  return req.user;
}
\`\`\`

## Security Checklist
- [ ] Passwords hashed (bcrypt)
- [ ] JWT secrets in env vars
- [ ] Short access token expiry
- [ ] Refresh token rotation
- [ ] Rate limiting on auth endpoints
- [ ] Account lockout after failures
`,
    },
    {
      path: 'be/cache.md',
      roleId: 'backend-developer',
      content: `# Setup Caching

Setup caching strategy: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Implement effective caching.

## Redis Caching

### Cache Service
\`\`\`typescript
@Injectable()
export class CacheService {
  constructor(private redis: Redis) {}

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  async set(key: string, value: unknown, ttlSeconds = 3600) {
    await this.redis.set(key, JSON.stringify(value), 'EX', ttlSeconds);
  }

  async del(key: string) {
    await this.redis.del(key);
  }

  async invalidatePattern(pattern: string) {
    const keys = await this.redis.keys(pattern);
    if (keys.length) await this.redis.del(...keys);
  }
}
\`\`\`

### Cache Decorator
\`\`\`typescript
export function Cacheable(keyPrefix: string, ttl = 3600) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const cache = this.cacheService;
      const key = \`\${keyPrefix}:\${JSON.stringify(args)}\`;

      const cached = await cache.get(key);
      if (cached) return cached;

      const result = await originalMethod.apply(this, args);
      await cache.set(key, result, ttl);
      return result;
    };
  };
}
\`\`\`

### Usage
\`\`\`typescript
@Cacheable('user', 300)
async getUser(id: string) {
  return this.db.user.findUnique({ where: { id } });
}
\`\`\`

## Cache Strategies
- **Cache-aside**: Read from cache, fallback to DB
- **Write-through**: Write to cache and DB together
- **Write-behind**: Write to cache, async write to DB

## Checklist
- [ ] Cache keys are consistent
- [ ] TTLs are appropriate
- [ ] Cache invalidation on updates
- [ ] Handle cache misses gracefully
`,
    },
    {
      path: 'be/queue.md',
      roleId: 'backend-developer',
      content: `# Create Job Queue

Create job queue for: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Implement background job processing.

## BullMQ Implementation

### Queue Setup
\`\`\`typescript
// queues/$ARGUMENTS.queue.ts
import { Queue, Worker } from 'bullmq';

export const $ARGUMENTSQueue = new Queue('$ARGUMENTS', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
    removeOnComplete: 100,
    removeOnFail: 1000,
  },
});
\`\`\`

### Worker
\`\`\`typescript
// workers/$ARGUMENTS.worker.ts
const worker = new Worker(
  '$ARGUMENTS',
  async (job) => {
    const { data } = job;

    // Process job
    console.log(\`Processing job \${job.id}\`, data);

    // Update progress
    await job.updateProgress(50);

    // Return result
    return { processed: true };
  },
  {
    connection: redisConnection,
    concurrency: 5,
  }
);

worker.on('completed', (job, result) => {
  console.log(\`Job \${job.id} completed\`, result);
});

worker.on('failed', (job, err) => {
  console.error(\`Job \${job?.id} failed\`, err);
});
\`\`\`

### Adding Jobs
\`\`\`typescript
// Add single job
await $ARGUMENTSQueue.add('process', { userId: '123' });

// Add delayed job
await $ARGUMENTSQueue.add('notify', data, {
  delay: 5 * 60 * 1000, // 5 minutes
});

// Add recurring job
await $ARGUMENTSQueue.add('daily-report', {}, {
  repeat: { cron: '0 9 * * *' },
});
\`\`\`

## Checklist
- [ ] Retries configured
- [ ] Dead letter queue
- [ ] Job progress tracking
- [ ] Logging and monitoring
- [ ] Graceful shutdown
`,
    },
    {
      path: 'be/service.md',
      roleId: 'backend-developer',
      content: `# Create Microservice

Create microservice: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Design a microservice architecture.

## Service Structure

\`\`\`
$ARGUMENTS-service/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/
│   ├── modules/
│   │   └── $ARGUMENTS/
│   │       ├── $ARGUMENTS.controller.ts
│   │       ├── $ARGUMENTS.service.ts
│   │       ├── $ARGUMENTS.repository.ts
│   │       └── dto/
│   ├── common/
│   │   ├── filters/
│   │   ├── guards/
│   │   └── interceptors/
│   └── health/
├── test/
├── Dockerfile
└── docker-compose.yml
\`\`\`

## Docker Configuration

\`\`\`dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main.js"]
\`\`\`

## Health Checks

\`\`\`typescript
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private redis: RedisHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () => this.redis.isHealthy('redis'),
    ]);
  }
}
\`\`\`

## Checklist
- [ ] Single responsibility
- [ ] Health endpoints
- [ ] Graceful shutdown
- [ ] Configuration externalized
- [ ] Logging structured
- [ ] Metrics exposed
`,
    },
    {
      path: 'be/optimize.md',
      roleId: 'backend-developer',
      content: `# Optimize Endpoint

Optimize endpoint: $ARGUMENTS

## Instructions

You are acting as a **Backend Developer**. Optimize API performance.

## Optimization Strategies

### 1. Database Queries
\`\`\`typescript
// Before: N+1 problem
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.find({ userId: user.id });
}

// After: Eager loading
const users = await User.findAll({
  include: [{ model: Post }],
});
\`\`\`

### 2. Pagination
\`\`\`typescript
// Cursor-based pagination
async function getPaginated(cursor?: string, limit = 20) {
  const query = {
    take: limit + 1,
    orderBy: { createdAt: 'desc' },
  };

  if (cursor) {
    query.where = { createdAt: { lt: cursor } };
  }

  const items = await db.find(query);
  const hasMore = items.length > limit;

  return {
    items: items.slice(0, limit),
    nextCursor: hasMore ? items[limit - 1].createdAt : null,
  };
}
\`\`\`

### 3. Caching
\`\`\`typescript
// Response caching
@Get(':id')
@Header('Cache-Control', 'public, max-age=300')
async getItem(@Param('id') id: string) {
  return this.service.findOne(id);
}
\`\`\`

### 4. Compression
\`\`\`typescript
// Enable compression
app.use(compression());
\`\`\`

### 5. Connection Pooling
\`\`\`typescript
// Database pool config
const pool = {
  min: 2,
  max: 10,
  idleTimeoutMillis: 30000,
};
\`\`\`

## Metrics to Track
| Metric | Before | After |
|--------|--------|-------|
| Response time (p50) | | |
| Response time (p99) | | |
| Queries per request | | |
| CPU usage | | |
`,
    },
  ];
}
