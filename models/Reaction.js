const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    thought: {type: mongoose.Schema.Types.ObjectId, ref: 'Thought', required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('Reaction', reactionSchema);