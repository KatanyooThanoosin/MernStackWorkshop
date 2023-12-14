const Blogs = require("../models/blog");
const slugify = require('slugify');

exports.create = async (req,res) => {
    const { title, content, author } = req.body;
    const slug = slugify(title);

    switch(true){
        case !title:
            return res.status(400).json({message: 'Please enter a title'});
        case !content:
            return res.status(400).json({message: 'Please enter a content'});
    }

    try{
        const blog = await Blogs.create({
            title: title,
            content: content,
            author: author,
            slug: slug
        })
        res.status(201).json(blog);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}