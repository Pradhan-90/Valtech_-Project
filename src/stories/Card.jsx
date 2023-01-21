import React from 'react';
import PropTypes from 'prop-types';
import { Card as card } from 'antd';
import './Card.css';

export const Card = ({ image, title, extra, ...props }) => {
  return (
    <card
      type="card"
      className={['storybook-card']}
      {...props}
      image={image}
    >
      {title} {extra}
    </card>
  );
};

card.propTypes = {

  extra: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

card.defaultProps = {
extra: '',
title: '',
image: '',
};
