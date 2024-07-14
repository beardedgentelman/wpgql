import { useState } from 'react';
import SvgLike from '../public/static/svg/icons/heart-svgrepo-com.svg';
import {updateTestLike} from "../lib/api";
import { v4 as uuidv4 } from 'uuid';

export default function Likes({ initialLikes, postId }) {
    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(false);
    const clientMutationId = uuidv4();

    const toggleLike = async () => {
        try {
            if (liked) {
                await updateTestLike(clientMutationId, postId, likes - 1);
                setLikes((prevLikes) => prevLikes - 1);
            } else {
                await updateTestLike(clientMutationId, postId, likes + 1);
                setLikes((prevLikes) => prevLikes + 1);
            }
            setLiked(!liked);
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };

    return (
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleLike}>
            <SvgLike width={32} height={32} fill={liked ? 'red' : 'transparent'} />
            {likes}
        </div>
    );
}
