import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import React, { ReactElement, useRef } from 'react';
import FormInput from "../components/FormInput/FormInput";
import LoadingSpinner from '../components/Others/LoadingSpinner';
import axiosInstance from '../data/axiosInstance';
import checkifAllFormInputAreOkay from '../Helpers/checkIfAllFormInputAreOkay';
import { setAccessToken, setRefreshToken } from '../Helpers/TokenHandler';
import IUnifyResponse from '../Interfaces/IUnifyResponse';
import { regEmail, regPasswordForLogin } from "../Utils/regexconfig"

interface Props { }


const createSession = async (email: string, password: string): Promise<AxiosResponse<IUnifyResponse, any>> => {
    return await axiosInstance.post<IUnifyResponse>('sessions', {
        email,
        password
    });
}




export default function Login(): ReactElement<Props, any> {

    let emailRef = useRef<FormInput>(null);
    let passwordRef = useRef<FormInput>(null);

    const [errorForm, setErrorForm] = React.useState<string | null>(null);
    const { refetch, isFetching } = useQuery(['login'], () => createSession(emailRef.current!.getValue(), passwordRef.current!.getValue()),
        {
            enabled: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 3,
            cacheTime: 0,
            retryDelay: 1000,
        });


    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setErrorForm('');

        if (!checkifAllFormInputAreOkay(emailRef.current!, passwordRef.current!)) {
            setErrorForm('Invalid email or password');
            return;
        }

        await refetch({ throwOnError: true }).then((response) => {
            const fetchedData = response.data!.data;
            if (fetchedData.success) {
                setAccessToken(fetchedData.data.accessToken);
                setRefreshToken(fetchedData.data.refreshToken);
                window.location.href = '/dashboard';
                return;
            }
        }).catch((error) => {
            if (error instanceof AxiosError) {
                setErrorForm(error.response?.data.message);
                return;
            }
            setErrorForm('Something went wrong');
            return;
        });
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

                {isFetching && <LoadingSpinner />}

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
