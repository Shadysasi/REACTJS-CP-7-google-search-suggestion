// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchButton = event => {
    this.setState({searchInput: event.target.value})
  }

  selectSugg = props => {
    this.setState({searchInput: props})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const findValue = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="search-google"
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchButton}
              />
            </div>
            <ul className="suggest-card">
              {findValue.map(eachSugg => (
                <SuggestionItem
                  suggestionsList={eachSugg}
                  key={eachSugg.id}
                  selectSugg={this.selectSugg}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
