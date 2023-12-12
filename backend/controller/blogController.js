const slugify = require('slugify');

exports.create = (req,res) => {
    const { title, content, author } = req.body;
    const slug = slugify(title);

    switch(true){
        case !title:
            return res.status(400).json({message: 'Please enter a title'});
        case !content:
            return res.status(400).json({message: 'Please enter a content'});
    }
    
    res.json({
        data: {
            title, content, author,slug
        }
    });
}