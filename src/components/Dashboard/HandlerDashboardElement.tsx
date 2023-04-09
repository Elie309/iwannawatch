import { ReactElement } from 'react'
import ElementDashboard from './ElementDashboard';
import IElement from '../../Interfaces/IElement';

interface Props {
    data: IElement[];
    className: string;
    childClassName: string;
}


export default function HandlerDashboardElement(props: Props): ReactElement<Props, any> {


    const renderData = () => {

        const { data } = props;

        const ElementList = data.map((element: IElement) => {
            return (
                <ElementDashboard
                    key={element.id}
                    className={props.childClassName}
                    {...element}
                />
            )
        });
        return ElementList;

    }


    return (
        <div className={`m-3 p-2 masonry sm:masonry-sm md:masonry-md lg:masonry-lg ${props.className}`}>
            {renderData()}
        </div>
    )
}
