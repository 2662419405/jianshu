import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as createActions from '../../store/actionCreators';

class Header extends Component {
    render() {
        
        const { demo, handlerClickDemo } = this.props;

        return (
            <div>
                这是头部的组件
                <button
                    onClick={ handlerClickDemo }
                >修改头部组件的数据</button>
                {demo}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        demo: state.get('Header').get('demo')
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handlerClickDemo(){
            dispatch(createActions.headerChange())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)