import mongoose from "mongoose";

let User;

try {
    User = mongoose.model("User");
} catch (error) {
    const { Schema } = mongoose;

    const userSchema = new Schema({
        name: {
            type: String,
        },
        surename: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
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
        },
        workTitle: {
            type: String,
        },
        followers: {
            type: String,
        },
        posts: {},

    }, { timestamps: true });

    User = mongoose.model("User", userSchema);
}

export default User;
