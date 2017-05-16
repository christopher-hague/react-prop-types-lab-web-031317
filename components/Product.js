import React from 'react'

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>{this.props.producer}</div>
        <div>{this.props.hasWatermark ? "Truthy watermark" : "falsey watermark"}</div>
        <div>{this.props.color}</div>
        <div>{this.props.weight}</div>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  hasWatermark: React.PropTypes.bool,
  weight: (props, propName) => {
    const weight = props[propName]

    if(isNaN(weight)) {
      return new Error("Weight should be a number")
    } else if (weight < 80 || weight > 300) {
      return new Error("Weight should be between 80 and 300")
    }
  }
}
