# Ghostwriter

Enhanced port of the Ghost "[ghostwriter](https://github.com/roryg/ghostwriter)" theme to the [Hugo](https://gohugo.io) site generator.

## Installation

Inside the folder of your Hugo site run:

    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/jbub/ghostwriter

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Example config.toml

To customize your theme you can use following params:

```toml
baseurl = "https://example.com/"
title = "mytitle"
theme = "ghostwriter"
languageCode = "en-us"
copyright = "My Name"
googleAnalytics = "XXX"
disqusShortname = "XXX"

[Author]
    name = "My Name"
    profile = "https://google.com/+XXX"

[Taxonomies]
    tag = "tags"

[Params]
    intro = true
    headline = "My headline"
    description = "My description"
    github = "https://github.com/XXX"
    gitlab = "https://gitlab.com/XXX"
    linkedin = "https://linkedin.com/in/XXX/"
    gplus = "https://google.com/+XXX"
    twitter = "https://twitter.com/XXX"
    stackoverflow = "https://stackoverflow.com/users/XXX/YYY"
    email = "XXX@example.com"
    opengraph = true

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
