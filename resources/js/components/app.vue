<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" style="border: none;">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
            <router-link class="nav-link text-dark" aria-current="page" to="/about">ABOUT ME</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark" aria-current="page" to="/education">EDUCATION</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark" aria-current="page" to="/experience">EXPERIENCE</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark" aria-current="page" to="/project">PROJECT</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link text-dark" aria-current="page" to="/">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<main>
    <router-view/>
</main>
</template>

