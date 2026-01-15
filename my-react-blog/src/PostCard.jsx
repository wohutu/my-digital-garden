import { useState } from "react";

function PostCard(props) {
    // 定义一个叫 count 的状态，初始值是 0
    // setCount 是专门用来修改这个状态的工具
    const [count, setCount] = useState(0);
    return (
        <div className="post-card">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            {/* 3. 这里是新的按钮部分 */}
            <div style={{ marginTop: '15px' }}>
                <button onClick={() => setCount(count + 1)}>
                    ❤️ 点赞 {count}
                </button>
            </div>
        </div>
    )
}
export default PostCard