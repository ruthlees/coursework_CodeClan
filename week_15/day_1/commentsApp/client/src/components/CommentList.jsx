import React from 'react';

import Comment from './Comment'

class CommentList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){

    const commentComponents = this.props.comments.map((comment) =>{ return (
         <Comment author={comment.author} key={comment.id}>
            {comment.text}
         </Comment>
      );
    })
    return (
      <div>
       {commentComponents}
      </div>
     );
  }  

}

export default CommentList;