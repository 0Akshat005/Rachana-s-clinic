// DRAFT — doctor to review clinical copy. Confirm every item marked [CONFIRM] before launch.
export type ServiceCategory = "Spine" | "Hands-on" | "Technology" | "Movement";
export type Service = {
  slug: string; title: string; category: ServiceCategory; icon: string; blurb: string; summary: string;
  what: string; who: string; expect: string; safety: string; faqs: { question: string; answer: string }[];
};

export const clinic = {
  name: "Rachana Physiotherapy Clinic",
  doctor: {
    name: "Dr. Priyanka Chaitanya Helwatkkar", title: "Physiotherapist",
    qualifications: "[CONFIRM: degrees e.g. BPT/MPT]", registrationNo: "[CONFIRM: council registration number]",
    yearsInPractice: null as number | null,
    certifications: ["Certified Pilates instructor", "Osteopathy", "Matrix Rhythm Therapy"], // [CONFIRM each]
    bio: "DRAFT — Dr. Priyanka offers a calm, hands-on approach to physiotherapy. Each visit starts by listening to what is limiting your daily movement, whether that is pain, stiffness, a recent injury or a goal to move with more confidence. Care may combine assessment, guided movement and suitable therapies. The plan is explained in plain language, with room for questions and practical steps you can use between visits. [CONFIRM: replace with doctor-approved 150–200 word bio]",
  },
  address: {
    line: "59, Nagar Vikas Society, Besides Indian (Allahabad) Bank, near new underpass, Manish Nagar Railway Crossing Road, Manish Nagar, Somalwada, Nagpur, Maharashtra 440015",
    landmark: "Beside Indian (Allahabad) Bank, near the new underpass",
    mapsQuery: "Rachana Physiotherapy Clinic Manish Nagar Nagpur",
  },
  phones: ["+91 92092 91738", "+91 84605 07249"], whatsappNumber: "919209291738", // [CONFIRM which number is on WhatsApp]
  email: null as string | null,
  hours: { "Mon-Sat": [["08:00", "13:00"], ["16:30", "21:00"]], "Sun": [["08:30", "13:00"]] },
  timezone: "Asia/Kolkata",
  reviews: { rating: null as number | null, count: null as number | null, googleUrl: null as string | null },
  social: { instagram: null as string | null, facebook: null as string | null, youtube: null as string | null },
  showPricing: false,
  pricing: [
    { label: "Initial assessment", price: "₹ — to confirm" }, { label: "Follow-up session", price: "₹ — to confirm" },
    { label: "Package (10 sessions)", price: "₹ — to confirm" }, { label: "Pilates (monthly / drop-in)", price: "₹ — to confirm" },
  ],
} as const;

export const services: Service[] = [
  { slug: "spine-care", title: "Spine Care", category: "Spine", icon: "Spine", blurb: "Support for back, neck and disc-related concerns.", summary: "A careful approach to neck, low-back and disc-related pain that aims to help you move more comfortably.", what: "Spine care looks at how your neck and back move, feel and cope with everyday load. It may include hands-on care, movement guidance and a plan for home.", who: "It can support people with cervical or lumbar spondylosis (also searched as spondylitis), PIVD / disc problems, low-back pain or recurring stiffness.", expect: "Your first visit focuses on your symptoms, movement and goals. You will get a clear explanation of the next steps.", safety: "Treatment is adjusted to your history and current symptoms. Tell us about new symptoms, scans, medicines or recent injuries.", faqs: [
    { question: "Can you help with neck stiffness?", answer: "Neck and cervical concerns are commonly assessed. A plan may help you understand which movements are suitable." },
    { question: "What does PIVD mean?", answer: "PIVD is a term often used for a disc problem in the spine. Your assessment helps decide the appropriate next step." },
    { question: "Will I get exercises?", answer: "If suitable, you may be shown simple movements and guidance to practise between visits." },
  ] },
  { slug: "osteopathy-mrt", title: "Osteopathy & Matrix Rhythm Therapy", category: "Hands-on", icon: "HandHeart", blurb: "Gentle, hands-on support for tight muscles and movement.", summary: "Gentle, hands-on techniques that may help ease tight soft tissue and support comfortable movement.", what: "Osteopathy uses skilled hands-on techniques. Matrix Rhythm Therapy (MRT) uses rhythmic oscillations applied by hand to help relax tight muscle and soft tissue.", who: "It may help people who feel muscle tightness, stiffness or movement restriction. Suitability is checked during assessment.", expect: "Care is explained before it begins. You may be asked to move or give feedback as treatment is adjusted.", safety: "Hands-on treatment is not suitable for every situation. Your medical history and any current symptoms are discussed first.", faqs: [
    { question: "Does MRT use a machine?", answer: "MRT is described here as rhythmic oscillations applied by hand. Ask at your assessment how it may fit your plan." },
    { question: "Is osteopathy painful?", answer: "The approach is generally gentle. Tell your physiotherapist straight away if you are uncomfortable." },
    { question: "How many visits will I need?", answer: "It depends on your assessment and goals. No fixed number is promised." },
  ] },
  { slug: "dry-needling", title: "Dry Needling", category: "Hands-on", icon: "Sparkles", blurb: "Targeted work for tight, painful muscle knots.", summary: "Fine needles are used at tight, painful muscle knots, also called trigger points.", what: "Dry needling uses fine needles targeted at trigger points in a muscle. It is one option that may be included in a wider physiotherapy plan.", who: "It can support some people with local muscle tightness or pain when an assessment finds it suitable.", expect: "The area is explained and your consent is checked first. You may feel a brief twitch, ache or muscle response.", safety: "Not everyone is suitable. Please share details of pregnancy, blood-thinning medicine, needle concerns, skin issues or medical conditions.", faqs: [
    { question: "Is dry needling the same as acupuncture?", answer: "It uses fine needles but is applied within a physiotherapy assessment for muscle trigger points." },
    { question: "Will it hurt?", answer: "Sensations vary. Your comfort matters and you can ask to stop at any time." },
    { question: "Can everyone have dry needling?", answer: "No. Suitability is checked before treatment." },
  ] },
  { slug: "cupping-hijama", title: "Hijama / Cupping Therapy", category: "Hands-on", icon: "CircleDot", blurb: "Suction-cup therapy for muscle tightness.", summary: "Suction cups may be used to ease muscle tightness after suitability is checked.", what: "Cupping therapy uses cups to create gentle suction on the skin. It may be used alongside movement and other parts of your plan.", who: "It may support people with a feeling of muscle tightness or stiffness. An assessment helps decide if it is appropriate.", expect: "Your physiotherapist explains where cups may be placed and what you might feel. Temporary skin marks can occur.", safety: "Suitability is checked first, including skin health, medications and your medical history. Please ask about any concern before treatment.", faqs: [
    { question: "Will cupping leave marks?", answer: "It can leave temporary circular skin marks. Your physiotherapist will explain this before treatment." },
    { question: "Is hijama suitable for everyone?", answer: "No. Suitability is assessed individually." },
    { question: "Can I go back to work after?", answer: "Ask during your visit, as advice can depend on the area treated and your response." },
  ] },
  { slug: "tecar-laser", title: "Tecar & Laser Therapy", category: "Technology", icon: "Radio", blurb: "Electro-physical support for pain and soft tissue.", summary: "Modern electro-physical therapies that may support pain management and soft-tissue healing.", what: "Tecar and laser are electro-physical therapies. They may be used with assessment, exercise and hands-on care—not as a stand-alone promise.", who: "They can be considered for some pain and soft-tissue concerns when appropriate for you.", expect: "The process is explained, the area is prepared and the setting is adjusted as needed. Your treatment plan remains individual.", safety: "These therapies have situations where they should not be used. Your health history, implants and current symptoms are checked first.", faqs: [
    { question: "What is Tecar therapy?", answer: "Tecar is an electro-physical therapy that may be considered within your individual treatment plan." },
    { question: "Can laser therapy replace exercise?", answer: "No single treatment fits everyone. Exercise or movement guidance may also be part of your care." },
    { question: "Is it safe?", answer: "Suitability and settings are checked by the clinician before use." },
  ] },
  { slug: "sports-rehab", title: "Sports Injury Rehabilitation", category: "Movement", icon: "Activity", blurb: "Structured recovery and return-to-activity support.", summary: "A step-by-step plan to support recovery and a considered return to the activities you enjoy.", what: "Sports rehabilitation connects your injury, current capacity and activity goals. The plan can build strength, control and confidence over time.", who: "It may help recreational athletes and active people after a sprain, strain, overload or time away from activity.", expect: "We talk through your sport or activity, assess movement and set practical milestones. Your plan can change as you progress.", safety: "Return-to-activity advice is based on your assessment. Tell us about sudden swelling, a new injury or medical advice you have received.", faqs: [
    { question: "Do I need to be an athlete?", answer: "No. The same structured approach can support anyone returning to an activity they value." },
    { question: "Can I keep training?", answer: "Your plan may include safe modifications. This depends on your assessment." },
    { question: "Will I get a return-to-sport plan?", answer: "If it is relevant to your goal, the plan can include staged activity guidance." },
  ] },
  { slug: "pilates", title: "Pilates Training", category: "Movement", icon: "PersonStanding", blurb: "Certified instruction for core, posture and flexibility.", summary: "Certified Pilates instruction for core strength, posture and flexibility at your own pace.", what: "Pilates uses controlled movement and breath to build awareness, strength and mobility. Sessions are adapted to your starting point.", who: "It may suit beginners, people working on posture or core strength, and those who want a mindful movement practice.", expect: "You will be guided through clear, controlled movements with attention to comfort and form. Please wear clothing you can move in.", safety: "Tell us about injuries, pain, pregnancy or health changes so exercises can be adapted. Move within your comfortable range.", faqs: [
    { question: "Can beginners join?", answer: "Yes. Pilates can be introduced at a pace that suits a beginner." },
    { question: "What should I wear?", answer: "Comfortable clothing that allows you to move easily is helpful." },
    { question: "Is Pilates only for fitness?", answer: "It can support strength, posture and flexibility goals. Your suitability is discussed individually." },
  ] },
];

export const advancedTherapies = [
  ["Tecar", "An electro-physical therapy that may support soft-tissue care."], ["Laser", "Light-based therapy used when appropriate within a plan."], ["TENS", "A gentle electrical stimulation modality sometimes used for pain support."], ["IFT", "Interferential therapy: electrical stimulation used when suitable."], ["Ultrasound", "A modality that uses sound waves in some physiotherapy plans."], ["Short-wave diathermy", "A heat-based electrotherapy option, if suitable."], ["Traction", "A controlled pulling technique for selected spinal concerns."], ["Compression", "Support that may help manage swelling or recovery needs."], ["PEMF", "Pulsed electromagnetic field therapy, used when appropriate."], ["CPM", "Continuous passive movement, used in selected rehabilitation plans."], ["MST", "[CONFIRM: expansion and plain-language description]."], ["Hydrocollateral packs", "[CONFIRM: clinic wording and plain-language description]."],
] as const; // All items are from the clinic's printed card — confirm: true.

export const alsoAvailable = ["Kinesio taping", "Women’s health", "Neuro rehab", "Gait training", "Manual therapy", "Joint mobilisation", "Myofascial release", "MET", "Fitness training"]; // confirm: true

export const testimonials = [
  { name: "A. K.", concern: "Back comfort and movement", text: "Sample — I appreciated having my concerns explained in simple terms and a plan I could follow at home.", isPlaceholder: true },
  { name: "S. R.", concern: "Return to activity", text: "Sample — The sessions felt calm and focused. I understood what each step of the plan was for.", isPlaceholder: true },
  { name: "P. M.", concern: "Neck stiffness", text: "Sample — I was encouraged to ask questions and felt supported as I worked on daily movement.", isPlaceholder: true },
];

export const homeFaqs = [
  ["What should I bring to my first visit?", "Bring previous reports, X-rays or MRI scans if you have them, and wear comfortable clothing."],
  ["Do I need a doctor’s referral?", "You can contact the clinic to discuss your visit. If another clinician has referred you, bring any notes they have given."],
  ["How long is a session?", "[CONFIRM: typical session length]. Please call or WhatsApp for the current appointment details."],
  ["Is dry needling / cupping suitable for everyone?", "No. Your medical history and current symptoms are checked before either treatment is considered."],
  ["Do you treat sports injuries?", "Yes. Sports injury rehabilitation is available, with plans based on your activity and assessment."],
  ["Do you offer Pilates for beginners?", "Yes. Pilates can be introduced at a pace that suits beginners."],
  ["What are your timings?", "Monday to Saturday: 8:00 AM–1:00 PM and 4:30 PM–9:00 PM. Sunday: 8:30 AM–1:00 PM."],
  ["How much does the first visit cost?", "Call or WhatsApp us for current fees."],
] as const;
