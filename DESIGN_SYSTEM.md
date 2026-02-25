# PromptVault Design System

## 1. Color Schemes

### Theme A: Tech Dark (Current — Default)
```
--bg-primary:     #0a0e1a    // Deep space
--bg-secondary:   #111827    // Card surface
--bg-elevated:    #1e293b    // Hover/active
--accent:         #f0c040    // Gold
--accent-hover:   #f59e0b    // Amber
--text-primary:   #f1f5f9    // Slate 100
--text-secondary: #94a3b8    // Slate 400
--text-muted:     #475569    // Slate 600
--border:         rgba(255,255,255,0.08)
--glass:          rgba(255,255,255,0.03)
```

### Theme B: Minimal Light
```
--bg-primary:     #fafafa
--bg-secondary:   #ffffff
--bg-elevated:    #f5f5f5
--accent:         #18181b    // Zinc 900
--accent-hover:   #3f3f46    // Zinc 700
--text-primary:   #18181b
--text-secondary: #71717a
--text-muted:     #a1a1aa
--border:         rgba(0,0,0,0.06)
--glass:          rgba(255,255,255,0.8)
```

### Theme C: Premium Gray
```
--bg-primary:     #141416
--bg-secondary:   #1c1c1e
--bg-elevated:    #2c2c2e
--accent:         #e5e5e5    // Neutral 200
--accent-hover:   #ffffff
--text-primary:   #e5e5e5
--text-secondary: #8e8e93
--text-muted:     #48484a
--border:         rgba(255,255,255,0.06)
--glass:          rgba(255,255,255,0.04)
```

---

## 2. Typography

### Font Stack
```
Primary:    Inter (400, 500, 600, 700)
Monospace:  JetBrains Mono (code blocks, stats)
Fallback:   -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Scale (Mobile → Desktop)
```
Hero H1:      text-4xl → text-5xl    (36px → 48px)   font-bold
Section H2:   text-2xl               (24px)           font-bold
Card Title:   text-lg / text-sm      (18px / 14px)    font-semibold
Body:         text-sm                (14px)            font-normal
Caption:      text-xs                (12px)            font-normal
Micro:        text-[10px]            (10px)            font-bold (badges)
```

### Line Height
```
Headings:   1.2 (tight)
Body:       1.6 (relaxed)
Captions:   1.4
```

---

## 3. Buttons

### Variants
```
Gold (Primary):   bg-amber-500 text-black → hover:bg-amber-400
Outline:          border-slate-700 text-slate-300 → hover:border-slate-500
Ghost:            text-slate-400 → hover:text-slate-200 hover:bg-slate-900
```

### Sizes
```
sm:   px-3 py-1.5   text-xs     (compact actions)
md:   px-5 py-2.5   text-sm     (default)
lg:   px-6 py-3     text-base   (hero CTA)
```

### Rules
- Border radius: `rounded-lg` (8px)
- Focus ring: `ring-2 ring-amber-500/50`
- Disabled: `opacity-50 cursor-not-allowed`
- Transition: `transition-colors duration-200`
- Full-width in cards: `w-full`

---

## 4. Cards

### Base Card
```
Background:   bg-white/[0.03] backdrop-blur-xl
Border:       border border-white/[0.08]
Shadow:       shadow-[0_8px_32px_rgba(0,0,0,0.3)]
Radius:       rounded-2xl (16px)
Padding:      p-6
Hover:        border-slate-700, y: -4px
```

### Featured Card (Product)
```
Border:       border-amber-500/20
Shadow:       shadow-[0_8px_32px_rgba(245,158,11,0.1)]
Glow:         0 0 20px rgba(240,192,64,0.15)
Badge:        absolute -top-3 right-4, bg-amber-500 text-black
```

### Prompt Card
```
Padding:      p-4
Radius:       rounded-xl (12px)
Hover:        border-slate-700
Copy button:  bottom-right, appears on hover
```

### Journal Card
```
Padding:      p-5
Type badge:   milestone=amber, progress=emerald, origin=blue
Hover:        title turns amber-400, border-amber-500/20
```

---

## 5. Spacing System

### Section Spacing
```
Section padding:     py-16 px-6        (64px vertical, 24px horizontal)
Hero min-height:     min-h-[85vh]
Between sections:    py-12 to py-16
```

### Content Width
```
Narrow (text):       max-w-xl           (576px)  — Story, Timeline
Medium (cards):      max-w-2xl          (672px)  — Stats, Products
Wide (grid):         max-w-3xl / 4xl    (768/896px) — Prompt Library
```

### Component Spacing
```
Card gap:            gap-4 to gap-8
Card internal:       p-4 to p-6
Title → body:        mb-2
Body → CTA:          mb-4 to mb-6
Section title → content: mb-8
Badge gap:           gap-1.5 to gap-2
```

---

## 6. Animation Rhythm

### Entrance Animations (Framer Motion)
```
FadeIn:
  initial:    { opacity: 0, y: 20 }
  animate:    { opacity: 1, y: 0 }
  duration:   0.5s
  ease:       "easeOut"
  trigger:    whileInView, once: true

Stagger:
  children delay: 0.1s between each
  parent: staggerChildren: 0.1

Hero sequence:
  Avatar:     delay 0.0s, scale 0.5→1
  Title:      delay 0.2s
  Subtitle:   delay 0.35s
  Description:delay 0.45s
  Progress:   delay 0.55s
  CTA:        delay 0.65s
  Bar fill:   delay 0.8s, duration 1.2s
```

### Hover Animations
```
Card lift:    y: -4px, duration 0.3s
Card scale:   scale: 1.03, spring(300, 20)
Button:       color transition 0.2s
Link:         color transition 0.2s
```

### Scroll Animations
```
Timeline:     x: -20→0, stagger 0.15s per item
Cards:        y: 20→0, stagger 0.1s per item
Viewport:     margin: "-50px" (trigger slightly early)
Once:         true (never replay)
```

### Progress Bar
```
Bar width:    0→target%, duration 1.2s, delay 0.3s
Counter:      useSpring(stiffness: 50, damping: 20)
```

---

## 7. Responsive Breakpoints

```
Mobile:       < 640px    (default, single column)
Tablet:       sm: 640px  (2-col grids)
Desktop:      md: 768px  (full layout)
Wide:         lg: 1024px (max-width containers)
```

### Grid Patterns
```
Stats:        grid-cols-2 → md:grid-cols-4
Products:     grid-cols-1 → md:grid-cols-2
Prompts:      grid-cols-1 → md:grid-cols-2
Journal:      single column (max-w-2xl)
```

---

## 8. Glassmorphism Recipe

```css
/* Base glass */
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

/* Featured glass */
border-color: rgba(245, 158, 11, 0.2);
box-shadow: 0 8px 32px rgba(245, 158, 11, 0.1);

/* Hover glow (pseudo-element) */
background: linear-gradient(to right, rgba(245,158,11,0.3), rgba(249,115,22,0.3));
filter: blur(4px);
opacity: 0 → 1 on hover;
```
