import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        
        const { demo } = this.props;

        return (
            <div>
                这是头部的组件
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

const mapDispatchToProps = (Dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)