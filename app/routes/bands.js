import Ember from 'ember';
//model is not defined ,so we create like this

var Band=Ember.Object.extend({
	name: '',
});

var ledZeppelin = Band.create({ name : 'Led Zeppelin'});
var pearlJam  	= Band.create({ name : 'Pearl Jam'});
var fooFighters	= Band.create({ name : 'Foo Fighters'});

var bands = [ledZeppelin,pearlJam,fooFighters];


export default Ember.Route.extend({
	model(){
		return bands;
	}
});
