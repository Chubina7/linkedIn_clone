import mongoose from "mongoose";

let User;

try {
    User = mongoose.model("User");
} catch (error) {
    const { Schema } = mongoose;

    const userSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        surename: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        phoneNumber: {
            type: Number,
            unique: true,
        },
        profileImage: {
            type: String,
        },
        backgroundImage: {
            type: String,
        },
        workPlace: {
            type: String,
            required: true,
        },
        workTitle: {
            type: String,
            required: true,
        },
        followers: {
            type: String,
            required: true,
        },
        posts: {},

    }, { timestamps: true });

    User = mongoose.model("User", userSchema);
}

export default User;
