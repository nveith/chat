Messages = new Meteor.Collection('messages', function () {
    return Messages.find({
        $or: [{
            accessUser: loggedInUser(this.userId)
        }, {
            ownerUser: loggedInUser(this.userId)
        }],
        $or: [{
            accessUser: friendSelect()
        }, {
            ownerUser: friendSelect()
        }]
    })
});

Friends = new Meteor.Collection('friends');

function friendSelect() {
    //console.log("click detected");
    var radios = document.getElementsByName('friendSelect');
    var friendSelected = '';

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            friendSelected = radios[i].value;
        }
    }
    return friendSelected;    
};

function loggedInUser(userId) {
    if (Meteor.users.findOne({
        _id: userId
    })) {
        return Meteor.users.findOne({
            _id: userId
        }).emails[0].address;
    } else {
        return '';
    }
};

if (Meteor.isClient) {

    var accessUserIds = {};

    Template.messages.messages = function () {
        return Messages.find({}, {
            sort: {
                time: 1
            }
        });
    }
    
    Template.messages.clear = function () {
    	return 1
    }

    Template.friends.friends = function () {

        var friendsArr = [];
        var friendNames = [];

        friendsArr = Friends.findOne({
            userId: this.userId
        }, {
            sort: {
                time: 1
            }
        }).friendAccounts;

        for (i = 0; i < friendsArr.length; i++) {
            friendNames.push({
                name: friendsArr[i].userName
            })
        }

        return friendNames;
    }

    Template.entryfield.events = {
        "keydown #message": function (event) {
            if (event.which == 13) {
                // Submit the form
                var name = document.getElementById('name');
                var message = document.getElementById('message');

                if (Meteor.user && message.value != '' && friendSelect() != '') {
                    Messages.insert({
                        ownerUser: loggedInUser(this.userId),
                        accessUser: friendSelect(),
                        name: loggedInUser(this.userId),
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