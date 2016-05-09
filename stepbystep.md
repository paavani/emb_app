#1.
	$ember generate route songs

It will generate the
	->installing route
		 create app/routes/songs.js
		 create app/templates/songs.hbs
	->updating router
	    add route songs
	->installing route-test
       create tests/unit/routes/songs-test.js
#2.Route Handlers are responsible for loading model data.we can add our songs hard-coded data to the app/routes/songs.js or app/routes/index.js as the return value of the hook.

	here model() function  acts as a hook.the model hook added to our songs route,handler will be called when user enters the songs route.

	the model hook returns our songs array and passes it to our songs template as a model property.
	
#3.Templates:
	
	we can use the model data to display our songs list.here we can use one of the common handlebars helper {{each}}.It will loop through each of the objects in our model. 
	we loop through each model object and call it song.for each song we create and listing with information.

#4.create ember generate  route bands
	-->installing route
			create app/routes/bands.js
			create app/templates/bands.hbs
	-->updating router   (this.route('bands')  updated
		   add route bands
	-->installing route-test
		   create tests/unit/routes/bands-test.js

