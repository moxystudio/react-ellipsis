import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { throttle } from 'lodash';

class Ellipsis extends Component {
    containerRef = createRef();

    state = {
        isPrepared: false,
    };

    constructor(props) {
        super(props);

        this.throttleHandleResize = throttle(this.handleResize, 250);
    }

    componentDidMount() {
        window.addEventListener('resize', this.throttleHandleResize, { passive: true });

        this.ellipsize();

        this.setState({ isPrepared: true });
    }

    componentDidUpdate() {
        this.ellipsize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttleHandleResize, { passive: true });
    }

    render() {
        const { children, tag: Tag, className } = this.props;
        const { isPrepared } = this.state;

        const containerClassName = classNames('container', {
            reveal: isPrepared,
        }, className);

        return (
            <Tag
                ref={ this.containerRef }
                className={ containerClassName }
                { ...this.props }>
                { children }
            </Tag>
        );
    }

    ellipsize = () => {
        const element = this.containerRef.current;
        const words = this.props.children;
        let wordsArray = [];

        element.innerHTML = words;

        wordsArray = typeof words === 'string' && words.split(' ');

        /* istanbul ignore next */
        while (element.scrollHeight > element.offsetHeight && wordsArray.length > 0) {
            wordsArray.pop();
            element.innerHTML = `${wordsArray.join(' ')}...`;
        }
    };

    /* istanbul ignore next */
    handleResize = () => {
        this.ellipsize();
    };
}

Ellipsis.propTypes = {
    children: PropTypes.string.isRequired,
    tag: PropTypes.string,
    className: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

Ellipsis.defaultProps = {
    tag: 'p',
};

export default Ellipsis;
