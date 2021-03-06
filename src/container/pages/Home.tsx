import React from 'react';
import { homedata } from '../../pagedata/Home.data';
import { Heading } from '../../components/UI/Heading';
import { Tiles } from '../../components/UI/Tiles';
import { Image } from '../../components/UI/Image';

export default class Home extends React.Component {
    state: any = {};
    props: any;

    componentDidMount() {
        this.setState({
            pagedata: homedata
        })
    }

    render() {
        if (this.state.pagedata) {
            return (
                <div>
                    <Heading data={this.state.pagedata.heading} />
                    <Image data={this.state.pagedata.image} />
                    {/* <Heading data={this.state.pagedata.heading2} /> */}
                    <Tiles data={this.state.pagedata.tiles}/>
                </div>
            )
        } else return <div></div>
    }
}