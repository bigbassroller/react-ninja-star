import React from 'react';
import { connect } from 'react-redux';
import PortfolioList from '../views/portfolio-list';
import * as portfolioApi from '../../api/portfolio-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const PortfolioListContainer = React.createClass({

  componentDidMount: function() {
    portfolioApi.getPortfolioItems();
    store.dispatch(loadSearchLayout('portfolioItems', 'PortfolioItems Results'));
  },

  render: function() {
    return (
      <PortfolioList portfolioItems={this.props.portfolioItems} deletePortfolioItem={portfolioApi.deletePortfolioItem} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    portfolioItems: store.portfolioItemState.portfolioItems
  };
};

export default connect(mapStateToProps)(PortfolioListContainer);
