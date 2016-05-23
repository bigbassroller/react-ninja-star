import * as types from '../actions/action-types';

export function getPortfolioItemsSuccess(portfolioItems) {
  return {
    type: types.GET_PORTFOLIO_ITEMS_SUCCESS,
    portfolioItems
  };
}

export function deletePortfolioItemsSuccess(portfolioItemId) {
  return {
    type: types.DELETE_PORTFOLIO_ITEM_SUCCESS,
    portfolioItemId
  };
}

export function portfolioItemProfileSuccess(portfolioItemProfile) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    portfolioItemProfile
  };
}
