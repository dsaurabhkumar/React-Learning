import React from 'react';

export const Image = (props: any) => {
    // console.log(props)
    if (props.data) {
        return (
            <div className="image_container">
                <div className="image_box_outer">
                    <div className="image_box_inner">
                        <picture>
                            <img className="image_box_img" src={props.data.mobile} alt="Flowers" />
                        </picture>
                    </div>
                </div>
            </div>
        )
    } else return <div></div>
}