import React from 'react';

export const Tiles = (props: any) => {
    return (
        <div className="tiles_container">
            <div className="tiles_box_outer">
                <div className="tiles_box_inner">
                    <ul className="tiles_box_list">

                        {Array.isArray(props.data) && props.data.map((value: any, index: number, arr: Array<any>) => (

                            <li  key={"list" + index} className="tiles_box_item_container">
                                <div className="tiles_box_item_outer">
                                    <div className="tiles_box_item_inner">
                                        <h3 className="title_box_item-title">{value.title}</h3>
                                        <h4 className="title_box_item-subtitle">{value.subtitle}</h4>
                                        <p className="title_box_item-description">{value.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {/* 
                        <li className="tiles_box_item_container">
                            <div className="tiles_box_item_outer">
                                <div className="tiles_box_item_inner">
                                    <h3 className="title_box_item-title">Tile item heading</h3>
                                    <h4 className="title_box_item-subtitle">Tile item sub heading</h4>
                                    <p className="title_box_item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, at ipsam veritatis minus et obcaecati accusantium consequatur eius cumque soluta labore, illo voluptas! Soluta eaque libero laborum consequatur ducimus.</p>
                                </div>
                            </div>
                        </li>

                        <li className="tiles_box_item_container">
                            <div className="tiles_box_item_outer">
                                <div className="tiles_box_item_inner">
                                    <h3 className="title_box_item-title">Tile item heading</h3>
                                    <h4 className="title_box_item-subtitle">Tile item sub heading</h4>
                                    <p className="title_box_item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, at ipsam veritatis minus et obcaecati accusantium consequatur eius cumque soluta labore, illo voluptas! Soluta eaque libero laborum consequatur ducimus.</p>
                                </div>
                            </div>
                        </li>

                        <li className="tiles_box_item_container">
                            <div className="tiles_box_item_outer">
                                <div className="tiles_box_item_inner">
                                    <h3 className="title_box_item-title">Tile item heading</h3>
                                    <h4 className="title_box_item-subtitle">Tile item sub heading</h4>
                                    <p className="title_box_item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, at ipsam veritatis minus et obcaecati accusantium consequatur eius cumque soluta labore, illo voluptas! Soluta eaque libero laborum consequatur ducimus.</p>
                                </div>
                            </div>
                        </li>

                        <li className="tiles_box_item_container">
                            <div className="tiles_box_item_outer">
                                <div className="tiles_box_item_inner">
                                    <h3 className="title_box_item-title">Tile item heading</h3>
                                    <h4 className="title_box_item-subtitle">Tile item sub heading</h4>
                                    <p className="title_box_item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, at ipsam veritatis minus et obcaecati accusantium consequatur eius cumque soluta labore, illo voluptas! Soluta eaque libero laborum consequatur ducimus.</p>
                                </div>
                            </div>
                        </li>

                        <li className="tiles_box_item_container">
                            <div className="tiles_box_item_outer">
                                <div className="tiles_box_item_inner">
                                    <h3 className="title_box_item-title">Tile item heading</h3>
                                    <h4 className="title_box_item-subtitle">Tile item sub heading</h4>
                                    <p className="title_box_item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, at ipsam veritatis minus et obcaecati accusantium consequatur eius cumque soluta labore, illo voluptas! Soluta eaque libero laborum consequatur ducimus.</p>
                                </div>
                            </div>
                        </li> */}

                    </ul>
                </div>
            </div>
        </div>
    )
}