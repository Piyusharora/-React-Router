
import React, { Component } from 'react';
import Auxx from '../../containers/hoc/Auxx.module';
import Backdrop from '../Backdrop/Backdrop.module';
import classes from './Modal.module.css';

class Modal extends Component {

    shouldComponentUpdate ( nextProps,_nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Auxx>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxx>
        );
    }
}

export default Modal;