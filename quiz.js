const data = [
  {
    question: "Who is the current ballon d'or winner?",
    a: "Erling Haaland",
    b: "Virgil Van dijk",
    c: "Lionel messi",
    d: "Vinicius jr",
    correct: "c",
  },
  {
    question: "Which Nigerian artist won the Grammy Award in 2021?",
    a: "Burna Boy",
    b: "Wizkid",
    c: "Davido",
    d: "Tiwa Savage",
    correct: "a",
  },
  {
    question: "What is the name of Wizkid's debut album?",
    a: "Superstar",
    b: "Ayo",
    c: "Sounds from the Other Side",
    d: "Made in Lagos",
    correct: "a",
  },
  {
    question: "Css is an type of ____ Language ?",
    a: "Back-end",
    b: "ML",
    c: "Front-end",
    d: "Gaming",
    correct: "c",
  },
  {
    question:
      "Who is the host of the Nigerian TV show 'Who Wants to Be a Millionaire'?",
    a: "Frank Edoho",
    b: "Ebuka Obi-Uchendu",
    c: "Ik Osakioduwa",
    d: "Denrele Edun",
    correct: "a",
  },
  {
    question: "Who is the current Governor of Lagos State?",
    a: "Babajide Sanwo-Olu",
    b: "Akinwunmi Ambode",
    c: "Bola Tinubu",
    d: "Rauf Aregbesola",
    correct: "a",
  },
  {
    question:
      "Which state in Nigeria has the highest number of local governments?",
    a: "Kano",
    b: "Lagos",
    c: "Kaduna",
    d: "Rivers",
    correct: "a",
  },
  {
    question: "What is the capital city of Nigeria?",
    a: "Abuja",
    b: "Lagos",
    c: "Kano",
    d: "Port Harcourt",
    correct: "a",
  },
  {
    question: "How many LGA's does Nigeria have?",
    a: "250",
    b: "774",
    c: "744",
    d: "747",
    correct: "b",
  },
  {
    question: "HTML is a ___  Language?",
    a: "Mark-up",
    b: "Cascading",
    c: "personal home page",
    d: "Framework",
    correct: "a",
  },
  {
    question: "Which university is regarded as the university of first choice?",
    a: "UNILAG",
    b: "LASU",
    c: "OAU",
    d: "UI",
    correct: "a",
  },
  {
    question: "What is the name of the Nigerian (men) national football team?",
    a: "Super Falcons",
    b: "Super Eagles",
    c: "Golden Eagle",
    d: "Nigerian Lions",
    correct: "b",
  },
  {
    question: "What is the name of the Nigerian currency?",
    a: "Naira",
    b: "Kobo",
    c: "Dollar",
    d: "Pound",
    correct: "a",
  },
  {
    question: "Which Nigerian musician is known for his hit song 'Fall'?",
    a: "Davido",
    b: "Wizkid",
    c: "Tiwa Savage",
    d: "Burna Boy",
    correct: "a",
  },
  {
    question: "Which Nigerian state is known as the 'Centre of Excellence'?",
    a: "Lagos",
    b: "Kano",
    c: "Kaduna",
    d: "Rivers",
    correct: "a",
  },
  {
    question: "What is the name of the Nigerian national airline?",
    a: "Nigeria Airways",
    b: "Nigerian Eagle",
    c: "Air Nigeria",
    d: "Green Africa Airways",
    correct: "d",
  },
  {
    question: "Which musician is known for his her song 'Soldier'?",
    a: "Fave",
    b: "Simi",
    c: "Qing Madi",
    d: "Tems",
    correct: "b",
  },
  {
    question:
      "What is the name of the Nigerian federal university located in Oye-Ekiti?",
    a: "Federal University Oye-Ekiti",
    b: "University of Ado-Ekiti",
    c: "Ekiti State University",
    d: "Federal Polytechnic Ado-Ekiti",
    correct: "a",
  },
  {
    question:
      "Which one of these programming languages is best used to connect to a database?",
    a: "C#",
    b: "HTML",
    c: "SQL",
    d: "Laravel",
    correct: "c",
  },
  {
    question: "What is Emmanuel Irekponor's yoruba name. lol?",
    a: "Oluwafisayomi",
    b: "Ayomide",
    c: "Olajide",
    d: "Babatunde",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let failedQuestions = [];

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = data[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  optionA.innerText = currentQuizData.a;
  optionB.innerText = currentQuizData.b;
  optionC.innerText = currentQuizData.c;
  optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelect() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelect();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `     
      <h2>You Answered ${score}/${data.length} Questions Correctly</h2>

    <button onclick="location.reload()">Restart</button>
    `;
    }
  }
});
