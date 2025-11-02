# ЭкоВывоз Design Guidelines - Modern Gradient Edition

## Design Approach

**Reference-Based Approach**: Inspired by modern tech platforms (Notion, Linear, Stripe) with Telegram Mini App UX patterns. Playful, gradient-rich aesthetic that feels fresh and tech-forward rather than traditionally eco-conscious.

**Core Principles**:
- Vibrant gradients and glassmorphism effects
- Mobile-first Telegram Mini App design
- Playful interactions with emojis and animations
- Bottom-sheet navigation and large touch targets
- Swipeable cards and gesture-driven UI

---

## Typography System

**Font Families** (Google Fonts):
- **Primary**: Inter (400, 500, 600, 700) - UI, body text
- **Display**: Manrope (600, 700, 800) - headlines, hero sections

**Typography Scale**:
- Hero/Onboarding: text-4xl md:text-5xl, font-bold
- Section headlines: text-2xl md:text-3xl, font-bold
- Card titles: text-xl font-semibold
- Body text: text-base leading-relaxed
- Supporting: text-sm
- Captions: text-xs

---

## Layout System

**Spacing Primitives**: 2, 4, 6, 8, 12, 16, 20, 24

**Container Strategy**:
- Full mobile viewport: w-full px-4
- Content cards: max-w-md mx-auto
- Bottom sheets: Fixed bottom with rounded-t-3xl

**Grid Patterns**:
- Tariff cards: Horizontal scroll (snap-x) on mobile
- Features: grid-cols-2 gap-4 (compact mobile grid)
- Stats/metrics: grid-cols-3 gap-3

---

## Component Library

### Navigation
- Fixed bottom nav bar (h-16) with 3-5 icons
- Floating action button for primary action (bottom-right, rounded-full)
- Top bar: Back button (left), title (center), menu/settings (right)
- No traditional header - Telegram native top bar integration

### Onboarding Flow (3-4 Screens)
**Screen Structure**:
- Full-height viewport with gradient background
- Large illustration/emoji at top (h-48 to h-64)
- Headline + description centered (max-w-sm mx-auto)
- Progress dots at bottom (mb-32)
- Large CTA button fixed at bottom (bottom-8, full-width with px-6)

**Screens**:
1. Welcome: "🎉 Добро пожаловать!" + service intro
2. How it works: "📅 Выбери график" + schedule explanation
3. Benefits: "♻️ Забудь о проблемах" + value props
4. Pricing: "💳 Выбери тариф" + quick tariff cards

### Cards

**Tariff Cards** (Horizontal Scroll):
- Rounded-3xl with gradient backgrounds
- w-72 h-96 (compact vertical cards)
- Glass effect: backdrop-blur-xl bg-white/10 border border-white/20
- Price: Large text-5xl font-bold
- Features: Icon list with checkmarks/emojis (max 4-5 items)
- CTA button: Rounded-full, full-width, solid fill
- Snap scrolling: snap-center snap-x

**Feature Cards**:
- Rounded-2xl, p-6
- Emoji icon at top (text-4xl)
- Title + compact description
- Gradient border (border-2 gradient effect via pseudo-element)
- Compact grid layout (2 columns)

### Bottom Sheets
- Slide-up modals with rounded-t-3xl
- Drag handle at top (w-12 h-1 rounded-full, centered)
- Backdrop blur overlay (bg-black/40)
- Height variants: Half-screen, full-screen
- Swipe-to-dismiss gesture

### Buttons

**Button Hierarchy**:
- Primary: Gradient fill (purple→blue), rounded-full, py-4 px-8, font-semibold, shadow-lg
- Secondary: Outline with gradient border, rounded-full
- Bottom sheet CTA: Sticky bottom with safe-area padding (pb-safe)
- Icon buttons: p-3 rounded-xl with glass effect
- Hero/Image buttons: backdrop-blur-lg bg-white/20 (no hover states)

**Touch Targets**: min-h-12, min-w-12 for all interactive elements

### Forms

**Compact Mobile Forms**:
- Single column, full-width inputs
- Rounded-2xl inputs with px-4 py-4
- Floating labels or placeholder-only
- Input groups: space-y-4
- Bottom-sheet pattern for complex inputs (address, date selection)
- Inline validation with subtle shake animation

### Dashboard Components

**Subscription Status Card**:
- Large gradient card at top (rounded-3xl, p-6)
- Emoji status indicator (🟢 Active, ⏸️ Paused)
- Next pickup: Large text-3xl countdown
- Quick actions: Horizontal icon row (pause, reschedule, support)

**Compact Stats Grid**:
- 3-column metrics (pickups, savings, streak)
- Small cards with emoji + number + label
- Glassmorphism treatment

**Payment History**:
- Timeline view with icons
- Swipeable cards for each transaction
- Compact list (text-sm) with expand-on-tap

### Gradient System

**Primary Gradients**:
- Hero: from-purple-500 via-blue-500 to-teal-400
- Cards: from-blue-400 to-purple-600
- Accent: from-pink-500 to-orange-400
- Subtle: from-slate-50 to-blue-50 (for backgrounds)

**Glassmorphism**:
- backdrop-blur-xl bg-white/10 border border-white/20
- Used for cards, modals, floating elements
- Subtle shadow-2xl for depth

### Micro-interactions

- Card tap: scale-95 active state (transform duration-75)
- Swipe indicators: Arrow bounce animation
- Success: Confetti emoji burst or checkmark scale-in
- Loading: Gradient shimmer effect on placeholders
- Pull-to-refresh: Spinner animation at top
- Button press: Haptic feedback (Telegram API)

---

## Page-Specific Layouts

### Onboarding Screens
- Full-screen gradient backgrounds (different gradient per screen)
- Large illustration/emoji (centered, mb-8)
- Headline + 2-3 line description (text-center, max-w-sm)
- Progress dots: Bottom-centered, mb-24
- CTA button: Fixed bottom-8, full-width

### Main Dashboard
- Status card prominent at top (gradient, large)
- Quick stats grid (3 columns)
- Upcoming pickups: Horizontal scroll cards
- Bottom nav: Home, Schedule, Profile, Support

### Tariff Selection
- Hero gradient section with headline
- Horizontal scroll tariff cards (3-4 options)
- Comparison button below (opens bottom sheet)
- Bottom sheet: Full feature comparison table
- Sticky CTA: Selected plan button at bottom

### Profile Page
- Avatar/emoji at top with gradient ring
- Info cards: Subscription, Address, Payment
- Each section: Rounded-2xl card with tap-to-edit
- Settings list: Icon + label rows
- Logout: Red-tinted card at bottom

### Support/Contact
- Chat-style interface with bubble cards
- Quick actions: Grid of emoji buttons (📞 Call, 💬 Chat, 📧 Email)
- FAQ: Accordion with emoji icons
- Bottom: Large "Связаться" button

---

## Images

**Onboarding Illustrations**:
- Screen 1: Colorful illustration of happy person with clean home
- Screen 2: Calendar/schedule visualization
- Screen 3: Eco-friendly city scene
- Style: Modern, flat, vibrant colors (purple/blue/teal palette)
- Placement: Top section of each onboarding screen (h-48 to h-64)

**No Traditional Hero Image**: Use gradient backgrounds with illustrations/emojis instead

**Supporting Visuals**:
- Emoji icons throughout UI (🗑️ 📅 ♻️ 💚 ⚡)
- Avatar placeholders: Gradient circles with initials
- Success states: Animated Lottie or emoji

---

## Telegram Mini App Specifics

- Safe area padding: pb-safe for bottom elements
- Native components: BackButton, MainButton, HapticFeedback
- Bottom sheet preferred over modals
- No traditional nav bar - use Telegram's top bar
- Large thumb-friendly buttons (min-h-12)
- Swipe gestures for cards and navigation
- Landscape mode disabled (portrait-only)

---

## Accessibility & Polish

- Focus states: ring-2 ring-offset-2 with gradient colors
- Minimum contrast ratios on gradient backgrounds (use semi-transparent overlays)
- Semantic HTML with proper ARIA labels
- Reduced motion: Disable animations if preferred
- Loading states: Skeleton screens with gradient shimmer
- Error states: Red-tinted cards with emoji + message
- Haptic feedback on all button presses (Telegram API)

This creates a vibrant, modern, mobile-optimized experience that feels like a premium tech product while maintaining effortless subscription management.