import React, { Component } from 'react';
import FormInput from "../components/FormInput/FormInput";
import { regEmail, regPasswordForLogin } from "../Utils/regexconfig"

interface Props { }

interface State {
    error: string;
}

export default class Login extends Component<Props, State> {

    private emailRef: React.RefObject<FormInput>;
    private passwordRef: React.RefObject<FormInput>;

    constructor(props: Props) {

        super(props);

        this.emailRef = React.createRef<FormInput>();
        this.passwordRef = React.createRef<FormInput>();

        this.state = {
            error: '',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.setError = this.setError.bind(this)

    }

    setError(error: string, callback?: Function): void{
            
        this.setState({
            error,
        }, () => {
            if (callback) callback();
        })
    }


    onSubmit(e: React.ChangeEvent<HTMLFormElement>): void {
        e.preventDefault();

        this.setError('');
        let email = this.emailRef.current
        let password = this.passwordRef.current

        if (email === null || password === null) {
            this.setError('Internal Error, please try again later');
            //todo: log error
            return;
        }
        if (email?.isValueCorrect() && password?.isValueCorrect()) {
            email.resetErrors();
            password.resetErrors();
            console.log(email.getValue(), password.getValue())
            console.log("Login Success")
            //todo: login success
        }else{
            this.setError('Invalid Email or Password');
        }


    }


    render() {
        return (
            <div className="w-full min-h-full sm:flex justify-center items-center bg-slate-100 sm:bg-gray-50">
                <div className="w-full h-full
                                sm:w-8/12
                                md:w-6/12 
                                lg:w-4/12 
                                rounded-lg
                                p-8
                                pt-32 sm:pt-8
                         flex flex-col sm:justify-center items-center sm:shadow-xl sm:bg-white">


                    <div className="w-8/12 sm:10/12 mb-5 h-auto">
                        <a href="/"><img src="/logo.svg" alt="" /></a>
                    </div>

                    <h1 className="w-full text-center text-2xl text-slate-600">Welcome Back!</h1>

                    <form className='w-10/12 sm:w-full' onSubmit={this.onSubmit} method="post">


                        <div className='my-10'>

                            <FormInput
                                name='email'
                                placeHolder='Email'
                                type='email'
                                regExp={regEmail}
                                errorMessage='Please enter a valid email'
                                ref={this.emailRef}
                            />
                        </div>

                        <div className='my-10'>

                            <FormInput
                                name='password'
                                placeHolder='Password'
                                type='password'
                                regExp={regPasswordForLogin}
                                errorMessage='Please enter a valid password'
                                ref={this.passwordRef}
                            />

                        </div>

                        <p className='my-1 text-center text-red-600'>
                            {this.state.error}
                        </p>
                            
                        <div className="mb-0 text-center">
                            <a className='cursor-pointer italic text-sm text-blue-600' href="/forgot-password">Forgot Password?</a>
                        </div>

                        <div className='mt-1 mb-5 text-center'>
                            <p className='text-gray-500 text-sm'>
                                Don't have an account yet ?
                                <a className='cursor-pointer text-blue-600' href="/register">
                                    &nbsp; Register now!
                                </a>
                            </p>
                        </div>

                        <div className='w-full text-center'>
                            <input type="submit" value="Login"
                                className='p-2 outline-0 w-6/12 cursor-pointer bg-red-600 shadow-md
                                       text-slate-100 rounded-full'
                            />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}