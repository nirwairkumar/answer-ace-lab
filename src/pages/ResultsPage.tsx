import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTest } from '@/contexts/TestContext';
import { allTests } from '@/data/questions';
import { 
  Trophy, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Target,
  TrendingUp
} from 'lucide-react';

const ResultsPage = () => {
  const { studentName, selectedTest, answers, resetTest, isTestCompleted } = useTest();
  const navigate = useNavigate();

  if (!studentName || !selectedTest || !isTestCompleted) {
    navigate('/');
    return null;
  }

  const totalQuestions = selectedTest.questions.length;
  const correctAnswers = answers.filter(answer => {
    const question = selectedTest?.questions.find(q => q.id === answer.questionId);
    return question && question.correctAnswer === answer.selectedAnswer;
  }).length;

  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const percentage = score;

  const getScoreColor = () => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getScoreMessage = () => {
    if (score >= 90) return 'Excellent work!';
    if (score >= 80) return 'Great job!';
    if (score >= 70) return 'Good effort!';
    if (score >= 60) return 'Keep practicing!';
    return 'Study more and try again!';
  };

  const handleRetakeTest = () => {
    resetTest();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Trophy className={`h-8 w-8 ${getScoreColor()}`} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Test Results</h1>
          <p className="text-muted-foreground">Here's how you performed, {studentName}</p>
        </div>

        {/* Score Summary */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Your Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className={`text-6xl font-bold ${getScoreColor()}`}>
                {score}%
              </div>
              <div className="text-lg text-muted-foreground">
                {correctAnswers} out of {totalQuestions} correct
              </div>
              <Badge variant="outline" className="text-lg px-4 py-1">
                {getScoreMessage()}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">Total Questions</div>
                <div className="text-xl font-semibold">{totalQuestions}</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div className="text-sm text-muted-foreground">Correct</div>
                <div className="text-xl font-semibold text-success">{correctAnswers}</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <XCircle className="h-6 w-6 text-destructive" />
                </div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
                <div className="text-xl font-semibold text-destructive">{totalQuestions - correctAnswers}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Detailed Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedTest.questions.map((question, index) => {
              const userAnswer = answers.find(a => a.questionId === question.id);
              const isCorrect = userAnswer?.selectedAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="font-medium">
                        Q{index + 1}: {question.question}
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Your answer:</span>
                          <Badge variant={isCorrect ? "default" : "destructive"}>
                            {userAnswer?.selectedAnswer} - {question.options[userAnswer?.selectedAnswer || 'A']}
                          </Badge>
                        </div>
                        {!isCorrect && (
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Correct answer:</span>
                            <Badge variant="outline" className="border-success text-success">
                              {question.correctAnswer} - {question.options[question.correctAnswer]}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center">
          <Button onClick={handleRetakeTest} size="lg" className="flex items-center gap-2">
            <RotateCcw className="h-4 w-4" />
            Take Test Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;