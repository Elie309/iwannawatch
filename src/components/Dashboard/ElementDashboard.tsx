import React, { Component } from 'react'
import StarRatingIcon from '../../icons/StarRatingIcon';
import IElement, { Rating } from '../../Interfaces/IElement';


const RATING_ICON_HEIGHT = 16, RATING_ICON_WIDTH = 16;

export default class ElementDashboard extends Component<IElement> {

    constructor(props: IElement) {
        super(props);

        this.imageHandler = this.imageHandler.bind(this);
    }

    imageHandler(): JSX.Element | null {
        if (this.props.image) {

            return (
                <div className="image w-full">
                    <img className='w-full' src={this.props.image} alt="" />
                </div>
            )

        }

        return null;
    }

    descriptionHandler(): JSX.Element | null {
        if (this.props.description) {

            return (
                <div className="description mt-2 mb-1 text-justify">
                    <p className='text-sm text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit vero nostrum non blanditiis quasi autem tempora a ut placeat, libero, voluptatem amet quae quia qui illum pariatur? Odit, velit.</p>
                </div>
            )

        }

        return null;
    }


    detailsHandler(): JSX.Element | null {


        //TODO: Add details to the element after getting all information about the type of element
        //Movie, TVShow, Book, etc.

        return null;

    }

 



    render() {
        return (
            <div
                className="p-2 my-2 first:mt-0
            flex flex-col items-center 
            bg-white shadow-lg rounded-lg
            transition-all hover:scale-105 cursor-pointer
            break-inside
            ">

                <div className='w-full pt-1 pb-2 px-2 flex flex-row items-center justify-start'>
                    <img
                        src="https://via.placeholder.com/100"
                        alt="profil"
                        className="rounded-full h-12 w-12"
                    />
                    <div className='ml-2'>

                        <h1 className="font-bold">{this.props.title}</h1>
                        <Rater rating={this.props.rating}/>

                    </div>

                </div>

                {/* Rating */}

                {/* Load Image */}
                {this.imageHandler()}


                {/* Load Description */}
                {this.descriptionHandler()}

                <div className="details">
                    <p className='text-[10px] italic font-semibold'>Details</p>
                </div>

            </div>
        )
    }
}


const Rater = (props: Rating): JSX.Element => {

    const filledStarsColor = '#ffd700'; // #ffb400
    const emptyStarsColor = '#d3d3d3';
    const stars: string[] = [];

    if(props.rating){
        for(let i = 0; i < 5; i++) {

            if(i < props.rating) {
                stars.push(filledStarsColor);
            } else {
                stars.push(emptyStarsColor);
            }
    
        }
    }else{
        for(let i = 0; i < 5; i++) {
            stars.push(emptyStarsColor);
        }
    }
        

  

    return (
        <div className="rating">
            <div className="stars flex flex-row">
                <StarRatingIcon className="star" fill={stars[0]} height={RATING_ICON_HEIGHT} width={RATING_ICON_WIDTH} />
                <StarRatingIcon className="star" fill={stars[1]} height={RATING_ICON_HEIGHT} width={RATING_ICON_WIDTH} />
                <StarRatingIcon className="star" fill={stars[2]} height={RATING_ICON_HEIGHT} width={RATING_ICON_WIDTH} />
                <StarRatingIcon className="star" fill={stars[3]} height={RATING_ICON_HEIGHT} width={RATING_ICON_WIDTH} />
                <StarRatingIcon className="star" fill={stars[4]} height={RATING_ICON_HEIGHT} width={RATING_ICON_WIDTH} />
            </div>
        </div>
    )
}
