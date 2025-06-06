import 'reflect-metadata';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors());
app.use((error: Error, request: Request, response: Response, next: NextFunction): void => {
    console.log(error)
    if (error instanceof AppError) {
        response.status(error.statusCode).json({
            status: 'error',
            messege: error.message
        })
    }
    response.status(500).json({
        status: 'error',
        messege: 'Internal Server Error'
    })
})

app.listen(3333, () => {
    console.log('Server started on port 3333!')
})