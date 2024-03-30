import './index.css'

const TabItem = props => {
  const {eachTab, isActive, changeTab} = props
  const {displayText, tabId} = eachTab
  const tabChanging = () => {
    changeTab(tabId)
  }

  const activeItem = isActive ? 'active-tab-item' : ''
  const activeButton = isActive ? 'active-button' : ''
  return (
    <li className={`each-tab-item ${activeItem}`}>
      <button
        className={`tab-name ${activeButton}`}
        type="button"
        onClick={tabChanging}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
