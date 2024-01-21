---
title: All pages
layout: info
exclude: true
published: true
---
[Selected pages](index) / [All pages](all-pages)

<ul>
  {% assign mypages = site.pages | sort: "order" %}
  {% for page in mypages %}
  {% unless page.exclude %}
  <li class="intro">
  <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
  </li>
  {% endunless %}
 {% endfor %}
</ul>
