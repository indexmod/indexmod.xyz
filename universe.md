---
title: Indexmod universe
permalink: universe
layout: universe
shortname: UNIVERSE
exclude: true
---

<wrap>
{% assign mypages = site.html_pages | sort: "order" %}
{% for page in mypages %}
{% unless page.exclude %}
<figure>
<p>{% include sound.html %}</p>
<figcaption>
<p class="shortname">{{page.shortname}}</p>
</figcaption>
</figure>
{% endunless %}
{% endfor %}
</wrap>

<p>[Pages](/pages.md)</p>
