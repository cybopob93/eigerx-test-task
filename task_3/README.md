# Answers on task 3

## Turning a single consumer web-based Platforms into a SaaS:
A web-based gaming platform (=gPlatform) is currently providing it’s services to one single gaming site (=gSite).
The services provided by gPlatform to gSite include hosting web-games and backoffice for managing players that sign-up and play on gSite.

We want to make gPlatform into a SaaS that can be sold to other gaming sites as subscription-based service.

Each new gaming company operating a gaming site, will have it’s own dedicated domain - for example:
Company A will have a domain cool-games.com
Company B will have a domain luck-games.co.uk
etc

Currently at gPlatform, users are identified by using email as a unique key.

## Give a short, clear explanation for every question below:

### How can we design the system in a way that every Company will be able to serve games on their gaming site from their domain?

We can design some API that allows each gaming site to fetch games. The gaming site would send a request to the gPlatform with some access token that provide access to the appropriate games.
Or
Configure DNS for each domain to point to the gPlatform server.

### What modification should be done to the users table at gPlatform to support this change?

Add a new indetifier of domain (smthng like 'company_domain') in the users table to store the associated domain. This column will contain the domain of the gaming company to which and where user is 
have been registered.

### Considering we have 1 backend cluster that serves all companies, how can we validate a user login on one gaming domain in such a way that it does not give access to a different gaming domain? (i.e. authenticating on site A, grants access to site A only)**:

During login, we can check whether the requested domain matches the domain of the user with which he registered. As next step we can use JWT witch will be contains encoded domain_id. After that on server side for each request for this user with this specific JWT token we can match domens and deside has this user access for this gaming domain or not, as result we can deside should user make registration/sign in on this specific gaming domain or not.