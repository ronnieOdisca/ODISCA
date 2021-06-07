import mongoose from 'mongoose';

const postSchema = mongoose.Schema({email: ''});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;