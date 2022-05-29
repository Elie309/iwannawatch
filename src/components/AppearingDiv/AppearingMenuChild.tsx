import React from 'react'

export interface IAppearingChild {
    text: string,
    className: string,
    "data-value": string,
    onClick?: (value: string) => void
}

export default class AppearingMenuChild extends React.Component<IAppearingChild> {

    constructor(props: IAppearingChild) {
        super(props)


        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: string) {
        e.preventDefault();
        if (this.props.onClick !== undefined)
            this.props.onClick(value);
    }



    render() {


        return (
                <button
                    data-value={this.props['data-value']}
                    onClick={
                        (e) => {
                            this.handleClick(e, this.props['data-value'])
                        }}
                    className={this.props.className}
                >
                    {this.props.text}
                </button>
        )
    }
}



