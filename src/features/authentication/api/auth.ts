import { post } from "../../../service/api.service"
import { ForgetPasword, SignIn, SignUp, VerifyOtp } from "../types/auth.types"

export const signUp = (params: SignUp) => post('auth/signup/send-otp', params)
export const signIn = (params: SignIn) => post('auth/signin', params)
export const verifyOtpApi = (params: VerifyOtp) => post('auth/verifyotp', params)
export const forgetPassword = (params: ForgetPasword) => post('auth/forgetpassword', params)
export const logout = () => post('auth/logout', {})