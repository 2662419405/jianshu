import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { WriterList, WriterItem, HomeLoad } from '../styled';
import * as actionCreator from '../store/actionCreator';
import { Link } from 'react-router-dom';

class Writer extends PureComponent{

    render(){

        const { list, WriterPage, handleLoadMore } = this.props;

        return (
            <Fragment>
                <WriterList>
                    {
                        list.map( (item, index)=>{
                            return (
                                <WriterItem key={index}>
                                    <img className='pic' alt="" src={item.get('imgUrl')}/>
                                    <div style={{paddingRight:'165px'}}>
                                        <h3 className='title'>
                                            <Link to={'detail/'+item.get("id")} className='WriterTopA'>  
                                                {item.get('title')}
                                            </Link>
                                        </h3>
                                        <span className='content'>{item.get('content')}</span>
                                    </div>
                                </WriterItem>
                            )
                        } )
                    }
                </WriterList>
                <HomeLoad
                    onClick={ ()=>
                        handleLoadMore(WriterPage)
                    } 
                >
                    阅读更多
                </HomeLoad>
            </Fragment>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        list: state.get('home').get('WriterList'),
        WriterPage: state.get('home').get('WriterPage')
    }
}

const mapDispatch = ( dispatch )=>{
    return {
        handleLoadMore(page){
            dispatch(actionCreator.getLoadMore(page));
        }
    }
}

export default connect(mapStateToProps,mapDispatch)(Writer);