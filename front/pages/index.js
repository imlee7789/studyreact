import React from 'react';
import { Form, Input, Button, Card, Icon, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

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

const Home = () => {
	return (
		<div>
			{dummy.isLoggedIn && <PostForm />}
			{dummy.mainPosts.map((c) => {
				return (
					<PostCard key={c} post={c} />
				);
			})}
		</div>
	);
};

export default Home;