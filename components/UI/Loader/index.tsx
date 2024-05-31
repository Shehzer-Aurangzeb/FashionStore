import React from 'react'
import "./Loader.sass";

interface IProps {
  color?: string;
}
function Loader({ color = "black" }: IProps) {
  return (
    <div className="data-loader">
      <div>
        <div
          style={{
            background: color,
          }}
        ></div>
        <div
          style={{
            background: color,
          }}
        ></div>
        <div
          style={{
            background: color,
          }}
        ></div>
        <div
          style={{
            background: color,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Loader