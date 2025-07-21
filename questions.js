// LCSW Practice Questions organized by domains
const examQuestions = [
    // Domain 1: Human Development, Diversity, and Behavior in the Environment
    {
        id: 1,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "According to Erikson's psychosocial development theory, what is the primary developmental task during adolescence?",
        options: [
            "Trust vs. Mistrust",
            "Identity vs. Role Confusion",
            "Intimacy vs. Isolation",
            "Generativity vs. Stagnation"
        ],
        correctAnswer: 1,
        explanation: "During adolescence (ages 12-18), Erikson identified the primary developmental crisis as Identity vs. Role Confusion. Adolescents work to develop a sense of self and personal identity through exploring different roles and ideas."
    },
    {
        id: 2,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "What is the primary focus of the ecological systems theory developed by Bronfenbrenner?",
        options: [
            "Individual personality traits",
            "The interaction between individuals and their environment",
            "Cognitive development stages",
            "Behavioral conditioning"
        ],
        correctAnswer: 1,
        explanation: "Bronfenbrenner's ecological systems theory focuses on how different environmental systems (microsystem, mesosystem, exosystem, macrosystem, and chronosystem) interact to influence human development."
    },
    {
        id: 3,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "Which of the following best describes cultural competence in social work practice?",
        options: [
            "Learning about different cultures through books",
            "Treating all clients the same regardless of background",
            "The ongoing process of developing awareness, knowledge, and skills to work effectively across cultures",
            "Speaking multiple languages"
        ],
        correctAnswer: 2,
        explanation: "Cultural competence is an ongoing process that involves developing cultural awareness, acquiring cultural knowledge, developing cross-cultural skills, and engaging in cultural encounters while maintaining cultural desire."
    },
    {
        id: 4,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "According to attachment theory, what type of attachment is characterized by children who are distressed when separated from caregivers but easily comforted upon reunion?",
        options: [
            "Secure attachment",
            "Anxious-avoidant attachment",
            "Anxious-resistant attachment",
            "Disorganized attachment"
        ],
        correctAnswer: 0,
        explanation: "Secure attachment is characterized by children who show distress when separated from their caregiver but are easily comforted and quickly return to exploration when the caregiver returns."
    },
    {
        id: 5,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "What is the concept of 'intersectionality' in social work practice?",
        options: [
            "The intersection of different treatment modalities",
            "How multiple identities and oppressions interact to create unique experiences",
            "The meeting point between client and social worker",
            "The overlap between different social work theories"
        ],
        correctAnswer: 1,
        explanation: "Intersectionality refers to how different aspects of identity (race, gender, class, sexuality, etc.) intersect to create unique experiences of privilege and oppression that cannot be understood by examining each identity separately."
    },

    // Domain 2: Assessment and Intervention Planning
    {
        id: 6,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What is the primary purpose of a biopsychosocial assessment?",
        options: [
            "To diagnose mental health conditions",
            "To gather comprehensive information about biological, psychological, and social factors",
            "To determine eligibility for services",
            "To establish treatment goals"
        ],
        correctAnswer: 1,
        explanation: "A biopsychosocial assessment gathers comprehensive information about biological factors (health, genetics), psychological factors (mental health, cognition), and social factors (relationships, environment) to understand the whole person."
    },
    {
        id: 7,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "When assessing suicide risk, which factor is considered the MOST significant predictor?",
        options: [
            "Previous suicide attempts",
            "Current depression diagnosis",
            "Social isolation",
            "Substance abuse"
        ],
        correctAnswer: 0,
        explanation: "Previous suicide attempts are the strongest predictor of future suicide attempts and completed suicide. While other factors are important, history of previous attempts significantly increases risk."
    },
    {
        id: 8,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What does SMART stand for in goal setting?",
        options: [
            "Simple, Manageable, Achievable, Realistic, Timely",
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Strategic, Meaningful, Appropriate, Reasonable, Targeted",
            "Structured, Methodical, Accurate, Reliable, Thorough"
        ],
        correctAnswer: 1,
        explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. This framework helps create clear, actionable objectives in treatment planning."
    },
    {
        id: 9,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What is the difference between a strength-based assessment and a deficit-based assessment?",
        options: [
            "Strength-based focuses on what clients can do well, deficit-based focuses on problems",
            "There is no difference between the two approaches",
            "Strength-based is used with children, deficit-based with adults",
            "Deficit-based is more thorough than strength-based"
        ],
        correctAnswer: 0,
        explanation: "Strength-based assessment focuses on client capabilities, resources, and positive attributes, while deficit-based assessment primarily identifies problems and pathology. Strength-based approaches promote empowerment and resilience."
    },
    {
        id: 10,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "In risk assessment, what does 'imminent danger' mean?",
        options: [
            "Risk that may occur within the next month",
            "Risk that is likely to occur within 24-48 hours",
            "Any identified risk factor",
            "Risk that has occurred in the past"
        ],
        correctAnswer: 1,
        explanation: "Imminent danger refers to risk that is likely to occur within 24-48 hours and requires immediate intervention to ensure safety. This triggers emergency protocols and immediate protective actions."
    },

    // Domain 3: Direct and Indirect Practice
    {
        id: 11,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the primary goal of motivational interviewing?",
        options: [
            "To confront client denial",
            "To elicit and strengthen motivation for change",
            "To provide advice and solutions",
            "To challenge irrational thoughts"
        ],
        correctAnswer: 1,
        explanation: "Motivational interviewing is a client-centered counseling approach designed to elicit and strengthen motivation for change by exploring and resolving ambivalence in a supportive, non-confrontational manner."
    },
    {
        id: 12,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "Which of the following is a key principle of cognitive-behavioral therapy (CBT)?",
        options: [
            "Unconscious conflicts drive behavior",
            "Thoughts, feelings, and behaviors are interconnected",
            "Past experiences determine present behavior",
            "Environmental factors are the primary influence on behavior"
        ],
        correctAnswer: 1,
        explanation: "CBT is based on the principle that thoughts, feelings, and behaviors are interconnected and influence each other. By changing negative thought patterns, clients can improve their emotional state and behavior."
    },
    {
        id: 13,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the most appropriate intervention when a client is experiencing a panic attack during a session?",
        options: [
            "Encourage the client to leave the room",
            "Use grounding techniques and breathing exercises",
            "Immediately call emergency services",
            "Continue with the planned session agenda"
        ],
        correctAnswer: 1,
        explanation: "During a panic attack, grounding techniques (5-4-3-2-1 sensory method) and breathing exercises help the client regain control and reduce symptoms. These techniques are evidence-based and immediately applicable."
    },
    {
        id: 14,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the primary purpose of case management in social work?",
        options: [
            "To provide direct therapy to clients",
            "To coordinate services and resources for clients",
            "To conduct research on client outcomes",
            "To supervise other social workers"
        ],
        correctAnswer: 1,
        explanation: "Case management involves coordinating and linking clients with appropriate services and resources to meet their complex needs. It includes assessment, planning, linking, monitoring, and advocacy."
    },
    {
        id: 15,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "In group therapy, what is the therapeutic factor known as 'universality'?",
        options: [
            "The belief that the therapist knows everything",
            "The realization that others share similar problems and experiences",
            "The application of universal principles",
            "The use of standardized interventions"
        ],
        correctAnswer: 1,
        explanation: "Universality is one of Yalom's therapeutic factors in group therapy, referring to the relief clients feel when they realize they are not alone in their struggles and that others share similar experiences."
    },

    // Domain 4: Professional Relationships, Values, and Ethics
    {
        id: 16,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "A social worker discovers that their client is also a neighbor. What is the most appropriate action?",
        options: [
            "Continue the professional relationship as normal",
            "Discuss the dual relationship with the client and consider referral",
            "Immediately terminate the professional relationship",
            "Ignore the personal connection"
        ],
        correctAnswer: 1,
        explanation: "Dual relationships should be addressed openly with the client. The social worker should discuss the potential complications and consider referral to another professional to avoid conflicts of interest and maintain professional boundaries."
    },
    {
        id: 17,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "When is it appropriate to breach client confidentiality?",
        options: [
            "When the client's family requests information",
            "When there is imminent danger to the client or others",
            "When the social worker is curious about the client's progress",
            "When the client has not paid their fees"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality can be breached when there is imminent danger to the client or others (duty to warn/protect), when required by law (mandated reporting), or when the client provides written consent."
    },
    {
        id: 18,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is the primary ethical principle that guides social work practice?",
        options: [
            "Beneficence",
            "Self-determination",
            "Service to humanity",
            "Professional competence"
        ],
        correctAnswer: 2,
        explanation: "The primary mission of social work is service to humanity. The NASW Code of Ethics identifies service as the primary ethical principle, emphasizing helping people in need and addressing social problems."
    },
    {
        id: 19,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "A client asks their social worker to be friends on social media. What is the most appropriate response?",
        options: [
            "Accept the request to build rapport",
            "Decline and explain professional boundaries",
            "Accept but limit interactions",
            "Ignore the request"
        ],
        correctAnswer: 1,
        explanation: "Social workers should decline social media connections with clients and explain professional boundaries. This maintains the therapeutic relationship and prevents dual relationships that could compromise professional judgment."
    },
    {
        id: 20,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is informed consent in social work practice?",
        options: [
            "Getting permission to treat a client",
            "Ensuring clients understand the nature, risks, and benefits of services",
            "Having clients sign legal documents",
            "Obtaining consent from family members"
        ],
        correctAnswer: 1,
        explanation: "Informed consent ensures that clients understand the nature of services, potential risks and benefits, alternatives, and their rights. It's an ongoing process that empowers clients to make informed decisions about their care."
    },

    // Additional questions for comprehensive coverage
    {
        id: 21,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "What is the primary characteristic of the formal operational stage in Piaget's cognitive development theory?",
        options: [
            "Concrete thinking about immediate objects",
            "Abstract thinking and hypothetical reasoning",
            "Symbolic thinking and language development",
            "Sensory and motor exploration"
        ],
        correctAnswer: 1,
        explanation: "The formal operational stage (ages 11+) is characterized by abstract thinking, hypothetical reasoning, and the ability to think about thinking (metacognition). Individuals can consider multiple variables and possibilities."
    },
    {
        id: 22,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What is the first step in the problem-solving process?",
        options: [
            "Implementing solutions",
            "Identifying and defining the problem",
            "Evaluating outcomes",
            "Generating alternatives"
        ],
        correctAnswer: 1,
        explanation: "The first step in problem-solving is identifying and clearly defining the problem. Without proper problem identification, subsequent steps may address the wrong issues or be ineffective."
    },
    {
        id: 23,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "In family systems therapy, what does 'triangulation' refer to?",
        options: [
            "A three-person family structure",
            "When two people involve a third person to reduce tension between them",
            "A geometric approach to therapy",
            "The use of three different treatment modalities"
        ],
        correctAnswer: 1,
        explanation: "Triangulation occurs when two people in conflict involve a third person (often a child) to reduce tension between them. This creates unhealthy family dynamics and can be harmful to the third party."
    },
    {
        id: 24,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is the concept of 'duty to warn' in social work practice?",
        options: [
            "Warning clients about potential side effects of treatment",
            "The obligation to warn potential victims when a client poses a credible threat",
            "Warning supervisors about difficult cases",
            "Informing clients about agency policies"
        ],
        correctAnswer: 1,
        explanation: "Duty to warn is the legal and ethical obligation to warn identifiable potential victims when a client poses a credible, imminent threat of harm. This overrides confidentiality to protect public safety."
    },
    {
        id: 25,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "What is the primary focus of the strengths perspective in social work?",
        options: [
            "Identifying client deficits",
            "Focusing on client capabilities and resources",
            "Diagnosing mental health conditions",
            "Analyzing past traumas"
        ],
        correctAnswer: 1,
        explanation: "The strengths perspective focuses on client capabilities, resources, and potential rather than deficits and pathology. It emphasizes empowerment and building on existing strengths to promote positive change."
    },
    {
        id: 26,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What is the purpose of a mental status examination?",
        options: [
            "To diagnose personality disorders",
            "To assess current cognitive and emotional functioning",
            "To determine treatment compliance",
            "To evaluate family dynamics"
        ],
        correctAnswer: 1,
        explanation: "A mental status examination assesses current cognitive and emotional functioning, including appearance, behavior, speech, mood, thought processes, perception, cognition, and insight at a specific point in time."
    },
    {
        id: 27,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the primary goal of dialectical behavior therapy (DBT)?",
        options: [
            "To challenge irrational thoughts",
            "To teach distress tolerance and emotional regulation skills",
            "To explore unconscious conflicts",
            "To modify environmental factors"
        ],
        correctAnswer: 1,
        explanation: "DBT focuses on teaching skills in four main areas: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. It was originally developed for individuals with borderline personality disorder."
    },
    {
        id: 28,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is the principle of client self-determination?",
        options: [
            "Clients must make all decisions independently",
            "Clients have the right to make their own choices about their lives",
            "Social workers determine what's best for clients",
            "Clients cannot make decisions when they have mental illness"
        ],
        correctAnswer: 1,
        explanation: "Self-determination is the right of clients to make their own choices and decisions about their lives, with support and information from the social worker. It respects client autonomy while recognizing limitations when clients may harm themselves or others."
    },
    {
        id: 29,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "What is the primary characteristic of the preoperational stage in Piaget's theory?",
        options: [
            "Abstract reasoning",
            "Symbolic thinking but limited logic",
            "Concrete operational thinking",
            "Sensorimotor exploration"
        ],
        correctAnswer: 1,
        explanation: "The preoperational stage (ages 2-7) is characterized by symbolic thinking and language development, but children are limited by egocentrism and lack logical reasoning abilities."
    },
    {
        id: 30,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "When conducting a risk assessment for child abuse, which factor is considered most significant?",
        options: [
            "Parent's education level",
            "Family income",
            "History of abuse in the family",
            "Number of children in the home"
        ],
        correctAnswer: 2,
        explanation: "History of abuse in the family (either as victim or perpetrator) is one of the strongest predictors of future abuse. This includes intergenerational patterns of abuse and previous substantiated reports."
    },
    {
        id: 31,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the primary purpose of psychoeducation in mental health treatment?",
        options: [
            "To provide therapy to clients",
            "To educate clients about their condition and treatment options",
            "To train other professionals",
            "To conduct research"
        ],
        correctAnswer: 1,
        explanation: "Psychoeducation involves teaching clients and families about mental health conditions, symptoms, treatment options, and coping strategies. It empowers clients to participate actively in their treatment and recovery."
    },
    {
        id: 32,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is the primary purpose of clinical supervision?",
        options: [
            "To monitor social worker productivity",
            "To ensure quality of services and professional development",
            "To discipline social workers",
            "To reduce agency liability"
        ],
        correctAnswer: 1,
        explanation: "Clinical supervision serves to ensure quality of services to clients, support professional development of social workers, and provide guidance on ethical and clinical issues. It's both protective and developmental."
    },
    {
        id: 33,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "What is the concept of 'resilience' in human development?",
        options: [
            "The ability to avoid all stress and trauma",
            "The capacity to adapt and bounce back from adversity",
            "Being emotionally detached from problems",
            "Having no mental health issues"
        ],
        correctAnswer: 1,
        explanation: "Resilience is the capacity to adapt, cope, and bounce back from adversity, trauma, or significant stress. It involves protective factors and coping mechanisms that help individuals thrive despite challenges."
    },
    {
        id: 34,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What is the difference between reliability and validity in assessment tools?",
        options: [
            "Reliability measures accuracy, validity measures consistency",
            "Reliability measures consistency, validity measures accuracy",
            "They are the same concept",
            "Reliability is more important than validity"
        ],
        correctAnswer: 1,
        explanation: "Reliability refers to the consistency of an assessment tool (produces similar results over time), while validity refers to whether the tool actually measures what it claims to measure (accuracy)."
    },
    {
        id: 35,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the primary goal of solution-focused brief therapy?",
        options: [
            "To analyze past problems in detail",
            "To focus on solutions and client strengths rather than problems",
            "To provide long-term psychoanalytic treatment",
            "To diagnose underlying pathology"
        ],
        correctAnswer: 1,
        explanation: "Solution-focused brief therapy emphasizes identifying and building on client strengths and resources to create solutions, rather than focusing extensively on problems and their causes."
    },
    {
        id: 36,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is the most appropriate way to handle a gift from a client?",
        options: [
            "Always accept gifts to avoid hurting feelings",
            "Consider the cultural context and therapeutic implications before deciding",
            "Never accept any gifts under any circumstances",
            "Accept only expensive gifts"
        ],
        correctAnswer: 1,
        explanation: "Gift-giving should be evaluated considering cultural context, therapeutic implications, agency policy, and the meaning of the gift. Small, culturally appropriate gifts may sometimes be acceptable, while others may compromise the therapeutic relationship."
    },
    {
        id: 37,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 1,
        objectiveName: "Human Development, Diversity, and Behavior in the Environment",
        question: "According to Maslow's hierarchy of needs, which needs must be met before self-actualization can occur?",
        options: [
            "Only physiological needs",
            "Physiological and safety needs only",
            "Physiological, safety, love/belonging, and esteem needs",
            "All needs are equally important"
        ],
        correctAnswer: 2,
        explanation: "According to Maslow, lower-level needs (physiological, safety, love/belonging, and esteem) must be substantially satisfied before an individual can focus on self-actualization, the highest level of the hierarchy."
    },
    {
        id: 38,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Assessment and Intervention Planning",
        question: "What is the primary purpose of a genogram in family assessment?",
        options: [
            "To track genetic diseases",
            "To map family relationships and patterns across generations",
            "To determine family income",
            "To assess individual personality traits"
        ],
        correctAnswer: 1,
        explanation: "A genogram is a visual representation of family relationships, patterns, and dynamics across multiple generations. It helps identify family strengths, conflicts, and intergenerational patterns that may impact current functioning."
    },
    {
        id: 39,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 3,
        objectiveName: "Direct and Indirect Practice",
        question: "What is the primary characteristic of person-centered therapy?",
        options: [
            "The therapist directs all sessions",
            "The client is the expert on their own experience",
            "Focus on changing behaviors only",
            "Use of specific techniques and protocols"
        ],
        correctAnswer: 1,
        explanation: "Person-centered therapy, developed by Carl Rogers, emphasizes that the client is the expert on their own experience. The therapist provides unconditional positive regard, empathy, and genuineness to facilitate client growth."
    },
    {
        id: 40,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Professional Relationships, Values, and Ethics",
        question: "What is the appropriate action when a social worker realizes they lack competence to help a client?",
        options: [
            "Continue treatment and learn as you go",
            "Seek consultation, training, or refer to a qualified professional",
            "Terminate services immediately",
            "Ask the client to find another therapist"
        ],
        correctAnswer: 1,
        explanation: "When lacking competence, social workers should seek consultation, obtain additional training, or refer the client to a qualified professional. The ethical principle of competence requires providing only services within one's area of expertise."
    }
];

// LCSW Study Guide Content organized by domains
const studyGuide = {
    1: {
        title: "Human Development, Diversity, and Behavior in the Environment",
        content: [
            {
                topic: "Erikson's Psychosocial Development Theory",
                details: "Eight stages of psychosocial development from infancy to late adulthood. Each stage presents a crisis that must be resolved: Trust vs. Mistrust (infancy), Autonomy vs. Shame (early childhood), Initiative vs. Guilt (preschool), Industry vs. Inferiority (school age), Identity vs. Role Confusion (adolescence), Intimacy vs. Isolation (young adulthood), Generativity vs. Stagnation (middle adulthood), Integrity vs. Despair (late adulthood). Understanding these stages helps assess developmental challenges and strengths."
            },
            {
                topic: "Piaget's Cognitive Development Theory",
                details: "Four stages of cognitive development: Sensorimotor (0-2 years) - learning through senses and motor activity; Preoperational (2-7 years) - symbolic thinking but limited logic; Concrete Operational (7-11 years) - logical thinking about concrete objects; Formal Operational (11+ years) - abstract thinking and hypothetical reasoning. Key concepts include assimilation, accommodation, and equilibration."
            },
            {
                topic: "Attachment Theory (Bowlby & Ainsworth)",
                details: "Four attachment styles: Secure (60-65%) - comfortable with intimacy and autonomy; Anxious-Preoccupied (15-20%) - seeks high intimacy but worries about relationships; Dismissive-Avoidant (20-25%) - desires independence over intimacy; Disorganized (5-10%) - inconsistent attachment behaviors. Early attachment patterns influence adult relationships and parenting styles."
            },
            {
                topic: "Bronfenbrenner's Ecological Systems Theory",
                details: "Five environmental systems: Microsystem (immediate environment - family, school), Mesosystem (connections between microsystems), Exosystem (external environments that indirectly affect the person), Macrosystem (cultural context), Chronosystem (changes over time). This framework helps assess person-in-environment interactions and plan interventions at multiple system levels."
            },
            {
                topic: "Cultural Competence and Intersectionality",
                details: "Cultural competence involves cultural awareness (understanding one's own biases), cultural knowledge (learning about different cultures), cross-cultural skills (effective communication across cultures), cultural encounters (direct experience with diverse groups), and cultural desire (motivation to become culturally competent). Intersectionality examines how multiple identities (race, gender, class, sexuality, disability) intersect to create unique experiences of privilege and oppression."
            },
            {
                topic: "Trauma-Informed Care Principles",
                details: "Six key principles: Safety (physical and psychological), Trustworthiness and Transparency, Peer Support, Collaboration and Mutuality, Empowerment and Choice, Cultural/Historical/Gender Issues. Understanding trauma types: acute (single incident), complex (repeated/prolonged), historical (intergenerational), and developmental (childhood trauma affecting brain development). Trauma responses include fight, flight, freeze, and fawn."
            },
            {
                topic: "Resilience and Protective Factors",
                details: "Individual factors: problem-solving skills, emotional regulation, sense of purpose, optimism. Family factors: supportive relationships, clear expectations, opportunities for participation. Community factors: caring adults, positive peer groups, quality schools, safe neighborhoods. Resilience is not innate but can be developed through strengthening protective factors and reducing risk factors."
            },
            {
                topic: "Social Justice and Anti-Oppressive Practice",
                details: "Understanding systemic oppression: racism, sexism, homophobia, transphobia, ableism, classism, ageism. Privilege awareness and allyship. Advocacy levels: case (individual client), cause (policy/system change), class (group advocacy). Social work's commitment to social justice includes challenging discrimination, promoting equity, and working for structural change."
            },
            {
                topic: "LGBTQ+ Affirmative Practice",
                details: "Understanding sexual orientation vs. gender identity. Creating inclusive environments. Minority stress theory and its impact on LGBTQ+ mental health. Affirming language and pronouns. Understanding coming out processes and family dynamics. Legal and policy issues affecting LGBTQ+ individuals and families."
            },
            {
                topic: "Substance Use and Addiction",
                details: "Disease model vs. biopsychosocial model of addiction. Stages of change (Prochaska & DiClemente): precontemplation, contemplation, preparation, action, maintenance, relapse. Motivational interviewing techniques. Understanding co-occurring disorders. Family impact and codependency. Harm reduction approaches."
            },
            {
                topic: "Review Questions and Answer Key",
                details: "1. B. Identity vs. Role Confusion - Erikson's Identity vs. Role Confusion stage is typical for adolescents (ages 12-18), where the main task is to develop a sense of self and personal identity. The client's statements directly reflect struggles with self-identity and belonging. Other stages like Industry vs. Inferiority (school-age competence), Intimacy vs. Isolation (young adult relationships), and Generativity vs. Stagnation (middle adulthood contribution) are different developmental stages.\n\n2. C. Ensuring their continued access to stable housing and food - Maslow's hierarchy states that basic physiological (food, water, shelter) and safety needs must be met before higher-level psychological or self-actualization needs can be addressed. The family's immediate gratitude for basic needs signifies these are their priority. Processing trauma, job training, and community integration are important but come after physiological and safety needs are secured.\n\n3. C. Lack of congruence - Congruence refers to the matching of awareness and experience with communication, meaning verbal and nonverbal expressions are consistent. When a client's words ('I'm fine') contradict their nonverbal cues (slumped posture, low voice), it indicates a lack of congruence. Resistance is a broader concept but doesn't specifically describe this mismatch. Transference involves projecting past feelings onto the social worker. Latent content is the underlying meaning, which is what the social worker is trying to understand because of the lack of congruence, but it's not the phenomenon itself."
            }
        ]
    },
    2: {
        title: "Assessment and Intervention Planning",
        content: [
            {
                topic: "Biopsychosocial Assessment",
                details: "Conducting comprehensive assessments that examine biological, psychological, and social factors affecting client functioning. This includes gathering information about medical history, mental health, relationships, and environmental factors."
            },
            {
                topic: "Risk Assessment",
                details: "Evaluating risk factors for various concerns including suicide, violence, child abuse, and substance abuse. This includes understanding protective factors and developing safety plans when necessary."
            },
            {
                topic: "Diagnostic and Statistical Manual (DSM-5)",
                details: "Understanding mental health diagnoses, diagnostic criteria, and the appropriate use of the DSM-5 in clinical practice. This includes recognizing the limitations of diagnostic labels and maintaining a person-in-environment perspective."
            },
            {
                topic: "Treatment Planning",
                details: "Developing SMART goals, selecting appropriate interventions, and creating comprehensive treatment plans that address client needs and strengths. This includes involving clients in the planning process and regularly reviewing progress."
            },
            {
                topic: "Assessment Tools and Instruments",
                details: "Understanding the use of standardized assessment tools, their reliability and validity, and appropriate application in clinical practice. This includes screening tools, rating scales, and structured interviews."
            },
            {
                topic: "Review Questions and Answer Key",
                details: "1. B. Family history of medical illnesses - The biological section of a biopsychosocial assessment specifically includes a client's medical history, developmental history, current medications, substance abuse history, and family history of medical illnesses. Coping mechanisms are psychological. Spiritual practices are spiritual/cultural. Employment history is social/vocational.\n\n2. B. Internal consistency reliability - Internal consistency reliability assesses the consistency of results across items within a test, or in this case, across different assessment tools that measure the same construct (anxiety symptoms). If a client consistently responds similarly on multiple measures for anxiety, those measures have good internal consistency. External validity refers to generalizability. Criterion-related validity examines how well a measure correlates with an external criterion. Content validity ensures all relevant domains are covered.\n\n3. B. Avoids making the client feel judged or defensive - The sources recommend avoiding 'Why' questions (e.g., 'Why haven't you...') because they can make clients feel defensive or that they need to justify their actions. Phrasing with 'What are some of the reasons...' allows for more reflection without judgment, promoting open communication."
            }
        ]
    },
    3: {
        title: "Direct and Indirect Practice",
        content: [
            {
                topic: "Individual Therapy Approaches",
                details: "Understanding various therapeutic modalities including cognitive-behavioral therapy, psychodynamic therapy, solution-focused therapy, and motivational interviewing. This includes knowing when to apply different approaches based on client needs."
            },
            {
                topic: "Group Therapy and Dynamics",
                details: "Understanding group processes, therapeutic factors in groups, and skills for facilitating therapeutic groups. This includes knowledge of group development stages and managing challenging group dynamics."
            },
            {
                topic: "Family and Couples Therapy",
                details: "Understanding family systems theory, family therapy approaches, and skills for working with couples and families. This includes addressing family dynamics, communication patterns, and intergenerational issues."
            },
            {
                topic: "Crisis Intervention",
                details: "Developing skills for responding to crisis situations, including suicide risk assessment, domestic violence, and mental health emergencies. This includes safety planning and connecting clients with appropriate resources."
            },
            {
                topic: "Case Management and Coordination",
                details: "Understanding the role of case management in coordinating services and resources for clients with complex needs. This includes advocacy, service planning, and monitoring client progress across multiple service providers."
            },
            {
                topic: "Review Questions and Answer Key",
                details: "1. C. Engagement - The engagement phase is when the social worker establishes rapport, clarifies the purpose of services, defines roles, and manages expectations, especially crucial with involuntary clients who may feel forced into treatment. Explaining what the client has control over and likely consequences directly facilitates engagement with a mandated client. Assessment (information gathering), planning (goal setting), and intervention (active strategies) occur after engagement.\n\n2. C. Confrontation - Confrontation as an interviewing technique involves calling attention to something, particularly discrepancies or inconsistencies in the client's communication. The social worker is pointing out the mismatch between the client's verbal and nonverbal messages. Clarification reformulates problems. Summarization identifies key ideas. Universalization normalizes behavior. These do not directly address the discrepancy between verbal and non-verbal cues.\n\n3. C. Cognitive behavioral therapy - Client self-monitoring, often through keeping 'thought or emotion logs' that include disturbing emotional states, behaviors, and thoughts, is a central and foundational element of Cognitive Behavioral Therapy (CBT). This homework helps clients identify patterns and connect thoughts to feelings and behaviors. While other therapies might use journaling, self-monitoring of this specific nature is a hallmark of CBT for understanding and changing thinking patterns."
            }
        ]
    },
    4: {
        title: "Professional Relationships, Values, and Ethics",
        content: [
            {
                topic: "NASW Code of Ethics",
                details: "Understanding the six core values of social work (service, social justice, dignity and worth of the person, importance of human relationships, integrity, competence) and their application in practice. This includes ethical decision-making processes."
            },
            {
                topic: "Professional Boundaries",
                details: "Maintaining appropriate professional boundaries with clients, including understanding dual relationships, self-disclosure, and boundary crossings versus violations. This includes managing social media and technology boundaries."
            },
            {
                topic: "Confidentiality and Privacy",
                details: "Understanding confidentiality requirements, exceptions to confidentiality (duty to warn, mandated reporting), and HIPAA regulations. This includes informed consent processes and documentation requirements."
            },
            {
                topic: "Cultural Competence and Anti-Oppressive Practice",
                details: "Developing cultural humility, understanding one's own biases, and practicing in ways that challenge oppression and promote social justice. This includes working effectively with diverse populations and addressing systemic barriers."
            },
            {
                topic: "Professional Development and Supervision",
                details: "Understanding the importance of ongoing professional development, clinical supervision, and self-care. This includes recognizing scope of practice limitations and seeking consultation when needed."
            },
            {
                topic: "Review Questions and Answer Key",
                details: "1. C. Claim privilege and await a court order - A subpoena is a request for information, but it is not a court order. Social workers have a duty to protect client confidentiality and should claim privilege (the client's right to prevent confidential information from being used in legal proceedings) and wait for a court order signed by a judge before releasing information without client consent, unless there's an imminent threat of harm. Sending records immediately would breach confidentiality. Contacting the client is important after the initial legal duty is understood. Consulting legal is good, but the first direct action regarding the subpoena itself is to claim privilege.\n\n2. B. Connecting the client with resources for pain management and medical care - According to Maslow's hierarchy of needs, physiological and safety needs are foundational. Severe physical pain and chronic illness directly relate to physiological well-being, which must be addressed before or concurrently with psychological distress or social needs. While important, addressing hopelessness, social isolation, and long-term goals are higher-level needs that are difficult to focus on effectively if basic physical well-being is severely compromised.\n\n3. A. Inform both clients about the potential dual relationship and seek their consent to continue - Social workers should be alert to and avoid conflicts of interest, and when a potential conflict arises, they must inform clients and take reasonable steps to resolve the issue in a manner that makes clients' interests primary. Even if the prior relationship was positive, transparency and client consent are crucial to maintaining ethical boundaries and ensuring the client's self-determination is respected. Declining services immediately might not be necessary if transparency and consent can resolve the issue. Assessing distinctness of issues is part of the overall ethical deliberation, but informing and consenting are the first steps in addressing the potential conflict directly with clients. Establishing boundaries is always important but needs to follow transparent disclosure.\n\n4. D. Precontemplation - In the precontemplation stage, clients are unaware, unable, or unwilling to change, often characterized by lack of motivation and high resistance. The 'no-show' rate indicates a lack of engagement or perceived need for services. The pre-intake call aims to establish rapport, acknowledge potential ambivalence, and provide clarity, which are strategies for working with clients in precontemplation. Contemplation (considering change), Preparation (deciding/preparing), and Action (actively changing) occur later in the change process once a client acknowledges the problem and expresses some desire to address it.\n\n5. C. Experimental - An experimental design is characterized by random assignment to treatment and control groups and measurement before and after intervention, allowing for strong conclusions about cause-effect relationships (internal validity). Single-subject designs focus on one individual. Quasi-experimental designs lack random assignment. Qualitative research explores experiences and meanings, not necessarily cause-effect."
            }
        ]
    }
};