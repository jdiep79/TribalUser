import React, { Component } from 'react';
import SearchSection from '../containers/search_section';
import UserSection from '../containers/user_section';

class App extends Component {
  render() {
    return (
      <div>
        <SearchSection />
        <UserSection />
      </div>
    );
  }
}

export default App;