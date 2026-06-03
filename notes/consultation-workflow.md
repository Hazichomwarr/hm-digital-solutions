# Consultation Workflow Notes

## Core Principle

Senior developers do not memorize everything.

They memorize:

- patterns
- architecture
- debugging process

and Google syntax when needed.

---

# Modern Form Stack

```text
React Hook Form
↓
Zod
↓
Server Action
↓
Database
↓
Email
```

---

# React Hook Form (RHF)

Purpose:

- Manage form state
- Handle submission
- Track errors
- Track loading state

Key APIs:

```ts
register();
handleSubmit();
reset();

formState.errors;
formState.isSubmitting;
```

Example:

```tsx
<input {...register("email")} />
```

---

# RHF Mental Model

```text
register()
↓
connect input

handleSubmit()
↓
collect form data

errors
↓
display validation

isSubmitting
↓
loading state
```

Avoid:

```tsx
useState();
handleChange();
```

for large forms.

---

# Zod

Purpose:

- Validation
- Type generation
- Shared frontend/backend schema

Example:

```ts
const consultationSchema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  services: z.array(z.string()),
  message: z.string().min(4),
});
```

Generate type:

```ts
export type Consultation = z.infer<typeof consultationSchema>;
```

Single source of truth.

---

# RHF + Zod

Install:

```bash
pnpm add zod
pnpm add @hookform/resolvers
```

Connect:

```ts
useForm<Consultation>({
  resolver: zodResolver(consultationSchema),
});
```

Validation leaves the component.

---

# Server Actions

Purpose:

- Replace API routes for internal app actions

Example:

```ts
"use server";

export async function submitConsultation(data: unknown) {}
```

Always validate:

```ts
consultationSchema.safeParse(data);
```

Never trust client input.

---

# Supabase

Purpose:

- Store persistent data

Flow:

```text
Form
↓
Server Action
↓
Supabase
```

Insert:

```ts
await supabaseAdmin.from("consultations").insert(data);
```

Always check:

```ts
const { error };
```

---

# Supabase Clients

Browser:

```ts
supabase.ts;
```

Uses:

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Server:

```ts
supabase - admin.ts;
```

Uses:

```env
SUPABASE_SERVICE_ROLE_KEY
```

Never expose service role key.

---

# RLS

Row Level Security protects tables.

Anonymous users require policies.

Server-side service role bypasses RLS.

---

# Resend

Purpose:

- Send emails

Install:

```bash
pnpm add resend
```

Client:

```ts
export const resend = new Resend(process.env.RESEND_API_KEY);
```

---

# React Email

Purpose:

- Build emails as React components

Example:

```tsx
<ConsultationAdminEmail />
```

instead of giant HTML strings.

Folder:

```text
emails/
├── ConsultationAdminEmail.tsx
├── ConsultationClientEmail.tsx
└── notification.tsx
```

Important:

```text
.ts
=
No JSX

.tsx
=
JSX Allowed
```

---

# Toast Notifications

Library:

```bash
pnpm add sonner
```

Layout:

```tsx
<Toaster richColors />
```

Usage:

```ts
toast.success(...)
toast.error(...)
```

---

# Loading State

Use RHF:

```ts
formState.isSubmitting;
```

Avoid:

```ts
useState(false);
```

for submit loading.

---

# Reusable Input Pattern

Prefer:

```ts
ComponentPropsWithoutRef<"input">;
```

Allows RHF integration:

```tsx
<Input {...register("email")} />
```

---

# Architectural Lesson

Junior mindset:

```text
How do I write this code?
```

Senior mindset:

```text
Where should this live?

Who owns this responsibility?

Can this be reused?

What happens when it scales?
```

---

# Debugging Lesson

When stuck:

```text
1. Verify input
2. Verify validation
3. Verify server action
4. Verify database
5. Verify external service
```

Debug one layer at a time.

---

# HM Digital Consultation Flow

```text
Landing Page
↓
Book Consultation
↓
RHF
↓
Zod
↓
Server Action
↓
Supabase
↓
Resend
↓
Thank You Page
```

Reusable for:

- Relais-School admissions
- TouchPoint requests
- Wifey Kitchen orders
- Contact forms
- Quote requests
- Newsletter signups

```

```
