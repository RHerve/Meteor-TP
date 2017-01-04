import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './main.css';

contacts = new Mongo.Collection( "contacts" );


/////////// Add contact ///////////

Template.add.events({

  'click button' : function( event, template )
		{
			event.preventDefault();
			var $name = template.find( "#nom" );
			var $firstname = template.find( "#prenom" );

			if( $name.value !== "" && $firstname.value !== "" ){

				contacts.insert( { name : $name.value , firstname : $firstname.value } );
			}
		}

});


/////////// Display contacts ///////////

Template.list.helpers({
	contacts:function(){
		return contacts.find()
	}
});


/////////// Delete contacts ///////////

Template.listing.events({

  'click .delete' : function( event, template )
		{
			event.preventDefault();
			contacts.remove(this._id);
		}

});



/////////// Update contacts ///////////

Template.listing.events({

  'click .update' : function( event, template )
		{
			event.preventDefault();
			var $name = template.find( "#nom" ).innerHTML;
			var $firstname = template.find( "#prenom" ).innerHTML;
			console.log($name);

			var fieldName = template.find('.nameUpdate');
			var fieldFirstname = template.find('.firstNameUpdate');
			var fieldbutton = template.find('.newUpdate');

			var formGroup = template.find('.fieldUpdate');
			formGroup.classList.add('display');
			formGroup.classList.remove('invisible');

			fieldName.value = $name;
			fieldFirstname.value = $firstname;

			/*
			contacts.update(
				this._id,{
				$set : {name: $name, firstname: $firstname }
			})*/

		},
		
	'click #newUpdate' : function( event, template )
		{
			event.preventDefault();
			var $name2 = template.find('.nameUpdate');
			var $firstname2 = template.find('.firstNameUpdate');
			var $fieldbutton2 = template.find('.newUpdate');
			var formGroup = template.find('.fieldUpdate');
			console.log($name2.value + $firstname2.value);

			if( $name2 !== "" && $firstname2 !== "" ){
				contacts.update(
				this._id,{
				$set : {name: $name2.value, firstname: $firstname2.value }	
			});
				formGroup.classList.add('invisible');
				formGroup.classList.remove('display');
			}
		}

});


