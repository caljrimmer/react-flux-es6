import Backbone from 'backbone';

// Now, you can access it this way, separately from React itself,
// and enjoy the relatively small size (42kb unminified)!
var React = require('react');
var addons = require('react-addons');

// And the addons are available directly on the module, like so:
var TestUtils = addons.TestUtils;

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