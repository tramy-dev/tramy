/**
 * Frontend Developer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateFECommands(): CommandTemplate[] {
  return [
    {
      path: 'fe/component.md',
      roleId: 'frontend-developer',
      content: `# Create Component

Create component: $ARGUMENTS

## Instructions

You are acting as a **Frontend Developer**. Create a reusable, accessible React component.

## Component Template

\`\`\`tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface $ARGUMENTSProps {
  /** Description of prop */
  className?: string;
  children?: React.ReactNode;
}

export const $ARGUMENTS = forwardRef<HTMLDivElement, $ARGUMENTSProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'relative',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

$ARGUMENTS.displayName = '$ARGUMENTS';
\`\`\`

## Component Checklist
- [ ] Props are typed
- [ ] Ref forwarding (if needed)
- [ ] Accessible (aria, keyboard)
- [ ] Responsive
- [ ] Dark mode support
- [ ] Tests written
- [ ] Storybook story (if complex)

## Test Template
\`\`\`tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { $ARGUMENTS } from './$ARGUMENTS';

describe('$ARGUMENTS', () => {
  it('renders correctly', () => {
    render(<$ARGUMENTS>Content</$ARGUMENTS>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('handles interactions', async () => {
    const user = userEvent.setup();
    // Test interactions
  });
});
\`\`\`

## Output Location
Save to: \`src/components/$ARGUMENTS/\`
`,
    },
    {
      path: 'fe/page.md',
      roleId: 'frontend-developer',
      content: `# Create Page

Create page: $ARGUMENTS

## Instructions

You are acting as a **Frontend Developer**. Create a new page/route.

## Page Template (Next.js App Router)

\`\`\`tsx
// app/$ARGUMENTS/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '$ARGUMENTS',
  description: 'Description of the page',
};

export default function $ARGUMENTSPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">$ARGUMENTS</h1>
      {/* Page content */}
    </main>
  );
}
\`\`\`

## Page with Data Fetching

\`\`\`tsx
// Server Component with data
async function getData() {
  const res = await fetch('...', { next: { revalidate: 60 } });
  return res.json();
}

export default async function $ARGUMENTSPage() {
  const data = await getData();

  return (
    <main>
      {/* Use data */}
    </main>
  );
}
\`\`\`

## Page Checklist
- [ ] Metadata defined
- [ ] Loading state (loading.tsx)
- [ ] Error handling (error.tsx)
- [ ] SEO optimized
- [ ] Responsive layout
- [ ] Accessibility verified
`,
    },
    {
      path: 'fe/style.md',
      roleId: 'frontend-developer',
      content: `# Add Styling

Add styling to: $ARGUMENTS

## Instructions

You are acting as a **Frontend Developer**. Add styling using Tailwind CSS.

## Tailwind CSS Patterns

### Layout
\`\`\`tsx
// Container
<div className="container mx-auto px-4">

// Flexbox
<div className="flex items-center justify-between gap-4">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
\`\`\`

### Spacing
\`\`\`tsx
// Padding
<div className="p-4 px-6 py-8">

// Margin
<div className="m-4 mt-6 mb-8">

// Gap
<div className="gap-4 gap-x-6 gap-y-8">
\`\`\`

### Typography
\`\`\`tsx
<h1 className="text-3xl font-bold tracking-tight">
<p className="text-muted-foreground text-sm">
<span className="font-medium text-primary">
\`\`\`

### Interactive States
\`\`\`tsx
<button className="
  bg-primary text-primary-foreground
  hover:bg-primary/90
  focus-visible:outline-none focus-visible:ring-2
  disabled:opacity-50 disabled:pointer-events-none
  transition-colors
">
\`\`\`

### Responsive
\`\`\`tsx
<div className="
  text-sm md:text-base lg:text-lg
  p-4 md:p-6 lg:p-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-4
">
\`\`\`

### Dark Mode
\`\`\`tsx
<div className="bg-white dark:bg-slate-900">
<p className="text-slate-900 dark:text-slate-100">
\`\`\`

## Styling Checklist
- [ ] Consistent spacing
- [ ] Responsive breakpoints
- [ ] Dark mode support
- [ ] Focus states visible
- [ ] Transition/animation smooth
`,
    },
    {
      path: 'fe/state.md',
      roleId: 'frontend-developer',
      content: `# Setup State Management

Setup state management for: $ARGUMENTS

## Instructions

You are acting as a **Frontend Developer**. Implement appropriate state management.

## State Management Options

### 1. Local State (useState)
\`\`\`tsx
const [state, setState] = useState<Type>(initialValue);
\`\`\`

### 2. Zustand Store
\`\`\`tsx
// stores/$ARGUMENTS.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
  items: Item[];
  loading: boolean;
  error: string | null;
}

interface Actions {
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  fetchItems: () => Promise<void>;
}

export const use$ARGUMENTSStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        loading: false,
        error: null,

        addItem: (item) => set((state) => ({
          items: [...state.items, item]
        })),

        removeItem: (id) => set((state) => ({
          items: state.items.filter((i) => i.id !== id)
        })),

        fetchItems: async () => {
          set({ loading: true, error: null });
          try {
            const items = await api.getItems();
            set({ items, loading: false });
          } catch (error) {
            set({ error: error.message, loading: false });
          }
        },
      }),
      { name: '$ARGUMENTS-storage' }
    )
  )
);
\`\`\`

### 3. TanStack Query (Server State)
\`\`\`tsx
// hooks/use$ARGUMENTS.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function use$ARGUMENTS() {
  return useQuery({
    queryKey: ['$ARGUMENTS'],
    queryFn: () => api.get$ARGUMENTS(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCreate$ARGUMENTS() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateInput) => api.create$ARGUMENTS(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['$ARGUMENTS'] });
    },
  });
}
\`\`\`

## State Checklist
- [ ] Appropriate solution chosen
- [ ] Loading states handled
- [ ] Error states handled
- [ ] Optimistic updates (if needed)
- [ ] Persistence (if needed)
`,
    },
    {
      path: 'fe/a11y.md',
      roleId: 'frontend-developer',
      content: `# Accessibility Audit

Audit accessibility of: $ARGUMENTS

## Instructions

You are acting as a **Frontend Developer**. Audit and fix accessibility issues.

## Accessibility Checklist

### Semantic HTML
- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] Meaningful landmarks (main, nav, aside)
- [ ] Lists for list content
- [ ] Buttons for actions, links for navigation

### Keyboard Navigation
- [ ] All interactive elements focusable
- [ ] Logical tab order
- [ ] Visible focus indicators
- [ ] No keyboard traps
- [ ] Skip links present

### Screen Readers
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Live regions for dynamic content
- [ ] Form labels associated

### Visual
- [ ] Color contrast (4.5:1 minimum)
- [ ] Not relying on color alone
- [ ] Text resizable to 200%
- [ ] No content cutoff on zoom

### Forms
- [ ] Labels for all inputs
- [ ] Error messages announced
- [ ] Required fields indicated
- [ ] Autocomplete attributes

## Common Fixes

### Missing Label
\`\`\`tsx
// Bad
<input type="text" />

// Good
<label>
  Name
  <input type="text" />
</label>

// Or with aria-label
<input type="text" aria-label="Search" />
\`\`\`

### Button vs Link
\`\`\`tsx
// Action -> Button
<button onClick={handleDelete}>Delete</button>

// Navigation -> Link
<Link href="/about">About</Link>
\`\`\`

### Focus Management
\`\`\`tsx
// After modal opens
useEffect(() => {
  firstInputRef.current?.focus();
}, [isOpen]);
\`\`\`

## Output
Document findings in: \`specs/a11y/$ARGUMENTS.md\`
`,
    },
    {
      path: 'fe/responsive.md',
      roleId: 'frontend-developer',
      content: `# Make Responsive

Make responsive: $ARGUMENTS

## Instructions

You are acting as a **Frontend Developer**. Implement responsive design.

## Breakpoints (Tailwind)
- \`sm\`: 640px
- \`md\`: 768px
- \`lg\`: 1024px
- \`xl\`: 1280px
- \`2xl\`: 1536px

## Responsive Patterns

### Mobile-First Layout
\`\`\`tsx
<div className="
  flex flex-col       // Mobile: stack
  md:flex-row         // Tablet+: row
  gap-4
">
\`\`\`

### Responsive Grid
\`\`\`tsx
<div className="
  grid
  grid-cols-1         // Mobile: 1 column
  sm:grid-cols-2      // Small: 2 columns
  lg:grid-cols-3      // Large: 3 columns
  xl:grid-cols-4      // XL: 4 columns
  gap-4 md:gap-6
">
\`\`\`

### Responsive Typography
\`\`\`tsx
<h1 className="
  text-2xl            // Mobile
  md:text-3xl         // Tablet
  lg:text-4xl         // Desktop
  font-bold
">
\`\`\`

### Responsive Spacing
\`\`\`tsx
<section className="
  py-8 px-4           // Mobile
  md:py-12 md:px-6    // Tablet
  lg:py-16 lg:px-8    // Desktop
">
\`\`\`

### Hide/Show Elements
\`\`\`tsx
<nav className="hidden md:flex">    // Hide on mobile
<button className="md:hidden">      // Show only on mobile
\`\`\`

## Testing Checklist
- [ ] Works at 320px (mobile)
- [ ] Works at 768px (tablet)
- [ ] Works at 1024px (laptop)
- [ ] Works at 1440px (desktop)
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px
`,
    },
    {
      path: 'fe/optimize.md',
      roleId: 'frontend-developer',
      content: `# Frontend Optimization

Optimize frontend performance.

## Instructions

You are acting as a **Frontend Developer**. Optimize for performance.

## Optimization Areas

### 1. Bundle Size
\`\`\`tsx
// Dynamic imports
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
});

// Tree shaking - import specific
import { Button } from '@/components/ui/button';
// Not: import * as UI from '@/components/ui';
\`\`\`

### 2. Images
\`\`\`tsx
// Next.js Image
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority        // Above fold
  placeholder="blur"
/>
\`\`\`

### 3. React Performance
\`\`\`tsx
// Memoize expensive components
const MemoizedList = memo(ExpensiveList);

// Memoize callbacks
const handleClick = useCallback(() => {
  // ...
}, [dependency]);

// Memoize computed values
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
\`\`\`

### 4. Data Fetching
\`\`\`tsx
// Prefetch
<Link href="/dashboard" prefetch>

// Parallel data fetching
const [users, posts] = await Promise.all([
  getUsers(),
  getPosts(),
]);
\`\`\`

## Metrics to Track
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- Bundle size
- Time to Interactive

## Checklist
- [ ] Code splitting implemented
- [ ] Images optimized
- [ ] Unnecessary re-renders fixed
- [ ] Third-party scripts deferred
- [ ] Fonts optimized
`,
    },
  ];
}
