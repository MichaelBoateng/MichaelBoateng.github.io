---
layout: page
permalink: /gallery/
title: Gallery
description: Visual documentation of my research work, conference presentations, and professional activities in power systems and machine learning.
nav: true
nav_order: 4
---

<div class="projects">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
      <div class="col">
        <div class="card h-100">
          <img src="{{ '/assets/img/christmas_party_playing_the_othello_game.jpg' | relative_url }}" class="card-img-top" alt="Team Building Activity">
          <div class="card-body">
            <h5 class="card-title">Team Building & Strategy</h5>
            <p class="card-text">Engaging in strategic thinking through board games during our research group's Christmas celebration. These informal activities strengthen collaboration and problem-solving skills that translate to our research work.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="{{ '/assets/img/Dr.Molzahns_birthday_party_surpise.jpg' | relative_url }}" class="card-img-top" alt="Academic Mentorship Celebration">
          <div class="card-body">
            <h5 class="card-title">Celebrating Academic Mentorship</h5>
            <p class="card-text">Surprise birthday celebration for Prof. Daniel Molzahn, my co-advisor. These moments highlight the strong mentoring relationships and supportive academic community at Georgia Tech.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="{{ '/assets/img/group_photo_Dr.Molzahns_home_christmas_party.jpg' | relative_url }}" class="card-img-top" alt="Research Group Community">
          <div class="card-body">
            <h5 class="card-title">Research Group Community</h5>
            <p class="card-text">Group photo at our advisor's home during Christmas festivities. Building strong interpersonal relationships within our research team fosters collaborative excellence and creates a supportive academic environment.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .card-img-top {
    height: 250px;
    object-fit: cover;
  }
  
  .card {
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
</style>