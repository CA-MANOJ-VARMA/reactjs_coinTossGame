// Write your code here
import {Component} from 'react'
import './index.css'

const imagesList = [
  {
    id: 'Heads',
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 'Tails',
    image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]

class CoinToss extends Component {
  state = {total: 0, Heads: 0, Tails: 0, image: imagesList[0].image}

  chooseHeadsOrTails = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (imagesList[tossResult].id === 'Heads') {
      this.setState(prevState => ({
        image: imagesList[tossResult].image,
        total: prevState.total + 1,
        Heads: prevState.Heads + 1,
      }))
    }
    if (imagesList[tossResult].id === 'Tails') {
      this.setState(prevState => ({
        image: imagesList[tossResult].image,
        total: prevState.total + 1,
        Tails: prevState.Tails + 1,
      }))
    }
  }

  render() {
    const {total, Heads, Tails, image} = this.state
    return (
      <div className="css-bg-container">
        <div className="css-card-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={image} className="css-image-itself" alt="toss result" />
          <button
            type="button"
            className="css-button-itself"
            onClick={this.chooseHeadsOrTails}
          >
            Toss Coin
          </button>
          <div className="css-all-scores-container">
            <div className="css-total-score-container">
              <p>Total:{total}</p>
            </div>
            <div className="css-Heads-score-container">
              <p>Heads:{Heads}</p>
            </div>
            <div className="css-Tails-score-container">
              <p>Tails:{Tails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
