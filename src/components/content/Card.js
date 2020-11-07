import React from 'react';

const Card = (props) => {
  const { data } = props;
  return (
    <div
      className="card"
      role="button"
      onClick={() => {
        window.open(data.url);
      }}
      onKeyDown={() => {}}
      tabIndex="0"
    >
      <h3>{data.title}</h3>
      {/* <p>{data.desc}</p> */}
    </div>
  );
};

export default Card;
