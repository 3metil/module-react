import React, {useState, useRef} from 'react';;


function useStateCount() {

const inputTitle = useRef(null)
const inputDescription = useRef(null)

const [posts, setPosts] = useState([
{
  title: 'Заголовок 1',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita animi cupiditate culpa odit possimus ipsa a excepturi ipsam, ex dolorem saepe minima placeat modi. Excepturi, tenetur. Saepe corrupti tempora totam?',
}
])

const handleCreatePost = () => {
  setPosts([
    ...posts, 
    {
      title: inputTitle.current.value,
      description: inputDescription.current.value,
    }
  ])
  inputTitle.current.value = ''
  inputDescription.current.value = ''
}

return (
 <div className='App'>
      <button onClick={handleCreatePost}>Создать пост</button><br></br>
       <input ref={inputTitle} type='text' /><br></br>
       <textarea ref={inputDescription} name='' id='' cols='30' rows='10'></textarea>
      
      {posts.map((post, i) => {
        return (
          <div key={i} className = ''>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          </div>
        )
           })}
        
 </div>
  );
}

export default useStateCount;