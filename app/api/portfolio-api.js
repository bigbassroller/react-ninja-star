import axios from 'axios';
import store from '../store';
import { getPortfolioItemsSuccess, deletePortfolioItemSuccess, portfolioItemProfileSuccess } from '../actions/portfolio-actions';

/**
 * Get all portfolio items
 */

export function getPortfolioItems() {
  return axios.get('http://localhost:3001/portfolio')
    .then(response => {
      store.dispatch(getPortfolioItemsSuccess(response.data));
      return response;
    });
}

/**
 * Search portfolio items
 */

export function searchPortfolioItems(query = '') {
  return axios.get('http://localhost:3001/portfolio?q='+ query)
    .then(response => {
      store.dispatch(getPortfolioItemsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a user
 */

export function deletePortfolioItem(portfolioItemId) {
  return axios.delete('http://localhost:3001/portfolio/' + portfolioItemId)
    .then(response => {
      store.dispatch(deletePortfolioItemSuccess(portfolioItemId));
      return response;
    });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */

export function getProfile(portfolioItemId) {

  // Start with an empty profile object and build it up
  // from multiple XHR requests.
  let profile = {};

  // Get the portfolio item data from our local database.
  return axios.get('http://localhost:3001/portfolio/' + portfolioItemId)
    .then(response => {

      let portfolioItem = response.data;
      profile.name = portfolioItem.name;
      profile.twitter = portfolioItem.twitter;
      profile.worksOn = portfolioItem.worksOn;
      profile.imageUrl = portfolioItem.imageUrl;

      // Use the github attribute from the previous request to
      // send a XHR requests to portfolio API, for the
      // portfolio item info.
      return Promise.all([
        axios.get('http://localhost:3001/portfolio/' + portfolioItem.github)
      ]).then(results => {

        let githubProfile = results[0].data;

        profile.imageUrl = githubProfile.imageUrl;

        store.dispatch(portfolioItemProfileSuccess(profile));

        return;

      });

    });

}
