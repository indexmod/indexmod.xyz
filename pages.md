---
title: Modindex by Andrei Deinichenko
layout: cover
exclude: true
published: true
---

is a Chainpædia developed and edited by [Андрей Дейниченко](mailto:indexmod@ya.ru)


<ul>
  {% assign mypages = site.pages | sort: "order" %}
  {% for page in mypages %}
    {% unless page.exclude or (page.path contains 'style.scss' or page.path contains 'style-universe.scss' '.htaccess') %}
      <li class="intro">
        <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
      </li>
    {% endunless %}
  {% endfor %}
</ul>
