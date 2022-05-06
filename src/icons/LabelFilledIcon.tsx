import React from 'react'
import { ISvgComponent } from './ISvgComponent'

export default function LabelFilledIcon(props: ISvgComponent) {
    return (

        <svg {...props} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 64 64">
            <path d="M48,32l-7.5,13.7c-0.4,0.7-0.9,1.3-1.4,1.7C38.6,47.8,38,48,37.3,48H18.7c-0.7,0-1.4-0.3-1.9-1c-0.5-0.7-0.8-1.5-0.8-2.4
	V19.4c0-1,0.3-1.8,0.8-2.4c0.5-0.7,1.2-1,1.9-1h18.7c0.6,0,1.2,0.2,1.8,0.7c0.5,0.4,1,1,1.4,1.7L48,32z M44.7,32l-6.8-12.6H18.7
	v25.1h19.2L44.7,32z M18.7,32v12.6l0,0V19.4l0,0V32z"/>
        </svg>

        // <svg {...props} xmlns="http://www.w3.org/2000/svg">
        //     <path d="M35 20 27.875 30.042Q27.375 30.792 26.625 31.229Q25.875 31.667 25 31.667H7.792Q6.625 31.667 5.812 30.854Q5 30.042 5 28.875V11.125Q5 9.958 5.812 9.146Q6.625 8.333 7.792 8.333H25Q25.875 8.333 26.625 8.771Q27.375 9.208 27.875 9.958Z" />
        // </svg>
    )
}
