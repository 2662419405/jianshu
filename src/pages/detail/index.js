import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailTitle, DetailContent } from './styled';
import * as actionCreator from './store/actionCreator';
import { withRouter } from 'react-router-dom';

class Detail extends Component{

    render(){

        const { title, content } = this.props;
 
        return (
            <DetailWrapper>
                <DetailTitle>{title}</DetailTitle>
                <DetailContent dangerouslySetInnerHTML={{__html:content}}
                
                />
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetailData(this.props.match.params.id);
    }

}

const mapState = (state)=>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content')
})

const mapDispatch = (dispatch)=>{
    return {
        getDetailData(page){
            dispatch(actionCreator.getDetailList(page));
        }
    }
}

export default connect(mapState,mapDispatch)(withRouter(Detail));