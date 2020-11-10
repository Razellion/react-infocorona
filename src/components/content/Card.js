import React, { useState } from 'react';

const Card = (props) => {
  const { data } = props;
  const [clicked, setClicked] = useState(false);

  // const isClicked = (click) => {
  //   if (click) {
  //     setClicked(false);
  //   } else {
  //     setClicked(true);
  //   }
  // };

  return (
    <div>
      <div
        className="card"
        role="button"
        onClick={() => {
          // window.open(data.url);
          setClicked(true);
        }}
        onKeyDown={() => {}}
        tabIndex="0"
      >
        <span>
          <h3>{data.title}</h3>
        </span>
        {/* <p>{data.desc}</p> */}
      </div>
      {clicked && (
        <div
          className="backdrop"
          role="button"
          onClick={() => {
            setClicked(false);
          }}
          onKeyDown={() => {}}
          tabIndex="0"
        >
          <div
            className="card-backdrop animate-fade"
            role="button"
            onClick={() => {
              // window.open(data.url);
              // isClicked(clicked);
            }}
            onKeyDown={() => {}}
            tabIndex="0"
          >
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
            <a href={data.url}>{data.url}</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
