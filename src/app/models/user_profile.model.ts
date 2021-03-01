export interface UserProfile {
    DisplayName?: string,
    Email?: string,
    PhoneNumber?: string,
    Gender?: string,
    DOB?: number,
    Role?: string
}
export interface UpdatedUserProfile {
    DisplayName?: string,
    PhoneNumber?: string,
    Role?: string
}
export interface UserAuth {
    Email?: string,
    Password?: string
}