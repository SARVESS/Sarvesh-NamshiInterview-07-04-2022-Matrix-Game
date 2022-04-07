import "./App.css";
import { useState } from "react";

function App() {
  const initialBoxes = [...Array(16).keys()].map((i) => {
    return { boxId: i, selected: 0 };
  });
  const [boxes, setBoxes] = useState(initialBoxes);

  const setSelectedBox = (id) => {
    const newBoxes = boxes.map((box) => {
      return {
        ...box,
        selected: box.boxId === id ? 2 : box.selected === 2 ? 1 : 0,
      };
    });
    setBoxes(newBoxes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {boxes.map((box) => (
            <div
              className={`box ${box.selected > 0 ? "selected" : ""}`}
              onClick={() => {
                setSelectedBox(box.boxId);
              }}
            >
              {box.boxId + 1}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
