// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, selectSugg} = props
  const {suggestion} = suggestionsList

  const onClickButton = () => {
    selectSugg(suggestion)
  }
  return (
    <li className="suggestion-list">
      <p className="description">{suggestion}</p>
      <button type="button" className="btn-style" onClick={onClickButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow icon"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
