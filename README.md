## Model-View-Controller (MVC) Challenge: Tech Blog

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Screenshots
<img width="1495" alt="homepage" src="https://user-images.githubusercontent.com/99158580/177059438-a9eca0c8-4a42-428c-b636-1f4df3a01e72.png">
<img width="1495" alt="login" src="https://user-images.githubusercontent.com/99158580/177059447-d62df4ab-96b2-4b06-bfd3-e2270f86c39d.png">
<img width="1495" alt="register" src="https://user-images.githubusercontent.com/99158580/177059451-b8600cb4-e01c-426e-b490-bc5c15066054.png">
<img width="1495" alt="createbp" src="https://user-images.githubusercontent.com/99158580/177059455-270ce06b-abfc-4369-8069-03247859f77f.png">
<img width="1495" alt="dashboard" src="https://user-images.githubusercontent.com/99158580/177059456-c46e9c38-974e-4e8f-93a3-a86c433b9d90.png">


## Links
A link to the Github [code](https://github.com/amjimenez/mvc-techblog):
```
https://github.com/amjimenez/mvc-techblog
```

A link to the deployed [app](https://dashboard.heroku.com/apps/module-mvc-techblog)
```
[https://dashboard.heroku.com/apps/module-mvc-techblog](https://module-mvc-techblog.herokuapp.com)
```
