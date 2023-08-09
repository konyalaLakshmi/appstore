// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTab(tabId)
  }

  const tabBtnClass = isActive ? `tab-Button-active` : `tab-button`

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClass}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
