export interface QuizSelector {
    _id?: string,
    sectionId?: string,
    list?: Array<string>,
    shuffle?: boolean,
    filter?: string
}