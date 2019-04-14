import React, { Component } from 'react';
import './footer.scss'

export default class Footer extends Component {

    render() {
        return (
            <div id='footer'>
                {/* <div className='phantomStyle' /> */}
                {/* <i className="fas fa-chevron-circle-up"></i> */}
                <div className='footerStyle'>&copy; Tricia Leavitt</div>
            </div>
        );
    }
}