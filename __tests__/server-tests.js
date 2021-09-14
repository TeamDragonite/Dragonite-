const request = require('supertest');
// const jest = require('@jest/globals');
const app = require('../server/server.js');
const server = 'http://localhost:3000';
const pool = require('../server/db/connect');

// function cleanUpDatabase(db) {
//   db.cleanUp();
// }


describe("POST /projects", () => {

  afterAll(async () => {
    const projectDeletionQuery = `DELETE FROM projects`;
    await pool.query(projectDeletionQuery, []);
  });

  const data = {
    title: "test Title",
    description: "test Description",
    difficulty: "hard",
    effortLevel: "1 day",
  };
  // const badData = {
  //   title: "test Title",
  //   description: "test Description",
  //   difficulty: "somethingwrong",
  //   effortLevel: "1 day",
  // };
  const comment = {
    text: 'This is a comment'
  }
  const projectId = 1;
  const techstackId = 1;

  describe("when passed Title, Description, Difficulty, LOE, and Tags", () => {
    describe('POST', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .post('/api/projects')
          .send(data)
          .expect('Content-type', /application\/json/)
          .expect(200)
      });
      // it ('responds with 500 status code', () => {
      //   return request(app)
      //     .post('/api/projects')
      //     .send(badData)
      //     .expect('Content-type', /application\/json/)
      //     .expect(500)
      // })
    })

    describe('GET', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .get('/api/projects')
          .expect('Content-type', /application\/json/)
          .expect(200)
      })
    })

    describe('addLikes', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .put('/api/projects/addLikes')
          .expect(200)
      })
    })

    describe('subtractLikes', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .put('/api/projects/subtractLikes')
          .expect(200)
      })
    })

    describe('add comment', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .post('/api/comments')
          .send(comment, projectId)
          .expect('Content-type', /application\/json/)
          .expect(200)
      })
    })

    describe('get comments', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .get('/api/comments')
          .expect('Content-type', /application\/json/)
          .expect(200)
      })
    })

    describe('add tag', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .post('/api/tags')
          .send(techstackId, projectId)
          .expect('Content-type', /application\/json/)
          .expect(200)
      })
    })

    describe('get tags', () => {
      it ('responds with 200 status code', () => {
        return request(app)
          .get('/api/tags')
          .expect('Content-type', /application\/json/)
          .expect(200)
      })
    })
    
    // test("should respond with a 200 status code", async () => {
    //   const response = await request(app).post("/projects").send(project);
    //   expect(response.statusCode).toBe(200);
    // }),
    // test("response should be created post object", () => {
    //   expect(response.body).toEqual({
    //     title: "test Title",
    //     description: "test Description",
    //     difficulty: "hard",
    //     effortLevel: "1 day",
    //   });
    // }),
    // // ID should be automatically generated
    // test("created post object should have an ID of 1", () => {
    //   expect(response.body.id).toEqual(1);
    // })
  });
});


//   describe("when passed bad data,", () => {
//     //set up bad data
//     //title is not string
//     test("response should be an error when passed wrong type for title", async () => {
//       const response = await request(app).post("/projects").send({...project, title : 1});
//       expect(response).toBeInstanceOf(Error);
//     })
//     //description is not string
//     test("response should be an error when passed wrong type for description", async () => {
//       const response = await request(app).post("/projects").send({...project, difficulty : 1});
//       expect(response).toBeInstanceOf(Error);
//     })
//     //difficulty is not string
//     test("response should be an error when passed wrong type for difficulty", async () => {
//       const response = await request(app).post("/projects").send({...project, description : 1});
//       expect(response).toBeInstanceOf(Error);
//     })
//     //effortLevel is not string
//     test("response should be an error when passed wrong type for effortLevel", async () => {
//       const response = await request(app).post("/projects").send({...project, effortLevel : 1});
//       expect(response).toBeInstanceOf(Error);
//     })

//     // CHECK IF INCOMPLETE DATA RETURN ERROR
//     //missing title
//     test("error out when missing title", async () => {
//       const response = await request(app).post("/projects").send({...project, title : null});
//       expect(response).toBeInstanceOf(Error);
//     })
//     //missing description
//     test("error out when missing description", async () => {
//       const response = await request(app).post("/projects").send({...project, difficulty : null});
//       expect(response).toBeInstanceOf(Error);
//     })
//     //missing difficulty
//     test("error out when missing difficulty", async () => {
//       const response = await request(app).post("/projects").send({...project, description : null});
//       expect(response).toBeInstanceOf(Error);
//     })
//     //missing effort level
//     test("error out when missing effortLevel", async () => {
//       const response = await request(app).post("/projects").send({...project, effortLevel : null});
//       expect(response).toBeInstanceOf(Error);
//     })
//   });
// });

// describe("GET /projects", () => {

//   // const project = {
//   //   title: "test Title",
//   //   description: "test Description",
//   //   difficulty: "Hard",
//   //   effortLevel: "1 day"
//   // };



//   // // posting the project to db
//   // const response = request(app).post("/projects").send({...project, title : 1});

//   // instead, mock post and set response equal to project

//   // mock get and check response equal to project
//   //pull test post and verify details
//   describe("when retrieve a test project,", () => {
//     //set up bad data
//     //title is not string
//     test("response should return one project", async () => {
//       const response = await request(app).get("/projects");
//       expect(response.statusCode).toBe(200); 
//     });
//     test("response length should be 1", () => {
//       expect(response.length).toEqual(1);
//     });
//     test("response body should be same as input data", () => {
//       expect(response.body).toEqual({
//         title: "test Title",
//         description: "test Description",
//         difficulty: "Hard",
//         effortLevel: "1 day"
//       });
//     })
//   });

//   /*
//   describe("UPDATE /projects", () => {
//     //verify likes starts at 0
//     //increment likes 
//     //decrement likes
//     //verify values
//   })

//   describe("POST /comments", () => {
//     //initialize comment data. body, postId
//     //post comment
//     //verify response status
//     //verify response body is comment
//     //verify post ID

//     //post comment without body
//     //verify error
//   })
  
//   describe("GET /comments", () => {
//     //pull test comment and verify details
//   })

//   describe("POST /tags", () => {
//     const tag = {
//       name : "testTag"
//     };

//     const techstack = {
//       name : "testTechstack"
//     };

//     //verify Tag is created
//   })
  
//   describe("GET /tags", () => {
//     //verify Tag is created
//     const tag = {
//       name : "testTag"
//     };

//     const techstack = {
//       name : "testTechstack"
//     };

//   })
//   */

// })

