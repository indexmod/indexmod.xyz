---
title: Indexmod universe
permalink: universe
layout: tech-universe
shortname: UNIVERSE
exclude: true
---

<wrap>
<p>[Pages](/pages.md)</p>
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
