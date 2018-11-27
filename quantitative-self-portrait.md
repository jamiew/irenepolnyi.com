---
title: Irene Polnyi - Quantitative Self-Portrait
layout: default
---

<style type="text/css">
  .headline {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .byline {
    font-style: italic;
    margin-top: 0;
    padding-top: 0;
  }
  .post-title {
    font-weight: bold;
    border-bottom: 1px solid #ccc;
  }
</style>

<h2 class="headline">{ data me }</h2>
<p class="byline">A quantitative self-portrait</p>

{% for post in site.posts %}
  <p class="post-title">{{ post.title }}</p>
  <p>
    {{post.content}}
  </p>
{% endfor %}

&rarr; even older: [archive.org version](https://web.archive.org/web/20161012004317/http://www.irenepolnyi.com/)