import React from 'react';
import TextField from '../TextField/TextField';
import * as Icon from '../Icon/Icon';
import * as Spacing from '../Spacing/Spacing';
import styles from './SearchField.css';
import classnames from 'classnames';
import Row from '../Row/Row';

const SearchField = () => (
  <div className={classnames(
    styles.searchfield
  )}>
    <Row vAlign="center">
      <Spacing.Horizontal size={Spacing.SIZE.middle} inline={true}>
        <Icon.Small name="search" />
      </Spacing.Horizontal>
      <TextField name="search-query" />
    </Row>
  </div>
);

export default SearchField;
