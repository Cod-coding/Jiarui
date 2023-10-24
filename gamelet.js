const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position = position - 20;
    }

    if (e.code === 'ArrowRight') {
        position = position + 20;
    }   
    if (position < 0) {
        position = 0;
    }
        
    if (e.code === 'ArrowUp') {
        position = position - 20;
    }
    if (e.code === 'ArrowDown') {
        position = position + 20;
    }
    refresh_up_down();
}

function refresh_left_right() {
    ball.style.left = position + 'px';
}

function refresh_up_down() {
    ball.style.top = position + 'px';
}