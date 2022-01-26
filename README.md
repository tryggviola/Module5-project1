# Back-end - NoSQL in the cloud // Module 5 - Project 1

## Project brief

Create a MERN stack w and play around with routes, JSON data and the code.

## The Goal

<ul>
<li>Understand how to make a RESTful API</li>
<li>Understand what a NoSQL database is</li>
<li>Understand the difference between a NoSQL and SQL database</li>
<li>Understand how to query a NoSQL database</li>
<li>Be able to create a web server that gets data from a database</li>
<li>Be able to respond to a get request and serve some data from the server</li>
</ul>

## Intro

Going into the back-end portion of our study was terrifying since I don't feel like I have the front-end part of it down. But the step-by-step tutorial from Smári was great and really easy to understand. I feel like I learned a lot in this guide and I can't wait to dive deeper into the back-end even though my interest lie in the front part of the coding.

## The Process

I started going through the guide that Smári made (https://faun.pub/the-mern-stack-for-beginners-e607eb8b7100), installed <strong>Yarn</strong> and <strong>Express</strong> and setup my first ever server. Then I created a <strong>MongoDB</strong> account and made my first Database. I created a simple <strong>React</strong> app too see if everything was working as it should. Once everything was working I played a little bit with the Database which I created and added more data into it and made a simple filtering app.

## The journey

Since the tutorial from Smári was really simple everything fell nicely into place. I was terrified to start the project but once I got started it was actually really enjoyable and it was nice seeing everything coming together. I had a lot of fun putting together the React part of the assignment even though the subject/data I decided to use was quite boring there was a lot of work that went into it.

## Conclusion

I will for sure be using the MERN stack again, I am really happy that we got the chance to do some back-end work even though I was nervous about starting this Module. I quite enjoyed it and it was really satisfying seeing your data come up on the screen when everything was ready.

# How to run the app

Start by cloning the project folder

### Running the application

Open terminal and route to MERN-server and run the following commands:

```
yarn install
yarn start
```

Open another terminal and route to MERN-app and run the following commands:

```
yarn install
yarn start
```

It should automatically open browser on http://localhost:3000 if not you can route to http://localhost:3000 on any local browser

**Make sure you have both terminals running, one for the server(MERN-server) and one for the React application(MERN-app).**

You should see a raw React application with out any styling as this project was only focused on the backend site.
You can use the dropdown filter to filter the list of devices(phones) by vendors.
The client fetches the updated list from the api that fetches from the mongoDB database with the defined vendor filter so all filtering is done on the server side not the client.

### Api endpoints

Here is a link to a Postman collection for using the api endpoints:
https://www.getpostman.com/collections/9c5c4f760686de54d66a

You can also open the browser to localhost:5001 and play with the api endpoints I have set up on the server. These are all get requests.

http://localhost:5001/devices - returns a list of all devices

http://localhost:5001/devices/:id - returns a device of specific id - example: http://localhost:5001/devices/61f0899a41e702eeb0d81ce2

http://localhost:5001/devices/vendor/:vendor - returns a list of all devices of that vendor - example: http://localhost:5001/devices/vendor/apple
