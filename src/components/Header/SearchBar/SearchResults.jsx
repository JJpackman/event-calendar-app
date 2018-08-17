import React from 'react';
import * as Label from '../../common/Label/Label';
import PropTypes from 'prop-types';
import styles from '../style.css';

const SearchResults = ({events}) => {
  return (
    <ul className={styles['header__search-results']}>
      {
        events.map((event, index) => {
          return (
            <li
              key={index}
              className={styles['header__search-result-item']}
            >
              <Label.Text title="description" />
              <p className={styles['header__search-result-item-text']}>{event.description}</p>
              {
                event.participants &&
                <React.Fragment>
                  <Label.Text title="participants" />
                  <p className={styles['header__search-result-item-text']}>{event.participants}</p>
                </React.Fragment>
              }
            </li>
          );
        })
      }
    </ul>
  );
};

SearchResults.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResults;
