import React from 'react'



const Summary = () => {
  const styles = {
    border: "none",
    borderRadius: "20px",
    backgroundColor: "#c45454",
    color: "black",
    width: "7rem",
    height: "2rem",
    cursor:"pointer"
  }

  return (
    <div>
      <button type='submit' style={styles}>Google Map</button>
    </div>
  )
}

export default Summary