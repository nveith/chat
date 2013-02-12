// temporary code to manufacture friend relationships
Meteor.startup(function(){
	
Messages = new Meteor.Collection('messages');
Friends = new Meteor.Collection('friends');

Friends.remove({});
Friends.insert({
    userAccount: "nicholas@pocument.com",
    userId: "b4d67595-4f25-4458-bb5a-8eae313db392",
    friendAccounts: ["6ad031b4-8454-46b7-99d2-fc9c5945c26a",
        "9cc719c5-ec4d-48ed-ba15-d57abf61fb74",
        "9022213a-0f24-43ae-9dbc-6ace67908ad1"]
});
Friends.insert({
    userAccount: "nveith@gmail.com",
    userId: "6ad031b4-8454-46b7-99d2-fc9c5945c26a",
    friendAccounts: ["b4d67595-4f25-4458-bb5a-8eae313db392",
    	"9cc719c5-ec4d-48ed-ba15-d57abf61fb74",
    	"9022213a-0f24-43ae-9dbc-6ace67908ad1"]
});
Friends.insert({
    userAccount: "onefriend@gmail.com",
    userId: "9cc719c5-ec4d-48ed-ba15-d57abf61fb74",
    friendAccounts: ["b4d67595-4f25-4458-bb5a-8eae313db392",
    	"6ad031b4-8454-46b7-99d2-fc9c5945c26a",
    	"9022213a-0f24-43ae-9dbc-6ace67908ad1"]
});
Friends.insert({
    userAccount: "isaaclee@pocument.com",
    userId: "9022213a-0f24-43ae-9dbc-6ace67908ad1",
    friendAccounts: ["b4d67595-4f25-4458-bb5a-8eae313db392",
    	"6ad031b4-8454-46b7-99d2-fc9c5945c26a",
    	"9cc719c5-ec4d-48ed-ba15-d57abf61fb74"]
});




});