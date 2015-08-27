//Lib
import React from 'react';

//Mixin
import mixins from 'es6-mixins';
import BackboneMixin from '../mixin/BackboneMixin';

//Actions
import AppActions from '../actions/AppActions';

//Partials
import Calls from './partials/Calls';
import Subscriptions from './partials/Subscriptions';
import Purchases from './partials/Purchases';
import Header from './partials/Header';
import Footer from './partials/Footer';

class Bill extends React.Component {

    constructor(props) {
        super(props);
        mixins(BackboneMixin,this);
        AppActions.getBill(this.props.url);
    }

    render () {
        var model = this.props.model;
        if(model.get('loading')){
            return (
                <div>
                    <h1 className="loading">...Loading</h1>
                </div>
            )
        }else{
            return (
                <div>
                    <Header model={model} />
                    <Subscriptions model={model} />
                    <Calls model={model} />
                    <Purchases model={model} />
                    <Footer model={model} />
                </div>
            )
        }
    }

};

export default Bill;