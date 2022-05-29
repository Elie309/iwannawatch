import React, { Component, ReactElement } from 'react'
import { IAppearingChild } from './AppearingMenuChild';
import { CSSTransition } from 'react-transition-group';
import "../../styles/animation/AAppearingDiv.css"
import { AnimationState } from '../../Interfaces/Others/AnimationState';



interface Props {

    text: string | JSX.Element,
    children: ReactElement<IAppearingChild>[],
    className: string,
    buttonClassName: string,
    dropDownClassName: string,
    onDropDownClick: (value: string) => void,

}


interface State {
    isOpen: boolean;
    animationState: AnimationState;
}

export default class AppearingMenu extends Component<Props, State> {

    //#region Fields
    private dropdownDivRef: React.RefObject<HTMLDivElement>;
    private buttonElementRef: React.RefObject<HTMLButtonElement>;
    //#endregion

    //#region Constructor
    constructor(props: Props) {
        super(props);

        //State of the Appearing div
        this.state = {
            isOpen: false,
            animationState: AnimationState.onEnter,
        }

        //Refs
        this.dropdownDivRef = React.createRef();
        this.buttonElementRef = React.createRef();

        //Methods Binds
        this.handleAppearingDiv = this.handleAppearingDiv.bind(this);
        this.closeAppearingDiv = this.closeAppearingDiv.bind(this);
        this.openAppearingDiv = this.openAppearingDiv.bind(this);
        this.toggleAppearingDiv = this.toggleAppearingDiv.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
        this.setAppearingDivState = this.setAppearingDivState.bind(this);
    }
    //#endregion

    //#region React Methods
    componentDidMount() {
        document.addEventListener("mousedown", this.handleAppearingDiv);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleAppearingDiv);
    }
    //#endregion

    //#region Helper Methods

    closeAppearingDiv() {
        this.setState({
            isOpen: false
        })
    }

    openAppearingDiv() {
        this.setState({
            isOpen: true
        })
    }

    toggleAppearingDiv() {
        if(this.state.animationState === AnimationState.onEntering ||this.state.animationState === AnimationState.onExiting ) return;
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    setAppearingDivState(animationState: AnimationState, callback?: () => void){
        this.setState({
            animationState
        }, callback);
    }

    //#endregion

    //#region Methods


    checkElementReference(ref: React.RefObject<any>, eventTarget: EventTarget | null): boolean {

        if (ref !== null && ref.current !== null) {

            if (ref && !ref.current.contains(eventTarget as Node)) {

                return true;
            }

            return false;

        }

        return false;

    }

    handleChildClick(value: string) {

        //TODO: Handle the value given
        this.props.onDropDownClick(value);

        this.closeAppearingDiv();

    }



    handleAppearingDiv(event: MouseEvent) {

        //Is my mouse in the button ? If not, close the div 
        if (this.checkElementReference(this.buttonElementRef, event.target)) {

            //here it means we click outside the button
            //Now we need to check if it is inside our dropdown or not...

            //If this condition its true it means that my mouse is outside the div...
            if (this.checkElementReference(this.dropdownDivRef, event.target)) {
                this.closeAppearingDiv();
                return;
            }

            //Here it means that we are inside the div...
            //And we can ge the information

            //&3 This will be handled by the child component, as onClick Event

            return;

        }

        this.toggleAppearingDiv();

        return;

    }

    //#endregion


    render() {

        const { isOpen } = this.state;



        // Handling childrens
        const { children } = this.props;



        return (
            <div className={this.props.className}>

                <button
                    ref={this.buttonElementRef}
                    // We only need to prevent the default behavior of the button
                    //the toggle will happen with the reference
                    onClick={(e) => e.preventDefault()}
                    className={this.props.buttonClassName}
                >
                    {this.props.text}
                </button>


                
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames='appearing-div'
                    mountOnEnter={true}
                    onEnter={() => {this.setAppearingDivState(AnimationState.onEnter) }}
                    onEntering={() => { this.setAppearingDivState(AnimationState.onEntering) }}
                    onEntered={() => { this.setAppearingDivState(AnimationState.onEntered) }}
                    onExit={() => { this.setAppearingDivState(AnimationState.onExit) }}
                    onExiting={() => { this.setAppearingDivState(AnimationState.onExiting) }}
                    onExited={() => { this.setAppearingDivState(AnimationState.onExited) }}
                >

                <div ref={this.dropdownDivRef} id='dropdown'
                    className=
                    {`${this.props.dropDownClassName}`}>

                    {React.Children.map(children, (child: ReactElement<IAppearingChild>) => {
                        const clonedChild = React.cloneElement(child, {
                            onClick: this.handleChildClick
                        })
                        return clonedChild;
                    })}


                </div>

                </CSSTransition>
            </div>
        )
    }
}
