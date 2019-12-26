import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    TopicTitle
} from '../styled.js';

class Topic extends PureComponent {
    
    render() {

        const {list} = this.props;

        return (
            <Fragment>
                <TopicWrapper>
                    {
                        list.map( (item)=>{
                            return (
                                <TopicItem 
                                    key={item.get('id')}>
                                    <img className="imgContent" src={item.get('imgUrl')} alt={item.get('title')}/>
                                    {item.get('title')}
                                </TopicItem>
                            )
                        } )
                    }
                    <TopicTitle>查看更多内容 > </TopicTitle>
                </TopicWrapper>
            </Fragment>
        )
    }
}

const MapStateToProps = (state)=>{
    return{
        list: state.get('home').get('TopicList')
    }
}

export default connect(MapStateToProps,null)(Topic)