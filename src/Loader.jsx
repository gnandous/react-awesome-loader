import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Timeline';

import './loader.css';

class Loader extends React.Component {
  static propTypes = {
    nbrItems: PropTypes.number.isRequired,
  }

  /**
   * @constructor
   * @param {object} props compnent props
   */
  constructor(props) {
    super(props);

    if (!props.nbrItems) {
      throw new Error('[ nbrItemps ] must be provided.');
    }
  }

  /**
   * renderItem
   * @param  {object} key
   */

  render() {
    const { nbrItems } = this.props;
    return (
      <div className="margin-top-ajust">
        {
          Array.from(new Array(nbrItems).keys())
            .map(index =>
              <Wrapper key={index} />)
        }
      </div>
    );
  }
}

export default Loader;
