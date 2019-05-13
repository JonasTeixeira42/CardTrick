import React, { Component, Fragment } from "react";
import ResultModal from "./ResultModal";
import Button from "./Button";
import Card from "./Card";
import Row from "./Row";
import axios from "axios";
import "../../css/Row.css";
import "../../css/App.css";

class CardTrick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      decks: {
        deck1: [],
        deck2: [],
        deck3: [],
      },
      show: false,
      chosenCard: '',
      fetchingData: false,
      counter: 0
    }
    this.arrayDeck = ['deck1', 'deck2', 'deck3'];
    this.counter = 0
  }

  componentDidMount() {
    this.retrieveDeck()
  }

  retrieveDeck() {
    this.setState({fetchingData: true});
    axios
      .get('https://deckofcardsapi.com/api/deck/new/draw/?count=21')
      .then( response => {
        console.log(response.data.cards)
        this.spreadCards(response.data.cards);
      }).catch( response => {
        alert('Something went wrong, try again later!');
        console.warn(response);
      })
  }

  handleClose(option) {
    this.counter = 0;
    this.setState({show: false})

    if(option === 1) {
        return;
    }
    this.retrieveDeck()
  }

  spreadCards(wholeDeck) {
    setTimeout(() => {
      this.cleanDeck()
      let selector = 0;
      let decks = Object.assign([], this.state.decks);
      
      wholeDeck.forEach( (item, i) => {
        selector = (selector > 2) ? 0 : selector;
        decks[this.arrayDeck[selector]].push(item)
        selector++;
      })
      this.setState({decks}, () => {this.setState({fetchingData: false})});
    }, 0);

    if(this.counter === 3) {
    this.setState({show: true}, () => {this.setState({chosenCard: wholeDeck[10].image})})
    }
  }

  cleanDeck() {
    let decks = Object.assign([], this.state.decks);
    decks.deck1 = []; decks.deck2 = []; decks.deck3 = []
    this.setState({decks})
  }

  selectedDeck(arrayIndex) {
    
    this.counter++;
    const decks = Object.assign([], this.state.decks);
    if(!arrayIndex) {
      this.spreadCards([...decks.deck2, ...decks.deck1, ...decks.deck3]);
      return;
    }
    if(arrayIndex === 1) {
      this.spreadCards([...decks.deck1, ...decks.deck2, ...decks.deck3]);
      return;
    }
    this.spreadCards([...decks.deck1, ...decks.deck3, ...decks.deck2]);
  }

  render() {
    return(
      <div className="App">
        <div style={{marginTop: '30px'}}></div>
        <header className="text-center">Welcome to an amazing CARD TRICK</header>
        <div className="text-center"><p>After this, you will clutch your pearls or get you money back!</p></div>
        <div style={{marginTop: '30px'}}></div>
        {
          !this.counter &&
          <div className="text-center"><p>STEP 1: Pick a card and click on the deck where it is</p></div>
        }
        {
          this.counter === 1 &&
          <div className="text-center">
              <p>STEP 2: Look for the card you chosen before and click on the deck where it is</p>
          </div>
        }
        {
          this.counter === 2 &&
          <div className="text-center">
              <p>STEP 3: Guess what ? Same as step 2</p>
          </div>
        }
        {
          Object.entries(this.state.decks).map( (item, index) => {
            return(
              <Fragment key={index}>
                <Row>
                  <Button
                    style={{color: '#00d2d3'}}
                    class={'btn-light'} 
                    onClick={e => this.selectedDeck(index)}
                    disabled={this.state.fetchingData} 
                    text={`Deck ${index + 1}`}  />
                  {
                    item[1].map( (card, i) => {
                      return (
                        <Card 
                          key={i} 
                          url={card.image} 
                          cardName={card.code}
                        />
                      )
                    })
                  }
                </Row>
              </Fragment>
            )
          })
        }
        <ResultModal 
            show={this.state.show} 
            handleClose={e => this.handleClose(e)} 
            chosenCard={this.state.chosenCard} 
        />
      </div>
    )
  }
}

export default CardTrick;
