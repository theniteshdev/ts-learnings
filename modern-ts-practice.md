# 🧠 1. Ways to Use TypeScript with Node.js

There isn’t just one “correct” way—different setups exist depending on performance, DX (developer experience), and scale.

## ⚙️ 1. Classic: Compile → Run (Production Standard)

```bash
tsc
node dist/index.js
```

* You write `.ts`
* Compile to `.js` using `tsc`
* Run with Node

### Why this is used:

* ✅ Fast runtime (pure JS)
* ✅ Stable for production
* ❌ Slightly slower dev workflow

👉 Industry default for large apps.

---

## ⚡ 2. ts-node (Direct Execution)

```bash
npx ts-node src/index.ts
```

* Runs TS without manual compilation

### Use case:

* Dev only (NOT production)

### Why:

* ✅ Faster iteration
* ❌ Slower runtime
* ❌ Not optimized

---

## ⚡⚡ 3. tsx (Modern favorite)

```bash
npx tsx src/index.ts
```

* Super fast TS execution using esbuild

### Why devs love it:

* 🔥 Instant startup
* 🔥 Supports ESM easily
* 🔥 Cleaner than ts-node

👉 This is becoming the **new default for dev environments**

---

## 📦 4. Bundlers (Advanced Production)

Using tools like:

* esbuild
* webpack
* rollup

### Why:

* Bundle entire backend into one file
* Tree-shaking
* Faster cold start (important for serverless)

👉 Used in:

* Microservices
* Serverless apps

---

## 🧩 5. ESM vs CommonJS (VERY important)

### CommonJS (old Node style)

```ts
const fs = require('fs')
```

### ESM (modern)

```ts
import fs from 'fs'
```

👉 In `tsconfig.json`:

```json
{
  "module": "NodeNext",
  "moduleResolution": "NodeNext"
}
```

💡 **Reality**: Industry is shifting to ESM, but many legacy systems still use CommonJS.

---

# 🧠 2. Advanced TypeScript Concepts (Core for Mastery)

Now the real power 💥

---

## 🔹 1. Generics (Reusable Types)

```ts
function identity<T>(value: T): T {
  return value
}
```

### Why it matters:

* Reusable logic
* Type-safe abstractions

---

## 🔹 2. Advanced Generics (Constraints)

```ts
function getLength<T extends { length: number }>(item: T) {
  return item.length
}
```

👉 Ensures type safety while staying flexible

---

## 🔹 3. Utility Types (VERY IMPORTANT)

Built-in helpers:

```ts
type User = {
  id: number
  name: string
}

// Make all optional
type PartialUser = Partial<User>

// Pick fields
type UserName = Pick<User, "name">

// Remove fields
type WithoutId = Omit<User, "id">
```

💡 Used everywhere in real-world codebases

---

## 🔹 4. Mapped Types

```ts
type ReadonlyUser = {
  readonly [K in keyof User]: User[K]
}
```

👉 Transform types dynamically

---

## 🔹 5. Conditional Types

```ts
type IsString<T> = T extends string ? true : false
```

💡 Powers many advanced libraries

---

## 🔹 6. Infer Keyword (🔥 advanced)

```ts
type ReturnType<T> = T extends (...args: any) => infer R ? R : never
```

👉 Extract types dynamically

---

## 🔹 7. Discriminated Unions (Clean Architecture)

```ts
type Success = { status: "success"; data: string }
type Error = { status: "error"; message: string }

type Response = Success | Error

function handle(res: Response) {
  if (res.status === "success") {
    res.data
  } else {
    res.message
  }
}
```

👉 Used heavily in APIs

---

## 🔹 8. Type Narrowing

```ts
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase())
  }
}
```

---

## 🔹 9. Declaration Merging

```ts
interface User {
  name: string
}

interface User {
  age: number
}
```

👉 Merges automatically

---

## 🔹 10. Module Augmentation (🔥 industry-level)

Used to extend libraries:

```ts
declare module "express" {
  interface Request {
    user?: string
  }
}
```

---

# 🏗️ 3. Node.js + TypeScript Architecture (Industry Level)

## 📁 Folder Structure

```
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── models/
 ├── middlewares/
 ├── utils/
 └── index.ts
```

---

## 🔄 Separation of Concerns

| Layer      | Responsibility |
| ---------- | -------------- |
| Controller | HTTP handling  |
| Service    | Business logic |
| Repository | Database       |
| Model      | Types/schema   |

👉 This is how scalable apps are built.

---

# 🛡️ 4. Best Practices (Industry Gold)

## ✅ 1. Strict Mode ON

```json
{
  "strict": true
}
```

---

## ✅ 2. Avoid `any`

Use:

* `unknown`
* Proper types

---

## ✅ 3. Use Interfaces for Objects

```ts
interface User {
  id: number
}
```

---

## ✅ 4. Prefer Type Inference (Don’t overtype)

```ts
const name = "Nitesh" // TS already knows it's string
```

---

## ✅ 5. Use Zod / Validation Libraries

Example:

* Zod

👉 Validate runtime data (VERY IMPORTANT for APIs)

---

## ✅ 6. Environment Safety

Use:

* dotenv

---

## ✅ 7. Error Handling Pattern

```ts
try {
  // logic
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message)
  }
}
```

---

## ✅ 8. Use Path Aliases

```json
{
  "paths": {
    "@utils/*": ["src/utils/*"]
  }
}
```

---

## ✅ 9. Use ESLint + Prettier

* ESLint
* Prettier

👉 Keeps code clean automatically

---

## ✅ 10. Async/Await Everywhere

Avoid callbacks:

```ts
const data = await fetchData()
```

---

# 🔥 5. Real Industry Stack (Example)

Typical modern backend:

* Node.js + TypeScript
* Express or Fastify
* Database ORM:

  * Prisma
* Validation:

  * Zod
* Testing:

  * Jest

---
