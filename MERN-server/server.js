//requiering express and initializing the app:
const app = require("express")();
//requiering the cors middleware:
const cors = require("cors");

const PORT = 5001; //we will use port 5001

//Database connection
const { MongoClient, ObjectId } = require("mongodb");
const uri =
	"mongodb+srv://Tryggvi:XQMTdxb1bn0THQwx@cluster0.pgcrg.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect();

//Setup Express server
app.use(cors()); //telling express to use the cors middleware

app.get("/", (_, res) => {
	res.send("Welcome to my API");
});

app.get("/devices/:id", async (req, res) => {
	try {
		const collection = client.db("test").collection("devices");
		const data = await collection.findOne({
			_id: new ObjectId(req.params.id),
		});

		res.send(JSON.stringify(data));
	} catch (e) {
		console.error(e);
		res.send("Could not find device for specified id");
	}
});

app.get("/devices/vendor/:vendor", async (req, res) => {
	try {
		const collection = client.db("test").collection("devices");
		const data = await collection
			.find(req.params.vendor && { vendor: req.params.vendor })
			.toArray();

		res.send(JSON.stringify(data));
	} catch (e) {
		console.error(e);
		res.send("Could not find devices for vendor");
	}
});

app.get("/devices", async (_, res) => {
	try {
		const collection = client.db("test").collection("devices");
		const data = await collection.find().toArray();

		res.send(JSON.stringify(data));
	} catch (e) {
		console.error(e);
		res.send("Could not find devices");
	}
});

app.listen(PORT, () => {
	//listen to the port we chose above
	//print to the console that the server is listening
	console.log("listening to port: " + PORT);
});
