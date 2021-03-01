export interface Course {
    Id?: string,
    Name?: string,
    AuthorName?: string,
    AuthorEmail?: string,
    Fee?: number,
    StartDate?: number,
    AllowEnroll?: boolean
    IsPublic?: boolean
    PhotoUrl?: string
    MarketingContent?: string
}

export interface CourseSection {
    Id?: string,
    CourseId?: string
    Name?: string
    Parent?: string
    PhotoUrl?: string
    Content?: string
}