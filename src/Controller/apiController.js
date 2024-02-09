import { query } from "express";
import bookModel from "../Model/BookModel.js";


// add a Book
const addBook = async (req, res) => {
    try {
        const newBook = new bookModel(req.body);
        newBook.save();
        res.status(201).json(req.body);
    }
    catch (error) {
        res.status(500).json(error);

    }
}
const updateBook = async (req, res) => {

    const id = req.params.id;
    try {

        const data = await bookModel.find({ id: id });

        if (data.length > 0) {
            res.status(200).json(data);
        }
        else {
            res.status(404).json(`message:book with ${id} not found`)
        }
    }
    catch (error) {
        res.status(500).json(error);

    }

}
const getByID = async (req, res) => {
    const id = req.params.id;
    try {

        const data = await bookModel.find({ id: id });

        if (data.length > 0) {
            res.status(200).json(data);
        }
        else {
            res.status(404).json(`message:book with ${id} not found`)
        }


    }
    catch (error) {
        res.status(500).json(error);

    }

}
const getBook = async (req, res) => {
    try {
        const queryParameters = {};
        const { title, author, price, genre, sort, order } = req.query;

        if (title) {
            queryParameters.title = title;
        }

        if (author) {
            queryParameters.author = author;
        }
        if (price) {
            queryParameters.price = price

        }
        if (genre) {
            queryParameters.genre = genre

        }


        const sortCriteria = sort === 'price' ? { price: 1 } : {};

        const orderCriteria = order === 'DESC' ? { id: -1 } : { id: 1 }


        console.log(req.query)

        const data = await bookModel.find(queryParameters).sort(sortCriteria).sort(orderCriteria);
        res.status(200).json({ books: data });
    }
    catch (error) {
        res.status(500).json(error);
    }

}

export const apiController = {
    addBook,
    updateBook,
    getBook,
    getByID
}

