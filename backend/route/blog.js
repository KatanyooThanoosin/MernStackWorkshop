const express = require('express');
const router = express.Router();

router.get('/blog', (req, res) => {
    res.json({
        data: "get blog routes",
    });  
});

module.exports = router;