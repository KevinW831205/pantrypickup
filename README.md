# Pantry Pickup
Pantry Pickup is an application that helps to make food donation easier for everyone. We all lead busy lives. Pantry Pickup is here to help you make a difference by fighting food waste and feeding the hungry, without having to leave the comfort of your own home.

## Functionality
Our site allows users to create a profile with username, password, and their basic information. Once the profile is created, the user can now make "donations". Each donation requires a food item name, donator, expiration date, and location.

![Donations Page](/public/images/donation-screenshot.png)

After you enter in all of your donations. Another user or "pantry" can claim them. Your address from your profile will be linked to each food donation so that the person picking up your donation knows exactly where to come to get it.

![Location Modal](/public/images/location-screenshot.png)

It's that easy! We want donating food to be easier for the everyday person so that more people are willing to make donations and help cut down on food waste and help feed the hungry.

## Design Process
We created our site using the following:

* **Node & Express** - To create the server-side web application.

* **MySQL** - Database to store all the donation information.

* **Sequelize** - To manage and query all data.

* **Materialize** - To create the polished and flowing front-end design.

* **Google Maps & Mapquest APIs** - To render our map and find a geolocation for the user that is making the donation.

* **Chart.js** - To make an interactive graph on our homepage to drive home the reality of how much food is wasted by the common household.

## Heroku Site
[Pantry Pickup](https://project2-group7.herokuapp.com/)

## Future Site Development
* API integration for global products, nutritional values, and more.
* Receiving a response when claiming a donation.
* Creating a mobile application for all platforms.
* Sorting donations by categories.
* Real-time driver map locator & driver/user communication.
* Time logic for food expiration.