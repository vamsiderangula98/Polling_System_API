let Question = require('../models/questionSchema');
let Option = require('../models/optionsSchema');

module.exports.create = async (req, res) => {
  try {
    //if no content found to add
    if (req.body.content == '') {
      return res.status(422).json({
        message: 'Empty question',
      });
    }
    let question = await Question.create({
      content: req.body.content,
      options: [],
    });

    //api response
    return res.status(200).json({
      question: question,
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({
      message: 'Error while creating question',
      error : error
    });
  }
};

//get question via id
module.exports.getQuestion = async (req, res) => {
  try {
    let question = await Question.findById(req.params.id);
    if (question == null) {
      return res.status(422).json({
        message: 'Question doesnt exist',
      });
    }
    question = await question.populate('options');
    return res.status(200).json({
      message: 'Here is your question',
      question: question,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error while fetching question',
    });
  }
};

//delete question action
module.exports.deleteQuestion = async (req, res) => {
  try {
    let question = await Question.findById(req.params.id);
    //populate question
    question = await question.populate('options');
    console.log(question);
    // console.log(question);
    if (question == null) {
      return res.status(422).json({
        message: 'Question already deleted',
      });
    }
    //check if any of the option has votes

    for (let o of question.options) {
      if (o.vote > 0) {
        return res.status(405).json({
          message: 'Question cannot be deleted since its one of its option has votes',
        });
      }
    }
    // delete all options from question
    await Option.deleteMany({ question: question.id });
    await question.remove();
    return res.status(200).json({
      message: 'Question deleted',
    });
  } catch (error) {
    return res.status(422).json({
      message: 'Error while deleting question',
    });
  }
};

// create option
module.exports.questionOptionsCreate = async (req, res) => {
  try {
    //if no content found to add
    if (req.body.content == '') {
      return res.status(422).json({
        message: 'Empty option',
      });
    }
    let question = await Question.findById(req.params.id);
    // //get options array of question.
    // let optionsArray = question.options;

    //create option
    let option = await Option.create({
      content: req.body.content,
      question: question.id,
      vote: 0,
    });
    //create link to vote field
    let link_to_vote = `${req.protocol}://${req.headers.host}/options/${option.id}/add_vote`;
    // add linktovote to option
    option.link_to_vote = link_to_vote;
    await option.save();
    //push option inside array...
    await question.options.push(option);
    question.save();
    return res.status(200).json({
      option,
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({
      message: 'Error while adding option',
      error: error,
    });
  }
};
