Messages = new Meteor.Collection('messages');
Friends = new Meteor.Collection('friends');

function friendSelect() {
    //console.log("click detected");
    var radios = document.getElementsByName('friendSelect');
       
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            Session.set("friend", radios[i].value);
        }
    }   
};


function loggedInUser() {
    if (Meteor.users.findOne({
        _id: this.userId
    })) {
        return Meteor.users.findOne({
            _id: this.userId
        }).emails[0].address;
    } 
};

if (Meteor.isClient) {
	
//	Meteor.startup(function() {
//        $('[name="friendSelect"]').on('change', function(event) {
//            console.log($(this).val());
//            Session.set('friend', $(this).val());
//        });
//    });

    Template.messages.messages = function () { 
	    return Messages.find({$and: [{accessUsers:loggedInUser()}
	    						    ,{accessUsers:Session.get("friend")}]}
	    					 , {sort: {time: 1}});
	    };

    Template.friends.friends = function () {
	        return Friends.find({friendAccounts: loggedInUser(userId)});
    }

    Template.entryfield.events = {
        "keydown #message": function (event) {
            if (event.which == 13) {
                // Submit the form
                var name = document.getElementById('name');
                var message = document.getElementById('message');

                if (Meteor.user() && message.value != '' && friendSelect() != '') {
                    Messages.insert({
                        ownerUser: loggedInUser(),
                        accessUsers: [Session.get("friend"),loggedInUser()],
                        name: loggedInUser(),
                        message: message.value,
                        time: Date.now()
                    });

                    message.value = '';
                    Template.messages.messages();
                } else if (friendSelect() == '') {
                    alert("Select a user to chat with before sending a message")
                }
            }
        }
    }

}