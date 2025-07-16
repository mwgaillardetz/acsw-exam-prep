# LCSW Practice Platform
**Great for**: Individual study, team training, bootcamps, and certification preparation programs.

A comprehensive, modern practice platform for the Licensed Clinical Social Worker (LCSW) certification exam featuring an interactive study guide, multiple exam formats, advanced performance analytics, and full mobile responsiveness.

## Features
- **🧠 Interactive Study Guide**: Comprehensive study materials organized by all 4 certification domains
- **💼 Multiple Exam Formats**:
  - Full practice exam (170 questions, 4 hours)
  - Domain-based exams for focused study (per domain)
  - Domain-specific practice questions
- **📊 Advanced Performance Analytics**:
  - Detailed breakdown by certification domains
  - Score tracking and improvement recommendations
  - Question review with detailed explanations
- **🔄 Dynamic Question System**: 40+ randomized questions from comprehensive question bank
- **🌙 Dark/Light Theme Toggle**: Modern theme switching with persistent preferences
- **📱 Fully Mobile Responsive**: Optimized for all devices (iPhone, Android, tablets, desktop)
- **⚡ Zero Dependencies**: Lightweight, fast-loading vanilla JavaScript application
- **🐳 Simplified Docker Setup**: Easy containerized deployment without complex orchestration

### Study Guide Coverage (All 4 Domains)

1. **Human Development, Diversity, and Behavior in the Environment**
2. **Assessment and Intervention Planning**
3. **Direct and Indirect Practice**
4. **Professional Relationships, Values, and Ethics**

## Quick Start

### Option 1: Direct Access
Simply open `index.html` in any modern web browser - no server required!

```bash
# Clone the repository
git clone <repository-url>
cd learn-lcsw

# Open directly in browser (macOS)
open index.html

# Or on Linux
xdg-open index.html

# Or on Windows
start index.html
```

### Option 2: Local Development Server

```bash
# Using Python (recommended for development)
python3 -m http.server 8000
# Then open: http://localhost:8000

# Using Node.js (if you have it installed)
npx http-server -p 8000
# Then open: http://localhost:8000

# Using PHP (if available)
php -S localhost:8000
# Then open: http://localhost:8000
```

### Option 3: Docker

```bash
# Start with Docker Compose
docker-compose up -d

# Access the platform
open http://localhost:4880
```

## How to Use

### Study Guide Mode
1. Click **"Study Guide"** from the welcome screen
2. Browse all 4 certification domains with detailed explanations
3. Click on any domain to view comprehensive study materials
4. Use **"Practice Questions for This Domain"** to test specific knowledge areas
5. Navigate back to study guide or home easily

### Practice Exam Modes

#### Full Practice Exam
1. Click **"Practice Exams"** → **"Full Practice Exam"**
2. Take a comprehensive **170-question exam (4 hours)** - **matches real exam format exactly**
3. Questions balanced across all 4 domains for realistic testing
4. Receive complete performance analysis with domain breakdown
5. **Real exam simulation** with authentic timing and question distribution

#### Domain-Based Exams
1. Click **"Practice Exams"** → **"Domain-based Exams"**
2. Choose specific domains to focus your study
3. Take **untimed exams** with all available questions per domain
4. Perfect for deep learning and reviewing weak areas without time pressure
5. **Study mode** - focus on understanding concepts rather than speed

### Performance Analytics & Review
- **Real-time scoring** with immediate feedback on each question
- **Domain-level breakdown** showing performance across all 4 areas
- **Detailed answer review** with comprehensive explanations
- **Study recommendations** based on performance gaps
- **Progress tracking** across multiple exam attempts

## Project Structure

```
learn-lcsw/
├── index.html                 # Multi-screen SPA with all application screens
├── script.js                  # Complete platform functionality (adapted for LCSW)
├── styles.css                 # Modern responsive design with themes
├── questions.js              # 40+ questions + comprehensive study guide content
├── docker-compose.yml         # Simplified single-service Docker setup
├── Dockerfile                 # Lightweight Nginx container configuration
└── README.md                  # Complete documentation (this file)
```

### Key File Details
- **index.html**: Single-page application with 7 distinct screens
- **script.js**: Full-featured platform with exam engine, study guide, analytics
- **styles.css**: Modern CSS with themes, mobile responsiveness, accessibility
- **questions.js**: 40+ categorized questions + detailed study guide content

## Question Bank & Content

### Question Database
- **40+ comprehensive questions** covering all certification domains
- **Three difficulty levels**: Easy, Medium, Hard
- **Categorized by domains**: Each question mapped to specific exam domains
- **Detailed explanations**: Comprehensive explanations for every answer
- **Randomization**: Questions shuffled for varied practice sessions
- **Real-world scenarios**: Practical social work use cases and examples

### Question Format
```javascript
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
    explanation: "During adolescence (ages 12-18), Erikson identified the primary developmental crisis as Identity vs. Role Confusion..."
}
```

## LCSW Exam Information

### Exam Format
- **170 questions** total
- **4 hours** to complete
- **Multiple choice** format
- **Passing score**: Typically 75% (varies by jurisdiction)

### Domain Distribution
1. **Human Development, Diversity, and Behavior in the Environment** (~28%)
2. **Assessment and Intervention Planning** (~24%)
3. **Direct and Indirect Practice** (~30%)
4. **Professional Relationships, Values, and Ethics** (~18%)

### Study Resources Used
This platform incorporates content and question styles based on:
- ASWB Complete Practice Exam materials
- Official LCSW study guides and documentation
- Evidence-based social work practice principles
- NASW Code of Ethics
- Current DSM-5 criteria and assessment practices

## Contributing

We welcome contributions to expand the question bank and improve the platform:

1. **Adding Questions**: Follow the existing question format in `questions.js`
2. **Study Guide Content**: Enhance domain coverage in the study guide sections
3. **Features**: Suggest new features or improvements
4. **Bug Reports**: Report any issues or inconsistencies

## License

This project is open source and available under the MIT License.

## Disclaimer

This practice platform is designed for educational purposes and exam preparation. It does not guarantee passing the LCSW exam and should be used in conjunction with other study materials and resources. Always refer to your state's licensing board for official exam requirements and procedures.