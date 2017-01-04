import { Meteor } from 'meteor/meteor';
contacts = new Mongo.Collection( "contacts" );


Meteor.startup
	(
		function ()
		{
			// Populate once
			if( ! contacts.find().count() )
			{
				contacts.insert({ name : "Sponge", firstname : "Bob"});
				contacts.insert({ name : "Spozdznge", firstname : "dzzdBob"});
				contacts.insert({ name : "Sponzdzdzge", firstname : "Bozdzadzdb"});
			}
		}
	);