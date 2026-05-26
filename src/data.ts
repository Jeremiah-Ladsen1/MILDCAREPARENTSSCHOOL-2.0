/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Program, Teacher, BlogArticle, FAQItem, SchoolEvent, Announcement, StudentProfile } from './types';

export const programs: Program[] = [
  {
    id: 'nursery',
    name: 'Nursery Care (Baby, Middle, Top Class)',
    ageGroup: 'Ages 2.5 – 5 Years',
    description: 'A nurturing, warm, and highly stimulating environment centered on cognitive, physical, and emotional growth. We focus on social integration, speech development, and motor skills through structured play and creative expression.',
    curriculum: [
      'Early Literacy & Phonics and vocabulary building',
      'Numeracy concepts and shapes identification',
      'Fine and gross motor skill workshops (coloring, cutting, sand play)',
      'Social skills, hygiene training, and guided sharing habits',
      'Creative arts, nursery rhymes, and movement games'
    ],
    schedule: 'Mon – Fri: 8:00 AM – 12:30 PM (optional afternoon care available)',
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800',
    features: [
      'Low student-caregiver ratio (5:1)',
      'Equipped soft playroom and secure sandcastle area',
      'Fresh fruit snacks and custom child-balanced meals',
      'Daily developmental log communication for parents'
    ]
  },
  {
    id: 'pre-primary',
    name: 'Pre-Primary Preparatory Class',
    ageGroup: 'Ages 4 – 6 Years',
    description: 'Designed as a bridge to primary learning, focusing on structured reading, simple arithmetic, creative expression, and environmental exploration. Children build self-confidence, early scientific curiosity, and pre-writing proficiency.',
    curriculum: [
      'Phonics reading schemes (Jolly Phonics foundation)',
      'Basic arithmetic (addition, subtraction, counting patterns)',
      'Environmental studies (weather, plants, community services)',
      'Beginning writing skills, letter formation, and fine crafts',
      'Introductory computer literacy and keyboard familiarization'
    ],
    schedule: 'Mon – Fri: 7:45 AM – 1:00 PM',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    features: [
      'Individualized reading trackers',
      'Weekly swimming classes under certified lifesaver coaches',
      'Introduction to early social-studies projects',
      'Interactive reading theater and story circle hours'
    ]
  },
  {
    id: 'primary',
    name: 'Primary Education (Grades P1 – P7)',
    ageGroup: 'Ages 6 – 12 Years',
    description: 'A rigorous academic standard blending the national curriculum guidelines with practical life skills, scientific discovery, and digital technology. We focus on academic distinction, computing, critical analysis, and preparing students for top Primary Leaving Examination (PLE) performance.',
    curriculum: [
      'Mathematics - conceptual analysis, problem-solving',
      'English Language - advanced grammar, public speaking, creative reading',
      'Integrated Science - agricultural labs, human health, experiments',
      'Social Studies - patriotism, local leadership, regional geography',
      'Information & Communcation Technology (ICT) and basic Coding',
      'Extracurricular clubs: Debating, Music Dance & Drama (MDD), Chess Team'
    ],
    schedule: 'Mon – Fri: 7:30 AM – 4:30 PM (Saturday morning revision for P6 & P7)',
    image: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&q=80&w=800',
    features: [
      'Equipped modern computer laboratory (1-on-1 computer access)',
      'Comprehensive PLE prep with intensive examiner coaching sessions',
      'Active sports calendar including football leagues, swimming, and athletics',
      'Leadership guilds and community responsibility workshops'
    ]
  }
];

export const teachers: Teacher[] = [
  {
    id: 'headteacher',
    name: 'Mrs. Susan Kigozi',
    role: 'Headteacher / Director of Academics',
    bio: 'An educator with over 15 years of early learning excellence who holds an MA in Early Childhood Development from Makerere University. Mrs. Kigozi believes that the first seven years of schooling form the permanent structural concrete of a child’s intellectual and moral house.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    specialty: 'Early Childhood Development Policies, Creative Pedagogy & Character Building',
    experience: '16 Years in Education Administration'
  },
  {
    id: 'pre-primary-lead',
    name: 'Mr. Timothy Mukasa',
    role: 'Lead Educator, Pre-Primary Preparatory',
    bio: 'Mr. Timothy is passionate about Jolly Phonics and interactive mathematics. His classroom is legendary for its hands-on models and gamified learning grids, ensuring that no child is left behind in numerical literacy.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500',
    specialty: 'Jolly Phonics, Early Mathematics, Interactive Science Experiments',
    experience: '8 Years teaching Pre-school classes'
  },
  {
    id: 'nursery-care-lead',
    name: 'Madame Sarah Nabukenya',
    role: 'Nursery Care Coordinator',
    bio: 'Madame Sarah leads our baby and playgroup sessions. She commands a warm maternal charm and holds specialized training in infant emergency response, sign-language basics, and behavioral adjustment.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=500',
    specialty: 'Emotional Regulation, Motor Coordination, Sensory Playgrounds',
    experience: '10 Years in Early Nestling Care'
  },
  {
    id: 'sports-lead',
    name: 'Coach Juma Ssewankambo',
    role: 'Physical Educator & Swimming Coach',
    bio: 'Coach Juma is a former national swimmer who holds direct certification from the Uganda Swimming Federation. He ensures our toddlers acquire confident water survival skills and coordinates all track-and-field inter-house galas.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500',
    specialty: 'Water Safety, Motor Dexterity Athletics, Football Coordination',
    experience: '7 Years in Multi-sport Youth Coaching'
  }
];

export const articles: BlogArticle[] = [
  {
    id: 'early-literacy',
    title: 'The Critical Window: Why Phonics Rules Pre-Primary Enrichment',
    category: 'Early Literacy',
    summary: 'Phonics is more than just spelling. Discover how early phonetic sound familiarity transforms a toddler’s cognitive mapping and accelerates reading capabilities by 200%.',
    content: `Many parents wonder what the secret is to producing fluent readers by age five. The research is clear: structural synthetic phonics—the systematic sound-to-letter matching method—is the undisputed golden standard. At Mild Care Parents School, we deploy the famous Jolly Phonics methodology with incredible results.

In the first phase of early literacy focus, children do not just learn the letter "s" by its name; they learn the dynamic hiss of the sound. They connect muscle movements, songs, and hand gestures to each sound group. This multi-sensory approach guarantees that both visual and auditory learners store letters directly in their long-term associative memory.

What can you do at home to reinforce this?
1. Play "Sound Detective" where toddlers identify items starting with standard phonetic sounds rather than entire words.
2. Read aloud daily, stressing the sounding of consonant-vowel-consonant (CVC) blocks (e.g., d-o-g, c-a-t).
3. Avoid correcting spelling aggressively. Focus instead on phonetic spelling attempts, as this builds early write-confidence and makes children feel powerful.`,
    author: 'Mrs. Susan Kigozi',
    date: 'May 12, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'positive-discipline',
    title: 'Establishing Positive Discipline at Home Without Friction',
    category: 'Parenting Guide',
    summary: 'Discipline is about guidance, not punishment. Learn actionable steps to replace shouting with healthy routines and emotional coaching.',
    content: `Maintaining harmony at home while enforcing necessary developmental boundaries is one of modern parenting’s greatest struggles. In Uganda’s urban settings, parents face high stress, making active positive discipline-work essential.

To begin, understanding that discipline comes from the Latin 'discipulus' (to teach) changes everything. Shouting or physical punishment creates flight-or-fight response in children, shutting down the cerebral cortex where learning actually takes place.

Here is our practical five-way framework for calm boundaries:
1. **The "Check Connection" Rule**: Never shout commands across the living room. Walk up, squat to their eye-level, make light physical connection (touching shoulder), and speak with soft authority.
2. **Clear Alternatives over "No"**: Instead of shouting "Stop jumping on the sofa!", pivot positive: "Your energy is super! Please jump on the outdoor play tramp instead."
3. **Structured Timers**: Toddlers struggle transitioning. Give advance notices using physical timers: "When the ring sounds in 5 minutes, we say goodbye to playground and head to baths."
4. **Natural Consequences**: If a toddler intentionally throws toys, the consequence is that toys are retired to the safe shelf for 2 days. There is no need for yelling—just coolly follow down the established protocol.`,
    author: 'Madame Sarah Nabukenya',
    date: 'April 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'screen-time',
    title: 'The Screen Time Dilemma: Creative Off-Screen Alternatives',
    category: 'Child Development',
    summary: 'How much iPad screen time is safe? Discover the research-backed effects on developing attention spans, and explore alternative sensory play activities.',
    content: `With increasing accessibility of tablets, smartphones, and kids channels, managing screen exposure has become a major challenge for families. We observe screen-addicted toddlers showing reduced concentration spans, delayed social queues, and sleep disturbances.

The World Health Organization (WHO) explicitly advises zero screen exposure for children under two, and a maximum of 1 hour per day for children aged three to five. The reason lies in brain development: early neuro-structures require active physical three-dimensional interaction—touching clay, stacking blocks, hearing authentic parent voices—to map distance and build concentration synapses.

How can you re-balance your household?
- **Create Screen-Free Home Zones**: The dining room table and bedrooms must be 100% digital-free spaces.
- **Set Up a Boredom Box**: Fill low plastic baskets under tables with crayons, waste paper, safety scissors, building lego pieces, and modeling dough. When boredom strikes, kids naturally migrate toward physical creation.
- **Empower Them with Chores**: Toddlers love feeling competent. Involve them in separating plastic plates, wiping tables, folding towels, or watering gardens. They view this as active, high-status playtime.`,
    author: 'Mr. Timothy Mukasa',
    date: 'March 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1536640712247-3a1ab4ef74fa?auto=format&fit=crop&q=80&w=600'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where exactly is the school located and do you provide school transport?',
    answer: 'Mild Care Parents School is located in Munyonyo, Kampala, off Cape Road, near Munyonyo Commonwealth Resort. We operate standard, high-safety commuter shuttle routes servicing Munyonyo, Buziga, Ggaba, Salaama, Makindye, Kansanga, and Kabalagala regions, with certified attendants accompanying children.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'What is the school fee schedule and can I pay in flexible installments?',
    answer: 'Yes! We support the parenting community with standard payment schemes. While full payments attract termly discounts, we accept installment allocations corresponding to 50% on first-week clearance, 25% by mid-term, and 25% before end-term exams.',
    category: 'Fees'
  },
  {
    id: 'faq-3',
    question: 'Are meals included in the fees and what is the standard health menu?',
    answer: 'Every student receives nutritious freshly-prepared meals. Our menu is carefully assembled by childhood nutrition specialists and includes high-energy morning grain porridge (millet/soya), organic fresh fruit slices (bananas, watermelons, papayas), and lunch comprised of rich steamed rice, local matooke, beans, groundnut stew, posho, and fresh vegetables.',
    category: 'Facilities'
  },
  {
    id: 'faq-4',
    question: 'How do you monitor and communicate student progression with parents?',
    answer: 'We provide daily developmental cards for nursery children, weekly text-updates from class caretakers, and comprehensive progress reports at the close of every term. Additionally, our Premium Parent Portal provides instant real-time access to grades, attendance tracking, teacher diaries, and fee payment details right from your phone.',
    category: 'Admissions'
  },
  {
    id: 'faq-5',
    question: 'What is your student-to-teacher ratio for safety and active learning?',
    answer: 'We maintain highly focused settings. For our Baby and Middle nursery layers, we run a 5:1 ratio with one lead educator and two class assistants. For Pre-Primary and Primary grades, class layouts are restricted to a maximum of 20 - 25 students, ensuring every child receives individualized attention.',
    category: 'Academics'
  },
  {
    id: 'faq-6',
    question: 'What curriculum does the school follow?',
    answer: 'We follow the Uganda National Curriculum (UNEB), enhanced with international early-enrichment practical frameworks. Our learners undergo advanced literacy training via Jolly Phonics, early computer coding elements, science laboratory exploration, creative performance expression, and structured leadership exercises.',
    category: 'Academics'
  }
];

export const events: SchoolEvent[] = [
  {
    id: 'evt-1',
    title: 'Inter-House Sports Gala & Family Day',
    date: 'June 12, 2026',
    time: '8:30 AM – 4:00 PM',
    category: 'sports',
    description: 'Join us at the Kampala sports fields as our houses (Red, Blue, Orange, Green) compete in fun track-and-field athletics, toddler obstacle runs, swimming displays, and parents tug-of-war!'
  },
  {
    id: 'evt-2',
    title: 'Term II Parent-Teacher General Assembly',
    date: 'June 27, 2026',
    time: '2:00 PM – 5:00 PM',
    category: 'parent',
    description: 'An interactive physical and digital hybrid meeting reviewing Term II academic outputs, expanding the new playground launch details, and receiving expert child mental health advisory talks.'
  },
  {
    id: 'evt-3',
    title: 'Mid-Term Assessment & Project Defense week',
    date: 'July 6, 2026',
    time: '8:00 AM – 3:00 PM',
    category: 'academic',
    description: 'Students from Pre-Primary up to P5 present their environmental sustainability and local science projects in open booths to peer groups and visiting parent auditors.'
  }
];

export const announcements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'New Outdoor Play Castle Construction Completed!',
    date: 'May 20, 2026',
    priority: 'high',
    content: 'We are thrilled to announce that our custom environmental play castle, sensory sandboxes, and modern trampoline zone are fully built and certified by play-safety regulators. Classes will begin accessing the new zone starting next Monday during physical coordination hours!',
    sender: 'Mrs. Susan Kigozi (Headteacher)'
  },
  {
    id: 'ann-2',
    title: 'Term II Immunization & Immunological Health Checkups',
    date: 'May 16, 2026',
    priority: 'medium',
    content: 'The Kampala Pediatric Health service will conduct optional vitamins, booster vaccines, and vision screening in our sanitization bay. Parents who signed up for health monitors please check the confirmation codes sent on your portal diaries.',
    sender: 'Ssekiziyivu Ronald (School Nurse)'
  },
  {
    id: 'ann-3',
    title: 'Music, Dance, & Drama (MDD) In-House Festival Theme Set',
    date: 'May 10, 2026',
    priority: 'low',
    content: 'Registration is now officially open for the Term II MDD Festival! This years performance title is "Our Cultural Heritage: A Pillar of Strong Future Leadership". All children are encouraged to select choir, traditional dance, or poem recital categories.',
    sender: 'Madame Sarah Nabukenya'
  }
];

export const studentProfiles: StudentProfile[] = [
  {
    id: 'student-1',
    name: 'Liam Ssenyange Ladsen',
    class: 'Pre-Primary (Top Class)',
    regNo: 'MCPS/2024/0932',
    attendance: {
      present: 42,
      absent: 3,
      total: 45
    },
    grades: [
      { subject: 'Reading & Jolly Phonics', grade: 'E', score: 94, remarks: 'Fluent reading of secondary complex blending blocks. Excellent vocal pitch.' },
      { subject: 'Numbers & Counting Concepts', grade: 'E', score: 88, remarks: 'Fast mental subtraction. Handles addition sums to 50 confidently.' },
      { subject: 'Environmental Studies', grade: 'M', score: 81, remarks: 'Excellent understanding of domestic and farming wildlife cycles.' },
      { subject: 'Aesthetic Skills & Handcraft', grade: 'M', score: 79, remarks: 'Creative paint strokes, shows careful precision with paper craft tools.' },
      { subject: 'Physical Coordination', grade: 'E', score: 95, remarks: 'Confidence swimmer. Excellent balancing drills, active in football matches.' }
    ],
    teacherRemarks: 'Liam has demonstrated extraordinary leadership qualities this term. He is helpful to classmates, cleans up his learning station diligently, and reads stories aloud during group hour with delightful expression. Continue reading more complex phonic books together at home!',
    headTeacherRemarks: 'A stellar student who is highly gifted. Liam is on strict track to secure exceptional evaluations next term for primary transition.',
    activities: [
      {
        title: 'Building a miniature lake ferry',
        date: 'May 14, 2026',
        description: 'Liam successfully assembled a floating cardboard motorboat model during science craft afternoon to study water density and floating laws.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'Uganda Swimming Federation Mini-Gala Winner',
        date: 'May 02, 2026',
        description: 'Liam clinched the Gold medal in the underwater crawl category for under-six class divisions!',
        image: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=400'
      }
    ],
    outstandingFees: 350000,
    paidFees: 750000,
    paymentHistory: [
      { id: 'pay-1', date: 'May 02, 2026', amount: 450000, status: 'Paid', invoiceNo: 'FC-MC-1032' },
      { id: 'pay-2', date: 'May 10, 2026', amount: 300000, status: 'Paid', invoiceNo: 'FC-MC-1099' },
      { id: 'pay-3', date: 'T3-Due', amount: 350000, status: 'Pending', invoiceNo: 'FC-MC-1104' }
    ]
  },
  {
    id: 'student-2',
    name: 'Chloe Kemigisha',
    class: 'Primary Two (P2 - Jade)',
    regNo: 'MCPS/2023/0411',
    attendance: {
      present: 44,
      absent: 1,
      total: 45
    },
    grades: [
      { subject: 'English Grammar & Vocabulary', grade: 'E', score: 91, remarks: 'Superb writing flow. Very expressive command of auxiliary verbs.' },
      { subject: 'Primary Mathematics', grade: 'M', score: 85, remarks: 'Excellent in fractional diagrams. Needs to watch alignment in column division.' },
      { subject: 'Integrated Science', grade: 'E', score: 90, remarks: 'Understands nutritional health pathways perfectly. Creative botanic logs.' },
      { subject: 'Religious & Pastoral Studies', grade: 'E', score: 93, remarks: 'Outstanding moral intelligence. Excellent recitation of scriptures.' },
      { subject: 'ICT Basics & Keyboarding', grade: 'E', score: 89, remarks: 'Rapidly navigates early painting and text alignment software packages.' }
    ],
    teacherRemarks: 'Chloe is a deeply empathetic and reflective student. She shows excellent writing instincts and has been a reliable peer-helper in mathematics classes. She is currently serving as Class Prefect with outstanding organizational skills.',
    headTeacherRemarks: 'Outstanding compliance records. Chloe sets a glowing standard for our Primary Two layer to imitate.',
    activities: [
      {
        title: 'Gardening & Botanic Spurt Trial',
        date: 'May 11, 2026',
        description: 'Chloe cultivated an organic bean plant in a clay glass and presented a daily tracking log graphing seed sprouts under shaded vs sun conditions.',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=400'
      },
      {
        title: 'Spelling Bee Champions Runner-Up',
        date: 'April 19, 2026',
        description: 'Placed second out of fifteen local primary school participants, spelling complex compound words with absolute poise!',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400'
      }
    ],
    outstandingFees: 0,
    paidFees: 1250000,
    paymentHistory: [
      { id: 'pay-4', date: 'April 28, 2026', amount: 750000, status: 'Paid', invoiceNo: 'FC-MC-0410' },
      { id: 'pay-5', date: 'May 06, 2026', amount: 500000, status: 'Paid', invoiceNo: 'FC-MC-0453' }
    ]
  }
];

export const facilities = [
  {
    name: 'Digital Computer Suite',
    description: 'A futuristic ICT classroom equipped with fast flatscreens, safe kids Internet portals, and early child coding software.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Outdoor Eco-Play Castle',
    description: 'An expansive modern wooden castle layout supporting climbing bridges, swing sets, double wide slides, and a padded safety landing area.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Under-12 Aquatic Center',
    description: 'Our pride! A beautiful, clean, chemical-regulated solar-heated swimming pool specifically built for toddlers and young primary swimmers.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Interactive Science & Botanic Garden',
    description: 'An expansive outdoor garden with soil testing stations, sensory herbal blocks, and bird nest logs where kids interact with live biology concepts.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800'
  }
];
