export interface Quiz {
  _id?: string,
  title?: string,
  course_id?: string,
  question?: string,
  answer?: string,
  score?: number,
  correctanswer?: string,
  type?: string,
  last_update?: number
}
