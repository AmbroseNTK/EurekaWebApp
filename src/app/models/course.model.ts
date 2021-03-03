export interface Course {
  Id: string,
  Name?: string,
  AuthorName?: string,
  AuthorEmail?: string,
  Fee?: number,
  Start_Date?: number,
  Allow_Enroll?: boolean
  Is_Public?: boolean
  Photo_Url?: string
  Marketing_Content?: string
}

export interface CourseSection {
  Id?: string,
  CourseId?: string
  Name?: string
  Parent?: string
  PhotoUrl?: string
  Content?: string
}
