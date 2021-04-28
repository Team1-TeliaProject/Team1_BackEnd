const Match = require('../modals/match');
const Talent = require('../modals/talent');
const Company = require('../modals/company.js');

const getAllMatches = async (req, res) => {
  try {
    const { id, userType } = req.params;

    const user =
      userType === 'talent'
        ? await Talent.findOne({ _id: id })
        : await Company.findOne({ _id: id });
    const matches = user.matches;

    if (matches) {
      res.send(matches);
    } else {
      throw new Error('Matches not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createMatch = async (req, res) => {
  try {
    const { jobId, talentId, companyId } = req.body;
    const newMatch = { job: jobId, talent: talentId, company: companyId };

    const savedMatch = new Match(newMatch).save();

    if (savedMatch) {
      const talent = await Talent.findOne({ _id: talentId });
      if (talent) {
        await Talent.findOneAndUpdate(
          { _id: talentId },
          { $push: { matches: savedMatch.id } },
          { upsert: true }
        )
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      const company = await Company.findOne({ _id: companyId });
      if (company) {
        await Company.findOneAndUpdate(
          { _id: companyId },
          { $push: { matches: savedMatch.id } },
          { upsert: true }
        )
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      res.send(savedMatch);
    } else {
      throw new Error('Failed to create a match');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllMatches, createMatch };
