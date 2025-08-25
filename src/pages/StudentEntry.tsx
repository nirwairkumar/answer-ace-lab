import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTest } from '@/contexts/TestContext';
import { testData } from '@/data/questions';
import { GraduationCap, Users, Clock } from 'lucide-react';

const StudentEntry = () => {
  const [name, setName] = useState('');
  const { setStudentName } = useTest();
  const navigate = useNavigate();

  const handleStartTest = () => {
    if (name.trim()) {
      setStudentName(name.trim());
      navigate('/test');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleStartTest();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{testData.title}</h1>
          <p className="text-muted-foreground">{testData.description}</p>
        </div>

        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-xl">Welcome, Student!</CardTitle>
            <CardDescription>Enter your name to begin the test</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-center text-lg h-12"
                autoFocus
              />
            </div>

            <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>{testData.questions.length} questions total</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>No time limit - take your time</span>
              </div>
            </div>

            <Button 
              onClick={handleStartTest}
              disabled={!name.trim()}
              className="w-full h-12 text-lg font-medium"
              size="lg"
            >
              Start Test
            </Button>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Make sure you have a stable internet connection before starting
        </p>
      </div>
    </div>
  );
};

export default StudentEntry;