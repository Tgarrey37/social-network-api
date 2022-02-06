const {Schema, Model} = require('mongoose');

const usersSchema = new Schema(
{
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Enter a valid address'
        ],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "Users"
        }]
},
   {
        toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
   }
)

usersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Users = Model('Users',usersSchema);

module.exports = Users;
