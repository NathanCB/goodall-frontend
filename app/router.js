import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('event', { path: '/' }, function() {
    this.route('detail', { path: '/:id' })
    this.route('edit');
    this.route('new');
  });
  this.route('login');
  this.route('register');
  this.route('archive');
  this.route('new-space');
});

export default Router;
