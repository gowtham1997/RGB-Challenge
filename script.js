    var numSquares = 6;
    var colors = [];
    var pickedColor;
    var square = document.querySelectorAll(".square");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var colorDisplay = document.getElementById("colorDisplay");
    var resetButton = document.querySelector("#reset");
    var modeButtons = document.querySelectorAll(".mode");
    init();

    function init() {
        setupModeButtons();
        setupSquares();
        reset();
    }

    function setupModeButtons() {
        for (var i = 0; i < modeButtons.length; ++i) {
            modeButtons[i].addEventListener("click", function () {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                numSquares = this.textContent === "Easy" ? 3 : 6;
                reset();
            });
        }
    }

    function setupSquares() {
        colorDisplay.textContent = pickedColor;
        for (var i = 0; i < square.length; ++i) {
            square[i].addEventListener("click", function () {
                if (this.style.background !== pickedColor) {
                    this.style.background = "#232323";
                    messageDisplay.textContent = "Try Again";
                } else {
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play again?";
                    colorChangeAll(pickedColor);
                }
            });
        }
    }

    function reset() {
        resetButton.textContent = "New Colors";
        colors = generateRandomColor(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        messageDisplay.textContent = "";
        for (var i = 0; i < square.length; ++i) {
            if (colors[i]) {
                square[i].style.display = "block";
                square[i].style.background = colors[i];
            } else {
                square[i].style.display = "none";
            }
        }
        h1.style.background = "steelblue";
    }

    resetButton.addEventListener("click", function () {
        reset();
    });

    function colorChangeAll(color) {
        for (var i = 0; i < square.length; ++i) {
            square[i].style.background = color;
        }
        h1.style.background = color;
    }

    function pickColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function generateRandomColor(num) {
        var arr = [];
        for (var i = 0; i < num; ++i) {
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }