import './App.css'
import Navbar from './Navbar.jsx';
import PostCard from './PostCard.jsx';
function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>我的数字花园</h1>
      <PostCard title="React 初体验" body="React 组件化真的很好用！" />
      <PostCard title="我的第二篇文章" body="正在学习如何使用 Props 传递数据。" />
      <PostCard title="未完待续" body="敬请期待更多精彩内容..." />

    </div>
  )
}

export default App
