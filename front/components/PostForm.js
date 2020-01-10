import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
	isLoggedIn: true,
	imagePaths: [],
	mainPosts: [{
		User: {
			id: 1,
			nickname: '제로초',
		},
		content: '첫 번째 게시글',
		img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F2149683A58CA6BF31324DD'
	}],
};

const PostForm = () => {
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
				<Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
				<div>
					<Input type="file" multiple hidden />
					<Button>이미지 업로드</Button>
					<Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
				</div>
				<div>
					{dummy.imagePaths.map((v, i) => {
						return (
							<div key={v} style={{ display: 'inline-block' }}>
								<img src={'https://localhost:3030/' + v} style={{ width: '200px' }} alt={v} />
								<div>
									<Button>제거</Button>
								</div>
							</div>
						);
					})}
				</div>
			</Form>
  );
};

export default PostForm;