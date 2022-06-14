import React, { Component } from 'react'

interface Props {

    name: string;
    type: "email" | "password" | "text"
    className?: string;
    groupClassName?: string;
    textClassName?: string;
    placeHolder: string;
    regExp?: RegExp | null;
    errorMessage?: string;
    ref?: React.RefObject<FormInput>;
}

interface State {
    value: string;
    isFocused: boolean;
    error: string[];
    warning: string[];
}



export default class FormInput extends Component<Props, State> {


    constructor(props: Props) {
        super(props)

        this.state = {
            value: '',
            isFocused: false,
            error: [],
            warning: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.setValue = this.setValue.bind(this);
        this.getValue = this.getValue.bind(this);
        this.handleKeys = this.handleKeys.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.isValueCorrect = this.isValueCorrect.bind(this);

    }

    resetErrors(){
        this.setState({
            error: [],
            warning: [],
        })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setValue(e.target.value);
    }

    handleKeys = (e: React.KeyboardEvent<HTMLInputElement>): void => {


        let capsLockMessage = "Caps Lock is on"

        if (e.getModifierState("CapsLock")) {
            this.setState({
                warning: this.addMessageToState(this.state.warning, capsLockMessage)
            })
        } else {
            this.setState({
                warning: this.removeMessageFromState(this.state.warning, capsLockMessage)
            })
        }
    }

    addMessageToState(arr: string[], message: string): string[] {

        if (!arr.includes(message)) {
            arr.push(message);
        }
        return arr;
    }

    removeMessageFromState(arr: string[], message: string): string[] {

        if (arr.includes(message)) {
            arr.splice(arr.indexOf(message), 1);
        }
        return arr;
    }

    handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
        this.setState({
            isFocused: true
        })
    }

    handleBlur = (): void => {

        //Here even if the value is false, there is still the fact that the value is not empty, so
        //label will not translate back to the placeHolder
        this.setState({
            isFocused: false,
            warning: [],
        })

        const RegexInvalidMessage = this.props.errorMessage || "Invalid input";

        if (this.isValueCorrect()) {
            this.setState({
                error: this.removeMessageFromState(this.state.error, RegexInvalidMessage)
            })
        } else {
            this.setState({
                error: this.addMessageToState(this.state.error, RegexInvalidMessage)
            })
        }

    }

    setValue(value: string): void {

        this.setState({
            value
        })
    }

    getValue(): string {
        return this.state.value;
    }

    isValueCorrect(): boolean {

        if (this.props.regExp) {
            return this.props.regExp.test(this.state.value);
        }

        return true;

    }

    render() {

        let { name, type, className, groupClassName, textClassName, placeHolder } = this.props;


        if (className === undefined) className = "";
        if (groupClassName === undefined) groupClassName = "";
        if (textClassName === undefined) textClassName = "";

        let isThereAnError = this.state.error.length > 0;
        let isThereAWarning = this.state.warning.length > 0;

        // This is important because it handles the case where there is an input or the input is focused
        let labelClassName = this.state.isFocused || this.state.value !== "" ? "text-sm -translate-y-7" : "text-base";


        return (
            <div
                className={`relative flex items-center flex-col ${groupClassName}`}
            >
                <input
                    name={name}
                    className={`w-full h-10 p-3 text-gray-700 border border-gray-200 outline-0 ${this.state.error.length > 0 ? " ring-1 ring-red-200 " : " focus:border-blue-200 "} rounded-lg ${className}`}
                    type={type}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleKeys}
                />

                {/* Label */}
                <label
                    className={`absolute left-0 ml-2 mt-2 select-none text-gray-400 font-bold transition-transform duration-200 ${labelClassName} ${textClassName}`}
                    htmlFor={name}
                >
                    {placeHolder}
                </label>

                {/* ERROR Handler */}
                <p className='text-xs self-start p-0 m-0 mt-1 h-2'>
                    {
                        isThereAnError &&
                        <span className='p-0  text-red-500'>
                            {this.state.error.join(", ")}
                        </span>
                    }

                    {
                        (isThereAnError && isThereAWarning)
                        &&
                        <span className='p-0 m-0 text-gray-500'> - </span>
                    }

                    {
                        isThereAWarning &&
                        <span className='p-0 text-yellow-600'>
                            {this.state.warning.join(", ")}
                        </span>
                    }
                </p>
            </div>
        )
    }
}
