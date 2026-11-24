export const profile = {
  name: 'Swati Singh',
  role: 'Flutter & FlutterFlow Developer',
  email: 'swatiirajput0103@gmail.com',
  phone: '+91 63506 69174',
  phoneHref: '+916350669174',
  location: 'Rajasthan, India',
  cvUrl: '/Swati_Singh_Enhanced_CV.pdf',
  cvFileName: 'Swati_Singh_CV.pdf',
  // TODO: add your real profile links (leave empty to hide the button)
  linkedin: '',
  github: '',
};

export const typedRoles = [
  'cross-platform Flutter apps.',
  'pixel-perfect UIs.',
  'FlutterFlow products.',
  'clean, scalable architecture.',
  'buttery-smooth animations.',
];

export const stats = [
  { value: 3, suffix: '', label: 'Years building with Flutter' },
  { value: 8, suffix: '+', label: 'Apps built & shipped' },
  { value: 3, suffix: '', label: 'Companies' },
  { value: 25, suffix: '+', label: 'Tools & technologies' },
];

/** Quick-scan summary for recruiters. */
export const snapshot = [
  { icon: '💼', label: 'Current role', value: 'Flutter & FlutterFlow Developer at Arixlabs' },
  { icon: '⏱️', label: 'Experience', value: '~3 years of professional Flutter work (since Dec 2023)' },
  { icon: '📱', label: 'Platforms', value: 'Android & iOS from a single Flutter codebase' },
  { icon: '🧩', label: 'State & architecture', value: 'Riverpod · BLoC · Provider · Clean Architecture · MVVM' },
  { icon: '☁️', label: 'Backend & APIs', value: 'Firebase · Supabase · REST (Dio) · GraphQL' },
  { icon: '🏷️', label: 'Domains shipped', value: 'Health · Ed-tech · Food delivery · Ride-hailing · Dating' },
  { icon: '🎓', label: 'Education', value: 'B.Tech, Computer Science (2020–2024)' },
  { icon: '📍', label: 'Location & availability', value: 'Rajasthan, India · Open to remote / relocation' },
];

/** "What I bring" value cards. */
export const services = [
  {
    icon: 'flutter' as const,
    title: 'Cross-platform apps',
    text: 'One Flutter codebase shipped to Android and iOS, with responsive UI, smooth animations and Play Store / App Store releases.',
  },
  {
    icon: 'riverpod' as const,
    title: 'Scalable architecture',
    text: 'Clean Architecture and MVVM with Riverpod, BLoC or Provider, so code stays testable and easy to extend as the product grows.',
  },
  {
    icon: 'api' as const,
    title: 'Backend & integrations',
    text: 'REST & GraphQL APIs, Firebase, Supabase, payments (Razorpay), push notifications, maps and secure auth (JWT / OAuth).',
  },
  {
    icon: 'ai' as const,
    title: 'Fast delivery with FlutterFlow + AI',
    text: 'FlutterFlow extended with custom Dart code, plus AI-assisted tools to prototype, debug and test faster.',
  },
];

export const facts = [
  { icon: '📍', title: 'Rajasthan, India', sub: 'Open to remote & relocation' },
  { icon: '🎓', title: 'B.Tech, CSE', sub: 'Bikaner Technical University · 2024' },
  { icon: '💼', title: 'Arixlabs', sub: 'Flutter & FlutterFlow Developer' },
  { icon: '🗣️', title: 'English · Hindi', sub: 'Languages' },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: 'Arixlabs',
    role: 'Flutter & FlutterFlow Developer',
    period: 'May 2026 — Present',
    current: true,
    points: [
      'Building production apps such as **BioStress** and **VettraPro** with FlutterFlow plus custom Flutter widgets, actions and functions.',
      'Connecting apps to a **Supabase** backend: authentication, Postgres tables and storage.',
      'Turning designs into responsive, pixel-accurate screens with reusable components and theming.',
      'Using AI-assisted development tools to speed up prototyping, debugging and code review.',
    ],
    stack: ['FlutterFlow', 'Flutter', 'Supabase', 'Custom Code'],
  },
  {
    company: 'Waplia Digital Solutions',
    role: 'Flutter Developer',
    period: 'Jun 2025 — Apr 2026',
    points: [
      'Built and maintained four consumer apps: a **Dating App**, a **Ride-Booking App**, **SwadHub**, and a **Food Delivery App**.',
      'Owned UI development, from complex custom layouts to smooth transitions and micro-interactions.',
      'Integrated REST APIs, real-time ride status updates, location services and payment gateways.',
      'Profiled and optimised performance: fewer rebuilds, lazy-loaded lists and cached network images.',
    ],
    stack: ['BLoC', 'REST APIs', 'Google Maps', 'Razorpay', 'FCM'],
  },
  {
    company: 'Img Global Infotech · Jaipur',
    role: 'Flutter Developer',
    period: 'Dec 2023 — May 2025',
    points: [
      'Developed **3 Flutter apps** end-to-end using clean architecture and API integration, including health and school-management products.',
      'Built robust state management with **Provider/BLoC**, plus authentication flows (JWT/OAuth) and secure storage.',
      'Wrote scalable, maintainable codebases with modular packages and reusable widget libraries.',
      'Worked with designers and backend engineers through Git-based workflows and code reviews.',
    ],
    stack: ['Provider', 'BLoC', 'Clean Architecture', 'JWT', 'Firebase'],
  },
];

export const skillGroups = [
  { icon: '💙', title: 'Core Mobile', items: ['Flutter', 'Dart', 'FlutterFlow', 'iOS & Android', 'Null Safety', 'Responsive UI'] },
  { icon: '🧠', title: 'State & Architecture', items: ['BLoC', 'Provider', 'Riverpod', 'Clean Architecture', 'MVVM', 'Modular Packages'] },
  { icon: '🔌', title: 'APIs & Data', items: ['REST (Dio/HTTP)', 'GraphQL', 'JSON Serialization', 'Hive', 'SQLite', 'Offline Sync'] },
  { icon: '🔥', title: 'Backend & Cloud', items: ['Firebase Auth', 'FCM', 'Analytics', 'Crashlytics', 'Supabase'] },
  { icon: '✨', title: 'UI & Motion', items: ['Custom Widgets', 'Rive', 'Lottie', 'Implicit/Explicit Animations', 'Dynamic Theming', 'Accessibility'] },
  { icon: '🔐', title: 'Security & Payments', items: ['JWT', 'OAuth', 'Secure Storage', 'Encryption', 'Razorpay', 'EasyPay'] },
  { icon: '🧪', title: 'Quality & DevOps', items: ['Unit Tests', 'Widget Tests', 'GitHub Actions', 'Fastlane', 'Profiling', 'Git'] },
  { icon: '⚙️', title: 'Native & Platform', items: ['Method Channels', 'WebView', 'Push Notifications', 'Localization', 'Location Services'] },
  { icon: '🤖', title: 'AI-Assisted Dev', items: ['Claude Code', 'GitHub Copilot', 'ChatGPT', 'FlutterFlow AI Gen', 'Prompt Engineering'] },
];

export const marqueeItems = [
  'Flutter', 'Dart', 'FlutterFlow', 'BLoC', 'Riverpod', 'Provider', 'Firebase', 'Supabase', 'Dio', 'GraphQL',
  'Hive', 'SQLite', 'Rive', 'Lottie', 'Razorpay', 'Fastlane', 'GitHub Actions', 'Method Channels', 'Postman',
  'Figma', 'Android Studio', 'VS Code', 'Git', 'Claude Code', 'Copilot',
];

export type ProjectCategory = 'clean' | 'realtime' | 'flutterflow';

export type Project = {
  name: string;
  emoji: string;
  tag: string;
  cats: ProjectCategory[];
  gradient: string;
  desc: string;
  features: string[];
  stack: string[];
};

export const projectFilters: { key: 'all' | ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'clean', label: 'Clean Architecture' },
  { key: 'realtime', label: 'Real-time' },
  { key: 'flutterflow', label: 'FlutterFlow' },
];

export const projects: Project[] = [
  {
    name: 'Food Delivery App', emoji: '🍔', tag: 'Food-tech', cats: ['clean'],
    gradient: 'linear-gradient(135deg,#FF8A00,#FF3D77)',
    desc: 'A full food-ordering experience built with Clean Architecture (Data Source → Repository → Use Case).',
    features: ['User authentication', 'Restaurant & menu listing', 'Cart management', 'Order placement', 'Live order tracking', 'Payment integration'],
    stack: ['Flutter', 'BLoC', 'Provider', 'REST API', 'Razorpay'],
  },
  {
    name: 'Huga Health App', emoji: '🩺', tag: 'Healthcare', cats: ['clean'],
    gradient: 'linear-gradient(135deg,#00C9A7,#0175C2)',
    desc: 'A production health app with a modular architecture and secure API integration across many user journeys.',
    features: ['User onboarding', 'Profile management', 'Health content modules', 'Appointment booking', 'Robust error handling', 'Performance tuning'],
    stack: ['Flutter', 'Modular Arch', 'Secure APIs', 'BLoC'],
  },
  {
    name: 'Edoovi School App', emoji: '🎒', tag: 'Ed-tech', cats: ['clean'],
    gradient: 'linear-gradient(135deg,#7F5AF0,#13B9FD)',
    desc: 'A school management system with multi-role access for students and parents and API-driven UI.',
    features: ['Multi-role auth', 'Attendance tracking', 'Academic records', 'Push notifications', 'Role dashboards', 'Reusable widgets'],
    stack: ['Flutter', 'Clean Arch', 'FCM', 'REST API'],
  },
  {
    name: 'Dating App', emoji: '💞', tag: 'Social', cats: ['clean', 'realtime'],
    gradient: 'linear-gradient(135deg,#FF6FAE,#B84DFF)',
    desc: 'A dating platform with presentation, domain and data layers kept separate, and smooth animated interactions.',
    features: ['Profile creation', 'Swipe discovery', 'Matching logic', 'Real-time chat', 'Secure user data', 'Animated transitions'],
    stack: ['Flutter', 'BLoC', 'WebSockets', 'Animations'],
  },
  {
    name: 'Ride-Booking App', emoji: '🚕', tag: 'Mobility', cats: ['realtime'],
    gradient: 'linear-gradient(135deg,#FFC93C,#FF7A00)',
    desc: 'A ride-hailing app with real-time state handling, location services and live trip updates.',
    features: ['Ride creation', 'Driver allocation', 'Live ride status', 'Fare calculation', 'Trip history', 'Location services'],
    stack: ['Flutter', 'Google Maps', 'Geolocator', 'API Polling'],
  },
  {
    name: 'SwadHub', emoji: '🍛', tag: 'Food-tech', cats: ['realtime'],
    gradient: 'linear-gradient(135deg,#F2545B,#FFB547)',
    desc: 'A food-tech app built at Waplia Digital Solutions. I worked on polished UI, API integration and app performance.',
    features: ['Custom UI screens', 'API integration', 'State management', 'Performance optimisation'],
    stack: ['Flutter', 'REST API', 'Provider'],
  },
  {
    name: 'BioStress', emoji: '🧘', tag: 'FlutterFlow', cats: ['flutterflow'],
    gradient: 'linear-gradient(135deg,#3DDC97,#13B9FD)',
    desc: 'Built at Arixlabs with FlutterFlow and custom Flutter code, backed by Supabase.',
    features: ['FlutterFlow screens', 'Custom Dart widgets', 'Supabase backend', 'Responsive layouts'],
    stack: ['FlutterFlow', 'Flutter', 'Supabase'],
  },
  {
    name: 'VettraPro', emoji: '🛡️', tag: 'FlutterFlow', cats: ['flutterflow'],
    gradient: 'linear-gradient(135deg,#0175C2,#042B59)',
    desc: 'A FlutterFlow + Flutter application at Arixlabs that pairs fast visual development with custom actions.',
    features: ['Visual builder flows', 'Custom actions', 'Supabase auth', 'Reusable components'],
    stack: ['FlutterFlow', 'Flutter', 'Supabase'],
  },
];

export const aiCards = [
  { icon: '⚡', title: 'Faster prototyping', text: 'FlutterFlow AI Gen and AI pair programmers turn wireframes into working screens in hours, not days.' },
  { icon: '🔍', title: 'Code review & debugging', text: 'I use Claude & Copilot to explain stack traces, spot rebuild issues and suggest refactors.' },
  { icon: '🧪', title: 'Test generation', text: 'I draft unit and widget tests with AI, then harden them by hand to cover the edge cases.' },
  { icon: '💬', title: 'AI features in apps', text: 'I build LLM-powered features such as smart search, chat assistants and summaries into Flutter apps through REST APIs.' },
];

export const education = [
  {
    icon: '🎓',
    title: 'B.Tech in Computer Science',
    place: "Government Women's Engineering College, Ajmer · Bikaner Technical University",
    meta: '2020 — 2024',
  },
  {
    icon: '🏫',
    title: 'Senior Secondary (12th, Science), CBSE',
    place: 'Sophia Girls Senior Secondary School, Kota, Rajasthan',
    meta: 'Score: 72%',
  },
];

/** Keyword-intent knowledge base for the in-page SwatiBot assistant. */
export const botKnowledge: { keys: string[]; answer: string }[] = [
  { keys: ['stack', 'tech', 'skill', 'technolog', 'know'], answer: 'My core stack: <b>Flutter & Dart</b>, <b>FlutterFlow</b>, BLoC / Provider / Riverpod, Dio & GraphQL, Firebase (Auth, FCM, Crashlytics), Supabase, Hive & SQLite, and Rive / Lottie for animation. 💙' },
  { keys: ['bloc', 'provider', 'riverpod', 'state'], answer: "Yes! I've used <b>BLoC</b> and <b>Provider</b> in production since 2023, and <b>Riverpod</b> too. I pick based on app size: BLoC for complex event-driven flows, Provider/Riverpod for lighter features." },
  { keys: ['project', 'app', 'built', 'portfolio', 'work on'], answer: 'Highlights: 🍔 Food Delivery, 🩺 Huga Health, 🎒 Edoovi School, 💞 Dating App, 🚕 Ride-Booking, 🍛 SwadHub, plus 🧘 BioStress & 🛡️ VettraPro in FlutterFlow. Scroll up to “Projects” for details!' },
  { keys: ['experience', 'year', 'compan', 'job', 'work', 'career'], answer: 'About <b>3 years</b> of Flutter experience: Img Global Infotech (Dec 2023 – May 2025), Waplia Digital Solutions (Jun 2025 – Apr 2026), and now <b>Arixlabs</b> as a Flutter & FlutterFlow Developer (May 2026 – present).' },
  { keys: ['flutterflow', 'low code', 'lowcode', 'supabase'], answer: 'At Arixlabs I build apps with <b>FlutterFlow</b>, extending them with custom Dart widgets/actions and a <b>Supabase</b> backend (auth, database, storage).' },
  { keys: ['contact', 'email', 'phone', 'hire', 'reach', 'call'], answer: '📧 <a href="mailto:swatiirajput0103@gmail.com"><u>swatiirajput0103@gmail.com</u></a><br>📞 +91 63506 69174. I\'d love to hear from you!' },
  { keys: ['educat', 'degree', 'college', 'study', 'b.tech', 'btech'], answer: "🎓 B.Tech in Computer Science (2020–2024) from Government Women's Engineering College, Ajmer, under Bikaner Technical University." },
  { keys: ['ai', 'copilot', 'claude', 'chatgpt', 'gpt'], answer: '🤖 I use AI tools (Claude Code, GitHub Copilot, ChatGPT, FlutterFlow AI Gen) for prototyping, debugging and test drafts, and I can build LLM-powered features into Flutter apps.' },
  { keys: ['animation', 'rive', 'lottie', 'ui', 'design'], answer: '✨ I love motion! Rive & Lottie, implicit/explicit Flutter animations, hero transitions and custom painters, like the floating Flutter icons and Dash on this page. 💙' },
  { keys: ['payment', 'razorpay', 'easypay'], answer: "💳 I've integrated <b>Razorpay</b> and <b>EasyPay</b> payment flows, including order placement and status handling." },
  { keys: ['test', 'ci', 'cd', 'deploy', 'store', 'fastlane'], answer: '🧪 Unit & widget testing, CI/CD basics with Fastlane and GitHub Actions, and deployment to both the Play Store and the App Store.' },
  { keys: ['cv', 'resume', 'résumé', 'download', 'pdf'], answer: '📄 Sure! <a href="/Swati_Singh_Enhanced_CV.pdf" download="Swati_Singh_CV.pdf"><u>Download Swati\'s CV (PDF)</u></a>. You\'ll also find a “Download CV” button at the top of the page.' },
  { keys: ['hi', 'hello', 'hey', 'namaste'], answer: "Hello! 👋 I'm SwatiBot. Ask me about Swati's skills, projects, experience or how to get in touch." },
];

export const botSuggestions = [
  "What's your tech stack?",
  'Which projects have you built?',
  'Do you know BLoC?',
  'How can I contact you?',
  'Can I download your CV?',
];
