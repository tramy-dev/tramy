/**
 * UX Designer Command Templates
 */

import { CommandTemplate } from './index.js';

export function generateUXCommands(): CommandTemplate[] {
  return [
    {
      path: 'ux/research.md',
      roleId: 'ux-designer',
      content: `# User Research

Conduct user research for: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Conduct user research.

## Research Plan

### Objectives
- What do we want to learn?
- What decisions will this inform?

### Research Questions
1. [Question 1]
2. [Question 2]
3. [Question 3]

### Methodology
- [ ] User interviews
- [ ] Surveys
- [ ] Usability testing
- [ ] Analytics review
- [ ] Competitive analysis

### Participants
- Target: [Number] participants
- Criteria: [Who qualifies]
- Recruitment: [How to find them]

## Research Findings

### Key Insights

#### Insight 1: [Title]
**Finding**: [What we learned]
**Evidence**: [Supporting data]
**Implication**: [What to do about it]

#### Insight 2: [Title]
[Same format]

### User Quotes
> "[Direct quote from user]" - Participant X

### Pain Points
1. [Pain point 1]
2. [Pain point 2]
3. [Pain point 3]

### Opportunities
1. [Opportunity 1]
2. [Opportunity 2]

## Personas

### Persona: [Name]
- **Background**: [Description]
- **Goals**: [What they want]
- **Frustrations**: [What bothers them]
- **Quote**: "[Characteristic quote]"

## Recommendations
1. [High priority recommendation]
2. [Medium priority recommendation]
3. [Low priority recommendation]

## Output Location
Save to: \`specs/research/$ARGUMENTS.md\`
`,
    },
    {
      path: 'ux/wireframe.md',
      roleId: 'ux-designer',
      content: `# Create Wireframe

Create wireframe for: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Create wireframes.

## Wireframe Specification

### Screen: [Name]

#### Purpose
[What is this screen for?]

#### User Story
As a [user], I want to [action], so that [benefit].

#### Layout (ASCII)
\`\`\`
┌─────────────────────────────────────────────────────┐
│  [Logo]                    [Nav]    [User Menu]     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │           Hero Section / Header              │   │
│  │                                              │   │
│  │    [Headline Text]                           │   │
│  │    [Subheading]                              │   │
│  │    [CTA Button]                              │   │
│  │                                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ Card 1   │  │ Card 2   │  │ Card 3   │         │
│  │          │  │          │  │          │         │
│  │ [Image]  │  │ [Image]  │  │ [Image]  │         │
│  │ [Title]  │  │ [Title]  │  │ [Title]  │         │
│  │ [Desc]   │  │ [Desc]   │  │ [Desc]   │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│                                                     │
├─────────────────────────────────────────────────────┤
│  [Footer]                                           │
└─────────────────────────────────────────────────────┘
\`\`\`

#### Components
| Element | Description | Interaction |
|---------|-------------|-------------|
| Nav | Main navigation | Hover shows dropdown |
| CTA | Primary action | Opens sign up flow |
| Cards | Feature showcase | Click opens detail |

#### States
- Default
- Hover
- Active
- Loading
- Error
- Empty

### Mobile View
\`\`\`
┌────────────────────┐
│ [≡]    [Logo]  [●] │
├────────────────────┤
│                    │
│   [Hero Image]     │
│                    │
│   [Headline]       │
│   [Subhead]        │
│   [CTA Button]     │
│                    │
│   ┌──────────┐     │
│   │ Card 1   │     │
│   └──────────┘     │
│   ┌──────────┐     │
│   │ Card 2   │     │
│   └──────────┘     │
│                    │
└────────────────────┘
\`\`\`

## Output Location
Save to: \`specs/wireframes/$ARGUMENTS.md\`
`,
    },
    {
      path: 'ux/prototype.md',
      roleId: 'ux-designer',
      content: `# Design Prototype

Design prototype for: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Design interactive prototype.

## Prototype Specification

### Flow Overview
\`\`\`
[Start] → [Screen A] → [Screen B] → [Screen C] → [End]
                ↓
           [Error State]
\`\`\`

### Screens

#### Screen 1: [Name]
- **Entry point**: [How users get here]
- **Content**: [What's shown]
- **Actions**: [What users can do]
- **Exit points**: [Where users go next]

#### Screen 2: [Name]
[Same format]

### Interactions

| Trigger | Action | Target | Animation |
|---------|--------|--------|-----------|
| Click CTA | Navigate | Screen B | Slide left |
| Swipe left | Navigate | Next card | Card slide |
| Form submit | Validate | Show result | Fade |

### Micro-interactions
- Button hover: Scale 1.02, shadow
- Input focus: Border highlight
- Success: Checkmark animation
- Error: Shake animation

### Transitions
- Page transitions: Slide (300ms ease)
- Modal: Fade + scale (200ms)
- Toast: Slide up (250ms)

### Prototype Checklist
- [ ] All screens designed
- [ ] Interactions connected
- [ ] States covered (loading, error, empty)
- [ ] Mobile version included
- [ ] Shareable link created

## Output Location
Save to: \`specs/prototypes/$ARGUMENTS.md\`
`,
    },
    {
      path: 'ux/review.md',
      roleId: 'ux-designer',
      content: `# Usability Review

Review usability of: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Conduct a usability review.

## Heuristic Evaluation (Nielsen's 10)

### 1. Visibility of System Status
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 2. Match Between System and Real World
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 3. User Control and Freedom
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 4. Consistency and Standards
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 5. Error Prevention
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 6. Recognition Rather Than Recall
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 7. Flexibility and Efficiency of Use
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 8. Aesthetic and Minimalist Design
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 9. Help Users Recognize and Recover from Errors
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

### 10. Help and Documentation
| Score | Findings | Recommendations |
|-------|----------|-----------------|
| /5 | | |

## Overall Score: /50

## Priority Issues
1. [Critical issue]
2. [High priority issue]
3. [Medium priority issue]

## Output Location
Save to: \`specs/reviews/$ARGUMENTS-usability.md\`
`,
    },
    {
      path: 'ux/system.md',
      roleId: 'ux-designer',
      content: `# Design System

Create/update design system component: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Define design system components.

## Component Specification

### Component: $ARGUMENTS

#### Purpose
[What is this component for?]

#### Anatomy
\`\`\`
┌─────────────────────────────────┐
│ [Icon]  [Label]        [Action] │
│         [Helper text]           │
└─────────────────────────────────┘
\`\`\`

#### Variants
| Variant | Use Case |
|---------|----------|
| Primary | Main actions |
| Secondary | Alternative actions |
| Outline | Tertiary actions |
| Ghost | Minimal emphasis |

#### Sizes
| Size | Height | Font Size | Padding |
|------|--------|-----------|---------|
| Small | 32px | 14px | 8px 12px |
| Medium | 40px | 16px | 12px 16px |
| Large | 48px | 18px | 16px 24px |

#### States
| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | primary | none | white |
| Hover | primary/90 | none | white |
| Active | primary/80 | none | white |
| Disabled | gray/50 | none | gray |
| Loading | primary | none | - |

#### Spacing
- Internal padding: 12px 16px
- Icon gap: 8px
- Between components: 16px

#### Usage Guidelines

**Do**
- Use for primary actions
- Keep labels concise
- Use icons to clarify meaning

**Don't**
- Use too many per screen
- Use for navigation
- Override colors arbitrarily

#### Code Example
\`\`\`tsx
<Button variant="primary" size="medium">
  Click me
</Button>
\`\`\`

## Output Location
Save to: \`specs/design-system/$ARGUMENTS.md\`
`,
    },
    {
      path: 'ux/a11y.md',
      roleId: 'ux-designer',
      content: `# Accessibility Review

Review accessibility of: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Review for accessibility compliance.

## WCAG 2.1 Checklist

### Perceivable

#### 1.1 Text Alternatives
- [ ] Images have alt text
- [ ] Decorative images have empty alt
- [ ] Complex images have descriptions

#### 1.2 Time-based Media
- [ ] Videos have captions
- [ ] Audio has transcripts

#### 1.3 Adaptable
- [ ] Semantic HTML used
- [ ] Reading order logical
- [ ] Instructions don't rely on sensory characteristics

#### 1.4 Distinguishable
- [ ] Color contrast ≥ 4.5:1 (text)
- [ ] Color contrast ≥ 3:1 (large text)
- [ ] Text can be resized 200%
- [ ] No information conveyed by color alone

### Operable

#### 2.1 Keyboard Accessible
- [ ] All functions available via keyboard
- [ ] No keyboard traps
- [ ] Focus visible

#### 2.2 Enough Time
- [ ] Time limits can be adjusted
- [ ] Moving content can be paused

#### 2.3 Seizures
- [ ] No content flashes >3 times/second

#### 2.4 Navigable
- [ ] Skip links present
- [ ] Page titles descriptive
- [ ] Focus order logical
- [ ] Link purpose clear

### Understandable

#### 3.1 Readable
- [ ] Language identified
- [ ] Unusual words defined

#### 3.2 Predictable
- [ ] Navigation consistent
- [ ] Components behave consistently

#### 3.3 Input Assistance
- [ ] Errors identified
- [ ] Labels provided
- [ ] Error suggestions given

### Robust

#### 4.1 Compatible
- [ ] Valid HTML
- [ ] Name, role, value for custom components
- [ ] Status messages announced

## Issues Found

| Issue | WCAG | Severity | Location | Fix |
|-------|------|----------|----------|-----|
| | | | | |

## Output Location
Save to: \`specs/a11y/$ARGUMENTS-review.md\`
`,
    },
    {
      path: 'ux/flow.md',
      roleId: 'ux-designer',
      content: `# User Flow Diagram

Create user flow for: $ARGUMENTS

## Instructions

You are acting as a **UX Designer**. Document user flows.

## User Flow: $ARGUMENTS

### Overview
**Goal**: [What the user wants to accomplish]
**Entry Points**: [How users start this flow]
**Success Criteria**: [What defines completion]

### Flow Diagram

\`\`\`
                    ┌─────────────┐
                    │   Entry     │
                    │  (Landing)  │
                    └──────┬──────┘
                           │
                           ▼
                    ┌─────────────┐
              ┌─────┤   Step 1    ├─────┐
              │     │  (Action)   │     │
              │     └─────────────┘     │
              │                         │
              ▼                         ▼
       ┌─────────────┐          ┌─────────────┐
       │  Path A     │          │   Path B    │
       │  (Option)   │          │  (Option)   │
       └──────┬──────┘          └──────┬──────┘
              │                         │
              └──────────┬──────────────┘
                         │
                         ▼
                  ┌─────────────┐
                  │   Step 2    │
                  │  (Action)   │
                  └──────┬──────┘
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
       ┌─────────────┐       ┌─────────────┐
       │   Success   │       │    Error    │
       │   (Goal)    │       │   (Retry)   │
       └─────────────┘       └─────────────┘
\`\`\`

### Steps Detail

#### Step 1: [Name]
- **Screen**: [Screen name]
- **User Action**: [What user does]
- **System Response**: [What happens]
- **Decision Point**: [If any]

#### Step 2: [Name]
[Same format]

### Edge Cases
| Scenario | Handling |
|----------|----------|
| User abandons flow | Save progress, send reminder |
| Error occurs | Show message, offer retry |
| Session expires | Prompt to re-authenticate |

### Metrics to Track
- Completion rate
- Drop-off points
- Time to complete
- Error rate

## Output Location
Save to: \`specs/flows/$ARGUMENTS.md\`
`,
    },
  ];
}
