const { Schema, model, Types } = require("mongoose");
const moment = require("moment");


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
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
)






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

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;