import React from 'react/addons';
import Backbone from 'backbone';
var TestUtils = React.addons.TestUtils;

//Stores
import BillStore from '../src/store/BillStore';

//Components
import Calls from '../src/components/partials/Calls';
import Footer from '../src/components/partials/Footer';
import Purchases from '../src/components/partials/Purchases';
import Subscriptions from '../src/components/partials/Subscriptions';

jest.dontMock('../src/components/partials/Calls.js');
jest.dontMock('../src/components/partials/Footer.js');
jest.dontMock('../src/components/partials/Purchases.js');
jest.dontMock('../src/components/partials/Subscriptions.js');

var calls;
var subs;
var purch;
var grandTotal;
var rows;
var price;

describe('Call', function() {

    beforeEach(function(){

        BillStore.set({
            callCharges: {
                calls: [
                    {
                        called: "07716393769",
                        duration: "00:23:03",
                        cost: 2.13
                    },
                    {
                        called: "07716393769",
                        duration: "00:23:03",
                        cost: 2.13
                    }
                ],
                total: 59.64
            }
        });

        calls = TestUtils.renderIntoDocument(
            <Calls model={BillStore} />
        );
        price = TestUtils.findRenderedDOMComponentWithClass(calls, 'total');
        rows = TestUtils.scryRenderedDOMComponentsWithTag(calls, 'tr');
    });


    it('renders call rows', function() {
        expect(rows.length).toEqual(4);
    });

    it('displays the calls price total', function(){
        expect(price.getDOMNode().textContent).toEqual('59.64');

    });

});

describe('Subscriptions', function() {

    beforeEach(function(){

        BillStore.set({
            package: {
                subscriptions: [
                    {
                        type: "tv",
                        name: "Variety with Movies HD",
                        cost: 50
                    },
                    {
                        type: "talk",
                        name: "Sky Talk Anytime",
                        cost: 5
                    },
                    {
                        type: "broadband",
                        name: "Fibre Unlimited",
                        cost: 16.4
                    }
                ],
                total: 71.4
            }
        });

        subs = TestUtils.renderIntoDocument(
            <Subscriptions model={BillStore} />
        );
        price = TestUtils.findRenderedDOMComponentWithClass(subs, 'total');
        rows = TestUtils.scryRenderedDOMComponentsWithTag(subs, 'tr');
    });


    it('renders call rows', function() {
        expect(rows.length).toEqual(5);
    });

    it('displays the calls price total', function(){
        expect(price.getDOMNode().textContent).toEqual('71.4');

    });

});

describe('Purchases', function() {

    beforeEach(function(){

        BillStore.set({
            skyStore: {
                rentals: [
                    {
                        title: "50 Shades of Grey",
                        cost: 4.99
                    }
                ],
                buyAndKeep: [
                    {
                        title: "That's what she said",
                        cost: 9.99
                    },
                    {
                        title: "Brokeback mountain",
                        cost: 9.99
                    }
                ],
                total: 24.97
            }
        });

        purch = TestUtils.renderIntoDocument(
            <Purchases model={BillStore} />
        );
        price = TestUtils.findRenderedDOMComponentWithClass(purch, 'total');
        rows = TestUtils.scryRenderedDOMComponentsWithTag(purch, 'tr');

    });


    it('renders call rows', function() {
        expect(rows.length).toEqual(5);
    });

    it('displays the calls price total', function(){
        expect(price.getDOMNode().textContent).toEqual('24.97');

    });

});

describe('Footer', function() {

    beforeEach(function(){

        BillStore.set({total: 136.03});

        grandTotal = TestUtils.renderIntoDocument(
            <Footer model={BillStore} />
        );
        price = TestUtils.findRenderedDOMComponentWithClass(grandTotal, 'total');
    });

    it('displays the calls price total', function(){
        expect(price.getDOMNode().textContent).toEqual('136.03');

    });

});