import React from 'react';
import PostsDisplay from './PostsDisplay';
import './App.css';

// airtable configuration
const Airtable = require('airtable');

const airtableConfig = {
  apiKey: process.env.REACT_APP_AIRTABLE_USER_KEY,
  baseKey: process.env.REACT_APP_AIRTABLE_BASE_KEY,
};
const base = new Airtable({ apiKey: airtableConfig.apiKey })
  .base(airtableConfig.baseKey);

function App() {
  return (
    <>
      <PostsDisplay />
    </>
  );
}

export default App;
