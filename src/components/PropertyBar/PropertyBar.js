// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './PropertyBar.css';

type Props = {
  id: string,
  handleSelectEditItem: Function,
  handleDeleteItem: Function
};

const PropertyBar = (props: Props) => (
  <div className="property_bar__component">
    <button
      className="btn btn-secondary property_bar__button"
      onClick={() => props.handleSelectEditItem(props.id)}>
      <FontAwesomeIcon icon={faEdit} size="sm" />
    </button>
    <button className="btn btn-danger property_bar__button" onClick={() => props.handleDeleteItem(props.id)}>
      <FontAwesomeIcon icon={faTrash} size="sm" />
    </button>
  </div>
);

export default PropertyBar;
