//Lib
import React from 'react';

//Mixin
import mixins from 'es6-mixins';
import BackboneMixin from '../../mixin/BackboneMixin';

class Purchases extends React.Component {

    constructor(props) {
        super(props);
        mixins(BackboneMixin,this);
    }

    render () {

        var total = this.props.model.get('skyStore').total;
        var rentals = this.props.model.get('skyStore').rentals;
        var buyAndKeep = this.props.model.get('skyStore').buyAndKeep;

        /**
         * With a better idea of the schema I would likely create a new method
         * that maps the skyStore params to type names
         */

        var RentalRows = rentals.map((row,i) => {
            return (
                <tr key={ "rental" + i }>
                    <td>Rental</td>
                    <td>{row.title}</td>
                    <td>{row.cost}</td>
                </tr>
            )
        });

        var KeepRows = buyAndKeep.map((row,i) => {
            return (
                <tr key={"bought" + i }>
                    <td>Bought</td>
                    <td>{row.title}</td>
                    <td>{row.cost}</td>
                </tr>
            )
        });

        return (
            <div className="box">
                <h2>Purchases</h2>
                <table id="purchases">
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <th>Title</th>
                            <th>Cost</th>
                        </tr>
                        {RentalRows}
                        {KeepRows}
                        <tr>
                            <td colSpan="2"></td>
                            <td className="total">{total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

};

export default Purchases;