const router = require('express').Router()
const {
    getAllContact,
    getSingleContact,
    updateContact,
    deleteContact,
    createContact
} = require('./controler')

router.get('/',getAllContact)
router.get('/:id',getSingleContact)
router.get('/delete/:id',deleteContact)
router.post('/',createContact)
// router.put('/:id',deleteContact)
// router.delete('/:id',updateContact)

  module.exports = router

