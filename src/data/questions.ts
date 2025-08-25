export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export interface TestData {
  title: string;
  description: string;
  questions: Question[];
}

// ========================================
// ADD YOUR QUESTIONS HERE
// ========================================
// To add questions, modify the testData object below
// Each question should have:
// - id: unique number
// - question: the question text
// - options: object with A, B, C, D properties
// - correctAnswer: one of 'A', 'B', 'C', 'D'

export const allTests: TestData[] = [
  {
    title: "Hindi Language and Literature Test",
    description: "Objective questions on Hindi poetry, grammar, samas, alankar, and language comprehension for Bihar Deled Exam preparation",
    questions: [
      {
        id: 1,
        question: "निम्नलिखित पंक्तियों में कौन सा रस है? 'शोभित कर नवनीत लिए घुटूनी चलत रेनू तन मंडित मुख दधि लेप किए।'",
        options: {
          A: "वीर रस",
          B: "श्रृंगार रस",
          C: "वात्सल्य रस",
          D: "करुण रस"
        },
        correctAnswer: "C"
      }]
  },
  {
    title: "Mathematics Test",
    description: "Basic mathematics and arithmetic problems",
    questions: [
      {
        id: 1,
        question: "What is 15 + 27?",
        options: {
          A: "41",
          B: "42",
          C: "43",
          D: "44"
        },
        correctAnswer: "B"
      },
      {
        id: 2,
        question: "What is 12 × 8?",
        options: {
          A: "96",
          B: "84",
          C: "102",
          D: "88"
        },
        correctAnswer: "A"
      },
      {
        id: 3,
        question: "What is the square root of 64?",
        options: {
          A: "6",
          B: "7",
          C: "8",
          D: "9"
        },
        correctAnswer: "C"
      },
      {
        id: 4,
        question: "What is 45 ÷ 9?",
        options: {
          A: "4",
          B: "5",
          C: "6",
          D: "7"
        },
        correctAnswer: "B"
      },
      {
        id: 5,
        question: "What is 2³ (2 to the power of 3)?",
        options: {
          A: "6",
          B: "8",
          C: "9",
          D: "12"
        },
        correctAnswer: "B"
      }
    ]
  },
  {
    title: "Science Test",
    description: "General science and physics concepts",
    questions: [
      {
        id: 1,
        question: "Which planet is known as the Red Planet?",
        options: {
          A: "Venus",
          B: "Mars",
          C: "Jupiter",
          D: "Saturn"
        },
        correctAnswer: "B"
      },
      {
        id: 2,
        question: "What is the chemical symbol for water?",
        options: {
          A: "H2O",
          B: "CO2",
          C: "NaCl",
          D: "O2"
        },
        correctAnswer: "A"
      },
      {
        id: 3,
        question: "How many bones are in the adult human body?",
        options: {
          A: "198",
          B: "206",
          C: "214",
          D: "220"
        },
        correctAnswer: "B"
      },
      {
        id: 4,
        question: "What gas do plants absorb from the atmosphere?",
        options: {
          A: "Oxygen",
          B: "Nitrogen",
          C: "Carbon Dioxide",
          D: "Hydrogen"
        },
        correctAnswer: "C"
      },
      {
        id: 5,
        question: "What is the speed of light?",
        options: {
          A: "300,000 km/s",
          B: "150,000 km/s",
          C: "450,000 km/s",
          D: "600,000 km/s"
        },
        correctAnswer: "A"
      }
    ]
  },
  {
    title: "Geography Test",
    description: "World geography and capitals",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: {
          A: "London",
          B: "Berlin",
          C: "Paris",
          D: "Madrid"
        },
        correctAnswer: "C"
      },
      {
        id: 2,
        question: "What is the largest ocean on Earth?",
        options: {
          A: "Atlantic Ocean",
          B: "Indian Ocean",
          C: "Arctic Ocean",
          D: "Pacific Ocean"
        },
        correctAnswer: "D"
      },
      {
        id: 3,
        question: "Which country has the most natural lakes?",
        options: {
          A: "Canada",
          B: "Russia",
          C: "USA",
          D: "Finland"
        },
        correctAnswer: "A"
      },
      {
        id: 4,
        question: "What is the smallest country in the world?",
        options: {
          A: "Monaco",
          B: "Vatican City",
          C: "San Marino",
          D: "Liechtenstein"
        },
        correctAnswer: "B"
      },
      {
        id: 5,
        question: "Which mountain range contains Mount Everest?",
        options: {
          A: "Andes",
          B: "Rocky Mountains",
          C: "Himalayas",
          D: "Alps"
        },
        correctAnswer: "C"
      }
    ]
  },
  {
    title: "Literature Test",
    description: "Famous books and authors",
    questions: [
      {
        id: 1,
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: {
          A: "Harper Lee",
          B: "Mark Twain",
          C: "Ernest Hemingway",
          D: "F. Scott Fitzgerald"
        },
        correctAnswer: "A"
      },
      {
        id: 2,
        question: "Who wrote 'Pride and Prejudice'?",
        options: {
          A: "Charlotte Brontë",
          B: "Jane Austen",
          C: "Emily Dickinson",
          D: "Virginia Woolf"
        },
        correctAnswer: "B"
      },
      {
        id: 3,
        question: "Who wrote '1984'?",
        options: {
          A: "Aldous Huxley",
          B: "Ray Bradbury",
          C: "George Orwell",
          D: "Kurt Vonnegut"
        },
        correctAnswer: "C"
      },
      {
        id: 4,
        question: "Who wrote 'The Great Gatsby'?",
        options: {
          A: "Ernest Hemingway",
          B: "F. Scott Fitzgerald",
          C: "John Steinbeck",
          D: "William Faulkner"
        },
        correctAnswer: "B"
      },
      {
        id: 5,
        question: "Who wrote 'Romeo and Juliet'?",
        options: {
          A: "Christopher Marlowe",
          B: "Ben Jonson",
          C: "William Shakespeare",
          D: "John Webster"
        },
        correctAnswer: "C"
      }
    ]
  }
];