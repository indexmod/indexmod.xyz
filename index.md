---
title: Modindex by Andrei Deinichenko
layout: tech-universe
exclude: true
---


+ Идет настроечка

<wrap>
{% assign mypages = site.html_pages | sort: "order" %}
{% for page in mypages %}
{% unless page.exclude %}
<figure>{% include indexmod-indicator.html %}</figure>
<figcaption>{{page.shortname}}</figcaption>
{% endunless %}
{% endfor %}
</wrap>
