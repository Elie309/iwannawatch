import React from 'react'
import { ISvgComponent } from './ISvgComponent'


export default function HamburgerIcon(props: ISvgComponent) {
  return (
    <svg
    className={props.className}
    height={props.height}
    width={props.width}
    viewBox="0 0 512 512"
    
    style={
        {
            fill: props.fill,
            stroke: props.strokeFill,
            strokeLinecap: "round",
            strokeMiterlimit: 10,
            strokeWidth: 50,
        }
    }
    >
    <line className={props.subclass} x1="73.62" y1="254.26" x2="438.38" y2="254.26"/>
    <line className={props.subclass} x1="73.59" y1="96.48" x2="438.34" y2="96.48"/>
    <line className={props.subclass} x1="73.59" y1="412.05" x2="438.34" y2="412.05"/>
</svg>
  )
}
