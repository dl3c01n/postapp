import axios from 'axios'

export const getPosts = async() => {
    let posts
    await axios.get('http://127.0.0.1:5656/posts').then(res => {
        posts = res.data.json()
})
    return posts
}