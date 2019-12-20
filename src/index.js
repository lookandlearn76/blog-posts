import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45pm"
          commentText="Nice Blog"
          avatar={faker.image.avatar}
        />
      </ ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="today at 2pm"
          commentText="Really nice!"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="today at 1:30pm"
        commentText="Lovely"
        avatar={faker.image.avatar}
      />
      <ApprovalCard>
        <CommentDetail
          author="Phil"
          timeAgo="today at 1pm"
          commentText="Super!"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Rob"
          timeAgo="today at 12pm"
          commentText="Hate it!"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bill"
          timeAgo="today at 10am"
          commentText="Yuck!"
          avatar={faker.image.avatar}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
