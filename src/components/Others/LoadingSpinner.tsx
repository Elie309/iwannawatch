import React, { Component } from 'react'
import '../../styles/animation/LoadingSpinner.css'

interface Props {}
interface State {}

export default class LoadingSpinner extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

     
    }

    render() {

        return (
        
        <div className='loading-ripple'>
            <div></div>
            <div></div>
        </div> 

        )
    }
}
