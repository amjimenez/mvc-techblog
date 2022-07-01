const Comment = require('../../models/Comment')

const comments = [
    {
        blog_id: 1,
        user_id: 1,
        contents: "Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.",
        created_at: "2022-01-01 11:03:00",
    },
    {
        blog_id: 1,
        user_id: 2,
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod lacinia. Egestas integer eget aliquet nibh praesent. Gravida in fermentum et sollicitudin. Nibh venenatis cras sed felis eget velit.",
        created_at: "2022-01-01 12:08:00"
    },
    {
        blog_id: 1,
        user_id: 3,
        contents: "Leo integer malesuada nunc vel risus commodo viverra. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Feugiat scelerisque varius morbi enim nunc faucibus. Id diam vel quam elementum pulvinar etiam.",
        created_at: "2022-01-01 12:08:00"
    },
    {
        blog_id: 1,
        user_id: 4,
        contents: "Etiam tempor orci eu lobortis elementum. Gravida arcu ac tortor dignissim convallis aenean et tortor. Ut pharetra sit amet aliquam id diam maecenas ultricies. Pretium aenean pharetra magna ac placerat vestibulum lectus. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Consectetur lorem donec massa sapien faucibus et.",
        created_at: "2022-01-01 12:08:00"
    },
    {
        blog_id: 2,
        user_id: 1,
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam aliquam sem et tortor.",
        created_at: "2022-02-21 18:44:00"
    },
    {
        blog_id: 2,
        user_id: 2,
        contents: "Viverra nam libero justo laoreet sit amet cursus. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.",
        created_at: "2022-02-21 19:41:00"
    },
    {
        blog_id: 2,
        user_id: 3,
        contents: "Placerat duis ultricies lacus sed turpis. Aliquam nulla facilisi cras fermentum odio. In hendrerit gravida rutrum quisque non tellus orci. Est lorem ipsum dolor sit amet consectetur adipiscing.",
        created_at: "2022-01-01 19:48:00"
    },
    {
        blog_id: 2,
        user_id: 4,
        contents: "Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. In ante metus dictum at tempor commodo.",
        created_at: "2022-01-01 20:02:00"
    },
]

const seedCategories = () => Comment.bulkCreate(comments)

module.exports = seedCategories