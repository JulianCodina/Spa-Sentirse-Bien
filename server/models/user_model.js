import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    names: {
        type: String,
    },
    surnames: {
        type: String,
    },
    profilepic: {
       // type: ImageBitmap
    },
    sex: {
        type: Boolean,
    },
    isAdmin: {
        type: Boolean,
    }

},    {
    timestamps: true
})

export default model('User', userSchema)