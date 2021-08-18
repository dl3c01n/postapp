import express, { Response, Request } from 'express'
import { getPosts, insertPost } from '../model'
const { Router } = express

export const getPostRoute = Router().get('/posts', async (_, res: Response) => {
    const posts = await getPosts()
    res.status(200).send(JSON.stringify(posts))
})

export const postPostRoute = Router().post('/post', async (req: Request, res: Response) => {
    if(req.body){
        console.log(req.body)
        await insertPost(req.body.title, req.body.content)
        res.status(200).send('Inserted')
    }else{
        res.status(400).send('Error processing your request, please, try again later')
    }
})