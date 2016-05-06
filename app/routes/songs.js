import Ember from 'ember';

var songs=[{

	Title: 'Black Dog',
	Band:  'Led Zeppelin',
	Rating: 3
}, {
	Title: 'Yellow Ledbetter',
	Band:  'Pearljam',
	Rating: 4
}, {
	Title: 'The Pretender',
	Band:  'Foo Fighters',
	Rating: 2
}];
export default Ember.Route.extend({
	model() {
		return songs;
	}		
});
