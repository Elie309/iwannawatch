import React, { Component } from 'react'
import FormInput from '../components/FormInput/FormInput'
import { regEmail, regPasswordForRegistration, regUsername } from '../Utils/regexconfig'


interface Props { }

interface State { }

export default class Register extends Component<Props, State> {

  private usernameRef: React.RefObject<FormInput>;
  private emailRef: React.RefObject<FormInput>;
  private passwordRef: React.RefObject<FormInput>;
  private termsAndConditionsRef: React.RefObject<HTMLInputElement>

  constructor(props: Props) {
    super(props);

    this.usernameRef = React.createRef<FormInput>();
    this.emailRef = React.createRef<FormInput>();
    this.passwordRef = React.createRef<FormInput>();
    this.termsAndConditionsRef = React.createRef<HTMLInputElement>();


    this.onSubmit = this.onSubmit.bind(this)
  
  
  }

  onSubmit(e: React.ChangeEvent<HTMLFormElement>): void {

    e.preventDefault();

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
                                py-32 sm:py-8
                         flex flex-col sm:justify-center items-center sm:shadow-xl sm:bg-white">

          <div className="w-8/12 sm:10/12 mb-5 h-auto">
            <a href="/"><img src="/logo.svg" alt="" /></a>
          </div>

          <h1 className="w-full text-center text-2xl text-slate-600">Welcome, Glad to have you around!</h1>

          <form className='w-10/12 sm:w-full' onSubmit={this.onSubmit} method="post">
            <div className="w-full my-10">
              <FormInput
                name='username'
                placeHolder='Username'
                type='text'
                regExp={regUsername}
                errorMessage='Please enter a valid username'
                ref={this.usernameRef}
              />
            </div>
            <div className="w-full my-10">
              <FormInput
                name='email'
                placeHolder='Email'
                type='email'
                regExp={regEmail}
                errorMessage='Please enter a valid email'
                ref={this.emailRef}
              />
            </div>
            <div className="w-full my-10">
              <FormInput
                name='password'
                placeHolder='Password'
                type='password'
                regExp={regPasswordForRegistration}
                errorMessage='Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, one special character:'
                ref={this.passwordRef}
              />
            </div>

            <div className='mt-3 text-center'>
              <input 
              type="checkbox"
              ref={this.termsAndConditionsRef}
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

            <div className='my-3 text-center'>
              <p className='text-gray-500 text-sm'>
                Already registered?
                <a className='cursor-pointer text-blue-600' href="/login">
                  &nbsp; Login!
                </a>
              </p>
            </div>

            <div className='w-full mt-5 text-center'>
              <input type="submit" value="Register"
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
