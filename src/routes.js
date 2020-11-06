const GetAllCovidCasesController = require('./Controller/getallcovidcases');

const router = require('express').Router();
const render = require('./Controller/getallcovidcases');
const findOneCase = require('./Controller/getFindOne');

router.get('/', render);
router.get('/:country', findOneCase);
module.exports = router;