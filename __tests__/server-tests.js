const request = require('supertest');
const jest = require('@jest/globals');
const app = require('./app.js');
const server = 'http://localhost:3000';
// const db = require('../server/db/markets');


describe("POST /projects", () => {
  const project = {
    title: "test Title",
    description: "test Description",
    difficulty: "hard",
    effortLevel: "1 day",
  };

  describe("when passed Title, Description, Difficulty, LOE, and Tags", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/projects").send(project);
      expect(response.statusCode).toBe(200);
    }),
    test("response should be created post object", () => {
      expect(response.body).toEqual({
        title: "test Title",
        description: "test Description",
        difficulty: "hard",
        effortLevel: "1 day",
      });
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
      const response = await request(app).post("/projects").send({...project, title : 1});
      expect(response).toBeInstanceOf(Error);
    })
    //description is not string
    test("response should be an error when passed wrong type for description", async () => {
      const response = await request(app).post("/projects").send({...project, difficulty : 1});
      expect(response).toBeInstanceOf(Error);
    })
    //difficulty is not string
    test("response should be an error when passed wrong type for difficulty", async () => {
      const response = await request(app).post("/projects").send({...project, description : 1});
      expect(response).toBeInstanceOf(Error);
    })
    //effortLevel is not string
    test("response should be an error when passed wrong type for effortLevel", async () => {
      const response = await request(app).post("/projects").send({...project, effortLevel : 1});
      expect(response).toBeInstanceOf(Error);
    })

    // CHECK IF INCOMPLETE DATA RETURN ERROR
    //missing title
    test("error out when missing title", async () => {
      const response = await request(app).post("/projects").send({...project, title : null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing description
    test("error out when missing description", async () => {
      const response = await request(app).post("/projects").send({...project, difficulty : null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing difficulty
    test("error out when missing difficulty", async () => {
      const response = await request(app).post("/projects").send({...project, description : null});
      expect(response).toBeInstanceOf(Error);
    })
    //missing effort level
    test("error out when missing effortLevel", async () => {
      const response = await request(app).post("/projects").send({...project, effortLevel : null});
      expect(response).toBeInstanceOf(Error);
    })
  });
});

describe("GET /projects", () => {

  const project = {
    title: "test Title",
    description: "test Description",
    difficulty: "Hard",
    effortLevel: "1 day"
  };

  const response = request(app).post("/projects").send({...project, title : 1});

  //pull test post and verify details
  describe("when retrieve a test project,", () => {
    //set up bad data
    //title is not string
    test("response should return one project", async () => {
      const 
      expect(response.length).toEqual(1);
      expect(response.body).toEqual({
        title: "test Title",
        description: "test Description",
        difficulty: "Hard",
        effortLevel: "1 day"
      });
    });
  //test filtered queries
  //is this a 
  })

  /*
  describe("UPDATE /projects", () => {
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
    const tag = {
      name : "testTag"
    };

    const techstack = {
      name : "testTechstack"
    };

    //verify Tag is created
  })
  
  describe("GET /tags", () => {
    //verify Tag is created
    const tag = {
      name : "testTag"
    };

    const techstack = {
      name : "testTechstack"
    };

  })
  */

})

