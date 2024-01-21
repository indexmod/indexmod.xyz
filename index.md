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
<figure>
<p>{% include indexmod-indicator.html %}</p>
<figcaption>
<a href="{{page.shortname}}" class="shortname">{{page.shortname}}</a>
</figcaption>
</figure>
{% endunless %}
{% endfor %}
</wrap>
