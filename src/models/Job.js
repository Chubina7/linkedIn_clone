import mongoose from "mongoose";

let Job;

try {
    Job = mongoose.model("Post");
} catch (error) {
    const { Schema } = mongoose;

    const jobSchema = new Schema({
        jobTitle: {
            type: String,
        },
        jobRecruiter: {
            type: String,
        },
        jobRecruiterStatus: {
            type: String,
        },
        statusTitle: {
            type: String,
        },

    }, { timestamps: true });

    Job = mongoose.model("Job", jobSchema);
}

export default Job;
