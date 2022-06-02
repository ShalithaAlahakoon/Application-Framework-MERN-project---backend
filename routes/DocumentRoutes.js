// const express = require('express');
// const router = express.Router();
const {
//     getAllDocuments,
//     getDocumentById,
    uploadDocument,
//     updateDocument,
//     deleteDocument
} = require('../controllers/documentController');

// router.get('/', getAllDocuments);
// router.get('/:id', getDocumentById);
router.post('/upload', uploadDocument);
// router.patch('/update/:id', updateDocument);
// router.delete('/delete/:id', deleteDocument);


module.exports = router;