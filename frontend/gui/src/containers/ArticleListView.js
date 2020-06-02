import React from "react";
import Articles from "../components/Article";
import axios from "axios";

class ArticleList extends React.Component {
    state={
        articles:[]
    }
    fetchArticles = () => {
        axios.get("http://127.0.0.1:8000/api/").then(res => {
          this.setState({
            articles: res.data
          });
        });
      }
      componentDidMount() {
        this.fetchArticles();
      }
  render() {
    return (
     <Articles data={this.state.articles}/>
    );
  }
}

export default ArticleList;