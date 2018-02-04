# Ghostwriter

Enhanced port of the Ghost "[ghostwriter](https://github.com/roryg/ghostwriter)" theme to the [Hugo](https://gohugo.io) site generator.

## Installation

Inside the folder of your Hugo site run:

```bash
$ mkdir themes
$ cd themes
$ git clone https://github.com/am1t/ghostwriter.git
```

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Development

After installing the theme you need to install javascript dependencies. You can use 
`npm` or `yarn` to install them from `package.json`. We are using `webpack` to build
and package styles. In order to develop with realtime reloading in the browser you can 
use this powerful combo:

```bash
hugo server
yarn run watch
```

To update theme styles edit the `styles/style.scss` file. You can then either use the `watch` command
or run `build` to compile the styles:

```bash
yarn run build
```

## Key Enhancements Introduced

- Support for Table of Contents (TOC) for pages and posts
	- To use, just add `toc : true` to the post/page frontmatter
	- All the headers will be made available as hovering TOC
- Support for link-posts. Just add the URL to be linked to via the title of the post in `refs` parameter in frontmatter.
- Enabled for IndieWeb
	- Validate the compliance with tools at [IndieWebify.me](http://indiewebify.me/)
	- If WebMention endpoint (`webmentionEndpoint`) is configured in `Site.Params` section of `config.toml`, any mentions about the post across web should be pulled at the bottom of the page
	- If MicroPub endpoint (``micropubEndpoint) is configured in `Site.Params` section of `config.toml`, new posts can be added to the site using [MicroPub clients](https://indieweb.org/Micropub/Clients)
- Option to credit the source of the image included in the post. Just add `imgsrc` parameter pointing to the original source in the frontmatter
- Minor improvements in styling across the board

## Example config.toml

You can use the following params to customize the theme. This file is also available in `exampleSite` directory.

```toml
baseurl = "https://example.com/"
title = "Ghostwriter example"
theme = "ghostwriter"
languageCode = "en-us"
copyright = "My Name"
disqusShortname = "XXX"
googleAnalytics = "XXX"

[Author]
    name = "My Name"
    profile = "https://google.com/+XXX"
    email = "XXX@example.com"
    nick = "my-name"

[Taxonomies]
    tag = "tags"

[Params]
    intro = true
    headline = "Ghostwriter example"
    description = "Ghostwriter example description"
    github = "https://github.com/XXX"
    gitlab = "https://gitlab.com/XXX"
    linkedin = "https://linkedin.com/in/XXX/"
    gplus = "https://google.com/+XXX"
    twitter = "https://twitter.com/XXX"
    stackoverflow = "https://stackoverflow.com/users/XXX/YYY"
    microblog = "https://micro.blog/XXX"
    feedurl = "http://example.com/index.xml"
    webmentionEndpoint = "https://example.com/webmention"
    pingbackEndpoint = "https://example.com/pingback"
    micropubEndpoint = "https://example.com/webmention/micropub"
    email = "XXX@example.com"
    opengraph = true
    shareTwitter = true
    shareFacebook = true
    shareGooglePlus = true
    shareLinkedIn = false
    dateFormat = "Mon, Jan 2, 2006"
    highlightJsUrl = ""
    highlightJsLocalUrl = ""

[Permalinks]
    post = "/:year/:month/:day/:filename/"

[[menu.main]]
    name = "Blog"
    url = "/"
    weight = 1

[[menu.main]]
    name = "Projects"
    url = "/project/"
    weight = 2

[[menu.main]]
    name = "Contact"
    url = "/page/contact/"
    weight = 3

[[menu.main]]
    name = "About"
    url = "/page/about/"
    weight = 4
```

You can also inject arbitrary HTML into `<head>` simply by overriding the `extra-in-head.html`
partial, which is meant for that purpose.

The theme is enabled with [IndieWeb](https://indieweb.org) support which can be validated via different tools at website [IndieWebify.me](https://indiewebify.me/).

### Screenshot

![Ghostwriter Theme Home Page](https://github.com/am1t/ghostwriter/blob/master/screenshot.png?raw=true)