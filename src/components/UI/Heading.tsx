import React from 'react';

export const Heading = (props : any) => {
    if(props && props.data) {
        return (
            <div className="heading_container">
                <div className="heading_box_outer">
                    <div className="heading_box_inner">
                        <h1 className="heading_box_title">
                            {/* I am Title */}
                            {props.data.title}
                        </h1>
                        <h3 className="heading_box_subtitle">
                            {/* I am Sub Title */}
                            {props.data.subtitle}
                        </h3>
                        <p className="heading_box_description">
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, at ipsam veritatis minus et obcaecati accusantium consequatur eius cumque soluta labore, illo voluptas! Soluta eaque libero laborum consequatur ducimus. */}
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    } else return <div></div>
}