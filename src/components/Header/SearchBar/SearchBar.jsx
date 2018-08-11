import React, { Component } from 'react';
import styles from '../style.css';

class SearchBar extends Component {
  render() {
    return (
      <div className={styles['header__search']}>
        <input
          className={styles['header__search-field']}
          type="text"
          name="search-query"
          placeholder="Birthday, 19.05.2018, Anna"
        />
        <span className={styles['header__search-icon']}></span>
      </div>
    );
  }
}

export default SearchBar;
