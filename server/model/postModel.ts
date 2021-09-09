import mongoose from 'mongoose'
import { db } from '../database'
const { Schema } = mongoose
export const postSchema = new Schema({
    title: String,
    content: String
})

export const insertPost = (title: string, content: string) => {
        mongoose.connect(db.uri)
        const postEntity = mongoose.model('Post', postSchema)
        const post = new postEntity({
            title,
            content
        })
        post.save((err, post) => {
            if (err) throw err
            return post
        })
}

export const getPosts = () => {
    mongoose.connect(db.uri)
    const postEntity = mongoose.model('Post', postSchema)
    return postEntity.find()
}