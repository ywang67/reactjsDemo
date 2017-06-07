import React from 'react';
import {connect } from 'react-redux';
import {fetchPizzaData} from '../../actions/pizzaActions';
import _ from 'lodash';
import PizzaItem from './pizzaItem';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Cart from './cart';

class PizzaHome extends React.Component {

    componentDidMount() {

        this.props.fetchPizzaData();

    }

    renderPizzas() {

        return _.map(this.props.pizzaData, (pizza,i) =>{
            return (

                <Col xs={12} sm={6} md={4} key={i}>
                    <PizzaItem
                        name={pizza.name}
                        maxToppings={pizza.maxToppings}
                        basePrice={pizza.basePrice}
                        toppings={pizza.toppings}
                    />
                </Col>
            )
        })
    }

    render() {
        return(
            <Grid>
                <Row>
                    <Cart />
                </Row>
                <h1>Build Your Own Pizza</h1>
                <Row>
                    <ul>
                        {this.renderPizzas()}
                    </ul>
                </Row>

            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {pizzaData: state.pizzaData};
}
export default connect(mapStateToProps, {fetchPizzaData})(PizzaHome);