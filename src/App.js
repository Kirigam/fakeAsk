import React, { Component } from 'react';
import './App.css';
import PostsList from './Components/UserPost/PostsList/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      count: 10,
      API: 'https://jsonplaceholder.typicode.com/posts',
      loading: false,
      search: '',
      filtredPosts: []
    }
    this.clickMore = this.clickMore.bind(this);
    this.hendleChange = this.hendleChange.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});

    return fetch(this.state.API)
        .then(res => res.json())
        .then(res => this.setState({posts: res, loading: false}));
  }

  clickMore(){
    const {count, posts} = this.state;
    const value = (count > posts.length) ? posts : count+10;
    console.log(posts.length);
    
    if(count >= posts.length) {
      return document.getElementById('bM').disabled = true;
    } else {
      return this.setState({count: value});
    }
  }

  hendleChange({ target : {name, value}}) {
    this.setState({[name]: value});

    if(this.state[name] !== '') {
      const pattern = new RegExp(value);
      const {filtredPosts, posts} = this.state;
         
      const filtredArr = posts.filter(item => {
        if(item.title.match(pattern)) {
          return item;
        }
      });

      return this.setState({filtredPosts: filtredArr});
    }

    return this.setState({filtredPosts: []});
  }

  render() {
    const {posts, loading, count, search, filtredPosts} = this.state;
    
  return (!loading) ? <React.Fragment>
      <input type="text" name="search" 
            placeholder="search" value={this.state.searchValue}
            onChange={this.hendleChange} />
      <PostsList posts={
        (search === '') ? posts.slice(0, count) : filtredPosts.slice(0, count)}/>
      <button onClick={this.clickMore} id={'bM'}>More</button>
    </React.Fragment> : 
    <p>Loading</p>;
  }
}

export default App;
