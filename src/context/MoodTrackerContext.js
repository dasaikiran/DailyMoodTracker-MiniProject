import React from 'react'

const MoodTrackerContext = React.createContext({
  homeActive: '',
  reportActive: '',
  onHomeClick: () => {},
  onReportClick: () => {},
  calenderList: [],
  onChangeCalenderList: () => {},
  emojisList: [],
  daysList: [],
  nameDayCount: '',
  activeEmoji: '',
  activeEmojiName: '',
  activeDay: '',
  month: '',
  onEmojiClick: () => {},
  onEmojiNameChange: () => {},
  onDayChange: () => {},
  getNameDayCount: () => {},
  onChangeMonth: () => {},
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
})

export default MoodTrackerContext
