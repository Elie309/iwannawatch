import React from 'react'
import { ISvgComponent } from './ISvgComponent'

export default function ShowPassword(props: ISvgComponent) {
    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            fill={props.fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            >
            <path className={props.subclass} d="M16,8.21c0,3.29-3.56,6-7.95,6S0,11.5.05,8.21s3.62-6,8-6S16,4.92,16,8.21Z" />
            <ellipse style={{ "fill": "#fff" }} cx="7.74" cy="8" rx="4.24" ry="4.71" />
            <circle className={props.subclass} cx="7.74" cy="8" r="2.5" />
        </svg>
    )
}
