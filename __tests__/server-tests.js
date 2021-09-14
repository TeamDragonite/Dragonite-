const request = require('supertest');
const jest = require('@jest/globals');
const app = require('./app.js');
const server = 'http://localhost:3000';
// const db = require('../server/db/markets');


describe("POST /posts", () => {
  const post = {
    title: "test Title",
    description: "test Description",
    difficulty: "Hard",
    effortLevel: "1 day",
    tags: ["javascript"]
  };

  describe("when passed Title, Description, Difficulty, LOE, and Tags", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/posts").send(post);
      expect(response.statusCode).toBe(200);
    }),
    test("response should be created post object", () => {
      expect(response.body).toEqual(post);
    }),
    // ID should be automatically generated
    test("created post object should have an ID of 1", () => {
      expect(response.body.id).toEqual(1);
    })
  });

  describe("when passed bad data,", () => {
    //set up bad data
    //title is not string
    test("response should be an error when passed wrong type for title", async () => {
      const response = await request(app).post("/posts").send({...post, title = 1});
      expect(response).toBeInstanceOf(Error);
    })
    //description is not string
    test("response should be an error when passed wrong type for description", async () => {
      const response = await request(app).post("/posts").send({...post, difficulty = 1});
      expect(response).toBeInstanceOf(Error);
    })
    //difficulty is not string
    test("response should be an error when passed wrong type for difficulty", async () => {
      const response = await request(app).post("/posts").send({...post, description = 1});
      expect(response).toBeInstanceOf(Error);
    })
    //effortLevel is not string
    test("response should be an error when passed wrong type for effortLevel", async () => {
      const response = await request(app).post("/posts").send({...post, effortLevel = 1});
      expect(response).toBeInstanceOf(Error);
    })
    //tags is not array
    test("response should be an error when tags not passed an array", async () => {
      const response = await request(app).post("/posts").send({...post, tags = "javascript"});
      expect(response).toBeInstanceOf(Error);
    })
    //tags array does not contain strings 
    test("response should be an error when tags array does not contain string type", async () => {
      const response = await request(app).post("/posts").send({...post, tags = [1]});
      expect(response).toBeInstanceOf(Error);
    })

    // CHECK IF INCOMPLETE DATA RETURN ERROR
    //missing title
    test("error out when missing title", async () => {
      const response = await request(app).post("/posts").send({...post, title = null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing description
    test("error out when missing description", async () => {
      const response = await request(app).post("/posts").send({...post, difficulty = null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing difficulty
    test("error out when missing difficulty", async () => {
      const response = await request(app).post("/posts").send({...post, description = null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing effort level
    test("error out when missing effortLevel", async () => {
      const response = await request(app).post("/posts").send({...post, effortLevel = null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing tags
    test("error out when missing tags", async () => {
      const response = await request(app).post("/posts").send({...post, tags = null});
      expect(response).toBeInstanceOf(Error);
    })
    //tags empty
    test("error out tags is empty", async () => {
      const response = await request(app).post("/posts").send({...post, tags = []});
      expect(response).toBeInstanceOf(Error);
    })
  });

  describe("GET /posts", () => {
    //pull test post and verify details

    //test filtered queries
    //is this a 
  })

  describe("UPDATE /posts", () => {
    //verify likes starts at 0
    //increment likes 
    //decrement likes
    //verify values
  })

  describe("POST /comments", () => {
    //initialize comment data. body, postId
    //post comment
    //verify response status
    //verify response body is comment
    //verify post ID

    //post comment without body
    //verify error
  })
  
  describe("GET /comments", () => {
    //pull test comment and verify details
  })

  describe("POST /tags", () => {
    //verify Tag is created
  })
  
  describe("GET /tags", () => {
    //verify Tag is created
  })

})

