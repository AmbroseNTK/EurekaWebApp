import { Quiz } from "./quiz.model";
import { QuizSelector } from "./quiz_selector.model";

export interface Exams {
    _id?: string,
    title?: string,
    sectionid?: string,
    quiz_selector?: Array<QuizSelector>,
    duration?: number
}

export interface TakenExams {
    _id?: string,
    examinee?: string,
    createddate?: number,
    quizzes?: Array<Quiz>,
    duration?: number
}
export interface SubmittedExams {
    _id?: string,
    examinee?: string,
    quizzes?: Array<Quiz>,
    score?: number,
    totalscore?: number,
    submitdate?: number
}