import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import CarouselBase, { Pagination } from 'react-native-snap-carousel';
import { View, Dimensions } from 'react-native';
import styles from './styles';
import Slide from '../Slide';
import { spacing } from '../../../common/theme';

export default class Carousel extends Component {
  renderItem = ({ item }) => (<Slide title={item.title} image={item.image} />);

  render() {
    const {
      data,
      handleSnapToItem,
      activeSlideNumber,
      reference,
    } = this.props;
    // gutterWidth * 2 = width without gutters
    const carouselWidth = Dimensions.get('window').width - spacing.gutterWidth * 4;

    return (
      <View>
        <CarouselBase
          ref={reference}
          data={data}
          renderItem={this.renderItem}
          sliderWidth={carouselWidth}
          itemWidth={carouselWidth}
          onSnapToItem={handleSnapToItem}
          hasParallaxImages
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlideNumber}
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.paginationDotContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotScale={1}
          inactiveDotOpacity={0.3}
        />
      </View>
    );
  }
}

Carousel.propTypes = {
  data: PropTypes.arrayOf(object).isRequired,
  activeSlideNumber: PropTypes.number.isRequired,
  handleSnapToItem: PropTypes.func.isRequired,
  reference: PropTypes.func.isRequired,
};
