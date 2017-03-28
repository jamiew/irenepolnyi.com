---
title: Irene Polnyi – A Quantitative Self-Portrait
layout: default
---

{% for post in paginator.posts %}
  <div class="post_date">
		{{ post.date | date_to_string }}
		<a href="{{ post.url }}" title="[Permalink] {{ post.title }}" class="permalink" style="border: none;">#</a>
	</div>
  <h2><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h2>
	<div class="post_content">
	  {{ post.content }}
	</div>

  {% if post != paginator.posts.last %}
    <!-- <hr class="post" /> -->
  {% endif %}
{% endfor %}

<div class="paginator">
  
  <div class="left_column">
    {% if paginator.next_page %}
      <a href="/page{{ paginator.next_page }}/">&larr; Older</a>
    {% endif %}
  </div>
  
	<!--
  <form action="http://www.google.com/cse" class="center_column">
    <fieldset>
      <input type="hidden" name="cx" value="011449214013281158279:ie-gceh3d90" />
      <input type="hidden" name="ie" value="UTF-8" />
      <input type="text" name="q" size="31" />
      <input type="submit" name="sa" value="Search" />
    </fieldset>
  </form>
	-->
  
  <div class="right_column">
    {% if paginator.previous_page %}
      <a href="
        {% if paginator.previous_page == 1 %}
          /
        {% else %}
          /page{{ paginator.previous_page }}
        {% endif %}">Newer &rarr;</a>
    {% endif %}
  </div>

  <div class="clear_both">
  </div>

  <hr/>
</div>

