import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTest } from '@/contexts/TestContext';
import { allTests } from '@/data/questions';
import { supabase } from '@/integrations/supabase/client';
import { 
  Trophy, 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  Target,
  TrendingUp,
  ArrowUpDown,
  Home
} from 'lucide-react';

interface TestResult {
  id: string;
  test_name: string;
  student_name: string;
  marks_scored: number;
  total_marks: number;
  submission_time: string;
}

const ResultsPage = () => {
  const { studentName, selectedTest, answers, resetTest, isTestCompleted } = useTest();
  const navigate = useNavigate();
  const [allResults, setAllResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'submission_time' | 'marks_scored'>('submission_time');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // If user accessed results page directly (not from completing a test)
  const showPersonalResults = studentName && selectedTest && isTestCompleted;

  useEffect(() => {
    fetchAllResults();
  }, []);

  const fetchAllResults = async () => {
    try {
      const { data, error } = await supabase
        .from('test_results')
        .select('*')
        .order(sortBy, { ascending: sortOrder === 'asc' });

      if (error) {
        console.error('Error fetching results:', error);
        return;
      }

      setAllResults(data || []);
    } catch (error) {
      console.error('Error fetching results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (column: 'submission_time' | 'marks_scored') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  useEffect(() => {
    fetchAllResults();
  }, [sortBy, sortOrder]);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getPercentage = (scored: number, total: number) => {
    return Math.round((scored / total) * 100);
  };

  // Personal test results (only if user just completed a test)
  let totalQuestions = 0;
  let correctAnswers = 0;
  let score = 0;
  
  if (showPersonalResults) {
    totalQuestions = selectedTest.questions.length;
    correctAnswers = answers.filter(answer => {
      const question = selectedTest?.questions.find(q => q.id === answer.questionId);
      return question && question.correctAnswer === answer.selectedAnswer;
    }).length;
    score = Math.round((correctAnswers / totalQuestions) * 100);
  }

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
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Test Results</h1>
            <p className="text-muted-foreground">
              {showPersonalResults ? `Here's how you performed, ${studentName}` : 'All test results from students'}
            </p>
          </div>
          <div className="w-[120px]"></div> {/* Spacer for centering */}
        </div>

        {/* Personal Score Summary (only if user just completed a test) */}
        {showPersonalResults && (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Trophy className={`h-6 w-6 ${getScoreColor()}`} />
                Your Score
              </CardTitle>
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
        )}

        {/* All Results Table */}
        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              All Test Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">Loading results...</div>
            ) : allResults.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No test results found. Be the first to take a test!
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Test Name</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort('marks_scored')}
                          className="flex items-center gap-1 h-auto p-0"
                        >
                          Marks
                          <ArrowUpDown className="h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSort('submission_time')}
                          className="flex items-center gap-1 h-auto p-0"
                        >
                          Submission Time
                          <ArrowUpDown className="h-4 w-4" />
                        </Button>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.test_name}</TableCell>
                        <TableCell>{result.student_name}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-semibold">
                              {result.marks_scored}/{result.total_marks}
                            </span>
                            <Badge 
                              variant={getPercentage(result.marks_scored, result.total_marks) >= 80 ? "default" : 
                                     getPercentage(result.marks_scored, result.total_marks) >= 60 ? "secondary" : "destructive"}
                              className="text-xs"
                            >
                              {getPercentage(result.marks_scored, result.total_marks)}%
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          {formatDateTime(result.submission_time)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detailed Results (only if user just completed a test) */}
        {showPersonalResults && (
          <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Your Detailed Results
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
        )}

        {/* Actions */}
        {showPersonalResults && (
          <div className="flex justify-center">
            <Button onClick={handleRetakeTest} size="lg" className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Take Test Again
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;