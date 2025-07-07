// Flashcard App JavaScript
class FlashcardApp {
    constructor() {
        this.currentCardIndex = 0;
        this.totalCards = 0;
        this.isFlipped = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isAnimating = false;
        
        this.flashcards = this.generateGermanB2Words();
        this.totalCards = this.flashcards.length;
        
        // Dictionary API configuration
        this.dictionaryAPIs = [
            {
                name: 'Free Dictionary API',
                url: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
                parser: this.parseFreeDict.bind(this)
            },
            {
                name: 'WordsAPI (Fallback)',
                url: 'https://wordsapiv1.p.rapidapi.com/words/',
                parser: this.parseWordsAPI.bind(this),
                headers: {
                    'X-RapidAPI-Key': 'demo', // Using demo key for fallback
                    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
                }
            }
        ];
        
        this.init();
    }
    
    generateGermanB2Words() {
        const germanWords = [
            // Core B2 vocabulary - 200 essential words
            { question: "der Abschluss", answer: "conclusion, completion, degree" },
            { question: "die Absprache", answer: "agreement, arrangement" },
            { question: "der Anspruch", answer: "claim, demand, right" },
            { question: "die Ausnahme", answer: "exception" },
            { question: "der Bereich", answer: "area, field, sector" },
            { question: "die Beschäftigung", answer: "employment, occupation" },
            { question: "die Bestimmung", answer: "determination, regulation" },
            { question: "der Betrag", answer: "amount, sum" },
            { question: "die Bewertung", answer: "evaluation, assessment" },
            { question: "die Darstellung", answer: "presentation, representation" },
            { question: "die Einrichtung", answer: "institution, facility" },
            { question: "die Entwicklung", answer: "development" },
            { question: "die Erfahrung", answer: "experience" },
            { question: "das Ergebnis", answer: "result, outcome" },
            { question: "die Erklärung", answer: "explanation, declaration" },
            { question: "die Erwartung", answer: "expectation" },
            { question: "die Fähigkeit", answer: "ability, capability" },
            { question: "die Gelegenheit", answer: "opportunity, occasion" },
            { question: "die Gesellschaft", answer: "society, company" },
            { question: "die Grundlage", answer: "foundation, basis" },
            { question: "die Haltung", answer: "attitude, posture" },
            { question: "die Herstellung", answer: "production, manufacturing" },
            { question: "die Lage", answer: "situation, position" },
            { question: "die Leistung", answer: "performance, achievement" },
            { question: "die Möglichkeit", answer: "possibility, opportunity" },
            { question: "die Nachfrage", answer: "demand, inquiry" },
            { question: "die Schwierigkeit", answer: "difficulty, problem" },
            { question: "die Sicherheit", answer: "security, safety" },
            { question: "die Überlegung", answer: "consideration, thought" },
            { question: "die Unterstützung", answer: "support, assistance" },
            { question: "die Verantwortung", answer: "responsibility" },
            { question: "die Verbesserung", answer: "improvement" },
            { question: "die Verfügung", answer: "disposal, availability" },
            { question: "die Verhandlung", answer: "negotiation" },
            { question: "die Versicherung", answer: "insurance, assurance" },
            { question: "die Voraussetzung", answer: "prerequisite, condition" },
            { question: "die Wirkung", answer: "effect, impact" },
            { question: "die Zusammenarbeit", answer: "cooperation, collaboration" },
            { question: "der Zustand", answer: "condition, state" },
            { question: "die Zustimmung", answer: "agreement, consent" },
            
            // Verbs - 100 important B2 verbs
            { question: "abbrechen", answer: "to break off, to cancel" },
            { question: "anerkennen", answer: "to recognize, to acknowledge" },
            { question: "anwenden", answer: "to apply, to use" },
            { question: "auffordern", answer: "to request, to call upon" },
            { question: "ausgehen", answer: "to go out, to assume" },
            { question: "beantragen", answer: "to apply for, to request" },
            { question: "berücksichtigen", answer: "to consider, to take into account" },
            { question: "bestehen", answer: "to exist, to pass (exam)" },
            { question: "bestimmen", answer: "to determine, to decide" },
            { question: "betreffen", answer: "to concern, to affect" },
            { question: "bewerten", answer: "to evaluate, to assess" },
            { question: "darstellen", answer: "to represent, to portray" },
            { question: "durchführen", answer: "to carry out, to conduct" },
            { question: "einsetzen", answer: "to use, to employ" },
            { question: "entsprechen", answer: "to correspond to, to match" },
            { question: "entwickeln", answer: "to develop" },
            { question: "erfassen", answer: "to grasp, to understand" },
            { question: "erhalten", answer: "to receive, to preserve" },
            { question: "erreichen", answer: "to reach, to achieve" },
            { question: "erwarten", answer: "to expect" },
            { question: "feststellen", answer: "to determine, to establish" },
            { question: "fördern", answer: "to promote, to support" },
            { question: "gestalten", answer: "to design, to shape" },
            { question: "hervorbringen", answer: "to produce, to bring forth" },
            { question: "herstellen", answer: "to produce, to manufacture" },
            { question: "leisten", answer: "to achieve, to perform" },
            { question: "schaffen", answer: "to create, to manage" },
            { question: "übernehmen", answer: "to take over, to adopt" },
            { question: "unterstützen", answer: "to support" },
            { question: "vergleichen", answer: "to compare" },
            { question: "verhältnismäßig", answer: "proportional, relatively" },
            { question: "verhindern", answer: "to prevent" },
            { question: "verlangen", answer: "to demand, to require" },
            { question: "vermeiden", answer: "to avoid" },
            { question: "vertreten", answer: "to represent" },
            { question: "verwenden", answer: "to use, to employ" },
            { question: "voraussetzen", answer: "to assume, to presuppose" },
            { question: "vorschlagen", answer: "to suggest, to propose" },
            { question: "wählen", answer: "to choose, to vote" },
            { question: "widersprechen", answer: "to contradict" },
            { question: "zurückgehen", answer: "to go back, to decrease" },
            { question: "zustimmen", answer: "to agree, to consent" },
            
            // Adjectives - 100 B2 adjectives
            { question: "ähnlich", answer: "similar" },
            { question: "angemessen", answer: "appropriate, adequate" },
            { question: "ausreichend", answer: "sufficient, adequate" },
            { question: "bedeutend", answer: "significant, important" },
            { question: "beträchtlich", answer: "considerable, substantial" },
            { question: "deutlich", answer: "clear, obvious" },
            { question: "einheitlich", answer: "uniform, consistent" },
            { question: "erforderlich", answer: "necessary, required" },
            { question: "erheblich", answer: "considerable, significant" },
            { question: "fähig", answer: "capable, able" },
            { question: "geeignet", answer: "suitable, appropriate" },
            { question: "gering", answer: "small, slight" },
            { question: "grundsätzlich", answer: "fundamental, basic" },
            { question: "häufig", answer: "frequent, common" },
            { question: "hilfreich", answer: "helpful" },
            { question: "notwendig", answer: "necessary" },
            { question: "ordentlich", answer: "proper, decent" },
            { question: "regelmäßig", answer: "regular" },
            { question: "sorgfältig", answer: "careful, thorough" },
            { question: "ständig", answer: "constant, permanent" },
            { question: "tatsächlich", answer: "actual, real" },
            { question: "üblich", answer: "usual, common" },
            { question: "umfangreich", answer: "extensive, comprehensive" },
            { question: "unterschiedlich", answer: "different, various" },
            { question: "verantwortlich", answer: "responsible" },
            { question: "verfügbar", answer: "available" },
            { question: "wesentlich", answer: "essential, significant" },
            { question: "zusätzlich", answer: "additional, extra" },
            { question: "zuverlässig", answer: "reliable, dependable" },
            
            // Abstract concepts - 50 words
            { question: "die Aufmerksamkeit", answer: "attention" },
            { question: "die Beziehung", answer: "relationship, connection" },
            { question: "die Eigenschaft", answer: "property, characteristic" },
            { question: "die Entscheidung", answer: "decision" },
            { question: "die Folge", answer: "consequence, result" },
            { question: "die Forschung", answer: "research" },
            { question: "die Gewohnheit", answer: "habit, custom" },
            { question: "die Hinsicht", answer: "respect, regard" },
            { question: "die Kenntnis", answer: "knowledge, awareness" },
            { question: "die Methode", answer: "method" },
            { question: "das Missverständnis", answer: "misunderstanding" },
            { question: "die Notwendigkeit", answer: "necessity" },
            { question: "die Öffentlichkeit", answer: "public, general public" },
            { question: "die Praxis", answer: "practice" },
            { question: "das Prinzip", answer: "principle" },
            { question: "die Qualität", answer: "quality" },
            { question: "die Regel", answer: "rule" },
            { question: "die Rolle", answer: "role" },
            { question: "die Stellung", answer: "position, status" },
            { question: "die Struktur", answer: "structure" },
            { question: "die Tendenz", answer: "tendency, trend" },
            { question: "die Theorie", answer: "theory" },
            { question: "die Tradition", answer: "tradition" },
            { question: "die Übung", answer: "practice, exercise" },
            { question: "die Ursache", answer: "cause, reason" },
            { question: "die Wahl", answer: "choice, election" },
            { question: "die Wissenschaft", answer: "science" },
            { question: "das Ziel", answer: "goal, target" },
            
            // Professional/Business - 50 words
            { question: "die Abteilung", answer: "department, division" },
            { question: "die Analyse", answer: "analysis" },
            { question: "der Antrag", answer: "application, request" },
            { question: "die Aufgabe", answer: "task, assignment" },
            { question: "die Ausbildung", answer: "training, education" },
            { question: "die Bedingung", answer: "condition, requirement" },
            { question: "die Besprechung", answer: "meeting, discussion" },
            { question: "die Beteiligung", answer: "participation, involvement" },
            { question: "die Diskussion", answer: "discussion" },
            { question: "das Dokument", answer: "document" },
            { question: "die Durchführung", answer: "implementation, execution" },
            { question: "die Einstellung", answer: "attitude, employment" },
            { question: "die Genehmigung", answer: "approval, permission" },
            { question: "die Kontrolle", answer: "control, inspection" },
            { question: "die Lösung", answer: "solution" },
            { question: "das Material", answer: "material" },
            { question: "die Mitteilung", answer: "message, communication" },
            { question: "die Organisation", answer: "organization" },
            { question: "die Planung", answer: "planning" },
            { question: "das Programm", answer: "program" },
            { question: "das Projekt", answer: "project" },
            { question: "die Stelle", answer: "position, job, place" },
            { question: "die Teilnahme", answer: "participation" },
            { question: "die Unterlage", answer: "document, paperwork" },
            { question: "die Verwaltung", answer: "administration, management" },
            { question: "die Vorstellung", answer: "presentation, idea" },
            { question: "die Zusammenfassung", answer: "summary" },
            
            // Technology/Modern life - 30 words  
            { question: "die Anwendung", answer: "application, use" },
            { question: "die Ausstattung", answer: "equipment, furnishing" },
            { question: "die Daten", answer: "data" },
            { question: "das Gerät", answer: "device, equipment" },
            { question: "die Information", answer: "information" },
            { question: "die Kommunikation", answer: "communication" },
            { question: "die Lösung", answer: "solution" },
            { question: "das Netzwerk", answer: "network" },
            { question: "das System", answer: "system" },
            { question: "die Technik", answer: "technology, technique" },
            { question: "die Technologie", answer: "technology" },
            { question: "die Verbindung", answer: "connection, link" },
            { question: "die Übertragung", answer: "transmission, transfer" },
            
            // Social/Cultural - 40 words
            { question: "die Angelegenheit", answer: "matter, affair" },
            { question: "die Ansicht", answer: "view, opinion" },
            { question: "die Bedeutung", answer: "meaning, significance" },
            { question: "die Bevölkerung", answer: "population" },
            { question: "der Bürger", answer: "citizen" },
            { question: "die Demokratie", answer: "democracy" },
            { question: "die Diskussion", answer: "discussion" },
            { question: "die Gemeinschaft", answer: "community" },
            { question: "die Geschichte", answer: "history, story" },
            { question: "die Kultur", answer: "culture" },
            { question: "die Meinung", answer: "opinion" },
            { question: "die Politik", answer: "politics" },
            { question: "die Regierung", answer: "government" },
            { question: "die Sprache", answer: "language" },
            { question: "der Staat", answer: "state, country" },
            { question: "die Umgebung", answer: "environment, surroundings" },
            { question: "die Umwelt", answer: "environment" },
            { question: "die Wirtschaft", answer: "economy" },
            
            // Time/Sequence - 20 words
            { question: "die Gegenwart", answer: "present time" },
            { question: "die Vergangenheit", answer: "past" },
            { question: "die Zukunft", answer: "future" },
            { question: "der Zeitpunkt", answer: "point in time, moment" },
            { question: "der Zeitraum", answer: "period of time" },
            { question: "die Dauer", answer: "duration" },
            { question: "die Entwicklung", answer: "development" },
            { question: "der Fortschritt", answer: "progress" },
            { question: "die Fortsetzung", answer: "continuation" },
            { question: "der Übergang", answer: "transition" },
            { question: "der Verlauf", answer: "course, progression" },
            { question: "die Vorbereitung", answer: "preparation" },
            { question: "die Wiederholung", answer: "repetition" },
            
            // Emotions/Psychology - 30 words
            { question: "die Absicht", answer: "intention, purpose" },
            { question: "die Angst", answer: "fear, anxiety" },
            { question: "die Begeisterung", answer: "enthusiasm" },
            { question: "die Besorgnis", answer: "concern, worry" },
            { question: "die Ehrlichkeit", answer: "honesty" },
            { question: "die Enttäuschung", answer: "disappointment" },
            { question: "die Freude", answer: "joy, pleasure" },
            { question: "die Hoffnung", answer: "hope" },
            { question: "die Leidenschaft", answer: "passion" },
            { question: "die Neugier", answer: "curiosity" },
            { question: "die Sorge", answer: "worry, concern" },
            { question: "die Überraschung", answer: "surprise" },
            { question: "das Vertrauen", answer: "trust, confidence" },
            { question: "die Zufriedenheit", answer: "satisfaction" },
            { question: "der Zweifel", answer: "doubt" },
            
            // Common phrases and expressions - 30 words
            { question: "im Gegenteil", answer: "on the contrary" },
            { question: "im Wesentlichen", answer: "essentially, basically" },
            { question: "in der Regel", answer: "as a rule, usually" },
            { question: "in diesem Zusammenhang", answer: "in this context" },
            { question: "meiner Ansicht nach", answer: "in my opinion" },
            { question: "unter Umständen", answer: "under certain circumstances" },
            { question: "vor allem", answer: "above all, especially" },
            { question: "zum Beispiel", answer: "for example" },
            { question: "darüber hinaus", answer: "furthermore, beyond that" },
            { question: "auf jeden Fall", answer: "in any case, definitely" },
            { question: "das heißt", answer: "that is to say" },
            { question: "mit anderen Worten", answer: "in other words" },
            { question: "sowohl ... als auch", answer: "both ... and" },
            { question: "weder ... noch", answer: "neither ... nor" },
            { question: "je ... desto", answer: "the ... the" },
            { question: "immer mehr", answer: "more and more" },
            { question: "immer weniger", answer: "less and less" },
            { question: "von Zeit zu Zeit", answer: "from time to time" },
            { question: "nach und nach", answer: "gradually, little by little" },
            { question: "hin und wieder", answer: "now and then" }
        ];
        
        // Shuffle the array to randomize order
        return this.shuffleArray(germanWords);
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    init() {
        this.bindElements();
        this.bindEvents();
        this.updateCard();
        this.updateProgress();
        this.addTouchFeedback();
    }
    
    bindElements() {
        this.flashcard = document.getElementById('flashcard');
        this.currentCardElement = document.getElementById('currentCard');
        this.totalCardsElement = document.getElementById('totalCards');
        this.progressFill = document.getElementById('progressFill');
        this.correctBtn = document.getElementById('correctBtn');
        this.incorrectBtn = document.getElementById('incorrectBtn');
        this.cardQuestion = this.flashcard.querySelector('.card-question');
        this.cardAnswer = this.flashcard.querySelector('.card-answer');
        
        // Modal elements
        this.addWordBtn = document.getElementById('addWordBtn');
        this.addWordModal = document.getElementById('addWordModal');
        this.closeModal = document.getElementById('closeModal');
        this.wordInput = document.getElementById('wordInput');
        this.fetchBtn = document.getElementById('fetchBtn');
        this.definitionPreview = document.getElementById('definitionPreview');
        this.saveBtn = document.getElementById('saveBtn');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.spinner = document.getElementById('spinner');
        
        // Current word data
        this.currentWordData = null;
    }
    
    bindEvents() {
        // Card flip on tap
        this.flashcard.addEventListener('click', () => this.flipCard());
        
        // Action buttons
        this.correctBtn.addEventListener('click', () => this.nextCard(true));
        this.incorrectBtn.addEventListener('click', () => this.nextCard(false));
        
        // Touch events for swipe gestures
        this.flashcard.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.flashcard.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.flashcard.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
        
        // Prevent default touch behaviors
        this.flashcard.addEventListener('touchmove', (e) => e.preventDefault());
        
        // Modal events
        this.addWordBtn.addEventListener('click', () => this.openAddWordModal());
        this.closeModal.addEventListener('click', () => this.closeAddWordModal());
        this.cancelBtn.addEventListener('click', () => this.closeAddWordModal());
        this.fetchBtn.addEventListener('click', () => this.fetchWordDefinition());
        this.saveBtn.addEventListener('click', () => this.saveNewCard());
        this.wordInput.addEventListener('input', () => this.onWordInputChange());
        this.wordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.fetchWordDefinition();
            }
        });
        
        // Close modal on overlay click
        this.addWordModal.addEventListener('click', (e) => {
            if (e.target === this.addWordModal) {
                this.closeAddWordModal();
            }
        });
    }
    
    addTouchFeedback() {
        // Add haptic feedback for mobile devices
        const elements = [this.flashcard, this.correctBtn, this.incorrectBtn];
        elements.forEach(element => {
            element.addEventListener('touchstart', () => {
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            });
        });
    }
    
    flipCard() {
        if (this.isAnimating) return;
        
        this.isFlipped = !this.isFlipped;
        this.flashcard.classList.toggle('flipped', this.isFlipped);
        
        // Add subtle animation delay
        setTimeout(() => {
            this.addCardAnimation('flip-feedback');
        }, 100);
    }
    
    nextCard(isCorrect) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        // Add visual feedback
        const button = isCorrect ? this.correctBtn : this.incorrectBtn;
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Slide out current card
        this.flashcard.classList.add('slide-out-left');
        
        setTimeout(() => {
            this.currentCardIndex = (this.currentCardIndex + 1) % this.totalCards;
            this.isFlipped = false;
            this.flashcard.classList.remove('flipped', 'slide-out-left');
            this.flashcard.classList.add('slide-in-right');
            
            this.updateCard();
            this.updateProgress();
            
            setTimeout(() => {
                this.flashcard.classList.remove('slide-in-right');
                this.isAnimating = false;
            }, 300);
        }, 300);
    }
    
    updateCard() {
        const card = this.flashcards[this.currentCardIndex];
        this.cardQuestion.textContent = card.question;
        this.cardAnswer.textContent = card.answer;
        
        // Update counter
        this.currentCardElement.textContent = this.currentCardIndex + 1;
        this.totalCardsElement.textContent = this.totalCards;
        
        // Add entrance animation
        this.addCardAnimation('card-entrance');
    }
    
    updateProgress() {
        const progress = ((this.currentCardIndex + 1) / this.totalCards) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    addCardAnimation(className) {
        this.flashcard.classList.add(className);
        setTimeout(() => {
            this.flashcard.classList.remove(className);
        }, 300);
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
    }
    
    handleTouchMove(e) {
        if (!this.isFlipped) return;
        
        const currentX = e.touches[0].clientX;
        const diffX = currentX - this.touchStartX;
        
        // Visual feedback for swipe
        if (Math.abs(diffX) > 10) {
            const opacity = Math.min(Math.abs(diffX) / 100, 0.3);
            if (diffX > 0) {
                this.flashcard.style.background = `linear-gradient(135deg, rgba(52, 199, 89, ${opacity}), var(--secondary-color))`;
            } else {
                this.flashcard.style.background = `linear-gradient(135deg, rgba(255, 59, 48, ${opacity}), var(--secondary-color))`;
            }
        }
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].clientX;
        const diffX = this.touchEndX - this.touchStartX;
        
        // Reset background
        this.flashcard.style.background = '';
        
        // Check if it's a swipe (more than 50px difference)
        if (Math.abs(diffX) > 50 && this.isFlipped) {
            if (diffX > 0) {
                this.nextCard(true); // Swipe right = correct
            } else {
                this.nextCard(false); // Swipe left = incorrect
            }
        }
    }
    
    handleKeyPress(e) {
        switch(e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                this.flipCard();
                break;
            case 'ArrowRight':
            case 'ArrowUp':
                e.preventDefault();
                if (this.isFlipped) this.nextCard(true);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                e.preventDefault();
                if (this.isFlipped) this.nextCard(false);
                break;
        }
    }
    
    // Modal methods
    openAddWordModal() {
        this.addWordModal.classList.add('active');
        setTimeout(() => {
            this.wordInput.focus();
        }, 300);
    }
    
    closeAddWordModal() {
        this.addWordModal.classList.remove('active');
        this.resetModal();
    }
    
    resetModal() {
        this.wordInput.value = '';
        this.currentWordData = null;
        this.saveBtn.disabled = true;
        this.definitionPreview.innerHTML = `
            <div class="preview-placeholder">
                <span class="placeholder-icon">📖</span>
                <p>Enter a word to see its definition and examples</p>
            </div>
        `;
    }
    
    onWordInputChange() {
        const word = this.wordInput.value.trim();
        if (word.length > 0) {
            this.fetchBtn.disabled = false;
        } else {
            this.fetchBtn.disabled = true;
        }
    }
    
    async fetchWordDefinition() {
        const word = this.wordInput.value.trim().toLowerCase();
        if (!word) return;
        
        this.setLoadingState(true);
        
        try {
            const wordData = await this.getWordFromAPIs(word);
            this.currentWordData = wordData;
            this.displayWordData(wordData);
            this.saveBtn.disabled = false;
        } catch (error) {
            this.showError('Word not found. Please try a different word.');
        } finally {
            this.setLoadingState(false);
        }
    }
    
    setLoadingState(loading) {
        this.fetchBtn.disabled = loading;
        this.fetchBtn.classList.toggle('loading', loading);
    }
    
    async getWordFromAPIs(word) {
        let lastError = null;
        
        for (const api of this.dictionaryAPIs) {
            try {
                const response = await fetch(api.url + word, {
                    headers: api.headers || {}
                });
                
                if (response.ok) {
                    const data = await response.json();
                    return api.parser(data, word);
                }
            } catch (error) {
                lastError = error;
                continue;
            }
        }
        
        throw lastError || new Error('No API available');
    }
    
    parseFreeDict(data, word) {
        const entry = data[0];
        const meanings = entry.meanings || [];
        const phonetic = entry.phonetic || entry.phonetics?.[0]?.text || '';
        
        const definitions = meanings.map(meaning => ({
            partOfSpeech: meaning.partOfSpeech,
            definition: meaning.definitions[0].definition,
            example: meaning.definitions[0].example || null
        }));
        
        return {
            word: word,
            phonetic: phonetic,
            definitions: definitions
        };
    }
    
    parseWordsAPI(data, word) {
        const results = data.results || [];
        const pronunciation = data.pronunciation || {};
        
        const definitions = results.map(result => ({
            partOfSpeech: result.partOfSpeech || 'unknown',
            definition: result.definition,
            example: result.examples?.[0] || null
        }));
        
        return {
            word: word,
            phonetic: pronunciation.all || '',
            definitions: definitions
        };
    }
    
    displayWordData(wordData) {
        const definitionsHtml = wordData.definitions.map(def => `
            <div class="definition-item">
                <div class="part-of-speech">${def.partOfSpeech}</div>
                <div class="definition-text">${def.definition}</div>
                ${def.example ? `<div class="example-text">"${def.example}"</div>` : ''}
            </div>
        `).join('');
        
        this.definitionPreview.innerHTML = `
            <div class="definition-content active">
                <div class="word-title">${wordData.word}</div>
                ${wordData.phonetic ? `<div class="pronunciation">${wordData.phonetic}</div>` : ''}
                ${definitionsHtml}
            </div>
        `;
    }
    
    showError(message) {
        this.definitionPreview.innerHTML = `
            <div class="error-message">
                ${message}
            </div>
        `;
        this.saveBtn.disabled = true;
    }
    
    saveNewCard() {
        if (!this.currentWordData) return;
        
        const wordData = this.currentWordData;
        const question = wordData.word;
        const answer = wordData.definitions.map(def => 
            `${def.partOfSpeech}: ${def.definition}`
        ).join('\n\n');
        
        this.flashcards.push({
            question: question,
            answer: answer,
            wordData: wordData
        });
        
        this.totalCards = this.flashcards.length;
        this.updateProgress();
        this.closeAddWordModal();
        
        // Show success feedback
        this.showSuccessMessage('Card added successfully!');
    }
    
    showSuccessMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'success-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success-color);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            z-index: 1001;
            animation: slideInDown 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// Additional UI enhancements
class UIEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        this.addParallaxEffect();
        this.addLoadingAnimation();
        this.addNavigation();
        this.addGestureHints();
    }
    
    addParallaxEffect() {
        const phoneFrame = document.querySelector('.phone-frame');
        
        document.addEventListener('mousemove', (e) => {
            const rect = phoneFrame.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / 30;
            const deltaY = (e.clientY - centerY) / 30;
            
            phoneFrame.style.transform = `
                perspective(1000px) 
                rotateY(${deltaX}deg) 
                rotateX(${-deltaY}deg)
                translateZ(0)
            `;
        });
        
        document.addEventListener('mouseleave', () => {
            phoneFrame.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
        });
    }
    
    addLoadingAnimation() {
        const appContainer = document.querySelector('.app-container');
        appContainer.style.opacity = '0';
        appContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            appContainer.style.transition = 'all 0.6s ease';
            appContainer.style.opacity = '1';
            appContainer.style.transform = 'translateY(0)';
        }, 200);
    }
    
    addNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Add subtle animation
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 150);
            });
        });
    }
    
    addGestureHints() {
        const hints = document.querySelectorAll('.tap-hint, .swipe-hint');
        hints.forEach(hint => {
            hint.style.animation = 'pulse 2s infinite';
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
    }
    
    @keyframes card-entrance {
        0% { transform: scale(0.95); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes flip-feedback {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    .card-entrance {
        animation: card-entrance 0.3s ease-out;
    }
    
    .flip-feedback {
        animation: flip-feedback 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new FlashcardApp();
    new UIEnhancements();
});

// Add performance monitoring
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}ms`);
    });
});

observer.observe({ entryTypes: ['measure'] });

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}