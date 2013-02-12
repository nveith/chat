
if(Meteor.isServer) {
	
Meteor.publish("clientFriends", function () {
	return Friends.find({friendAccounts: this.userId});
	})
	
Meteor.publish("clientMessages", function (friendId) {
	return Messages.find({$and: [{accessUsers: this.userId},{accessUsers: friendId}]},{sort: {time: 1}});
	})
	
Meteor.methods({
	
	newMessage: function(messageVal, friendId){
		Messages.insert({
	        ownerUser: this.userId,
	        accessUsers: [friendId, this.userId],
	        name: Meteor.users.findOne({"_id":this.userId}).emails[0].address,
	        message: messageVal,
	        time: Date.now()
			});
		}
		
   });
   
}
