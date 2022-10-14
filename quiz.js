const questions = [
   
    {
        question:  "Which programming language shares its name with an island in Indonesia?",
        optionA: "Jakarta",
        optionB: "C",
        optionC: "Python",
        optionD: "Java",
        correctOption: "optionD"
    },

    {
        question1: "Linux was first created as an alternative to Windows XP.",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionB"
    },

    {
        question: "On Twitter, what is the character limit for a Tweet?",
        optionA: "100",
        optionB: "120",
        optionC: "160",
        optionD: "140",
        correctOption: "optionD"
    },

    {
        question: "What is the code name for the mobile operating system Android 7.0?",
        optionA: "Ice Cream Sandwich",
        optionB: "Jelly Bean",
        optionC: "Nougat",
        optionD: "Marshmallow",
        correctOption: "optionC"
    },

    {
        question: "In web design, what does CSS stand for?",
        optionA: "Computer Style Sheet",
        optionB: "Cascading Style Sheet",
        optionC: "Corrective Style Sheet",
        optionD: "Counter Strike Source",
        correctOption: "optionB"
    },

    {
        question:  "What is the most preferred image format used for logos in the Wikimedia database?",
        optionA: ".svg",
        optionB: ".jpeg",
        optionC: ".gif",
        optionD: ".png",
        correctOption: "optionA"
    },

    {
        question1: "Pointers were not used in the original C programming language; they were added later on in C++.",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionB"
    },

    {
        question1: "The logo for Snapchat is a Bell.",
        optionA: "True",
        optionB: "False",
       
        correctOption: "optionB"
    },

    {
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        optionA: "Private",
        optionB: "Public",
        optionC: "Static",
        optionD: "Final",
        correctOption: "optionD"
    },

    {
        question: "What does CPU stand for?",
        optionA: "Central Processor Unit",
        optionB: "Computer Personal Unit",
        optionC: "Central Processing Unit",
        optionD: "Central Process Unit",
        correctOption: "optionC"
    },

    {
        question: " Which is the best search tool for finding Web sites that have been handpicked and recommended by someone else ?",
        optionA: "Search engines",
        optionB: "Meta-search engines",
        optionC: "Subject directories",
        optionD: "Discussion groups",
        correctOption: "optionC"
    },

    {
        question: "CPU stands for Central Performance Unit ?",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionB"
    },


    {
        question: "Which of the following operating systems is produced by IBM?",
        optionA: "Windows",
        optionB: "OS-2",
        optionC: "DOS",
        optionD: "UNIX",
        correctOption: "optionB"
    },

    {
        question: "CPU controls only input data of computer?",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionB"
    },

    {
        question: "Which company created the most used networking software in the 1980's",
        optionA: "Sun",
        optionB: "IBM",
        optionC: "Novell",
        optionD: "Microsoft",
        correctOption: "optionA"
    },

    {
        question: "Internet Explorer is a:",
        optionA: "Graphing Package",
        optionB: "News Reader",
        optionC: "Web Browser",
        optionD: "Any person browsing the net",
        correctOption: "optionC"
    },

    {
        question: "MS Word is a hardware.",
        optionA: "True",
        optionB: "False",
       
        correctOption: "optionB"
    },

    {
        question: "The hexadecimal number system contains digits from 1 - 15.",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionB"
    },

    {
        question: "Freeware is software that is available for use at no monetary cost",
        optionA: "True",
        optionB: "False",
       
        correctOption: "optionA"
    },

    {
        question: "FAX stands for First Away Xerox ?",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionB"
    },

    {
        question: "Digital camera is input device used to take photographs:",
        optionA: "True",
        optionB: "False",
        
        correctOption: "optionA"
    },

    {
        question: "ISP stands for:",
        optionA: "Internet Survey Period",
        optionB: "Internet Service Provider",
        optionC: "Internet Security Protocol",
        optionD: "Integrated Service Provider",
        correctOption: "optionB"
    },

    {
        question: "Main circuit board in a computer is:",
        optionA: "Highlight",
        optionB: "Mother board",
        optionC: "Decoder",
        optionD: "Select",
        correctOption: "optionB"
    },

    {
        question: "Where are the contents of your computer's hard drive indexed?",
        optionA: "Msn",
        optionB: "Yahoo",
        optionC: "Non of the above",
        optionD: "Google",
        correctOption: "optionC"
    },

    {
        question: "In which decade was the Internet first implemented?",
        optionA: "1940",
        optionB: "1950",
        optionC: "1960",
        optionD: "1980",
        correctOption: "optionC"
    }

]


let shuffledQuestions = []

function handleQuestions() { 

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}