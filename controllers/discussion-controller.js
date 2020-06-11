
const Topic = require('../models/topic-model');
const Comment = require('../models/comment-model');


module.exports.create_discussion_topic = (req, res, next) => {

    const topic = new Topic({
        title: req.body.title,
        createdBy: req.session.userId
    });

    topic.save()
        .then(savedTopic => {
            res.status(201).json({
                message: 'New Topic created!'
            });
            console.log('New Topic Created!');
        })
        .catch(err => {
            res.status(500).json({
                message: 'Topic not created!'
            });
            console.log(err);

        });
};

module.exports.create_comment = async (req, res, next) => {
    let topic;

    let comment = new Comment({
        content: req.body.content,
        createdBy: req.session.userId,
        topic: req.body.topicId
    });
    comment.save()
        .then(savedComment => {
            res.status(201).json({
                message: 'Comment Created!'
            });
            console.log('Comment Created!');
        })
        .catch(err => {
            res.status(500).json({
                message: 'Comment Not Created!'
            });
            console.log(err);
        });

    topic = await Topic.findById({ _id: req.body.topicId }).exec();
    topic.comments.push(comment._id);
    topic.save()
        .then()
        .catch(err => {
            res.status(500).json({
                message: 'Topic not Comment!'
            });
            console.log(err);

        });


};

module.exports.delete_topic = (req, res, next) => {
    // TODO: Send response for deleting sucessfully
    Topic.deleteOne({ _id: req.params.topicId }).exec();
    Comment.deleteMany({ _id: req.params.topicId }).exec();
};

module.exports.delete_comment = (req, res, next) => {
    // TODO: Send response for deleting sucessfully
    Comment.deleteOne({ _id: req.params.commentId }).exec();
};

module.exports.get_all_topics = (req, res, next) => {

    Topic.find({})
        .exec()
        .then(topics => {
            res.status(200).json({
                allTopics: topics
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal Server Error!!'
            });
        });

};

module.exports.get_topic_comments = (req, res, next) => {
    Topic.findById({ _id: req.params.topicId })
        .populate('comment')    // Add selection Query
        .exec()
        .then(topic => {

            res.status(200).json({
                populatedTopic: topic
            });

        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal Server Error!'
            });
        });
};

module.exports.edit_topic = (req, res, next) => {

    //TODO: Update a topic

};

module.exports.edit_comment = (req, res, next) => {

    //TODO: Update a comment

};