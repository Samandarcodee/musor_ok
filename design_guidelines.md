# ЭкоВывоз Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern subscription services (Stripe, Linear) combined with eco-friendly brand aesthetics (Patagonia, The Honest Company) and trust-building service platforms (Airbnb, TaskRabbit). The design balances utility with emotional connection to sustainability.

**Core Principles**:
- Clean minimalism that communicates efficiency and reliability
- Trust-building through transparency and clarity
- Eco-conscious aesthetic without being overly literal
- Scannable information architecture for quick decision-making
- Mobile-first for on-the-go service management

---

## Typography System

**Font Families** (via Google Fonts CDN):
- **Primary**: Inter (400, 500, 600, 700) - for UI, body text, buttons
- **Display**: Plus Jakarta Sans (600, 700, 800) - for headlines, hero sections

**Typography Scale**:
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section headlines: text-3xl md:text-4xl, font-bold
- Subsection titles: text-xl md:text-2xl, font-semibold
- Card titles: text-lg font-semibold
- Body text: text-base leading-relaxed
- Supporting text: text-sm
- Fine print: text-xs

**Line Height**: Use leading-relaxed (1.625) for body text, leading-tight (1.25) for headlines

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Primary: 4, 8, 12, 16, 20, 24 (p-4, mt-8, gap-12, py-16, mb-20, space-y-24)
- Micro-spacing: 2, 3 (for tight elements like icon-text pairs)
- Macro-spacing: 32, 40, 48 (for major section breaks)

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto
- Forms/cards: max-w-lg to max-w-2xl

**Grid Patterns**:
- Tariff cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
- Feature grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
- Dashboard layouts: Two-column split on desktop (sidebar + main), stack on mobile

---

## Component Library

### Navigation
- Fixed header with logo (text-2xl font-bold) on left, navigation links center/right
- Mobile: Hamburger menu with slide-out drawer
- Desktop: Horizontal nav with hover underline indicators
- CTA button (Login/Profile) with distinct treatment
- Sticky on scroll with subtle shadow appearance

### Hero Section
**Home Page Hero**:
- Full-width section (min-h-screen md:min-h-[600px]) with subtle background treatment
- Asymmetric layout: Text content left (60%), visual element right (40%)
- Large hero image showing clean urban environment or happy customer
- Logo placement: top-left or centered above headline
- Tagline "Чисто. Удобно. Каждый день." as subheadline (text-xl md:text-2xl)
- Dual CTA: Primary "Выбрать тариф" + Secondary "Как это работает"
- Trust indicators below CTAs: "10,000+ довольных клиентов" with social proof icons

### Cards

**Tariff Cards** (3-4 options):
- Vertical card layout with rounded-xl borders
- Header: Plan name + recommended badge (if applicable)
- Price: Large bold number + "/месяц" descriptor
- Feature list: Icons (Heroicons) + feature text, checkmarks for included items
- Prominent CTA button at bottom
- Popular plan: Elevated treatment (border accent, shadow-lg, scale-105 on hover)
- Card spacing: p-8, gap-6 between elements

**Feature Cards**:
- Icon at top (from Heroicons, size-12)
- Title (text-lg font-semibold)
- Description (text-base leading-relaxed)
- Background: subtle background with rounded-lg
- Hover: Subtle lift effect (hover:shadow-md transition)

### Forms

**Subscription/Profile Forms**:
- Single column layout (max-w-lg)
- Input fields: Rounded-lg borders, py-3 px-4, focus ring treatment
- Labels: text-sm font-medium mb-2
- Field groups: space-y-6
- Address input: Autocomplete with Google Maps integration placeholder
- Form sections separated by border-t with py-8 spacing
- Submit button: Full-width on mobile, auto-width on desktop

### Dashboard Components

**User Dashboard**:
- Card-based layout for different info sections
- Active subscription card: Status badge, next pickup date (large), countdown
- Address display: Editable inline with icon
- Payment history: Table or timeline view with date, amount, status
- Quick actions: Floating action button for schedule changes

**Admin Panel**:
- Sidebar navigation (w-64 hidden md:block)
- Data table with sortable columns for customer list
- Route map visualization (iframe placeholder for future map integration)
- Status indicators: Colored badges (pending, active, completed)
- Filter/search bar at top

### Buttons

**Button Hierarchy**:
- Primary: Solid background, rounded-lg, px-6 py-3, font-semibold
- Secondary: Outline variant with border-2
- Tertiary: Text-only with underline on hover
- Icon buttons: p-2 rounded-lg
- Blur background for buttons on images: backdrop-blur-md bg-white/20

### Micro-interactions

- Card hover states: Scale very subtly (scale-[1.02]) with shadow increase
- Button states: Active state with slight scale-down (active:scale-95)
- Form validation: Inline error messages (text-sm) appear with fade-in
- Loading states: Spinner icons for async actions
- Success feedback: Checkmark animations for completed actions

---

## Page-Specific Layouts

### Home Page
- Hero with image (described above)
- How It Works: 3-step process with numbered icons, horizontal on desktop
- Benefits section: 2-column grid (image left, benefit list right)
- Pricing preview: 3 cards showing simplified tariffs + "See all plans" CTA
- Social proof: Customer testimonials in 2-column grid with avatars
- FAQ: Accordion component (max-w-3xl centered)
- Footer CTA: Full-width section with final conversion push

### Tariffs Page
- Page header: Centered title + description (max-w-3xl)
- Comparison toggle: Monthly/Yearly switch (if applicable)
- 3-4 tariff cards in grid
- Feature comparison table below cards (desktop-optimized)
- Trust section: Guarantees, refund policy

### Profile/Subscription Page
- Two-column on desktop: Sidebar (user info, quick stats) + Main (detailed sections)
- Subscription status card prominent at top
- Tabbed interface: Overview, Payment History, Settings
- Edit mode: Inline editing with save/cancel actions

### Contacts Page
- Split layout: Form left (max-w-lg), contact info + map right
- Contact methods: Phone, email, Telegram with icons
- Office hours and response time clearly stated
- Map placeholder (iframe for future Google Maps integration)

---

## Images

**Hero Image**: 
- Large lifestyle image showing clean residential area or satisfied customer receiving service
- Placement: Right side of hero, approximately 40% width on desktop, full-width on mobile
- Style: Bright, clean, modern photography with natural lighting
- Alt approach: Illustration of the eco-friendly pickup process

**Supporting Images**:
- How It Works section: Icons/illustrations for each step
- Benefits: Photo of organized waste collection or happy urban environment
- Testimonials: Customer avatar placeholders or actual photos (rounded-full)
- About section (if included): Team photo or service in action

**Image Treatment**:
- Rounded corners (rounded-xl) for all photos
- Subtle shadow (shadow-md) for depth
- Aspect ratios: 16:9 for hero, 1:1 for avatars, 4:3 for feature images

---

## Telegram Mini App Considerations

- Ultra-simplified UI: Focus on single-task flows
- Bottom-sheet style interactions (slide-up modals)
- Larger touch targets (min-h-12)
- Sticky bottom CTAs for primary actions
- Native Telegram UI patterns: BackButton, MainButton integration
- Compact tariff selection: Stacked cards instead of grid
- Quick address entry: Location sharing integration

---

## Accessibility & Polish

- Focus indicators: ring-2 ring-offset-2 on all interactive elements
- Aria labels for icon-only buttons
- Semantic HTML: proper heading hierarchy, form labels
- Keyboard navigation: Full support with visible focus states
- Contrast ratios: Ensure text readability on all backgrounds
- Loading states for all async operations
- Error states: Clear, actionable error messages

This design creates a trustworthy, efficient, and eco-conscious experience that makes subscription management feel effortless while building confidence in the service.