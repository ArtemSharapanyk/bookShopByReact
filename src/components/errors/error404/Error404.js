import React from 'react';
import './Error404.css';
import {withRouter} from 'react-router-dom';

let Error404Component = ({history}) => (
    <div className="error404Wrap">
        <div className="errorInfo">
            <span>
                //
            </span>
            not found
        </div>
        <div className="someText">
            <span>this page</span> does not exist.
        </div>
        <div className="numberOfError">
            404
        </div>
        <div className="homeBtn" onClick={() => history.push('/')}>
            Home
        </div>
    </div>
);

export default withRouter(Error404Component);