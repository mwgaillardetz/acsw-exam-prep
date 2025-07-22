// Theme Management
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
    }

    // Save theme preference
    localStorage.setItem('theme', newTheme);
}

// Make sure toggleTheme is available globally
window.toggleTheme = toggleTheme;

// Initialize theme from localStorage or default to dark
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update theme icon
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initializeTheme);

// LCSW Exam Practice Platform
class LCSWExamPlatform {
    constructor() {
        this.currentScreen = 'welcome-screen';
        this.currentObjective = null;
        this.examType = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.examQuestions = [];
        this.reviewIndex = 0;
        this.timer = null;
        this.timeRemaining = 0;
        this.recentQuestions = this.loadRecentQuestions();
        this.useReviewMode = false;
        
        // Make sure global variables are defined
        this.studyGuide = typeof studyGuide !== 'undefined' ? studyGuide : {};
        // ...removed reviewQuestions initialization...
        
        this.init();
    }

    init() {
        this.populateStudyGuide();
        this.populateCategoryExams();
    }

    // Navigation methods
    showScreen(screenId) {
        // Clean up keyboard navigation when leaving objective detail screen
        if (this.currentScreen === 'objective-detail-screen' && screenId !== 'objective-detail-screen') {
            if (this.keyboardHandler) {
                document.removeEventListener('keydown', this.keyboardHandler);
                this.keyboardHandler = null;
            }
        }

        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }

    goHome() {
        this.showScreen('welcome-screen');
        this.resetExam();
    }

    showStudyGuide() {
        this.showScreen('study-guide-screen');
    }

    showExamOptions() {
        this.showScreen('exam-options-screen');
    }

    showCategoryExams() {
        this.showScreen('category-exams-screen');
    }

    // Study Guide methods
    populateStudyGuide() {
        const grid = document.getElementById('objectives-grid');
        if (!grid) {
            console.error('objectives-grid element not found');
            return;
        }
        grid.innerHTML = '';

        // Convert studyGuide object to array and iterate
        Object.keys(this.studyGuide).forEach(objectiveId => {
            const objective = this.studyGuide[objectiveId];
            const card = document.createElement('div');
            card.className = 'objective-card';
            card.onclick = () => this.showObjectiveDetail(parseInt(objectiveId));

            card.innerHTML = `
                <div class="objective-number">Domain ${objectiveId}</div>
                <h3>${objective.title}</h3>
                <div class="topic-count">${objective.content.length} Topics</div>
            `;

            grid.appendChild(card);
        });
    }

    showObjectiveDetail(objectiveId) {
        const objective = this.studyGuide[objectiveId];
        if (!objective) {
            console.error('Domain not found:', objectiveId);
            return;
        }

        this.currentObjective = objectiveId;

        document.getElementById('objective-title').innerHTML = `
            <span class="objective-number">Domain ${objectiveId}</span>
            <h1>${objective.title}</h1>
        `;

        // Also update the static button in the domain detail screen (if present)
        const staticPracticeBtn = document.getElementById('practice-questions-btn');
        // Remove static practice questions button if present
        const staticPracticeBtn = document.getElementById('practice-questions-btn');
        if (staticPracticeBtn) {
            staticPracticeBtn.style.display = 'none';
        }
        const content = document.getElementById('objective-content');
        content.innerHTML = '';

        objective.content.forEach(item => {
            const section = document.createElement('div');
            section.className = 'content-section';
            // Format the details with better spacing and structure
            let formattedDetails = item.details;
            formattedDetails = formattedDetails.replace(/; /g, ';<br><br>• ');
            formattedDetails = formattedDetails.replace(/\. ([A-Z])/g, '.<br><br>• $1');
            if (!formattedDetails.startsWith('•')) {
                formattedDetails = '• ' + formattedDetails;
            }
            section.innerHTML = `
                <h3>${item.topic}</h3>
                <div class="details-content">${formattedDetails}</div>
            `;
            content.appendChild(section);
        });

        // Add bottom navigation and practice button
        const bottomNav = document.createElement('div');
        bottomNav.className = 'domain-navigation bottom-nav';
        bottomNav.innerHTML = `
            <button class="btn-nav" id="bottom-prev-domain-btn" onclick="platform.navigateToPreviousDomain()" 
                    title="Previous Domain" aria-label="Navigate to previous domain">
                ← Previous Domain
            </button>
            <span class="domain-indicator" id="bottom-domain-indicator" aria-live="polite">Domain ${objectiveId} of ${Object.keys(this.studyGuide).length}</span>
            <button class="btn-nav" id="bottom-next-domain-btn" onclick="platform.navigateToNextDomain()" 
                    title="Next Domain" aria-label="Navigate to next domain">
                Next Domain →
            </button>
            <button class="btn-secondary" id="bottom-practice-questions-btn">Practice Questions for This Domain</button>
        `;

        // Update bottom navigation buttons
        const bottomPrevBtn = document.getElementById('bottom-prev-domain-btn');
        const bottomNextBtn = document.getElementById('bottom-next-domain-btn');
        const bottomPracticeBtn = document.getElementById('bottom-practice-questions-btn');

        if (objectiveId <= 1) {
            bottomPrevBtn.disabled = true;
        } else {
            bottomPrevBtn.disabled = false;
        }

        if (objectiveId >= Object.keys(this.studyGuide).length) {
            bottomNextBtn.disabled = true;
        } else {
            bottomNextBtn.disabled = false;
        }

        // Practice Questions button handler
        bottomPracticeBtn.onclick = () => {
            this.startCategoryExam(objectiveId);
        this.updateDomainNavigation();

        // Add keyboard navigation
        this.setupKeyboardNavigation();

        this.showScreen('objective-detail-screen');
    }

    // Setup keyboard navigation for domain navigation
    setupKeyboardNavigation() {
        // Remove existing event listener if it exists
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }

        this.keyboardHandler = (event) => {
            // Only handle navigation when in objective detail screen
            if (this.currentScreen !== 'objective-detail-screen') return;

            switch(event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    this.navigateToPreviousDomain();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    this.navigateToNextDomain();
                    break;
                case 'Escape':
                    event.preventDefault();
                    this.showStudyGuide();
                    break;
            }
        };

        document.addEventListener('keydown', this.keyboardHandler);
    }

    // Domain Navigation methods
    updateDomainNavigation() {
        const totalDomains = Object.keys(this.studyGuide).length;
        const currentDomain = this.currentObjective;
        
        // Update domain indicator
        document.getElementById('domain-indicator').textContent = `Domain ${currentDomain} of ${totalDomains}`;
        
        // Update navigation buttons
        const prevBtn = document.getElementById('prev-domain-btn');
        const nextBtn = document.getElementById('next-domain-btn');
        
        // Enable/disable previous button
        if (currentDomain <= 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
        
        // Enable/disable next button
        if (currentDomain >= totalDomains) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    navigateToPreviousDomain() {
        if (this.currentObjective > 1) {
            this.showObjectiveDetail(this.currentObjective - 1);
        }
    }

    navigateToNextDomain() {
        const totalDomains = Object.keys(this.studyGuide).length;
        if (this.currentObjective < totalDomains) {
            this.showObjectiveDetail(this.currentObjective + 1);
        }
    }

    // Category Exams methods
    populateCategoryExams() {
        const grid = document.getElementById('category-grid');
        if (!grid) {
            console.error('category-grid element not found');
            return;
        }
        grid.innerHTML = '';

        // Make sure examQuestions is defined
        if (typeof examQuestions === 'undefined') {
            console.error('examQuestions is not defined');
            return;
        }

        Object.keys(this.studyGuide).forEach(objectiveId => {
            const objective = this.studyGuide[objectiveId];
            const questionsForObjective = examQuestions.filter(q => q.objective === parseInt(objectiveId));

            const card = document.createElement('div');
            card.className = 'category-card';
            card.onclick = () => this.startCategoryExam(parseInt(objectiveId));

            card.innerHTML = `
                <div class="category-number">Domain ${objectiveId}</div>
                <h3>${objective.title}</h3>
                <div class="category-stats">
                    <span>${questionsForObjective.length} Questions</span>
                    <span>Untimed Study Mode</span>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    // Exam methods
    startFullExam() {
        this.examType = 'full';
        this.setupExam(this.getRandomQuestions(170)); // LCSW exam has 170 questions
        this.timeRemaining = 4 * 60 * 60; // 4 hours
        this.startExam();
    }

    startCategoryExam(objectiveId) {
        this.examType = 'category';
        this.currentObjective = objectiveId;
        
        // Make sure examQuestions is defined
        if (typeof examQuestions === 'undefined') {
            console.error('examQuestions is not defined');
            return;
        }
        
        const domainId = Number(objectiveId);
        const questionsForObjective = examQuestions.filter(q => q.objective === domainId);
        console.log('Domain selected:', objectiveId, 'Questions found:', questionsForObjective.length, questionsForObjective);
        let availableQuestions = this.filterRecentQuestions(questionsForObjective);
        if (availableQuestions.length === 0) {
            console.warn('No available questions after filtering recent questions. Using all questions for this domain.');
            availableQuestions = questionsForObjective;
        }
        const shuffledQuestions = this.shuffleArray([...availableQuestions]);
        this.trackRecentQuestions(shuffledQuestions);
        this.setupExam(shuffledQuestions);
        this.timeRemaining = 0;
        if (shuffledQuestions.length === 0) {
            this.showScreen('exam-screen');
            document.getElementById('questionText').textContent = 'No questions available for this domain.';
            document.getElementById('optionsContainer').innerHTML = '';
            document.getElementById('difficultyBadge').textContent = '';
            document.getElementById('objectiveBadge').textContent = '';
            document.getElementById('questionCounter').textContent = '';
            document.getElementById('progressFill').style.width = '0%';
            return;
        }
        this.startExam();
    }

    startObjectiveExam() {
        this.startCategoryExam(this.currentObjective);
    }

    getRandomQuestions(count) {
        // Make sure examQuestions is defined
        if (typeof examQuestions === 'undefined') {
            console.error('examQuestions is not defined');
            return [];
        }
        
        if (this.examType === 'full') {
            return this.getBalancedRandomQuestions(count);
        }
        const shuffled = this.shuffleArray([...examQuestions]);
        return shuffled.slice(0, count);
    }

    getBalancedRandomQuestions(count) {
        const questionsByObjective = {};
        const questionsPerObjective = Math.floor(count / 4);
        const remainder = count % 4;

        // Make sure examQuestions is defined
        if (typeof examQuestions === 'undefined') {
            console.error('examQuestions is not defined');
            return [];
        }
        
        examQuestions.forEach(question => {
            if (!questionsByObjective[question.objective]) {
                questionsByObjective[question.objective] = [];
            }
            questionsByObjective[question.objective].push(question);
        });

        const selectedQuestions = [];

        for (let objective = 1; objective <= 4; objective++) {
            const objectiveQuestions = questionsByObjective[objective] || [];
            const availableQuestions = this.filterRecentQuestions(objectiveQuestions);
            const shuffled = this.shuffleArray([...availableQuestions]);
            const numToTake = questionsPerObjective + (objective <= remainder ? 1 : 0);

            for (let i = 0; i < numToTake; i++) {
                if (shuffled.length > 0) {
                    selectedQuestions.push(shuffled[i % shuffled.length]);
                }
            }
        }

        const finalQuestions = this.shuffleArray(selectedQuestions);
        this.trackRecentQuestions(finalQuestions);
        return finalQuestions;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    setupExam(questions) {
        this.examQuestions = questions;
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(questions.length).fill(null);
    }

    startExam() {
        this.showScreen('exam-screen');
        
        // Show cycling message
        this.showCyclingMessage();

        const timerElement = document.getElementById('timer');
        if (this.timeRemaining > 0 && this.examType === 'full') {
            timerElement.style.display = 'inline-block';
            this.startTimer();
        } else {
            timerElement.style.display = 'none';
        }

        // Delay question display to show cycling message
        setTimeout(() => {
            this.hideCyclingMessage();
            this.displayQuestion();
        }, 1500);
    }

    startTimer() {
        this.updateTimer();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimer();

            if (this.timeRemaining <= 0) {
                this.finishExam();
            }
        }, 1000);
    }

    updateTimer() {
        if (this.timeRemaining > 0) {
            const hours = Math.floor(this.timeRemaining / 3600);
            const minutes = Math.floor((this.timeRemaining % 3600) / 60);
            const seconds = this.timeRemaining % 60;
            document.getElementById('timer').textContent =
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.examQuestions[this.currentQuestionIndex];

        document.getElementById('questionCounter').textContent =
            `Question ${this.currentQuestionIndex + 1} of ${this.examQuestions.length}`;

        const progressPercent = ((this.currentQuestionIndex + 1) / this.examQuestions.length) * 100;
        document.getElementById('progressFill').style.width = `${progressPercent}%`;

        document.getElementById('questionText').textContent = question.question;
        document.getElementById('difficultyBadge').textContent = question.difficulty;
        document.getElementById('difficultyBadge').className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
        document.getElementById('objectiveBadge').textContent = `Domain ${question.objective}`;

        const codeBlock = document.getElementById('codeBlock');
        if (question.code) {
            codeBlock.style.display = 'block';
            document.getElementById('codeContent').textContent = question.code;
        } else {
            codeBlock.style.display = 'none';
        }

        // Clear any existing explanation
        this.hideInstantExplanation();
        
        this.displayOptions(question);
    }

    displayOptions(question) {
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.onclick = () => this.selectOption(index);

            const isSelected = this.userAnswers[this.currentQuestionIndex] === index;
            if (isSelected) {
                optionDiv.classList.add('selected');
            }

            optionDiv.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;

            container.appendChild(optionDiv);
        });
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;

        // For domain-based exams, show instant feedback
        if (this.examType === 'category') {
            const question = this.examQuestions[this.currentQuestionIndex];
            const isCorrect = optionIndex === question.correctAnswer;
            
            document.querySelectorAll('.option').forEach((option, index) => {
                option.classList.remove('selected', 'correct-feedback', 'incorrect-feedback');
                
                if (index === question.correctAnswer) {
                    option.classList.add('correct-feedback');
                } else if (index === optionIndex && !isCorrect) {
                    option.classList.add('incorrect-feedback');
                }
            });
            
            // Show explanation after a brief delay
            setTimeout(() => {
                this.showInstantExplanation(question, isCorrect);
            }, 500);
        } else {
            // Full exam - just show selection
            document.querySelectorAll('.option').forEach((option, index) => {
                option.classList.toggle('selected', index === optionIndex);
            });
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.examQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.finishExam();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    exitExam() {
        this.showExitConfirmModal();
    }
    
    showExitConfirmModal() {
        let modal = document.getElementById('exitConfirmModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'exitConfirmModal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                padding: 20px;
                box-sizing: border-box;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: var(--bg-card);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 2rem;
                    max-width: 400px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 8px 25px var(--shadow);
                ">
                    <h3 style="color: var(--text-primary); margin-bottom: 1rem;">Exit Exam?</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Are you sure you want to exit? Your progress will be lost.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center;">
                        <button onclick="platform.confirmExitExam()" style="
                            background: var(--error);
                            color: white;
                            border: none;
                            padding: 0.75rem 1.5rem;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: 500;
                            min-height: 44px;
                        ">Exit</button>
                        <button onclick="platform.hideExitConfirmModal()" style="
                            background: var(--bg-card-elevated);
                            color: var(--text-primary);
                            border: 1px solid var(--border-color);
                            padding: 0.75rem 1.5rem;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: 500;
                            min-height: 44px;
                        ">Cancel</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
        }
        
        modal.style.display = 'flex';
    }
    
    hideExitConfirmModal() {
        const modal = document.getElementById('exitConfirmModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    confirmExitExam() {
        this.hideExitConfirmModal();
        this.resetExam();
        this.goHome();
    }

    finishExam() {
        clearInterval(this.timer);
        this.calculateResults();
        this.showResults();
    }

    calculateResults() {
        let correctAnswers = 0;
        const objectiveScores = {};

        for (let i = 1; i <= 4; i++) {
            objectiveScores[i] = { correct: 0, total: 0 };
        }

        this.examQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            if (isCorrect) {
                correctAnswers++;
            }

            objectiveScores[question.objective].total++;
            if (isCorrect) {
                objectiveScores[question.objective].correct++;
            }
        });

        this.results = {
            totalQuestions: this.examQuestions.length,
            correctAnswers,
            percentage: Math.round((correctAnswers / this.examQuestions.length) * 100),
            objectiveScores
        };
    }

    showResults() {
        this.showScreen('results-screen');

        document.getElementById('scorePercentage').textContent = `${this.results.percentage}%`;

        const statsContainer = document.getElementById('performanceStats');
        statsContainer.innerHTML = `
            <div class="stat-item">
                <span class="stat-label">Correct Answers:</span>
                <span class="stat-value">${this.results.correctAnswers} / ${this.results.totalQuestions}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Passing Score:</span>
                <span class="stat-value">${this.results.percentage >= 75 ? '✅ PASS' : '❌ FAIL'}</span>
            </div>
        `;

        this.displayObjectiveBreakdown();
    }

    displayObjectiveBreakdown() {
        const container = document.getElementById('objectiveBreakdown');
        container.innerHTML = '';

        Object.entries(this.results.objectiveScores).forEach(([objectiveId, scores]) => {
            if (scores.total === 0) return;

            const objective = this.studyGuide[objectiveId];
            if (!objective) return;

            const percentage = scores.total > 0 ? Math.round((scores.correct / scores.total) * 100) : 0;

            const objectiveDiv = document.createElement('div');
            objectiveDiv.className = 'objective-score';
            objectiveDiv.innerHTML = `
                <div class="objective-info">
                    <span class="objective-name">Domain ${objectiveId}: ${objective.title}</span>
                    <span class="objective-score-text">${scores.correct}/${scores.total} (${percentage}%)</span>
                </div>
                <div class="score-bar">
                    <div class="score-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="recommendation">
                    ${percentage < 75 ? '📚 Review this domain' : '✅ Strong performance'}
                </div>
            `;

            container.appendChild(objectiveDiv);
        });
    }

    // Review methods
    reviewAnswers() {
        this.reviewIndex = 0;
        this.showScreen('review-screen');
        this.displayReviewQuestion();
    }

    displayReviewQuestion() {
        const question = this.examQuestions[this.reviewIndex];
        const userAnswer = this.userAnswers[this.reviewIndex];
        const isCorrect = userAnswer === question.correctAnswer;

        document.getElementById('reviewCounter').textContent =
            `Question ${this.reviewIndex + 1} of ${this.examQuestions.length}`;

        document.getElementById('reviewQuestionText').textContent = question.question;
        document.getElementById('reviewDifficultyBadge').textContent = question.difficulty;
        document.getElementById('reviewDifficultyBadge').className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
        document.getElementById('reviewObjectiveBadge').textContent = `Domain ${question.objective}`;

        const resultBadge = document.getElementById('resultBadge');
        resultBadge.textContent = isCorrect ? 'Correct' : 'Incorrect';
        resultBadge.className = `result-badge ${isCorrect ? 'correct' : 'incorrect'}`;

        const codeBlock = document.getElementById('reviewCodeBlock');
        if (question.code) {
            codeBlock.style.display = 'block';
            document.getElementById('reviewCodeContent').textContent = question.code;
        } else {
            codeBlock.style.display = 'none';
        }

        document.getElementById('userAnswer').textContent =
            userAnswer !== null ? `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}` : 'Not answered';
        document.getElementById('correctAnswer').textContent =
            `${String.fromCharCode(65 + question.correctAnswer)}. ${question.options[question.correctAnswer]}`;

        // Format the explanation text for better readability
        const formattedExplanation = this.formatExplanationText(question.explanation);
        const explanationEl = document.getElementById('answerExplanation');
        explanationEl.innerHTML = formattedExplanation;
        explanationEl.className = 'explanation-content';

        const userAnswerEl = document.getElementById('userAnswer');
        userAnswerEl.className = `answer-option ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`;
    }

    nextReviewQuestion() {
        if (this.reviewIndex < this.examQuestions.length - 1) {
            this.reviewIndex++;
            this.displayReviewQuestion();
        }
    }

    previousReviewQuestion() {
        if (this.reviewIndex > 0) {
            this.reviewIndex--;
            this.displayReviewQuestion();
        }
    }

    startNewExam() {
        this.resetExam();
        this.showExamOptions();
    }

    resetExam() {
        clearInterval(this.timer);
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.examQuestions = [];
        this.reviewIndex = 0;
        this.timeRemaining = 0;
        this.results = null;
        this.hideInstantExplanation();
        this.hideCyclingMessage();
    }

    showInstantExplanation(question, isCorrect) {
        let explanationDiv = document.getElementById('instantExplanation');
        if (!explanationDiv) {
            explanationDiv = document.createElement('div');
            explanationDiv.id = 'instantExplanation';
            explanationDiv.className = 'instant-explanation';
            document.querySelector('.question-container').appendChild(explanationDiv);
        }
        
        // Format the explanation text for better readability
        const formattedExplanation = this.formatExplanationText(question.explanation);
        
        explanationDiv.innerHTML = `
            <div class="feedback-header ${isCorrect ? 'correct' : 'incorrect'}">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <span class="feedback-text">${isCorrect ? 'Correct!' : 'Incorrect'}</span>
            </div>
            <div class="explanation-formatted">
                <strong>Explanation:</strong>
                <div class="explanation-content">${formattedExplanation}</div>
            </div>
        `;
        
        explanationDiv.style.display = 'block';
    }

    hideInstantExplanation() {
        const explanationDiv = document.getElementById('instantExplanation');
        if (explanationDiv) {
            explanationDiv.style.display = 'none';
        }
    }
    
    showCyclingMessage() {
        let messageDiv = document.getElementById('cyclingMessage');
        if (!messageDiv) {
            messageDiv = document.createElement('div');
            messageDiv.id = 'cyclingMessage';
            messageDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 2rem;
                text-align: center;
                z-index: 1000;
                box-shadow: 0 8px 25px var(--shadow);
                color: var(--text-primary);
            `;
            document.body.appendChild(messageDiv);
        }
        
        messageDiv.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 1rem;">🔄</div>
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Preparing Your Exam</div>
            <div style="color: var(--text-secondary);">Questions are being randomized...</div>
        `;
        
        messageDiv.style.display = 'block';
    }
    
    hideCyclingMessage() {
        const messageDiv = document.getElementById('cyclingMessage');
        if (messageDiv) {
            messageDiv.style.display = 'none';
        }
    }

    loadRecentQuestions() {
        try {
            return JSON.parse(localStorage.getItem('lcsw_recent_questions') || '[]');
        } catch {
            return [];
        }
    }

    saveRecentQuestions() {
        localStorage.setItem('lcsw_recent_questions', JSON.stringify(this.recentQuestions));
    }

    trackRecentQuestions(questions) {
        const questionIds = questions.map(q => q.id);
        this.recentQuestions = [...questionIds, ...this.recentQuestions].slice(0, 30);
        this.saveRecentQuestions();
    }

    filterRecentQuestions(questions) {
        const filtered = questions.filter(q => !this.recentQuestions.includes(q.id));
        return filtered.length >= Math.min(10, questions.length * 0.5) ? filtered : questions;
    }
    
    // ...removed toggleStudyGuideMode and review questions code...
    
    // ...removed orphaned bottomNav and navigation code...
    
    toggleAnswer(domainId, questionIndex) {
        const answerId = `answer-${domainId}-${questionIndex}`;
        const answerDiv = document.getElementById(answerId);
        const button = answerDiv.previousElementSibling;
        
        if (answerDiv.style.display === 'none') {
            answerDiv.style.display = 'block';
            button.textContent = 'Hide Answer';
        } else {
            answerDiv.style.display = 'none';
            button.textContent = 'Show Answer';
        }
    }
    
    formatExplanationText(explanation) {
        // Simple formatting to preserve original text structure
        return explanation || '';
    }
}

// Initialize the platform when the page loads

let platform;
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Initializing LCSW platform...');
        platform = new LCSWExamPlatform();
        window.platform = platform; // Expose globally for onclick handlers
        console.log('Platform initialized successfully');
    } catch (error) {
        console.error('Failed to initialize platform:', error);
    }
});

// Global functions for onclick handlers
function showStudyGuide() {
    platform.showStudyGuide();
}

function showExamOptions() {
    platform.showExamOptions();
}

function showCategoryExams() {
    platform.showCategoryExams();
}

function goHome() {
    platform.goHome();
}

function startFullExam() {
    platform.startFullExam();
}

function startObjectiveExam() {
    platform.startObjectiveExam();
}

function nextQuestion() {
    platform.nextQuestion();
}

function previousQuestion() {
    platform.previousQuestion();
}

function exitExam() {
    platform.exitExam();
}

function reviewAnswers() {
    platform.reviewAnswers();
}

function nextReviewQuestion() {
    platform.nextReviewQuestion();
}

function previousReviewQuestion() {
    platform.previousReviewQuestion();
}

function showResults() {
    platform.showResults();
}

function startNewExam() {
    platform.startNewExam();
}

function toggleStudyGuideMode() {
    platform.toggleStudyGuideMode();
}