if (Meteor.isClient) {
	
	Meteor.startup(function() {
	Session.set("friendId", false);
	});
	
	Meteor.autosubscribe( function() {
	Meteor.subscribe('clientMessages',Session.get('friendId'));
	});
			
	Meteor.subscribe('clientFriends');
	
	Messages = new Meteor.Collection('messages');
	Friends = new Meteor.Collection('friends');
	
	function friendSelect() {
	    //console.log("click detected");
	    var radios = document.getElementsByName('friendSelect');
	
	    for (var i = 0; i < radios.length; i++) {
	        if (radios[i].checked) {
	            Session.set("friendId", radios[i].value);
	            return radios[i].value;
	        }
	    }
	};

    Template.messages.messages = function () {
        return Messages.find({});
    };

    Template.friends.friends = function () {
        return Friends.find({});
    }

    Template.entryfield.events = {
        "keydown #message": function (event) {
            if (event.which == 13) {
                // Submit the form
                var name = document.getElementById('name');
                var message = document.getElementById('message');

                if (Meteor.user() && message.value != '' && Session.get('friendId')) {
                    Meteor.call('newMessage',message.value, Session.get('friendId'),function (error,result) {
                    if (!error){    
                    	message.value = '';
                    	}                    	
                	})             
            	} 
                else if (!Session.get('friendId')) {
                    alert("Select a user to chat with before sending a message");
                }
            }
        }
    }

}