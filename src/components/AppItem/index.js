// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imgUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imgUrl} alt={appName} />
      <p className="app-item">{appName}</p>
    </li>
  )
}

export default AppItem
