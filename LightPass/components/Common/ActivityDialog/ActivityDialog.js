import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import DialogContainer from '../../../containers/Common/DialogContainer';

export default class ActivityDialog extends Component {
  async componentDidMount() {
    const { onComponentDidMount } = this.props;

    if (onComponentDidMount) {
      await onComponentDidMount();
    }
  }

  async componentDidUpdate() {
    const { onComponentDidUpdate } = this.props;

    if (onComponentDidUpdate) {
      await onComponentDidUpdate();
    }
  }

  async componentWillUnmount() {
    const { onComponentWillUnmount } = this.props;

    if (onComponentWillUnmount) {
      await onComponentWillUnmount();
    }
  }

  render() {
    const {
      dialogName,
      title,
      titleStyle,
      content,
      bottomContent,
      contentStyle,
      onDismiss,
      dismissable,
      style,
      isContentScrollable,
    } = this.props;

    return (
      <DialogContainer
        dialogName={dialogName}
        title={title}
        titleStyle={titleStyle}
        contentStyle={contentStyle}
        onDismiss={onDismiss}
        dismissable={dismissable}
        style={style}
        isContentScrollable={isContentScrollable}
        content={(
          <>
            {content}
            <Spinner visible />
            {bottomContent}
          </>
        )}
      />
    );
  }
}


ActivityDialog.propTypes = {
  onComponentDidMount: PropTypes.func,
  onComponentDidUpdate: PropTypes.func,
  onComponentWillUnmount: PropTypes.func,
  dialogName: PropTypes.string.isRequired,
  isContentScrollable: PropTypes.bool,
  dismissable: PropTypes.bool,
  onDismiss: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.node,
  titleStyle: PropTypes.object,
  content: PropTypes.node,
  bottomContent: PropTypes.node,
  contentStyle: PropTypes.object,
};


ActivityDialog.defaultProps = {
  onComponentDidMount: null,
  onComponentDidUpdate: () => {},
  onComponentWillUnmount: () => {},
  isContentScrollable: null,
  title: null,
  titleStyle: null,
  content: null,
  bottomContent: null,
  contentStyle: null,
  onDismiss: null,
  dismissable: true,
  style: null,
};
