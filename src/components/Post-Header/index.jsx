export const PostHeader = ({ name, username, onClick }) => {
  return (
    <div className="post-header" onClick={onClick}>
      <span className="name">{name} </span>
      <span className="username"> @{username}</span>
    </div>
  )
}
