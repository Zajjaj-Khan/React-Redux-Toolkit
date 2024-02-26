import { useDispatch } from "react-redux";
import { reactionAdd } from "../features/post/postSlice";

const reactionEmoji = {
  thumbsUp:"👍",
  laugh:"😂",
  wow:"😮",
  heart:"❤️",
  rocket:"🚀",
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => {
          dispatch(reactionAdd({ postId:post.id, reaction:name }));
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
    
  });
  return <div>{reactionButtons}</div>
}

export default ReactionButtons;
