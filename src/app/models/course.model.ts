export interface Course {
  id?: string,
  name?: string,
  author_name?: string,
  author_email?: string,
  fee?: number,
  start_date?: number,
  allow_enroll?: boolean
  is_public?: boolean
  photo_url?: string
  marketing_content?: string
}

export interface CourseSection {
  _id?: string,
  course_id?: string
  name?: string
  parent?: string
  photo_url?: string
  content?: string
}
