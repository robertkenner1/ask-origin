// Grammarly Ping Pong Game

/**
 * Project: Grammarly Ping Pong
 * Description: Interactive ping pong game with Grammarly design system styling
 */

class GrammarlyPingPong {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.gameState = 'waiting'; // waiting, playing, paused, gameOver
        this.animationId = null;
        
        // Game objects
        this.ball = null;
        this.playerPaddle = null;
        this.computerPaddle = null;
        
        // Scores
        this.playerScore = 0;
        this.computerScore = 0;
        
        // Game settings
        this.difficulty = 'medium';
        this.ballSpeed = 6;
        this.paddleSpeed = 7;
        this.computerSpeed = 5;
        
        // Input handling
        this.keys = {};
        
        // Colors (Grammarly Design System)
        this.colors = {
            primary: '#00B6A3',
            secondary: '#1976D2',
            accent: '#FF9800',
            background: '#FFFFFF',
            text: '#212121',
            border: '#BDBDBD'
        };
        
        this.init();
    }

    init() {
        console.log('Grammarly Ping Pong initialized');
        this.setupCanvas();
        this.setupGameObjects();
        this.setupEventListeners();
        this.setupUI();
        this.render();
    }

    setupCanvas() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Set canvas size
        this.canvas.width = 800;
        this.canvas.height = 400;
        
        // Set canvas display size for responsive design
        this.canvas.style.maxWidth = '100%';
        this.canvas.style.height = 'auto';
    }

    setupGameObjects() {
        // Ball
        this.ball = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
            radius: 8,
            velocityX: 0,
            velocityY: 0,
            speed: this.ballSpeed,
            color: this.colors.primary
        };
        
        // Player paddle (left)
        this.playerPaddle = {
            x: 20,
            y: this.canvas.height / 2 - 50,
            width: 12,
            height: 100,
            speed: this.paddleSpeed,
            color: this.colors.primary
        };
        
        // Computer paddle (right)
        this.computerPaddle = {
            x: this.canvas.width - 32,
            y: this.canvas.height / 2 - 50,
            width: 12,
            height: 100,
            speed: this.computerSpeed,
            color: this.colors.secondary
        };
        
        this.resetBall();
    }

    setupEventListeners() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            
            if (e.key === ' ') {
                e.preventDefault();
                this.toggleGame();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
        
        // Button controls
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });
        
        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.pauseGame();
        });
        
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetGame();
        });
        
        // Settings
        document.getElementById('difficulty').addEventListener('change', (e) => {
            this.difficulty = e.target.value;
            this.updateDifficulty();
        });
        
        document.getElementById('ballSpeed').addEventListener('input', (e) => {
            this.ballSpeed = parseInt(e.target.value);
            this.ball.speed = this.ballSpeed;
        });
        
        // Window resize
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
    }

    setupUI() {
        this.updateScore();
        this.updateGameMessage('Press Space to Start', 'Use W/S or ↑/↓ to move your paddle');
    }

    updateDifficulty() {
        switch (this.difficulty) {
            case 'easy':
                this.computerSpeed = 3;
                this.paddleSpeed = 8;
                break;
            case 'medium':
                this.computerSpeed = 5;
                this.paddleSpeed = 7;
                break;
            case 'hard':
                this.computerSpeed = 7;
                this.paddleSpeed = 6;
                break;
        }
        this.computerPaddle.speed = this.computerSpeed;
        this.playerPaddle.speed = this.paddleSpeed;
    }

    toggleGame() {
        if (this.gameState === 'waiting') {
            this.startGame();
        } else if (this.gameState === 'playing') {
            this.pauseGame();
        } else if (this.gameState === 'paused') {
            this.resumeGame();
        } else if (this.gameState === 'gameOver') {
            this.resetGame();
        }
    }

    startGame() {
        this.gameState = 'playing';
        this.hideOverlay();
        this.resetBall();
        this.gameLoop();
    }

    pauseGame() {
        this.gameState = 'paused';
        this.showOverlay();
        this.updateGameMessage('Game Paused', 'Press Space to Resume');
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    resumeGame() {
        this.gameState = 'playing';
        this.hideOverlay();
        this.gameLoop();
    }

    resetGame() {
        this.gameState = 'waiting';
        this.playerScore = 0;
        this.computerScore = 0;
        this.updateScore();
        this.resetBall();
        this.resetPaddles();
        this.showOverlay();
        this.updateGameMessage('Press Space to Start', 'Use W/S or ↑/↓ to move your paddle');
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    resetBall() {
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height / 2;
        
        // Random direction
        const angle = (Math.random() - 0.5) * Math.PI / 3; // -30 to 30 degrees
        const direction = Math.random() < 0.5 ? 1 : -1;
        
        this.ball.velocityX = Math.cos(angle) * this.ball.speed * direction;
        this.ball.velocityY = Math.sin(angle) * this.ball.speed;
    }

    resetPaddles() {
        this.playerPaddle.y = this.canvas.height / 2 - this.playerPaddle.height / 2;
        this.computerPaddle.y = this.canvas.height / 2 - this.computerPaddle.height / 2;
    }

    gameLoop() {
        if (this.gameState !== 'playing') return;
        
        this.update();
        this.render();
        
        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        // Update player paddle
        this.updatePlayerPaddle();
        
        // Update computer paddle (AI)
        this.updateComputerPaddle();
        
        // Update ball
        this.updateBall();
        
        // Check for scoring
        this.checkScoring();
    }

    updatePlayerPaddle() {
        // Keyboard controls
        if (this.keys['w'] || this.keys['arrowup']) {
            this.playerPaddle.y -= this.playerPaddle.speed;
        }
        if (this.keys['s'] || this.keys['arrowdown']) {
            this.playerPaddle.y += this.playerPaddle.speed;
        }
        
        // Keep paddle within bounds
        this.playerPaddle.y = Math.max(0, Math.min(this.canvas.height - this.playerPaddle.height, this.playerPaddle.y));
    }

    updateComputerPaddle() {
        // Simple AI: follow the ball
        const paddleCenter = this.computerPaddle.y + this.computerPaddle.height / 2;
        const ballY = this.ball.y;
        
        if (paddleCenter < ballY - 35) {
            this.computerPaddle.y += this.computerPaddle.speed;
        } else if (paddleCenter > ballY + 35) {
            this.computerPaddle.y -= this.computerPaddle.speed;
        }
        
        // Keep paddle within bounds
        this.computerPaddle.y = Math.max(0, Math.min(this.canvas.height - this.computerPaddle.height, this.computerPaddle.y));
    }

    updateBall() {
        // Move ball
        this.ball.x += this.ball.velocityX;
        this.ball.y += this.ball.velocityY;
        
        // Ball collision with top and bottom walls
        if (this.ball.y <= this.ball.radius || this.ball.y >= this.canvas.height - this.ball.radius) {
            this.ball.velocityY = -this.ball.velocityY;
        }
        
        // Ball collision with paddles
        this.checkPaddleCollision();
    }

    checkPaddleCollision() {
        // Player paddle collision
        if (this.ball.x - this.ball.radius <= this.playerPaddle.x + this.playerPaddle.width &&
            this.ball.x + this.ball.radius >= this.playerPaddle.x &&
            this.ball.y >= this.playerPaddle.y &&
            this.ball.y <= this.playerPaddle.y + this.playerPaddle.height) {
            
            // Calculate angle based on where ball hits paddle
            const relativeIntersectY = (this.ball.y - (this.playerPaddle.y + this.playerPaddle.height / 2));
            const normalizedRelativeIntersectionY = relativeIntersectY / (this.playerPaddle.height / 2);
            const bounceAngle = normalizedRelativeIntersectionY * Math.PI / 4;
            
            this.ball.velocityX = Math.cos(bounceAngle) * this.ball.speed;
            this.ball.velocityY = Math.sin(bounceAngle) * this.ball.speed;
            
            // Ensure ball moves away from paddle
            this.ball.velocityX = Math.abs(this.ball.velocityX);
            this.ball.x = this.playerPaddle.x + this.playerPaddle.width + this.ball.radius;
        }
        
        // Computer paddle collision
        if (this.ball.x + this.ball.radius >= this.computerPaddle.x &&
            this.ball.x - this.ball.radius <= this.computerPaddle.x + this.computerPaddle.width &&
            this.ball.y >= this.computerPaddle.y &&
            this.ball.y <= this.computerPaddle.y + this.computerPaddle.height) {
            
            // Calculate angle based on where ball hits paddle
            const relativeIntersectY = (this.ball.y - (this.computerPaddle.y + this.computerPaddle.height / 2));
            const normalizedRelativeIntersectionY = relativeIntersectY / (this.computerPaddle.height / 2);
            const bounceAngle = normalizedRelativeIntersectionY * Math.PI / 4;
            
            this.ball.velocityX = Math.cos(bounceAngle) * this.ball.speed;
            this.ball.velocityY = Math.sin(bounceAngle) * this.ball.speed;
            
            // Ensure ball moves away from paddle
            this.ball.velocityX = -Math.abs(this.ball.velocityX);
            this.ball.x = this.computerPaddle.x - this.ball.radius;
        }
    }

    checkScoring() {
        // Player scores (ball goes off right edge)
        if (this.ball.x > this.canvas.width + this.ball.radius) {
            this.playerScore++;
            this.updateScore();
            this.resetBall();
            this.checkGameOver();
        }
        
        // Computer scores (ball goes off left edge)
        if (this.ball.x < -this.ball.radius) {
            this.computerScore++;
            this.updateScore();
            this.resetBall();
            this.checkGameOver();
        }
    }

    checkGameOver() {
        if (this.playerScore >= 10 || this.computerScore >= 10) {
            this.gameState = 'gameOver';
            this.showOverlay();
            const winner = this.playerScore >= 10 ? 'Player' : 'Computer';
            this.updateGameMessage(`${winner} Wins!`, 'Press Space to Play Again');
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
        }
    }

    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw background
        this.ctx.fillStyle = this.colors.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw center line
        this.drawCenterLine();
        
        // Draw paddles
        this.drawPaddle(this.playerPaddle);
        this.drawPaddle(this.computerPaddle);
        
        // Draw ball
        this.drawBall();
    }

    drawCenterLine() {
        this.ctx.strokeStyle = this.colors.border;
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 10]);
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    drawPaddle(paddle) {
        this.ctx.fillStyle = paddle.color;
        this.ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
        
        // Add rounded corners
        this.ctx.beginPath();
        this.ctx.roundRect(paddle.x, paddle.y, paddle.width, paddle.height, 4);
        this.ctx.fill();
    }

    drawBall() {
        this.ctx.fillStyle = this.ball.color;
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Add ball highlight
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x - 2, this.ball.y - 2, this.ball.radius / 2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    updateScore() {
        document.getElementById('playerScore').textContent = this.playerScore;
        document.getElementById('computerScore').textContent = this.computerScore;
    }

    showOverlay() {
        document.getElementById('gameOverlay').classList.remove('hidden');
    }

    hideOverlay() {
        document.getElementById('gameOverlay').classList.add('hidden');
    }

    updateGameMessage(title, subtitle) {
        const messageElement = document.getElementById('gameMessage');
        messageElement.innerHTML = `
            <h2>${title}</h2>
            <p>${subtitle}</p>
        `;
    }

    handleResize() {
        // Handle responsive canvas sizing
        const canvasContainer = this.canvas.parentElement;
        const containerWidth = canvasContainer.clientWidth;
        const aspectRatio = this.canvas.width / this.canvas.height;
        
        if (containerWidth < this.canvas.width) {
            this.canvas.style.width = '100%';
            this.canvas.style.height = 'auto';
        } else {
            this.canvas.style.width = `${this.canvas.width}px`;
            this.canvas.style.height = `${this.canvas.height}px`;
        }
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.grammarlyPingPong = new GrammarlyPingPong();
});

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GrammarlyPingPong;
}