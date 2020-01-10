import React from 'react';
import { Card, Avatar } from 'antd';

const dummy = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twit">twit<br />{dummy.Post.length}</div>,
        <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
        <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
    </Card>
  );
};

export default UserProfile;