---
title: Indexmod grid
permalink: grid
layout: universe
shortname: GRID
exclude: true
---

<wrap>
{% assign mypages = site.html_pages | sort: "order" %}
{% for page in mypages %}
{% unless page.exclude %}
<figure>
<p>{% include sphere.html %}</p>
<figcaption>
<p class="shortname">{{page.shortname}}</p>
</figcaption>
</figure>
{% endunless %}
{% endfor %}
</wrap>

[Pages](/pages.md)
[Universe](/universe.md)
