import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import {Loader} from './Loader';
import {fetchPosts} from '../redux/actions';

export default() => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (loading) {
    return <Loader />
  }

  if (!fetchedPosts.length) {
    return <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchPosts())}
    >Загрузить</button>;
  }

  return ( fetchedPosts.map(post=> <Post post={post} key={post.id}/>)
  )
}