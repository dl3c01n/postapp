import { Form, Input, Button, Row, Col} from 'antd'
import Title from 'antd/lib/typography/Title';
import { insertPost } from '../hooks';

export const PostForm: React.FC = () => {

    const onFinish = async(values: any) => {
        await insertPost(values.title, values.content)
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        if(errorInfo) throw errorInfo
      };
    return (
        <Row align="middle" justify='center'>
            <Col span={6}>
                <Title>Create a post</Title>
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


      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </Col>
        </Row>
    )
}