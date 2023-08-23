import axios from 'axios';
import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
const GoogleLoginButton = () => {
    // const onSuccess = async (response: any) => {
    //     try {
    //         const { tokenId } = response;
    //         const { data } = await axios.post('/api/google-login', { tokenId });
    //         console.log('User data:', data);
    //     } catch (error) {
    //         console.error('Google login error:', error);
    //     }
    // };

    const responseMessage = (response: any) => {
        console.log(response);
    };
    const errorMessage = (error: any) => {
        console.log(error);
    };

    const onFailure = (error: any) => {
        console.log('Google login failed:', error);
    };

    return (

        // <GoogleLogin


        //     onSuccess={responseMessage}


        // />
        <GoogleLogin

            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default GoogleLoginButton