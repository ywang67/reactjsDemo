import React from 'react';
import {connect} from 'react-redux';
import {Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {deleteCartItem} from '../../actions/cartActions'


class Cart extends React.Component {
    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

    renderEmpty(){
        return(<div></div>)
    }

    handleDelete (index) {

        const currentPizzaToDelete = this.props.cart
        let cartAfterDelete = [...currentPizzaToDelete.slice(0, index), ...currentPizzaToDelete.slice(index + 1)]

        this.props.deleteCartItem(cartAfterDelete);
    }

    renderCart() {

        const cartItemList = this.props.cart.map((cartItem, i) => {

            return (
                <Panel key={i}>
                    <Row>
                        <Col xs={12} md={4} sm={2}>
                            <h6>{cartItem.name} ({cartItem.selectedToppings.map( (topping, i) =>
                                    <span key={i}>
                                        <span>{topping}</span>
                                        <span>  </span>
                                    </span>

                            )})</h6>
                        </Col>
                        <Col xs={12} sm={2} md={4} >
                            <h6>Subtotal: ${cartItem.subTotal}</h6>
                        </Col>
                        <Col xs={12} sm={2} md={4} >
                            <Button  onClick={this.handleDelete.bind(this, i)} bsStyle="danger" bsSize="small">DELETE</Button>
                        </Col>

                    </Row>
                </Panel>
            );

        });

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemList}
                <Row>
                    <Col  xs={12} sm={2} md={4} >
                        <Button bsStyle="success" bsSize="small">PROCEED TO CHECKOUT</Button>
                    </Col>
                    <Col  xs={12} sm={2} md={4} >Total Price: ${this.props.totalPrice}</Col>
                </Row>

            </Panel>
        );

    }
}
function mapStateToProps(state){
    return{
        cart: state.cart.cart,
        totalPrice:state.cart.totalPrice
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ deleteCartItem }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);