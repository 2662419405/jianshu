import React,{Fragment,PureComponent} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper,TopicTitle} from '../styled';

class Topic extends PureComponent{
    render(){
        return (
            <Fragment>
                <TopicWrapper>

                这里是标题
                <TopicTitle>查看更多内容 > </TopicTitle>
                </TopicWrapper>
            </Fragment>
        )
    }
}
export default connect(null,null)(Topic);