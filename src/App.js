import React from "react"
import Header from "./components/Header"
import Location from "./components/Location";
import data from "./data"

export default function App() {
  const locations = data.map(item => {
    return <Location
            key = {item.id}
            item = {item}
            />
  })

  return (
    <div className="App">
      <Header />
      <div className="locations-grid">
        {locations}
      </div>
    </div>
  );
}

