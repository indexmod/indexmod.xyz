---
title: Indexmod universe
permalink: universe
layout: tech-universe
shortname: UNIVERSE
exclude: true
---

+ This page animation performed best in Google Chrome and Firefox

<wrap>

{% assign mypages = site.html_pages | sort: "order" %}
{% for page in mypages %}
{% unless page.exclude %}
<figure>
<a href="{{ page.permalink | absolute_url }}">{% include indexmod-indicator.html %}</a>
<figcaption>
<p class="shortname">{{page.shortname}}</p></figcaption>
</figure>
{% endunless %}
{% endfor %}

</wrap>
