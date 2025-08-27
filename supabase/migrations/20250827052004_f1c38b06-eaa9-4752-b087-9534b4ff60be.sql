-- Create test_results table for storing test submissions
CREATE TABLE public.test_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  test_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  marks_scored INTEGER NOT NULL,
  total_marks INTEGER NOT NULL,
  submission_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read results (public access)
CREATE POLICY "Anyone can view test results" 
ON public.test_results 
FOR SELECT 
USING (true);

-- Create policy to allow anyone to insert results
CREATE POLICY "Anyone can insert test results" 
ON public.test_results 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance on queries
CREATE INDEX idx_test_results_submission_time ON public.test_results(submission_time DESC);
CREATE INDEX idx_test_results_test_name ON public.test_results(test_name);