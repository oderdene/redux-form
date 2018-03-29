import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'

// export default () => {
//     return <div>List of blog posts.</div>;
// };

class PostsIndex extends Component {
    componentWillMount() {
        //console.log('this would be a good time to call an action creator to fetch posts.');
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">
                            {post.categories}
                        </span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>List of blog posts</h3>
                <ul className="list-group">
                    {this.renderPosts()} 
                </ul>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({fetchPosts}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);

// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);

// es6 syntax
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);