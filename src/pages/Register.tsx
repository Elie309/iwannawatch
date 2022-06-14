import React, { Component } from 'react'
import FormInput from '../components/FormInput/FormInput'

export default class Register extends Component {
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

          <div className="my-10">
          </div>
          <div className="my-10"></div>
          <div className="my-10"></div>

        </div>
      </div>
    )
  }
}
