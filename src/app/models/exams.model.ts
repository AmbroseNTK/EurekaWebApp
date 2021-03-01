import { Quiz } from "./quiz.model";
import { QuizSelector } from "./quiz_selector.model";

export interface Exams {
    Id?: string,
    Title?: string,
    SectionId?: string,
    QuizSelector?: Array<QuizSelector>
}

export interface TakenExams {
    Id?: string,
    Examinee?: string,
    CreatedDate?: number,
    Quizzes?: Array<Quiz>
}