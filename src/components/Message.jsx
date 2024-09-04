import { auth } from "../firebase";

const Message = ({ data }) => {

  if (auth.currentUser.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  
  return (
    <div className="msg-other">
      <div>
        <img src={data.author.photo} alt="profile picture" />
        <span>{data.author.name}</span>
      </div>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
