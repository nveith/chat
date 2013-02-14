if (Meteor.isClient) {
	
	Meteor.autosubscribe( function() {
	Meteor.subscribe('clientMessages');
	});
			
	Meteor.subscribe('clientFriends');
	
	Messages = new Meteor.Collection('messages');
	Friends = new Meteor.Collection('friends');

    Template.messages.messages = function () {
        return Messages.find({accessUsers: Session.get('friendId')});
    };

    Template.friends.friends = function () {
        return Friends.find({});
    }
    
	Template.friends.rendered = function() {
		consoleLog = function() {
			console.log("logging to console");
		};
		$('.friendSelect').on('click', function(event) {
					Session.set('friendId', $(this).attr("value"));
				});
		$('.unFriend').on('click', function(event) {
					console.log("unFriend incoming");
				});
	};

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