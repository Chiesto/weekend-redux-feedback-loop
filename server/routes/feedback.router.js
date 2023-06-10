const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res)=>{
    const allFeedback = req.body;
    console.log('feedback=>', allFeedback);
    //setting up my query text and values being entered to the table
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`
    const values = [allFeedback.feeling, allFeedback.understanding, allFeedback.support, allFeedback.comments];

    pool.query(queryText, values)
        .then(result=>{
            res.sendStatus(201);
        }).catch(error=>{
            console.log('problems in our POST', error);
            res.sendStatus(500);
        })
})
module.exports = router;