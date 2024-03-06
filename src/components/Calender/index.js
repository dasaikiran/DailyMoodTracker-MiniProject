import {Component} from 'react'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import './index.css'

class Calender extends Component {
  state = {month: 1}

  onLeftArrowClick = () => {
    const {month} = this.state
    if (month > 1) {
      this.setState(
        prev => ({
          month: prev.month - 1,
        }),
        this.onMonthChange,
      )
    }
  }

  onMonthChange = () => {
    console.log('in onMonthChange')
    const {onChangeMonth} = this.props
    const {month} = this.state
    onChangeMonth(month)
  }

  onRightArrowClick = () => {
    const {month} = this.state
    if (month < 12) {
      this.setState(
        prev => ({
          month: prev.month + 1,
        }),
        this.onMonthChange,
      )
    }
  }

  render() {
    const {calenderList, onDateLiClick} = this.props
    const {month} = this.state
    return (
      <>
        <div className="arrow-container">
          <button
            type="button"
            onClick={this.onLeftArrowClick}
            className="arrow-button"
            aria-label="Previous"
          >
            <MdOutlineKeyboardArrowLeft className="arrow-icon" />
          </button>

          <p className="month-para">{calenderList[month - 1].monthName}</p>

          <button
            type="button"
            onClick={this.onRightArrowClick}
            className="arrow-button"
            aria-label="Previous"
          >
            <MdOutlineKeyboardArrowRight className="arrow-icon" />
          </button>
        </div>
        <div className="calender-dates">
          <ul className="days-ul">
            <li className="days-li">Su</li>
            <li className="days-li">Mo</li>
            <li className="days-li">Tu</li>
            <li className="days-li">We</li>
            <li className="days-li">Th</li>
            <li className="days-li">Fr</li>
            <li className="days-li">Sa</li>
          </ul>
          <ul className="dates-ul">
            {calenderList[month - 1].dates.map(item => {
              const {id, date, emojiUrl, emojiName} = item
              const onClick = () => {
                onDateLiClick(id, month)
              }
              return (
                <li key={id} className="dates-li">
                  <button
                    type="button"
                    onClick={onClick}
                    className="dates-li-button"
                  >
                    <p className="dates-para">{date}</p>
                    <img
                      className="dates-emoji"
                      src={emojiUrl}
                      alt={emojiName}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Calender
