---
title: Accueil
description: ''
position: 1
category: ''
features:
  - Feature 1
  - Feature 2
  - Feature 3
---

<nuxt-link to="/homepage/introduction">Nuxt Link to intro 👍</nuxt-link>

<nuxt-img src="/obi1.jpg" class="light-img" width="664" height="252" loading="lazy"></nuxt-img>
<nuxt-img src="/obi1.jpg" class="dark-img" width="664" height="252" loading="lazy"></nuxt-img>

<img src="/yoda1.jpg" class="light-img" width="1280" height="640" alt=""/>

<img src="/preview.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/preview-dark.png" class="dark-img" width="1280" height="640" alt=""/>

[Module]() for [NuxtJS](https://nuxtjs.org).

<alert type="success">

Your documentation has been created successfully!

</alert>

## Features

<list :items="features"></list>

<p class="flex items-center">Enjoy light and dark mode:&nbsp;<app-color-switcher class="inline-flex ml-2"></app-color-switcher></p>

