import React, { Component } from 'react';
import FormInput from "../components/FormInput/FromInput";
import { regEmail } from "../Utils/regexconfig"

interface Props { }

interface State {
    email: string;
    password: string;
}

export default class Login extends Component<Props, State> {

    private emailRef: React.RefObject<FormInput>;
    private passwordRef: React.RefObject<FormInput>;

    constructor(props: Props) {

        super(props);

        this.emailRef = React.createRef<FormInput>()
        this.passwordRef = React.createRef<FormInput>()

        this.onSubmit = this.onSubmit.bind(this)

    }

    onSubmit(e: React.ChangeEvent<HTMLFormElement>): void {

        e.preventDefault()


        if (this.emailRef || this.passwordRef) {

            console.log(this.emailRef.current?.getValue())
            console.log(this.passwordRef.current?.getValue())

            return;
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
                            />
                        </div>

                        <div className='my-10'>

                            <FormInput
                                name='password'
                                placeHolder='Password'
                                type='password'
                            />

                        </div>

                        <div className='my-5 text-center'>
                            <p className='text-gray-500'>
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
