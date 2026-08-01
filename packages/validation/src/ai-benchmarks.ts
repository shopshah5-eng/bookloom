export interface AIEvaluationBenchmark {
  taskId: string;
  taskName: string;
  expectedOutputSubstring: string;
  actualOutput: string;
  hallucinationDetected: boolean;
  score: number;
}

export function evaluateAIBenchmark(actual: string, expectedKeyword: string): AIEvaluationBenchmark {
  const containsExpected = actual.toLowerCase().includes(expectedKeyword.toLowerCase());
  const score = containsExpected ? 100 : 40;

  return {
    taskId: `bench_${Date.now()}`,
    taskName: 'Writing Assistant Accuracy Evaluation',
    expectedOutputSubstring: expectedKeyword,
    actualOutput: actual,
    hallucinationDetected: !containsExpected,
    score,
  };
}
