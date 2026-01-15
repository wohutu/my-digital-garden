import './App.css'
import Navbar from './Navbar.jsx';
import PostCard from './PostCard.jsx';
function App() {
  // 这是一个包含文章数据的数组
  const posts = [
    { id: 1, title: 'React 初体验', body: 'React 组件化真的很好用！' },
    { id: 2, title: 'CSS 的魔法', body: '加了样式后，页面变得真好看。' },
    { id: 3, title: '数组与循环', body: '现在我们正在学习如何渲染列表。' },
    { id: 4, title: '新文章', body: '这是自动生成出来的第四篇文章！' }
  ];

  return (
    <div className="app">
      <Navbar />
      <h1>我的数字花园</h1>
       {posts.map((post) => (
        <PostCard 
          key={post.id} 
          title={post.title} 
          body={post.body} 
        />
      ))}

    </div>
  )
}

export default App
