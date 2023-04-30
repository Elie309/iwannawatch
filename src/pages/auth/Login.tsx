import React, { ReactElement, useRef } from 'react';
import FormInput from "../../components/FormInput/FormInput";
import LoadingSpinner from '../../components/Others/LoadingSpinner';
import checkifAllFormInputAreOkay from '../../Utils/checkIfAllFormInputAreOkay';
import { regEmail, regPasswordForLogin } from "../../Utils/regexconfig";

import { signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase';
import { FirebaseError } from 'firebase/app';

interface Props { }






export default function Login(): ReactElement<Props, any> {

    let emailRef = useRef<FormInput>(null);
    let passwordRef = useRef<FormInput>(null);

    const [errorForm, setErrorForm] = React.useState<string | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const onSubmit = async (error: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        error.preventDefault();
        setErrorForm('');

        if (!checkifAllFormInputAreOkay(emailRef.current!, passwordRef.current!)) {
            setErrorForm('Invalid email or password');
            return;
        }

        setIsLoading(true);


        try {
            await signInWithEmailAndPassword(auth,
                emailRef.current!.getValue(),
                passwordRef.current!.getValue()
            );

            setIsLoading(false);
        } catch (error: any) {

            if (error instanceof FirebaseError) {

                if (error.message.match(AuthErrorCodes.USER_DISABLED)) {
                    setErrorForm('Your account has been disabled');
                } else if (error.message.match(AuthErrorCodes.CAPTCHA_CHECK_FAILED)) {
                    setErrorForm('Captcha check failed');
                } else if (error.message.match(AuthErrorCodes.INVALID_EMAIL)) {
                    setErrorForm('Invalid email or password');
                } else if (error.message.match(AuthErrorCodes.INVALID_PASSWORD)) {
                    setErrorForm('Invalid email or password');

                } else if (error.message.match(AuthErrorCodes.USER_DELETED)) {
                    setErrorForm('Invalid email or password');
                } else {
                    setErrorForm(error.message);
                    //TODO: Log error
                }
            }else{
                setErrorForm("An error occured");
                //TODO: Log error
            }

            setIsLoading(false);
        }


    }


    return (

        <>
            <div className="w-8/12 sm:10/12 mb-5 h-auto">
                <a href="/"><img src="/logo.svg" alt="" /></a>
            </div>

            <h1 className="w-full text-center text-2xl text-slate-600">Welcome Back!</h1>

            <form className='w-10/12 sm:w-full' onSubmit={onSubmit} method="post">


                <div className='my-10'>

                    <FormInput
                        name='email'
                        placeHolder='Email'
                        type='email'
                        regExp={regEmail}
                        errorMessage='Please enter a valid email'
                        ref={emailRef}
                    />
                </div>

                <div className='my-10'>

                    <FormInput
                        name='password'
                        placeHolder='Password'
                        type='password'
                        regExp={regPasswordForLogin}
                        errorMessage='Please enter a valid password'
                        ref={passwordRef}
                    />

                </div>



                <p className='my-1 text-center text-red-600'>
                    {errorForm}
                </p>

                {
                    isLoading &&
                    <div className='w-full grid place-content-center'>
                        <LoadingSpinner />

                    </div>
                }


                <div className="my-1 text-center">
                    <a className='cursor-pointer italic text-sm text-blue-600' href="/forgot-password">Forgot Password?</a>
                </div>


                {/* //TODO: Recaptcha */}

                <div className='w-full text-center'>
                    <input type="submit" value="Login"
                        className='p-2 my-2 outline-0 w-6/12 cursor-pointer bg-red-600 shadow-md
                                       text-slate-100 rounded-full'
                    />
                </div>

                <div className='my-1 text-center'>
                    <p className='text-gray-500 text-sm'>
                        Don't have an account yet?
                        <a className='cursor-pointer text-blue-600' href="/register">
                            &nbsp;Register now!
                        </a>
                    </p>
                </div>


            </form>
        </>
    )
}
