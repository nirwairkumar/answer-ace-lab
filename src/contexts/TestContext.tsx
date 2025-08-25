import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Question, TestData } from '@/data/questions';

export interface StudentAnswer {
  questionId: number;
  selectedAnswer: 'A' | 'B' | 'C' | 'D';
}

interface TestContextType {
  studentName: string;
  setStudentName: (name: string) => void;
  selectedTest: TestData | null;
  setSelectedTest: (test: TestData) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: StudentAnswer[];
  addAnswer: (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => void;
  resetTest: () => void;
  isTestCompleted: boolean;
  setIsTestCompleted: (completed: boolean) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};

interface TestProviderProps {
  children: ReactNode;
}

export const TestProvider: React.FC<TestProviderProps> = ({ children }) => {
  const [studentName, setStudentName] = useState('');
  const [selectedTest, setSelectedTest] = useState<TestData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<StudentAnswer[]>([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const addAnswer = (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => {
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { questionId, selectedAnswer: answer };
        return updated;
      }
      return [...prev, { questionId, selectedAnswer: answer }];
    });
  };

  const resetTest = () => {
    setStudentName('');
    setSelectedTest(null);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsTestCompleted(false);
  };

  return (
    <TestContext.Provider value={{
      studentName,
      setStudentName,
      selectedTest,
      setSelectedTest,
      currentQuestionIndex,
      setCurrentQuestionIndex,
      answers,
      addAnswer,
      resetTest,
      isTestCompleted,
      setIsTestCompleted
    }}>
      {children}
    </TestContext.Provider>
  );
};