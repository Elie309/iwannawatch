import React, { ReactElement } from 'react'

import { auth } from "../../../Firebase/firebase";
import { sendEmailVerification } from "firebase/auth";


export default function EmailVerification(): ReactElement {

    let [errorForm, setErrorForm] = React.useState<string | null>(null);

    const user = auth.currentUser;

    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (user != null && !user.emailVerified) {
            try {

                await sendEmailVerification(user);
                setErrorForm('Email sent!');
            } catch (e) {
                setErrorForm('An error occured');
            }
        } else {
            setErrorForm('Email already verified');
        }


    }


    return (
        <>
            <div className="w-8/12 sm:10/12 mb-5 h-auto">
                <a href="/"><img src="/logo.svg" alt="" /></a>
            </div>

            <h1 className="w-full text-center text-2xl text-slate-600">Email Verification</h1>

            <form className='w-10/12 sm:w-full ' onSubmit={onSubmit} method="post">

                <div className='my-3'>
                    <h3 className=" text-xl text-slate-800 mb-2" >Hey {user?.displayName}!</h3>
                    <p className='text-sm text-slate-600 text-justify' >
                        We have sent you an email with a link to <b><i>{user?.email}</i></b>.
                        Please click the link available in your inbox, and make sure to check your <b>spam or promotion</b> if you didn't receive an email.
                    </p>
                    <p>
                        .
                    </p>
                </div>

                <p className='my-3 text-center text-red-600'>
                    {errorForm}
                </p>

                {/* //TODO: Recaptcha */}

                <div className='w-full my-2 text-center'>
                    <input type="submit" value="Send Email Again"
                        className='p-2 outline-0 w-6/12 cursor-pointer bg-red-600 shadow-md
                                       text-slate-100 rounded-full'
                    />
                </div>

                {/* //TODO: Change email in cases wrong */}
                <div className='my-1 text-center'>
                    <a className='cursor-pointer text-sm italic text-blue-600' href="/">
                        Cancel
                    </a>
                </div>

            </form>

        </>
    )
}
