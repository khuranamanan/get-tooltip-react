import { Tooltip } from "./Components";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Tooltip React Component</h1>

      <div className="container">
        <Tooltip
          tooltipText="This is a tooltip!"
          position="top"
          bg="#172554"
          textColor="#93c5fd"
          delay={500}
          arrow
        >
          <button className="tooltip-btn">Hover Me</button>
        </Tooltip>

        <Tooltip tooltipText="Another tooltip">
          <span>Hover over me too!</span>
        </Tooltip>
      </div>
    </div>
  );
}
