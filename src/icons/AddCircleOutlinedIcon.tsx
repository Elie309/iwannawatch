import React from 'react'
import { ISvgComponent } from './ISvgComponent'


export default function AddCircleOutlinedIcon(props: ISvgComponent) {
    return (
        // "fill": props.fill,
        // "stroke": props.fill,
        <svg {...props}
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16">
            <line className={props.subclass} stroke={props.strokeFill} style={{"strokeLinecap": "round",}} x1="8" y1="3.71" x2="8" y2="8" />
            <line className={props.subclass} stroke={props.strokeFill} style={{"strokeLinecap": "round",}} x1="8" y1="8" x2="8" y2="12.29" />
            <line className={props.subclass} stroke={props.strokeFill} style={{"strokeLinecap": "round",}} x1="3.71" y1="7.84" x2="8" y2="7.84" />
            <line className={props.subclass} stroke={props.strokeFill} style={{"strokeLinecap": "round",}} x1="8" y1="7.84" x2="12.29" y2="7.84" />
            <ellipse className={props.subclass} stroke={props.strokeFill} style={{"fill": "none",  "strokeMiterlimit": 10}} cx="8" cy="7.86" rx="6.54" ry="6.86" />
        </svg>
    )

}