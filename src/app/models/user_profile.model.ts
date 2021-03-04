export interface UserProfile {
    display_name?: string,
    email?: string,
    phone_number?: string,
    gender?: string,
    dob?: number,
    role?: string
}
export interface UpdatedUserProfile {
    display_name?: string,
    phone_number?: string,
    role?: string
}
export interface UserAuth {
    email?: string,
    password?: string
}