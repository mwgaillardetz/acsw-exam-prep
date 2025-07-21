// Exam functions for ACSW exam

// Function to pause exam
function pauseExam(message) {
    // Pause timer
    if (window.examTimer) {
        clearInterval(window.examTimer);
    }
    
    // Create pause overlay if it doesn't exist
    var overlay = document.getElementById('pause-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'pause-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        `;
        document.body.appendChild(overlay);
    }
    
    // Set overlay content
    overlay.innerHTML = `
        <div style="
            background: var(--bg-card);
            border-radius: 16px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 8px 25px var(--shadow);
        ">
            <h2 style="margin-bottom: 1rem;">Exam Paused</h2>
            <p style="margin-bottom: 2rem;">${message}</p>
            <button id="continue-exam-btn" class="btn-primary">Continue Exam</button>
        </div>
    `;
    
    // Show overlay
    overlay.style.display = 'flex';
}

// Function to continue exam
function continueExam() {
    // Hide pause overlay
    var overlay = document.getElementById('pause-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
    
    // Resume timer only if it's a full exam
    var timeRemaining = parseInt(sessionStorage.getItem('timeRemaining') || '0');
    if (timeRemaining > 0) {
        startTimer();
    }
}

// Function to check for unanswered questions
function checkUnansweredQuestions() {
    var userAnswers = JSON.parse(sessionStorage.getItem('userAnswers') || '[]');
    var unansweredCount = userAnswers.filter(answer => answer === null).length;
    
    if (unansweredCount > 0) {
        return {
            hasUnanswered: true,
            count: unansweredCount
        };
    }
    
    return {
        hasUnanswered: false,
        count: 0
    };
}

// Function to confirm exam completion
function confirmExamCompletion() {
    var unanswered = checkUnansweredQuestions();
    
    if (unanswered.hasUnanswered) {
        return confirm(`You have ${unanswered.count} unanswered questions. Are you sure you want to finish the exam?`);
    }
    
    return confirm('Are you sure you want to finish the exam and see your results?');
}

// Make functions available globally
window.pauseExam = pauseExam;
window.continueExam = continueExam;
window.checkUnansweredQuestions = checkUnansweredQuestions;
window.confirmExamCompletion = confirmExamCompletion;