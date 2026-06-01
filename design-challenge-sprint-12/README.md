# Design Challenge - Sprint 12: Proof of Concept

<img src="funda-logo-full.svg" width="200">

## Table of Contents

- [Design Challenge - Sprint 12: Proof of Concept](#design-challenge---sprint-12-proof-of-concept)
  - [Table of Contents](#table-of-contents)
  - [Design challenge](#design-challenge)
  - [Assignment](#assignment)
  - [Example listing on Funda](#example-listing-on-funda)
  - [Requirements](#requirements)
  - [API](#api)
  - [Resources](#resources)

## Design challenge

In the *Proof of Concept* sprint, you will prototype a data-driven online concept for a client.

In the first semester of the FDND program, you learned a lot about:

- Semantic HTML
- Layout
- Responsive design
- Accessibility
- Interaction
- Working with a brand identity

In the second semester, you learned how to build user-friendly websites with NodeJS and REST APIs, using:

- Server-side rendering
- Progressive enhancement
- A focus on user experience (UX) and performance

## Assignment

Develop a proof of concept for a data-driven online concept based on housing data.

Use the available Funda API data and integrate it into your prototype.

Your main page is the Listing Detail Page (LDP).

On this page, implement a heart icon that lets you add/remove a house to/from favorites.

You also build a separate favorites overview page that lists the houses marked as favorites.

## Example listing on Funda

To view an example listing detail page on Funda:

- Go to https://www.funda.nl/koop/heel-nederland/
- Click any listing card

This opens a Listing Detail Page (LDP) that you can use as visual and content reference.

Favorites on Funda are shown here: https://www.funda.nl/favorieten/

This page requires login. If needed, you can create an account using any email address.

## Requirements

- You design and build the Listing Detail Page (LDP).
- Your prototype is data-driven and uses real data from the API.
- You make API calls to fetch housing data.
- The LDP includes a heart icon to add/remove a house to/from favorites.
- Favorited houses are stored and shown in a separate favorites overview page.
- You apply principles from semesters 1 and 2 (semantics, accessibility, responsive design, SSR/PE where relevant).
- You work within the Funda brand identity and design guidelines.
- You implement your design according to the provided Figma file.

## API

Use this endpoint for Funda houses:

- https://fdnd-agency.directus.app/items/f_houses

You can view the response in your browser or retrieve it using fetch/async-await.

## Resources

- API response: https://fdnd-agency.directus.app/items/f_houses
- Figma: https://www.figma.com/design/txHXq9u8hZ44xLBhYWyNSN/LDP?node-id=0-1&t=CdyOkbo4CfJt0oVS-1
- Funda brand guide and assets: https://brand.funda.nl/
