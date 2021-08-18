import axios from 'axios'

interface Post {
    title: string

    content: string
}
export const insertPost = async (post: Post) => {

    await axios.post('http://127.0.0.1:5656/post', post)
}