import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import FormInput from '../components/FormInput/FormInput'
import { regEmail, regPasswordForRegistration, regUsername } from '../Utils/regexconfig'
import axiosInstance from '../data/axiosInstance'
import Container from '../components/Others/Container'


interface Props { }

interface State {
  errorMessage: string;
}

export default class Register extends Component<Props, State> {

  private usernameRef: React.RefObject<FormInput>;
  private emailRef: React.RefObject<FormInput>;
  private passwordRef: React.RefObject<FormInput>;
  private termsAndConditionsRef: React.RefObject<HTMLInputElement>

  constructor(props: Props) {
    super(props);

    this.state = {
      errorMessage: '',
    }

    this.usernameRef = React.createRef<FormInput>();
    this.emailRef = React.createRef<FormInput>();
    this.passwordRef = React.createRef<FormInput>();
    this.termsAndConditionsRef = React.createRef<HTMLInputElement>();


    this.onSubmit = this.onSubmit.bind(this)
    this.setError = this.setError.bind(this)

  }

  setError(error: string, callback?: Function): void {
    this.setState({
      errorMessage: error,
    }, () => {
      if (callback) callback();
    })
  }



  async onSubmit(e: React.ChangeEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();


    this.setError('');
    let username = this.usernameRef.current;
    let email = this.emailRef.current;
    let password = this.passwordRef.current;
    let termsAndConditions = this.termsAndConditionsRef.current;


    if (username == null || email === null || password === null || termsAndConditions === null) {
      this.setError('Internal Error, please try again later');
      //todo: log error
      return;
    }



    if (username.isValueCorrect() && email.isValueCorrect() && password.isValueCorrect()) {
      username.resetErrors();
      email.resetErrors();
      password.resetErrors();

      if (!termsAndConditions.checked) {
        this.setError('You must accept the terms and conditions');
        return;
      }

      try {

        await axiosInstance.post('users', {
          username: username.getValue(),
          email: email.getValue(),
          password: password.getValue(),
        }).then(res => { return res.data }).then(data => {
          if (data.success) {
            window.location.href = '/login'
          } else {
            this.setError(data.message);
          }


        })

      } catch (e: any) {
        this.setError(e.response.data.message);
      }



    } else {
      this.setError('Invalid Fields');
    }

  }


  render() {


    return (
      <>
        <div className="w-8/12 sm:10/12 mb-5 h-auto">
          <a href="/"><img src="/logo.svg" alt="" /></a>
        </div>

        <h1 className="w-full text-center text-2xl text-slate-600">Welcome, glad to have you around!</h1>

        <form className='w-10/12 sm:w-full' onSubmit={this.onSubmit} method="post">
          <div className="w-full my-5">

            <FormInput
              name='username'
              placeHolder='Username'
              type='text'
              regExp={regUsername}
              errorMessage='Please enter a valid username'
              ref={this.usernameRef}
            />

          </div>
          <div className="w-full my-5">
            <FormInput
              name='email'
              placeHolder='Email'
              type='email'
              regExp={regEmail}
              errorMessage='Please enter a valid email'
              ref={this.emailRef}
            />
          </div>
          <div className="w-full my-5">
            <FormInput
              name='password'
              placeHolder='Password'
              type='password'
              regExp={regPasswordForRegistration}
              errorMessage='Minimum eight characters, at least one uppercase and lowercase letter, one number and one special character'
              ref={this.passwordRef}
            />
          </div>

          <div className='mt-2 text-center'>
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

          <p className='my-1 text-center text-red-600'>
            {this.state.errorMessage}
          </p>

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
              className='p-2 outline-0 w-6/12 cursor-pointer bg-red-600 shadow-md text-slate-100 rounded-full'
            />
          </div>
        </form>
      </>
    )
  }
}
