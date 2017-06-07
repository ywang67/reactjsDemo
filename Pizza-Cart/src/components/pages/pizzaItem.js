import React from 'react';
import {Row, Col, Well, Button, Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';
import ToppingSelector from './toppingSelector';


class PizzaItem extends React.Component {
    constructor(props,context){
        super(props,context);
    }

    componentWillMount(){
        this.selectedCheckboxes = new Set();
        this.selectedPrice = new Set();
    }

    shouldComponentUpdate() {
        return false;
    }

    handleCart () {
        const selectedToppings = [];
        let subTotal = 0;
        for (const selectedTopping of this.selectedCheckboxes) {
            selectedToppings.push(selectedTopping);
        }
        for (let item of this.selectedPrice) {
            subTotal += item;
        }
        subTotal += this.props.basePrice;


        const pizza = [...this.props.cart,{
            name:this.props.name,
            maxToppings:this.props.maxToppings,
            basePrice: this.props.basePrice,
            selectedToppings: selectedToppings,
            subTotal: subTotal.toFixed(2)
        }];
        this.props.addToCart(pizza);


    }

    handleCheckboxChange(item, price, notChecked) {


        if (notChecked) {
            this.selectedCheckboxes.delete(item);
            this.selectedToppingNum--;
            this.selectedPrice.delete(price);
        } else {
            this.selectedCheckboxes.add(item);
            this.selectedToppingNum ++;
            this.selectedPrice.add(price);

        }

    }

    handleDisable() {
        console.log(111);
    }




    renderCheckboxes = () => {
        return (
            this.props.toppings.map(item => {


                return (
                    <li key={item.topping.name}>
                        <ToppingSelector
                            isChecked={item.defaultSelected}
                            name={item.topping.name}
                            price={item.topping.price}
                            handleCheckboxChange={this.handleCheckboxChange.bind(this)}
                            handleDisable={this.handleDisable.bind(this)}

                        />
                    </li>
                )

            })
        );


    }


    addDefaultToppingsToSet(item) {


       if( item.defaultSelected) {
           this.selectedPrice.add(item.topping.price);
           this.selectedCheckboxes.add(item.topping.name);
           this.selectedToppingNum = this.selectedCheckboxes.size;
       }
    }

    render(){
        const defaultToppings = this.props.toppings.map((item, i) => (
            <span key={i}>
                    <span>
                        {this.addDefaultToppingsToSet(item)}
                        {item.defaultSelected ?  item.topping.name  : null}
                    </span>
                    <span>  </span>
                </span>
        ))


        return (

            <Well>
                <Row>
                    <Col xs={12}>
                        <form>
                            <h2>{this.props.name}</h2>
                            <h5>Toppings: {defaultToppings}</h5>
                            <h5>Max Toppings: {this.props.maxToppings === null? 'Unlimited':this.props.maxToppings}</h5>
                            <h5>Base Price: ${this.props.basePrice}</h5>
                            <h5>Choose toppings: </h5>
                            <ul >{this.renderCheckboxes()}</ul>
                            <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>
                                Add to cart
                            </Button>
                        </form>
                    </Col>
                </Row>

            </Well>




        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addToCart},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PizzaItem);
