import React from 'react';
import { connect } from 'react-redux';
import PortfolioProfile from '../views/portfolio-profile';
import * as portfolioApi from '../../api/portfolio-api';

const PortfolioProfileContainer = React.createClass({

  componentDidMount: function() {
    let portfolioItemId = this.props.params.portfolioItemId
    portfolioApi.getPortfolioProfile(portfolioItemId)
  },

  render: function() {
    return (
      <PortfolioProfile {...this.props.portfolioProfile} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    portfolioProfile: store.portfolioItemState.portfolioItemProfile
  };
};

export default connect(mapStateToProps)(PortfolioProfileContainer);
