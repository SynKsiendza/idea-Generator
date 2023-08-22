function generatorAll()
{
    generatorIdea()
    generatorLang()
}
function generatorLang()
{
    if (document.getElementById('checkboxNoWebUse').checked == true)
        {
             const langsNoWeb = [
                 "C#",
                 "C++",
                 "Python",
                 "Rust",
                 "Lua",
                 "Go",
                 "C",
                 "Java",
                 "Kotlin",
                 "R",
                 "Ruby",
                 "Swift",
                 "VisualBasic"
             ]
             const random = Math.floor(Math.random() * langsNoWeb.length);
             document.getElementById("result-lang").innerHTML = langsNoWeb[random]
        }
    else if(document.getElementById('checkboxOnlyWeb').checked == true)
        {
            const langsOnlyWeb = [
                "JavaScript",
                "React",
                "Vue.js",
                "Next.js",
                "Django",
                "Nuxt.js",
                "JQuarry",
                "Bootstrap",
                "RubyOnRails",
                "Meteor",
                "Symfony",
                "Angular"
            ]
            const random = Math.floor(Math.random() * langsOnlyWeb.length);
            document.getElementById("result-lang").innerHTML = langsOnlyWeb[random]
        }
    else
        {
            const langsFull = [
                "C#",
                "C++",
                "Python",
                "Rust",
                "Lua",
                "Go",
                "C",
                "Java",
                "Kotlin",
                "R",
                "Ruby",
                "Swift",
                "VisualBasic",
                "JavaScript",
                "React",
                "Vue.js",
                "Next.js",
                "Django",
                "Nuxt.js",
                "JQuarry",
                "Bootstrap",
                "RubyOnRails",
                "Meteor",
                "Symfony",
                "Angular"
            ]
            const random = Math.floor(Math.random() * langsFull.length);
            document.getElementById("result-lang").innerHTML = langsFull[random]
        }
}
function generatorIdea()
{
    const ideas = [
        "Food ordering App",
        "Car sales viewer",
        "Advanced Rock, Paper, Scissors",
        "Advanced Tic-Tac-Toe",
        "Text Advanture Game",
        "Snake",
        "Hangman - Guess Game",
        "Password Generator",
        "FiveM Mod",
        "Encoder",
        "Countdown Calc",
        "Quiz App",
        "Converter",
        "Scientific Calc",
        "Web Browser",
        "Noting / TODO App",
        "Simple Game",
        "ChatBot",
        "Image Recognition App",
        "Interactive Map",
        "Sudoku",
        "Sudoku Solver",
        "Connect Four",
        "Tetris",
        "Discord Bot",
        "Weather Program",
        "Terminal Emulator",
        "Dice Roller",
        "Password Strength Checker",
        "Currency Converter",
        "Poker",
        "Roulette",
        "BlackJack",
        "Text to speech",
        "Library Management System",
        "Movie Recomendation System",
        "Portfolio Site",
        "Logistics Tracking App",
        "Healthcare Management System",
        "Employee Management System",
        "Online Shop App",
        "Banking System",
        "ATM Simulator",
        "Driving Simulator",
        "Digital Clock",
        "Endless Runner",
        "Flappy Bird",
        "Car Rental System",
        "Inventory System",
        "Mineswapper",
        "Chess Game",
    ]
    const random = Math.floor(Math.random() * ideas.length);
    document.getElementById("result-idea").innerHTML = ideas[random]
}