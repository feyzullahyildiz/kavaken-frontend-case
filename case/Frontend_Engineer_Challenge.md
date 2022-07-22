---
title: Kavaken Frontend Engineer Assessment
tags: [kavaken]
created: 2022-06-23T10:10:14.428Z
modified: 2022-06-23T11:05:07.513Z
---

# Kavaken Frontend Engineer Assessment

Thank you for accepting our Frontend Engineer Challenge Project.

Our Frontend Engineer Challenge Project is a e-commerce Basket mini app. We expect you to develop the the frontend for a simple shopping flow (from listing to checkout) with accompanying unit tests.

In the application, users should be able to browse items, add them to their shopping cart and place their order. Please follow the designs attached as much as you can (layout, fonts, styles, etc.).

You will need to push your project to GitHub as a private repo and share an invite link with us.

Your project should include a Readme with simple instruction to:

1. Build your app
2. Run the test suite
3. Run your app with dependencies

Your Readme should also include a list of features you implemented, what is missing, and any other decisions you made while working on the case.

## Functional Requirements

* Clicking ADD TO BASKET button in the listing page should navigate to the updated basket page.
* Placing an order containing the item with id 3 should display a user-friendly out of stock error (you should handle the return code 404 HTTP code and message of the backend API)
* Placing any other order should be successful and remove all items from the basket with a message

## Technical Requirements

* User friendly UX
* Styling should use variables
* React SPA using React Hooks
* Routing (listing and basket should be on different routes)
* Client side state management (Redux, React Query, MobX, etc.)
* Component usage
* Async API usage
* Typescript or Javascript (Typescript preferred but choose the one you are most familiar with)
* Linter usage (ESLint, etc.)
* Unit testing
* Proper Readme with instructions
* Multiple Git commits with proper messages that clearly show your progress

## API Examples
The API has two endpoints. Since it is a serverless API make sure you hit it first with curl or your browser to wake it up.

To wake it up:
https://glass-functional-song.glitch.me/

Get listings:

```shell
curl -i -H "Accept: application/json" -X GET https://glass-functional-song.glitch.me/listing
```

Submit order (accepts an array):

```shell
curl -i -H "Content-Type: application/json" -X POST -d '[{"id":1,"amount": 3}]' https://glass-functional-song.glitch.me/order
```
