import React from 'react';
import {Checkbox, Button} from 'react-bootstrap';

class ToppingSelector extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            isChecked: this.props.isChecked
        }
    }
    handleCheckboxChange () {

        const { handleCheckboxChange, handleDisable, name, price } = this.props;


        this.setState({
            isChecked: !this.state.isChecked,

        });


        handleCheckboxChange(name,price, this.state.isChecked);
        handleDisable();

    }

    render() {
        const {name, price} = this.props;
        const isChecked = this.state.isChecked;



        return (
            <span>
                <Checkbox
                    disabled={this.state.isDisabled}
                    value={name}
                    checked={isChecked}
                    onChange={this.handleCheckboxChange.bind(this)}
                >{name} (${price})</Checkbox>
            </span>
        );
    }
}

export default ToppingSelector;





