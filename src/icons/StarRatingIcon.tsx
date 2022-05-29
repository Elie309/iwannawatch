import React from 'react'
import { ISvgComponent } from './ISvgComponent'

export default function StarRatingIcon(props: ISvgComponent) {
    return (
        <svg
            className={props.className}
            fill={props.fill}
            width={props.width}
            height={props.height}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            >
            <polygon className={props.subclass}
            points="8 0 6.08 6.4 0 6.4 4.92 9.92 3.06 16 8 
            12.24 12.94 16 11.08 9.92 16 6.4 9.92 6.4 8 0" 
            />
        </svg>
    )
}
