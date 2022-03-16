let Question = require('../models/questionSchema');
let Option = require('../models/optionsSchema');

module.exports.deleteoption = async (req, res) => {
  try {
    //find option
    let option = await Option.findById(req.params.id);
    if (option == null) {
      return res.status(404).json({
        message: 'Error : Option not found',
      });
    }
    if (option.vote > 0) {
      return res.status(405).json({
        message: 'Option cannot be deleted since it has some votes',
      });
    }
    //remove option id from question
    let questionId = option.question;
    //delete option
    await option.remove();
    //remove option from question
    let question = await Question.findByIdAndUpdate(questionId, {
      $pull: { options: req.params.id },
    });
    return res.status(200).json({
      message: 'Option removed from question',
    });
  } catch (error) {
    return res.status(422).json({
      message: 'Error while deleting option',
    });
  }
};

//increase option vote count
module.exports.addVote = async (req, res) => {
  try {
    let option = await Option.findById(req.params.id);
    if (option) {
      option.vote += 1;
      await option.save();
    }
    return res.status(200).json({
      message: 'votes updated',
      voteCount: option.vote,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error or Option not found',
    });
  }
};
