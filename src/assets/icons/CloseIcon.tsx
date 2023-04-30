import React from 'react'
import { ISvgComponent } from './ISvgComponent'


export default function CloseIcon(props: ISvgComponent) {
    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            fill={props.fill}
            stroke={props.strokeFill}
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60.58 59.34"
        >
            <line
            className={props.subclass}
                style={
                    {
                        "strokeLinecap": "round",
                        "strokeMiterlimit": 10,
                        "strokeWidth": 7
                    }
                }
                x1="14.06" y1="9.57" x2="50.38" y2="47.18"
            />
            <line
                className={props.subclass}
                style={
                    {
                        "strokeLinecap": "round",
                        "strokeMiterlimit": 10,
                        "strokeWidth": 7
                    }
                }
                x1="13.41" y1="46.54" x2="51.02" y2="10.22" />
        </svg>
    )
}

