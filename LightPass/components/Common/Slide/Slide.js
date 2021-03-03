import React from 'react';
import PropTypes from 'prop-types';
// import { Card, Paragraph } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import styles from './styles';

function Slide({ image, title }) {
  return (
  // <Card style={styles.slide}>
  //   <Card.Cover style={styles.slideImage} source={image} />
  //   <Card.Content Title style={styles.slideTitle}>
  //     <Paragraph>{title}</Paragraph>
  //   </Card.Content>
  // </Card>
    <View style={styles.slide}>
      <Image style={styles.slideImage} source={image} />
      {title ? <Text style={styles.slideTitle}>{title}</Text> : null }
    </View>
  );
}

Slide.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.node,
};


Slide.defaultProps = {
  title: null,
};

export default Slide;
