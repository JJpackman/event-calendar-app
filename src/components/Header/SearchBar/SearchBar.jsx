import React, { Component } from 'react';
import sprite from '../../../assets/img/sprite.svg';
import styles from '../style.css';
import SearchResults from './SearchResults';

class SearchBar extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target: { value }}) {
    this.props.setQuery(value);
  }

  render() {
    return (
      <div className={styles['header__search']}>
        <div className={styles['header__search-wrapper']}>
          <input
            className={styles['header__search-field']}
            type="text"
            name="search-query"
            placeholder="Birthday, 19.05.2018, Anna"
            onChange={this.handleChange}
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
        {this.props.events && <SearchResults events={this.props.events} />}
      </div>
    );
  }
}

export default SearchBar;
