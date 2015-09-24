//Lib
import React from 'react';
import Backbone from 'backbone';

//Stores
import BillStore from './store/BillStore';

//Components
import Bill from './components/Bill';

React.render(
    <Bill model={BillStore} url="https://still-scrubland-9880.herokuapp.com/bill.json" />,
    document.getElementById('container')
);