import React from 'react';
import { Content } from '../components';
// , Todo
const TestPage = () => {
  return (
    <div id="infoCorona">
      <div className="infoCorona__left">
        <h1>Info Corona</h1>
        <Content />
      </div>
      {/* <div className="infoCorona__right">
        <Todo />
      </div> */}
    </div>
  );
};

export default TestPage;
