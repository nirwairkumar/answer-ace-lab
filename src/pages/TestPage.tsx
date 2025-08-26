import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useTest } from '@/contexts/TestContext';
import { allTests } from '@/data/questions';
import { ChevronLeft, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TestPage = () => {
  const { 
    studentName,
    selectedTest,
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    answers, 
    addAnswer,
    setIsTestCompleted,
    isTestCompleted,
    timeRemaining,
    setTimeRemaining,
    totalTestTime
  } = useTest();
  const navigate = useNavigate();

  const currentQuestion = selectedTest?.questions[currentQuestionIndex];
  const totalQuestions = selectedTest?.questions.length || 0;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id)?.selectedAnswer;

  // Initialize timer when test starts
  useEffect(() => {
    if (selectedTest && timeRemaining === 0) {
      setTimeRemaining(totalTestTime);
    }
  }, [selectedTest, totalTestTime, timeRemaining, setTimeRemaining]);

  // Timer countdown effect
  useEffect(() => {
    if (timeRemaining > 0 && !isTestCompleted) {
      const timer = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && selectedTest) {
      // Auto-submit when time runs out
      handleSubmitTest();
    }
  }, [timeRemaining, isTestCompleted, setTimeRemaining]);

  // Format time display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (option: 'A' | 'B' | 'C' | 'D') => {
    if (currentQuestion) {
      addAnswer(currentQuestion.id, option);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    if (answers.length < totalQuestions && timeRemaining > 0) {
      const unanswered = totalQuestions - answers.length;
      toast({
        title: "Incomplete Test",
        description: `You have ${unanswered} unanswered question(s). Please answer all questions before submitting.`,
        variant: "destructive"
      });
      return;
    }
    
    if (timeRemaining === 0) {
      toast({
        title: "Time's Up!",
        description: "Test has been automatically submitted.",
        variant: "default"
      });
    }
    
    setIsTestCompleted(true);
    navigate('/results');
  };

  if (!studentName || !selectedTest) {
    navigate('/');
    return null;
  }

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const canSubmit = answers.length === totalQuestions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Hello, {studentName}</h1>
            <p className="text-muted-foreground">{selectedTest.title}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Question</div>
              <div className="text-lg font-semibold text-primary">
                {currentQuestionIndex + 1} of {totalQuestions}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Time Remaining
              </div>
              <div className={`text-lg font-semibold ${timeRemaining <= 60 ? 'text-destructive' : timeRemaining <= 180 ? 'text-warning' : 'text-primary'}`}>
                {formatTime(timeRemaining)}
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-primary font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(currentQuestion.options).map(([option, text]) => (
              <button
                key={option}
                onClick={() => handleAnswerSelect(option as 'A' | 'B' | 'C' | 'D')}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-[1.02] ${
                  currentAnswer === option
                    ? 'border-primary bg-primary/10 text-primary font-medium'
                    : 'border-border bg-card hover:border-primary/50 hover:bg-secondary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                    currentAnswer === option
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-muted-foreground/30 text-muted-foreground'
                  }`}>
                    {option}
                  </div>
                  <span className="flex-1">{text}</span>
                  {currentAnswer === option && (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                </div>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {answers.length} of {totalQuestions} answered
          </div>

          {isLastQuestion ? (
            <Button
              onClick={handleSubmitTest}
              disabled={!canSubmit}
              className="flex items-center gap-2 bg-success hover:bg-success/90"
            >
              Submit Test
              <CheckCircle className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;