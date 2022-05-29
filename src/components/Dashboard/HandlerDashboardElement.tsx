import React, { Component } from 'react';
import ElementDashboard from './ElementDashboard';
import IElement from '../../Interfaces/IElement';

interface Props {
    data: IElement[];
    className: string;
    childClassName: string;
}


export default class HandlerDashboardElement extends Component<Props> {

    constructor(props: Props) {
        super(props);


    }

    renderData() {
        const { data } = this.props;

        const ElementList = data.map((element: IElement) => {
            return (
                <ElementDashboard
                key={element.id}
                    className={this.props.childClassName}
                    {...element}
                />
            )
        });
        return ElementList;
    }


    render() {
        return (
            <div className={`overflow-auto m-3 p-2 masonry sm:masonry-sm md:masonry-md lg:masonry-lg ${this.props.className}`}>
                {this.renderData()}
            </div>
        )
    }
}
