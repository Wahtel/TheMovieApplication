import React from 'react';
import {hashHistory} from 'react-router';


class BackButton extends React.Component {
    constructor(props) {
        super(props);
    }

    static goBack() {
        hashHistory.goBack();
    }

    render() {
        return(
            <span className="glyphicon glyphicon-arrow-left backButton"
                  onClick={BackButton.goBack}
            />
        );
    }
}


export default BackButton;