import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrementMangoes = () => {
    this.setState(preState => ({count1: preState.count1 + 1}))
  }

  onIncrementBananas = () => {
    this.setState(preState => ({count2: preState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading-fruit">
            Bob ate
            <span className="count-number"> {count1} </span>
            mangoes
            <span className="count-number"> {count2} </span> bananas
          </h1>
          <div className="fruit-total-container">
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image-fruit"
              />
              <div className="container-button">
                <button
                  className="button-fruit"
                  type="button"
                  onClick={this.onIncrementMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image-fruit"
              />
              <div className="container-button">
                <button
                  className="button-fruit"
                  type="button"
                  onClick={this.onIncrementBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
