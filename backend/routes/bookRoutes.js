import express from 'express'
import { Book } from "../models/bookmodel.js"
const router = express.Router()
  

  
  router.post("/", async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.published
      ) {
        return response.status(500).send({ message: "all fields are required" });
      }
  
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        published: request.body.published,
      };
      const book = await Book.create(newBook);
      return response.status(200).send({ message: "Book Entry is done" });
    } catch (error) {
      console.log(error);
      return response.status(400).send(error);
    }
  });
  
  router.get("/", async (request, response) => {
    try {
      const bookAllList = await Book.find({});
  
      return response.status(200).json({
        count: bookAllList.length,
        message: bookAllList,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).send(error);
    }
  });
  
  router.get("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const bookById = await Book.findById(id);
  
      return response.status(200).json({
        message: bookById,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).send(error);
    }
  });
  
  router.put("/:id", async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.published
      ) {
        return response.status(500).send({ message: "all fields are necessary" });
      }
      const { id } = request.params;
      const result = await Book.findByIdAndUpdate(id, request.body);
      if (!result)
        return response.status(400).send({ message: "Entry not found" });
      return response.status(200).send({ message: "Updated successfully" });
    } catch (error) {
      console.log(error);
      return response.status(400).send(error);
    }
  });
  
  router.delete("/:id", async (request, response) => {
    try {
      const { id } = request.params;
      const bookById = await Book.findByIdAndDelete(id);
  
      return response.status(200).send({
        message: "Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return response.status(400).send(error);
    }
  });

export {router}