import React from 'react';
import TextField from '../TextField/TextField';
import * as Icon from '../Icon/Icon';
import * as Spacing from '../Spacing/Spacing';
import styles from './SearchField.css';
import classnames from 'classnames';
import Row from '../Row/Row';
import _ from 'lodash';

const SearchField = () => {
  const searchFieldId = _.uniqueId('search-query');

  return (
    <div className={classnames(
      styles.searchfield
    )}>
      <Row vAlign="center">
        <Spacing.Horizontal size="md" inline={true}>
          <Icon.Small name="search" />
        </Spacing.Horizontal>
        <label
          className={styles['searchfield__label']}
          htmlFor={searchFieldId}
        >
          Search event:
        </label>
        <TextField id={searchFieldId} name="search-query" />
      </Row>
    </div>
  );
};

export default SearchField;
