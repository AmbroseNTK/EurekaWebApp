export interface MultipleChoices {
  prompt: string;
  choices: Array<SingleChoice>;
}

export interface SingleChoice {
  id: string;
  content: string;
  mark: number;
}
