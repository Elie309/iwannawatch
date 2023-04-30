import React, { useRef } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import { regEmail, regPasswordForRegistration, regUsername } from '../../Utils/regexconfig'
import checkifAllFormInputAreOkay from '../../Utils/checkIfAllFormInputAreOkay'
import LoadingSpinner from '../../components/Others/LoadingSpinner'


import { auth } from '../../../Firebase/firebase'
import { AuthErrorCodes, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'


interface Props { }


export default function Register(): React.ReactElement<Props, any> {

  const usernameRef = useRef<FormInput>(null);
  const emailRef = useRef<FormInput>(null);
  const passwordRef = useRef<FormInput>(null);
  const termsAndConditionsRef = useRef<HTMLInputElement>(null)

  const [errorForm, setErrorForm] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);


  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setErrorForm('');

    if (!checkifAllFormInputAreOkay(usernameRef.current!, emailRef.current!, passwordRef.current!)) {

      setErrorForm('Please enter valid fields');
      return;
    }

    if (!termsAndConditionsRef.current!.checked) {
      setErrorForm('You must accept the terms and conditions');
      return;
    }

    setIsLoading(true);


    try {

      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current!.getValue(), passwordRef.current!.getValue());

      const user = userCredential.user;

      if (user) {

        await updateProfile(user, {
          displayName: usernameRef.current!.getValue()
        });

        await sendEmailVerification(user);

      }

      setIsLoading(false);


    } catch (e: any) {

      if(e instanceof FirebaseError){

        if(e.message.match(AuthErrorCodes.EMAIL_EXISTS)){
          setErrorForm('Email already exists');
        }else if(e.message.match(AuthErrorCodes.INVALID_EMAIL)){
          setErrorForm('Invalid email');
        }else if(e.message.match(AuthErrorCodes.OPERATION_NOT_ALLOWED)){
          setErrorForm('Operation not allowed');
        }else if(e.message.match(AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER)){
          setErrorForm('Too many attempts, try again later');
        }else if(e.message.match(AuthErrorCodes.WEAK_PASSWORD)){
          setErrorForm('Weak password');
        }else {
          console.log(e.message)
          setErrorForm(e.message);
          //TODO: Log error
        }


      }else{

        //TODO: Log error
        setErrorForm("Something went wrong, please try again later");

      }



     

      setIsLoading(false);
    }




  }

  return (
    <>
      <div className="w-8/12 sm:10/12 mb-5 h-auto">
        <a href="/"><img src="/logo.svg" alt="" /></a>
      </div>

      <h1 className="w-full text-center text-2xl text-slate-600">Welcome, glad to have you around!</h1>

      <form className='w-10/12 sm:w-full' onSubmit={onSubmit} method="post">
        <div className="w-full my-5">

          <FormInput
            name='username'
            placeHolder='Username'
            type='text'
            regExp={regUsername}
            errorMessage='Please enter a valid username'
            ref={usernameRef}
          />

        </div>
        <div className="w-full my-5">
          <FormInput
            name='email'
            placeHolder='Email'
            type='email'
            regExp={regEmail}
            errorMessage='Please enter a valid email'
            ref={emailRef}
          />
        </div>
        <div className="w-full my-5">
          <FormInput
            name='password'
            placeHolder='Password'
            type='password'
            regExp={regPasswordForRegistration}
            errorMessage='Minimum eight characters, at least one uppercase and lowercase letter, one number and one special character'
            ref={passwordRef}
          />
        </div>

        <div className='mt-2 text-center'>
          <input
            type="checkbox"
            ref={termsAndConditionsRef}
            className='p-0 mx-2'
            name='termsAndConditions'
            id='termsAndConditions'
          />
          <label className='text-gray-500 text-sm'>
            I agree on the
            <a className='cursor-pointer text-blue-600' href="/terms&conditions">
              &nbsp;Terms and Conditions
            </a>
          </label>
        </div>

        <p className='my-2 text-center text-red-600'>
          {errorForm}
        </p>

        {
          isLoading &&
          <div className='w-full grid place-content-center'>
            <LoadingSpinner />

          </div>
        }



        {/* //TODO: Recaptcha */}

        <div className='w-full my-2 text-center'>
          <input type="submit" value="Register"
            className='p-2 outline-0 w-6/12 cursor-pointer bg-red-600 shadow-md text-slate-100 rounded-full'
          />
        </div>

        <div className='my-1 text-center'>
          <p className='text-gray-500 text-sm'>
            Already registered?
            <a className='cursor-pointer text-blue-600' href="/login">
              &nbsp; Login!
            </a>
          </p>
        </div>
      </form>
    </>
  )
}
