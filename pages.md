---
title: Modindex by Andrei Deinichenko
layout: cover
exclude: true
published: true
---

Developed by [Андрей Дейниченко](mailto:indexmod@ya.ru)

[Uni](/universe.md)

<ul>
  {% assign mypages = site.pages | sort: "order" %}
  {% for page in mypages %}
    {% unless page.exclude or (page.path contains 'style.scss' or page.path contains 'style-universe.scss' or page.path contains '.htaccess') %}
      <li class="intro">
        <a href="{{ page.url | absolute_url }}">{{ page.title }}</a>
      </li>
    {% endunless %}
  {% endfor %}
</ul>
