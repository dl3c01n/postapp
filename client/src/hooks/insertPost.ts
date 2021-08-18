import axios from 'axios'

export const insertPost = async (title: string, content: string) => {
    const Post = {
        title: title,
        content: content
    }

    await axios.post('http://127.0.0.1:5656/post', Post)
}