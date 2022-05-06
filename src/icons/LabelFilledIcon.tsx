import React from 'react'
import { ISvgComponent } from './ISvgComponent'

export default function LabelFilledIcon(props: ISvgComponent) {
    return (

        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            fill={props.fill}
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <polygon className={props.subclass}
                style={{
                    "stroke": props.strokeFill,
                    "strokeLinecap": "round",
                    "strokeLinejoin": "round"
                }}
                points="3.33 4.86 9.83 4.86 12.56 8 10.18 11.03 3.33 11.17 3.33 4.86" />
        </svg>
    )
}
