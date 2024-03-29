import React, { useRef } from 'react'
import FormInput from '../../components/FormInput/FormInput';
import checkifAllFormInputAreOkay from '../../Utils/checkIfAllFormInputAreOkay';
import { regEmail } from '../../Utils/regexconfig'

import { auth } from "../../../Firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import LoadingSpinner from '../../components/Others/LoadingSpinner';

interface Props { }

export default function ForgotPassword(): React.ReactElement<Props, any> {

    let emailRef = useRef<FormInput>(null);

    let [errorForm, setErrorForm] = React.useState<string | null>(null);
    let [isLoading, setIsLoading] = React.useState<boolean>(false);



    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!checkifAllFormInputAreOkay(emailRef.current!)) {
            setErrorForm('Invalid email');
            return;
        }

        setIsLoading(true);

        try {

            await sendPasswordResetEmail(auth, emailRef.current!.getValue());

            setErrorForm('Password reset email sent');
            setIsLoading(false);


        } catch (error: any) {

            setErrorForm(error.message);
            setIsLoading(false);


        }

    }


    return (
        <>
            <div className="w-8/12 sm:10/12 mb-5 h-auto">
                <a href="/"><img src="/logo.svg" alt="" /></a>
            </div>

            <h1 className="w-full text-center text-2xl text-slate-600">Request Password Change</h1>

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

                <p className='my-1 text-center text-red-600'>
                    {errorForm}
                </p>

                {/* //TODO: Recaptcha */}

                {
                    isLoading &&
                    <div className='w-full grid place-content-center'>
                        <LoadingSpinner />

                    </div>
                }

                <div className='w-full text-center'>
                    <input type="submit" value="Request change"
                        className='p-2 my-2 w-10/12  outline-0 md:w-6/12 cursor-pointer bg-red-600 shadow-md
                                       text-slate-100 rounded-full'
                    />
                </div>

                

                <div className='my-1 text-center'>
                    <a className='cursor-pointer text-sm italic text-blue-600' href="/">
                        Cancel Change
                    </a>
                </div>

            </form>
        </>
    )
}
