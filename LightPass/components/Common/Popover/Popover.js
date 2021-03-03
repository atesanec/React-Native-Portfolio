import React from 'react';

import PropTypes from 'prop-types';

import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import styles from './styles';
import { spacing } from '../../../common/theme';

const STATES = {
  HIDDEN: 'HIDDEN',
  ANIMATING: 'ANIMATING',
  SHOWN: 'SHOWN',
};

const EASING = Easing.bezier(0.4, 0, 0.2, 1);
const SCREEN_INDENT = spacing.gutterWidth;
const SUPPORTED_ORIENTATIONS = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right',
];

export default class Popover extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = null;

    this.state = {
      menuState: STATES.HIDDEN,
      top: 0,
      left: 0,
      menuWidth: 0,
      menuHeight: 0,
      buttonWidth: 0,
      buttonHeight: 0,
      menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
      opacityAnimation: new Animated.Value(0),
    };
  }


  computeStyles = () => {
    const dimensions = Dimensions.get('window');
    const { width: windowWidth } = dimensions;
    const windowHeight = dimensions.height - (StatusBar.currentHeight || 0);

    const {
      menuSizeAnimation,
      menuWidth,
      menuHeight,
      buttonWidth,
      buttonHeight,
      opacityAnimation,
    } = this.state;

    // Adjust position of menu
    let { left, top } = this.state;
    const transforms = [];

    // Flip by X axis if menu hits right screen border
    if (left > windowWidth - menuWidth - SCREEN_INDENT) {
      transforms.push({
        translateX: Animated.multiply(menuSizeAnimation.x, -1),
      });

      left = Math.min(windowWidth - SCREEN_INDENT, left + buttonWidth);
    } else if (left < SCREEN_INDENT) {
      left = SCREEN_INDENT;
    }

    // Flip by Y axis if menu hits bottom screen border
    if (top > windowHeight - menuHeight - SCREEN_INDENT) {
      transforms.push({
        translateY: Animated.multiply(menuSizeAnimation.y, -1),
      });

      // top = windowHeight - SCREEN_INDENT;
      top = Math.min(windowHeight - SCREEN_INDENT - buttonHeight, top);
    } else if (top < SCREEN_INDENT) {
      top = SCREEN_INDENT + buttonHeight;
    }

    return {
      opacity: opacityAnimation,
      transform: transforms,
      left,
      top,
    };
  };

  setContainerRef = (ref) => {
    this.containerRef = ref;
  };

  // Start menu animation
  onMenuLayout = (e) => {
    const { menuState, menuSizeAnimation, opacityAnimation } = this.state;
    const { animationDuration } = this.props;

    if (menuState === STATES.ANIMATING) return;

    const { width, height } = e.nativeEvent.layout;
    const animationParams = { duration: animationDuration, easing: EASING };

    this.setState(
      {
        menuState: STATES.ANIMATING,
        menuWidth: width,
        menuHeight: height,
      },
      () => {
        Animated.parallel([
          Animated.timing(menuSizeAnimation, {
            toValue: { x: width, y: height },
            ...animationParams,
          }),
          Animated.timing(opacityAnimation, { toValue: 1, ...animationParams }),
        ]).start();
      },
    );
  };

  onDismiss = () => {
    const { onHidden } = this.props;

    if (onHidden) onHidden();
  };

  show = () => this.containerRef.measureInWindow(
    (left, top, buttonWidth, buttonHeight) => {
      this.setState({
        menuState: STATES.SHOWN,
        buttonHeight,
        buttonWidth,
        left,
        top,
      });
    },
  );

  hide = () => {
    const { opacityAnimation, animationDuration } = this.state;
    const { onHidden } = this.props;

    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: animationDuration,
      easing: EASING,
    }).start(() => {
      const resetState = {
        menuState: STATES.HIDDEN,
        menuSizeAnimation: new Animated.ValueXY({ x: 0, y: 0 }),
        opacityAnimation: new Animated.Value(0),
      };

      this.setState(resetState, () => {
        if (onHidden) onHidden();
      });
    });
  };

  render() {
    const { menuState, menuSizeAnimation } = this.state;
    const isAnimationStarted = menuState === STATES.ANIMATING;
    const isModalVisible = menuState === STATES.SHOWN || isAnimationStarted;
    const menuSizeStyles = {
      width: menuSizeAnimation.x,
      height: menuSizeAnimation.y,
    };
    const shadowMenuContainerStyle = this.computeStyles();
    const {
      testID, anchor, style, children,
    } = this.props;

    return (
      <View ref={this.setContainerRef} collapsable={false} testID={testID}>
        <View>{anchor}</View>

        <Modal
          visible={isModalVisible}
          onRequestClose={this.hide}
          supportedOrientations={SUPPORTED_ORIENTATIONS}
          onDismiss={this.onDismiss}
          transparent
        >
          <TouchableWithoutFeedback onPress={this.hide} accessible={false}>
            <View style={StyleSheet.absoluteFill}>
              <Animated.View
                onLayout={this.onMenuLayout}
                style={[
                  styles.shadowMenuContainer,
                  shadowMenuContainerStyle,
                  style,
                ]}
              >
                <Animated.View
                  style={[
                    styles.menuContainer,
                    isAnimationStarted ? menuSizeStyles : null,
                  ]}
                >
                  {children}
                </Animated.View>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

Popover.propTypes = {
  animationDuration: PropTypes.number,
  anchor: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onHidden: PropTypes.func,
  style: ViewPropTypes.style,
  testID: ViewPropTypes.testID,
};

Popover.defaultProps = {
  animationDuration: 300,
  onHidden: null,
  style: null,
  testID: null,
};
