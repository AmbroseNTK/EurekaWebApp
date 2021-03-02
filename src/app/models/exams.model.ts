import { Quiz } from "./quiz.model";
import { QuizSelector } from "./quiz_selector.model";

export interface Exams {
    Id?: string,
    Title?: string,
    SectionId?: string,
    QuizSelector?: Array<QuizSelector>,
    Duration?: number
}

export interface TakenExams {
    Id?: string,
    Examinee?: string,
    CreatedDate?: number,
    Quizzes?: Array<Quiz>,
    Duration?: number
}
export interface SubmittedExams {
    Id?: string,
    Examinee?: string,
    Quizzes?: Array<Quiz>,
    Score?: number,
    TotalScore?: number,
    SubmitDate?: number
}