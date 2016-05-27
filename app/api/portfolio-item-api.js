import axios from 'axios';
import store from '../store';
import { getPortfolioItemsSuccess, deletePortfolioItemSuccess } from '../actions/portfolio-item-actions';

/**
 * Get widgets
 */

export function getPortfolioItems() {
  return axios.get('http://localhost:3001/portfolio-items')
    .then(response => {
      store.dispatch(getPortfolioItemsSuccess(response.data));
      return response;
    });
}

/**
 * Search Portfolio Items
 */

export function searchPortfolioItems(query = '') {
  return axios.get('http://localhost:3001/portfolio-items?q='+ query)
    .then(response => {
      store.dispatch(getPortfolioItemsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a widget
 */

export function deletePortfolioItem(portfolioItemID) {
  return axios.delete('http://localhost:3001/portfolio-items/' + portfolioItemID)
    .then(response => {
      store.dispatch(deletePortfolioItemSuccess(portfolioItemID));
      return response;
    });
}
