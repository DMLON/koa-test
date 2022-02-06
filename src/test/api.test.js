const request = require("supertest")
const expect = require("chai").expect
const app = require("../server.init");
const http = require("http");
let apptest = null;

apptest = request(app.listen());

describe('GET Products', () => {
    it('Should get all products and return status 200.', (done) => {
        apptest
            .get("/api/products")
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body).to.be.an('array')
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})


describe('Add new Product', () => {
    it('Should create a new product', (done) => {
        apptest
            .post("/api/products")
            .send({title:"Test product",
                price:100,
                thumbnail:"TestThumbnail"}
            )
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body.newProduct.price).to.equal(100)
                expect(res.body.newProduct.title).to.equal("Test product")
                expect(res.body.newProduct.thumbnail).to.equal("TestThumbnail")
                expect(res.body.newProduct._id).to.be.a('string')
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})


describe('Delete Product', () => {
    let idToDelete=null
    //Get the last product
    before((done)=>{
        apptest
        .get("/api/products")
        .expect(200)
        .end((err,res)=>{
            if(err) done(err)
            expect(res.body).to.be.an('array')
            expect(res.status).to.equal(200)
            idToDelete = res.body[res.body.length-1]._id
            done()
        })
    })
    it('Should delete the last product', (done) => {       
        apptest
            .delete("/api/products/"+idToDelete)
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body.deleted).to.be.exist
                expect(res.body.deleted._id).to.equal(idToDelete)
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})



describe('Edit the last Product', () => {
    let originalProduct=null
    //Get the last product
    before((done)=>{
        apptest
        .get("/api/products")
        .expect(200)
        .end((err,res)=>{
            if(err) done(err)
            expect(res.body).to.be.an('array')
            expect(res.status).to.equal(200)
            originalProduct = res.body[res.body.length-1]
            done()
        })
    })
    it('Should update the last product', (done) => {       
        apptest
            .put("/api/products/"+originalProduct._id)
            .send({price:originalProduct.price,title:"Test product Edit",thumbnail:originalProduct.thumbnail})
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body.updated).to.be.exist
                expect(res.body.updated.title).to.equal("Test product Edit")
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})

// --------------------------------------------------
// -------------------- Messages --------------------
// --------------------------------------------------


describe('GET Messages', () => {
    it('Should get all messages and return status 200.', (done) => {
        apptest
            .get("/api/messages")
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body).to.be.an('array')
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})


describe('Add new message', () => {
    it('Should create a new message', (done) => {
        apptest
            .post("/api/messages")
            .send({
                    message: "Hello world",
                    profilePhoto: "TestThumbnail",
                    email: "test@email.com",
                    name: "Test User"
                }
            )
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body.newmessage.message).to.equal("Hello world")
                expect(res.body.newmessage.profilePhoto).to.equal("TestThumbnail")
                expect(res.body.newmessage.email).to.equal("test@email.com")
                expect(res.body.newmessage.name).to.equal("Test User")
                expect(res.body.newmessage._id).to.be.a('string')
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})


describe('Delete message', () => {
    let idToDelete=null
    //Get the last product
    before((done)=>{
        apptest
        .get("/api/messages")
        .expect(200)
        .end((err,res)=>{
            if(err) done(err)
            expect(res.body).to.be.an('array')
            expect(res.status).to.equal(200)
            idToDelete = res.body[res.body.length-1]._id
            done()
        })
    })
    it('Should delete the last message', (done) => {       
        apptest
            .delete("/api/messages/"+idToDelete)
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body.deleted).to.be.exist
                expect(res.body.deleted._id).to.equal(idToDelete)
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})



describe('Edit the last message', () => {
    let originalMessage=null
    //Get the last product
    before((done)=>{
        apptest
        .get("/api/messages")
        .expect(200)
        .end((err,res)=>{
            if(err) done(err)
            expect(res.body).to.be.an('array')
            expect(res.status).to.equal(200)
            originalMessage = res.body[res.body.length-1]
            done()
        })
    })
    it('Should update the last message', (done) => {       
        apptest
            .put("/api/messages/"+originalMessage._id)
            .send({
                message: originalMessage.message,
                profilePhoto: originalMessage.profilePhoto,
                email: originalMessage.email,
                name: "Test User 2"
            })
            .expect(200)
            .end((err,res)=>{
                if(err) done(err)
                expect(res.body.updated).to.be.exist
                expect(res.body.updated.name).to.equal("Test User 2")
                expect(res.status).to.equal(200)
                done()
            })
        
    })
})