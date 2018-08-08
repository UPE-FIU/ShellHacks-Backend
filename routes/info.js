var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/schools', (req, res) => {
   models.school.findAll()
      .then((school) => {
         res.json(school);
      })
      .catch((err) => {
         res.json(err);
      });
});

router.get('/class-year', (req, res) => {
   models.class_years.findAll()
      .then((classYear) => {
         res.json(classYear);
      })
      .catch((err) => {
         res.json(err);
      });;
});

router.get('/diet', (req, res) => {
   models.diet.findAll()
      .then((diet) => {
         res.json(diet);
      })   
});

router.get('/event-schedule', (req, res) => {
   models.events_schedule.findAll()
      .then((eventSchedule) => {
         res.json(eventSchedule);
      });
});

router.get('/major', (req, res) => {
   models.major.findAll()
      .then((major) => {
         res.json(major);
      });
});

router.get('/race', (req, res) => {
   models.race.findAll() 
      .then((race) => {
         res.json(race);
      });
});

router.get('/shirt-size', (req, res) => {
   models.shirt_sizes.findAll() 
      .then((shirtSize) => {
         res.json(shirtSize);
      })
});

router.get('/site-setting', (req, res) => {
   models.site_settings.findAll()
      .then((siteSetting) => {
         res.json(siteSetting);
      })
});

router.get('/sponsor', (req, res) => {
   models.sponsors.findAll()
      .then((sponsors) => {
         res.json(sponsors);
      })
});

router.get('/state', (req, res) => {
   models.state.findAll()
      .then((state) => {
         res.json(state);
      })
});

module.exports = router;