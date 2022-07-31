import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import FormInput from '../components/FormInput/FormInput';
import checkifAllFormInputAreOkay from '../Helpers/checkIfAllFormInputAreOkay';
import { regPasswordForRegistration } from '../Utils/regexconfig'

interface Props { }

export default function ResetPassword(): React.ReactElement<Props, any> {

    let passwordRef = useRef<FormInput>(null);
    let confirmPasswordRef = useRef<FormInput>(null);

    let [errorForm, setErrorForm] = React.useState<string | null>(null);

    const { token } = useParams();

    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!checkifAllFormInputAreOkay(passwordRef.current!, confirmPasswordRef.current!)) {
            setErrorForm('Please fill form correctly.');
            return;
        }

        //TODO: send email with link to reset password
        console.log("Reset password")

    }


    return (
        <>
            <div className="w-8/12 sm:10/12 mb-5 h-auto">
                <a href="/"><img src="/logo.svg" alt="" /></a>
            </div>

            <h1 className="w-full text-center text-2xl text-slate-600">Reset Password</h1>

            <form className='w-10/12 sm:w-full' onSubmit={onSubmit} method="post">

                <div className='my-10'>

                    <FormInput
                        name='password'
                        placeHolder='Password'
                        type='password'
                        regExp={regPasswordForRegistration}
                        errorMessage='Please enter a valid password'
                        ref={passwordRef}
                    />
                </div>
                <div className='my-10'>

                    <FormInput
                        name='confirmPassword'
                        placeHolder='Confirm Password'
                        type='password'
                        regExp={regPasswordForRegistration}
                        errorMessage='Please enter a valid password'
                        ref={confirmPasswordRef}
                        customValidationMessage='Passwords do not match'
                        customValidation={() => {
                            return passwordRef.current!.getValue() === confirmPasswordRef.current!.getValue();
                        }}
                    />
                </div>


                <p className='my-1 text-center text-red-600'>
                    {errorForm}
                </p>

                {/* //TODO: Recaptcha */}

                <div className='w-full text-center'>
                    <input type="submit" value="Change password"
                        className='p-2 outline-0 w-6/12 cursor-pointer bg-red-600 shadow-md
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
