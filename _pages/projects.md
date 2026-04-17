---
layout: page
title: News
permalink: /News/
description: Newsletters from academia and industry highlighting my work and accomplishments from undergraduate through graduate studies. These letters cover a wide range of problems in electrical engineering.
nav: true
nav_order: 2
display_categories: [Institutional Newsletters]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

## Recent News

<div class="news-section">
{% assign sorted_posts = site.posts | sort: 'date' | reverse | limit: 10 %}
{% for post in sorted_posts %}
  <div class="news-item" style="margin-bottom: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 5px;">
    <h4 style="margin-bottom: 0.5rem;">{{ post.title }}</h4>
    <p style="margin: 0.5rem 0; color: #666; font-size: 0.9em;">{{ post.date | date: "%B %d, %Y" }}</p>
    <p style="margin: 0.5rem 0;">{{ post.excerpt }}</p>
  </div>
{% endfor %}
</div>
