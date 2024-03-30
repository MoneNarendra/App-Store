import './index.css'

const AppItems = props => {
  const {eachApp} = props
  const {imageUrl, appName} = eachApp
  return (
    <li className="app-container">
      <img src={imageUrl} className="eachApp-img" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItems
