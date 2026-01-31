import blogData from "../blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

export default function App() {
  return (
    <>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </>
  );
}
