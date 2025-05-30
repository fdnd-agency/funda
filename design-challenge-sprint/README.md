# The Funda listing page

<img src="funda-logo-full.svg" width="200">

## Table of Contents

- [Design challenge: the funda listing page](#design-challenge-the-funda-listing-page)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Resources](#resources)
  - [Run mock API](#run-mock-api)

## Design challenge

In the first semester, you have learned a lot about layout, responsive design, accessibility, interaction and branding. In this 3 week sprint you will apply everything you have learned to build the new Listing Detail Page (LDP). Funda made the move to rebrand and make small changes in its current design to become a more modern Funda on the product side.

 * Go to https://www.funda.nl/koop/heel-nederland/
 * Click on any listing.

This is the Listing Detail Page. Your assignment is to build this from scratch with HTML and CSS. You can use a bit of javascript, but it's not a necessity.

There is no need to get the data from any external source, you can just hard-code the data in your HTML. If interested you can use our Mock API described below.

## Requirements

 * You implement the design according to the Figma file.
 * The page must be responsive using a mobile-first approach. There should be a minimum of 3 breakpoints; mobile, tablet and desktop.
 * To ensure accessibility, use the appropriate semantic HTML tags and accessible attributes for your elements.
 * The elements on this page do not need to be interactive. The goal of this assignment is to build a layout.
 * Do not use any frameworks. Pure HTML and CSS only! While you probably won't need it, you can use javascript if necessary.

## Resources

 * [Figma](https://www.figma.com/design/ZV3q9GITY3nRVlvbRPhRtd/Listing-Detail-Page?node-id=0-1&t=5iAdwvexTyLnu5tm-1)
 * You can find our complete brand guide and download the necessary assets (logo, font, icons, photos etc.) [here](https://brand.funda.nl/).

## Run mock API
```bash
npm install -g json-server
json-server --watch listings.json --port 3000
```
