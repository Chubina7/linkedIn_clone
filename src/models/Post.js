import mongoose from "mongoose";

let Post;

try {
    Post = mongoose.model("Post");
} catch (error) {
    const { Schema } = mongoose;

    const postSchema = new Schema({
        authorName: {
            type: String,
            required: true,
        },
        authorSurename: {
            type: String,
            required: true,
        },
        authorWorkPlace: {
            type: String,
            required: true,
        },
        authorWorkTitle: {
            type: String,
            required: true,
        },
        authorProfileImage: {
            type: String,
        },
        postDescription: {
            type: String,
        },
        postContent: {},
        postLikes: {
            type: Number,
        },
        postComments: {
            type: Number,
        },

    }, { timestamps: true });

    Post = mongoose.model("Post", postSchema);
}

export default Post;
