---
layout: page
permalink: /gallery/
title: Gallery
description: Fun moments and social activities with my research group and fellow graduate students at Georgia Tech.
nav: true
nav_order: 4
---

<div class="projects">
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
      <div class="col">
        <div class="card h-100">
          <img src="{{ '/assets/img/christmas_party_playing_the_othello_game.jpg' | relative_url }}" class="card-img-top" alt="Game Night">
          <div class="card-body">
            <h5 class="card-title">Game Night!</h5>
            <p class="card-text">Having fun with board games during our Christmas party. Nothing beats a good strategy game to bring the research group together for some friendly competition!</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="{{ '/assets/img/Dr.Molzahns_birthday_party_surpise.jpg' | relative_url }}" class="card-img-top" alt="Surprise Birthday Party">
          <div class="card-body">
            <h5 class="card-title">Surprise Birthday Celebration!</h5>
            <p class="card-text">We surprised Prof. Molzahn for his birthday! It's always great to celebrate our amazing advisor who makes research both challenging and enjoyable.</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="{{ '/assets/img/group_photo_Dr.Molzahns_home_christmas_party.jpg' | relative_url }}" class="card-img-top" alt="Christmas Party Group Photo">
          <div class="card-body">
            <h5 class="card-title">Christmas Party!</h5>
            <p class="card-text">Our research group Christmas celebration at Prof. Molzahn's house. These get-togethers are the best way to unwind after long hours in the lab and bond as a team!</p>
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