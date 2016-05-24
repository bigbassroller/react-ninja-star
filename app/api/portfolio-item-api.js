import axios from 'axios';
import store from '../store';
import { getPortfolioItemsSuccess, deletePortfolioItemSuccess } from '../actions/widget-actions';

/**
 * Get widgets
 */

export function getPortfolioItems() {
  return axios.get('http://localhost:3001/portfolio')
    .then(response => {
      store.dispatch(getPortfolioItemsSuccess(response.data));
      return response;
    });
}

/**
 * Search Portfolio Items
 */

export function searchPortfolioItems(query = '') {
  return axios.get('http://localhost:3001/portfolio?q='+ query)
    .then(response => {
      store.dispatch(getPortfolioItemsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a widget
 */

export function deletePortfolioItem(portfolioItemID) {
  return axios.delete('http://localhost:3001/portfolio/' + portfolioItemID)
    .then(response => {
      store.dispatch(deletePortfolioItemSuccess(portfolioItemID));
      return response;
    });
}
