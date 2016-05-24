import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  portfolioItems: [],
  portfolioItemProfile: {}
};

const portfolioReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_PORTFOLIO_ITEMS_SUCCESS:
      return Object.assign({}, state, { portfolioItems: action.portfolioItems });

    case types.DELETE_PORTFOLIO_ITEM_SUCCESS:

      // Use lodash to create a new portfolio items array without the portfolio item we want to remove
      const newPortfolioItems = _.filter(state.portfolioItems, portfolioItem => portfolioItem.id != action.portfolioItemId);
      return Object.assign({}, state, { portfolioItems: newPortfolioItems });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { portfolioItemProfile: action.portfolioItemProfile });

  }

  return state;

}

export default portfolioReducer;
