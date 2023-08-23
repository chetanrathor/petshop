import { RoleType } from "../../../constant/role-type";
import { SignUpType } from "../../../constant/signup-type";
import { SignupUserType } from "../../../constant/signup-types";





export interface AuthReducer {
    isAuthenticated: boolean,
    message: string,
    stage: number,
    user: {
        id: '',
        email: '',
        fullName: ''
    }
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

export interface VerifyOtpResponse {
    authToken: string
}
export interface SignInUserResponse extends VerifyOtpResponse {

}