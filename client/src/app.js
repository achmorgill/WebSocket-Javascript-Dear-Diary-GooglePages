import React from 'react';
import ReactDOM from 'react-dom';
import DocumentContainer from './containers/DocumentContainer'

window.addEventListener('load', function () {
  ReactDOM.render(
    <DocumentContainer />,
    document.getElementById('app')
  );
});
