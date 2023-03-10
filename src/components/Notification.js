import React from 'react'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    backgroundColor: 'grey',
    padding: 10,
    borderWidth: 1,
    marginBottom: 30,
    borderRadius: 5,
    color: 'yellow',
  }
  return <div style={style}>{notification}</div>
}

export default Notification
