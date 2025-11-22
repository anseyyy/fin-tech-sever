const { addExpence, getExpence, deleteExpence } = require('../controllers/expence')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')

const router =require('express').Router()



router.post('/add-incomes',addIncome)
      .get('/get-incomes',getIncomes)
      .delete('/delete-incomes/:id',deleteIncome)
      .post('/add-expence',addExpence)
      .get('/get-expence',getExpence)
      .delete('/delete-expence/:id',deleteExpence)
module.exports = router