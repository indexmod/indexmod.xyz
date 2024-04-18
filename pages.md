---
title: Pages
layout: default
exclude: true
published: true
shortname: PAGES
---

[Uni](/universe.md)

<ul>
  {% assign mypages = site.pages | sort: "order" %}
  {% for page in mypages %}
    {% unless page.exclude or (page.path contains 'style.scss' or page.path contains 'style-uni.scss' or page.path contains '.htaccess') %}
      <li class="intro">
        <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
      </li>
    {% endunless %}
  {% endfor %}
</ul>
