import { RoleType } from "../../../constant/role-type";
import { SignUpType } from "../../../constant/signup-type";
import { SignupUserType } from "../../../constant/signup-types";





export interface AuthReducer {
    isAuthenticated: boolean,
    message: string,
    stage: number,
    user: User
}

export interface SignUp {
    fullName: string,
    email: string,
    password: string,
    role: RoleType,
    signUpType: SignUpType

}
export interface SignIn {
    email: string,
    password: string,
}
export interface VerifyOtp {
    email: string,
    otp: number,
}
export interface ForgetPasword {
    email: string,
}

interface User {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'; // Add other possible status values if applicable
    fullName: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN' | 'MODERATOR'; // Add other possible roles if applicable
    signUpType: 'EMAIL' | 'GOOGLE' | 'FACEBOOK' | 'APPLE'; // Add other possible signUpTypes if applicable
    avatar: string | null;
    authToken: string | null;
    deviceToken: string | null;
    mobileNumber: string | null;
    countryCode: string | null;
    socialId: string | null;
    isMobileVerified: boolean;
    isTncAccepted: boolean;
    isLoggedIn: boolean;
}


export interface VerifyOtpResponse {
    authToken: string,
    user: User

}
export interface SignInUserResponse extends VerifyOtpResponse {

}