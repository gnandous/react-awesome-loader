import React from 'react';
import _ from 'lodash';
import './loader.css';

class Loader extends React.Component {
  /**
   * @constructor
   * @param {object} props compnent props
   */
  constructor(props) {
    super(props);
    if (!props.nbrItems) {
      throw new Error('You must supply an items number.');
    }
  }

  /**
   * renderItem
   * @param  {object} key
   */
  renderItem(key) {
    return (
      <div className="timeline-wrapper" key={key}>
        <div className="timeline-item">
          <div className="animated-background">
            <div className="background-masker header-top"></div>
            <div className="background-masker header-left"></div>
            <div className="background-masker header-right"></div>
            <div className="background-masker header-bottom"></div>
            <div className="background-masker subheader-left"></div>
            <div className="background-masker subheader-right"></div>
            <div className="background-masker subheader-bottom"></div>
            <div className="background-masker content-top"></div>
            <div className="background-masker content-first-end"></div>
            <div className="background-masker content-second-line"></div>
            <div className="background-masker content-second-end"></div>
            <div className="background-masker content-third-line"></div>
            <div className="background-masker content-third-end"></div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const limit = _.range(this.props.nbrItems);
    return (
      <div className="margin-top-ajust">
        {
          limit.map(index => {
            return this.renderItem(index);
          })
        }
      </div>
    );
  }
}

Loader.propTypes = {
  nbrItems: React.PropTypes.number.isRequired,
};
Loader.defaultProps = {
  nbrItems: 3,
};

export default Loader;
