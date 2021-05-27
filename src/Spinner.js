import React from 'react';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.currentValue
        };
    }
    handlePlus = () => {
        if (this.state.currentValue < this.props.max) {
            this.setState({
                currentValue: this.state.currentValue + 1
            })
        }
    }
    handleMinus = () => {
        if (this.state.currentValue > this.props.min) {
            this.setState({
                currentValue: this.state.currentValue - 1
            })
        }
    }
    handleChange = (e) => {
        console.log(e.currentTarget.value);
    }
    render() {
      return (
        <div className="spinner">
            <button onClick={this.handleMinus}>-</button>
            <input type="text" name="spinner" onChange={this.handleChange} value={this.state.currentValue}/>
            <button onClick={this.handlePlus}>+</button>
        </div>
      );
    }
}

export default Spinner;