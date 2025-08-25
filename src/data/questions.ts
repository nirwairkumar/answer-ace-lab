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

export const testData: TestData = {
  title: "Sample Test",
  description: "This is a sample test to demonstrate the platform",
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
      id: 3,
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
      id: 4,
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
      id: 5,
      question: "What is the largest ocean on Earth?",
      options: {
        A: "Atlantic Ocean",
        B: "Indian Ocean", 
        C: "Arctic Ocean",
        D: "Pacific Ocean"
      },
      correctAnswer: "D"
    }
  ]
};