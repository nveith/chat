
// temporary code to manufacture friend relationships
Friends.remove({});
Friends.insert({userAccount : "nicholas@pocument.com",
				userId : "b4d67595-4f25-4458-bb5a-8eae313db392",
				friendAccounts : [
					{userName: "nveith@gmail.com",
					userId: "6ad031b4-8454-46b7-99d2-fc9c5945c26a"
					},
					{userName: "onefriend@gmail.com",
					userId: "9cc719c5-ec4d-48ed-ba15-d57abf61fb74"
					}										
					]
				});
Friends.insert({userAccount : "nveith@gmail.com",
				userId : "6ad031b4-8454-46b7-99d2-fc9c5945c26a",
				friendAccounts : [
					{userName: "nicholas@pocument.com",
					userId: "b4d67595-4f25-4458-bb5a-8eae313db392"
					}			
					]
				});
Friends.insert({userAccount : "onefriend@gmail.com",
				userId : "9cc719c5-ec4d-48ed-ba15-d57abf61fb74",
				friendAccounts : [
					{userName: "nicholas@pocument.com",
					userId: "b4d67595-4f25-4458-bb5a-8eae313db392"
					}					
					]
				});
Friends.insert({userAccount : "unpopular@gmail.com",
				userId : "deea63aa-8449-4f06-83f3-e43c36366085",
				friendAccounts : [	
					]
				});
