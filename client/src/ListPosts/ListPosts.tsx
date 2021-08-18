import { Avatar, List, Col } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Post {
    title: string

    content: string
}


interface Props{
    posts: Post[]
}


export const ListPosts: React.FC<Props> = ({posts}) => {
    
    
    return (
            <Col span={8} offset={4}>
            <List dataSource={posts} renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://fakeimg.pl/250x100/" />}
                title={<a href="">{item.title}</a>}
                description={item.content}
              />
            </List.Item>
          )} />
            </Col>
        
    )
}