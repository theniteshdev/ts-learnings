type User = {
  username: string;
  age: number;
  email: string;
  gender: "male" | "female";
  isAdmin: boolean;
};

function startServer(serverInstance: number): void {
  console.log("server started with", serverInstance, "instances.");
}
startServer(33);

function addUser(user: User): "done" | "error" | "pending" {
  const { username } = user;
  if (!username) {
    console.log("Error while adding user.")
    return "error";
  }
  console.log(`${username} successfully added to the database.`);
  return "done";
}

const addUserStatus = addUser({
  age: 11,
  email: "nitesh@gmail.com",
  gender: "male",
  isAdmin: false,
  username: "niteshpro",
});

console.log(`Status of the User Add Operation is- ${addUserStatus}`);


function startCoding(requirements: {
    waterBottle: boolean,
    laptop: boolean,
    mood: boolean
}): "yes" | "no"{
    const {waterBottle, laptop, mood} = requirements;
    if(!waterBottle || !laptop || !mood){
        console.log("Please fill my requirements to start coding !");
        return "no";
    }else{
        console.log("Yeah, coding starting...");
        return "yes";
    };
};

startCoding({laptop: false, mood: true, waterBottle: false});
startCoding({laptop: true, mood: true, waterBottle: true});