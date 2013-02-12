// temporary code to manufacture friend relationships
Meteor.startup(function(){
	
Messages = new Meteor.Collection('messages');
Friends = new Meteor.Collection('friends');

Friends.remove({});

meteorUsers = Meteor.users.find({}).fetch();
userIds = []

for(i=0;i<meteorUsers.length;i++){
	userIds.push(meteorUsers[i]._id)
	}

for(i=0;i<userIds.length;i++){
	Friends.insert({
		userAccount: Meteor.users.findOne({"_id": userIds[i]}).emails[0].address,
	    userId: userIds[i],
	    friendAccounts: userIds
		});
	}

});