---
layout: page
title: Феномены по годам
permalink: /years/
---

<h1 class="page-title page-title--center">Феномены по годам</h1>

{% assign tags = site.phenomena | sort: 'categories' | map: 'categories' | join: ','  | split: ',' | uniq %}

<ul class="phenomena-list">
  {% for tag in tags %}
    <li class="phenomena-list__item">
      <a class="phenomena-list__year-link" href="{{ base.url }}/years/{{ tag }}" title="Феномены {{ tag }} года">{{ tag }}</a>
      <ul class="phenomena-list__year-list">{% for note in site.phenomena %}{% if note.categories contains tag %}<li class="phenomena-list__year-item"><a href="{{ site.baseurl }}{{ note.url }}" title="{{ note.title }}">{{ note.title }}</a></li>{% endif %}{% endfor %}</ul>
    </li>
  {% endfor %}
</ul>