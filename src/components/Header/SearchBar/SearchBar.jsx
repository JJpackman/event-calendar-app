import React, { Component } from 'react';
import sprite from '../../../assets/img/sprite.svg';
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
        <svg
          className={styles['header__search-icon']}
          height="16"
          width="16"
          aria-hidden="true"
          role="presentation"
        >
          <use xlinkHref={`${sprite}#search`}></use>
        </svg>
      </div>
    );
  }
}

export default SearchBar;
