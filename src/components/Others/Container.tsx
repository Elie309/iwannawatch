import React, { Component } from 'react'

interface Props {
    children: React.ReactNode
}

interface State { }

export default class Container extends Component<Props, State> {
    render() {
        return (
            <div className="w-full h-full sm:flex justify-center items-center bg-slate-100 sm:bg-gray-50">
                <div className="w-full h-fit
                                sm:w-8/12
                                md:w-6/12 
                                lg:w-4/12 
                                rounded-lg
                                p-8
                                py-32 sm:py-8
                         flex flex-col sm:justify-center items-center sm:shadow-xl sm:bg-white">

                    {this.props.children}
                </div>
            </div>
        )
    }
}
