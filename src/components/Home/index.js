import {Component} from 'react'

import Header from '../Header'
import Calender from '../Calender'
import './index.css'

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
    dayNumber: 1,
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
    dayNumber: 2,
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
    dayNumber: 3,
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
    dayNumber: 4,
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
    dayNumber: 5,
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
    dayNumber: 6,
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
    dayNumber: 0,
  },
]

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-body-container">
          <div className="emojis-list-container">
            <ul className="emoji-ul">
              {emojisList.map(item => {
                const {id, emojiName, emojiUrl} = item
                return (
                  <li key={id} className="emoji-li">
                    <p className="emoji-para">{emojiName}</p>
                    <img className="emoji-img" src={emojiUrl} alt={emojiName} />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="calender-container">
            <Calender />
          </div>
          <div className="select-container">
            <select className="emoji-select">
              {emojisList.map(item => (
                <option key={item.id} value={item.emojiName}>
                  {item.emojiName}
                </option>
              ))}
            </select>
            <select className="day-select">
              {daysList.map(item => (
                <option key={item.id} value={item.day}>
                  {item.day}
                </option>
              ))}
            </select>
            <h1 className="selected-date">01</h1>
          </div>
        </div>
      </>
    )
  }
}

export default Home
