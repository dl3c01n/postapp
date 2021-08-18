import { Form, Input, Button, Row, Col} from 'antd'
import Title from 'antd/lib/typography/Title';
import { useState, useEffect } from 'react';
import { insertPost } from '../hooks';
import axios from 'axios'
import { ListPosts } from '../ListPosts/ListPosts';

interface Post {
  title: string

  content: string
}


export const PostForm: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
      const getPosts = async () => {
          await axios.get('http://localhost:5656/posts').then(async (res) => await setPosts(res.data))
      }
      getPosts()
  }, [])

    const onFinish = async(values: any) => {
        const post: Post = {
          title: values.title,
          content: values.content,
        }
        await insertPost(post)
        setPosts([...posts, post])
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        if(errorInfo) throw errorInfo
      };
    return (
      <Row align="middle" justify="center">
        <Col span={6} offset={1}>
                <Title style={{textAlign: 'center'}}>Create a post</Title>
            <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Title can not be empty!' }]}
      >
        <Input placeholder="title"/>
      </Form.Item>

      <Form.Item
        name="content"
        rules={[{ required: true, message: 'Content can not be empty!' }]}
      >
        <Input placeholder='content'/>
      </Form.Item>


      <Form.Item style={{textAlign: 'center'}}>
        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
            </Col>
            <ListPosts posts={posts}/>
      </Row>
            
    )
}