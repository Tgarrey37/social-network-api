const { Schema, Model, Types } = require("mongoose");
const moment = require("moment");

const thoughtsSchema = new Schema({
    
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt:{
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMMM DD, YYYY')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionsSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false,
}
);
const reactionsSchema = new Schema(
    {
    // Set custom ID 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
)

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = Model('Thoughts', thoughtsSchema);

module.exports = Thoughts;