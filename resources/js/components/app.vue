<template>
    <!-- <nav>
        <div>
            <router-link to="/">ABOUT ME</router-link>
            <router-link to="/education">EDUCATION</router-link>
            <router-link to="/experience">EXPERIENCE</router-link>
            <router-link to="/project">PROJECT</router-link>
            <router-link to="/contact">CONTACT</router-link>
        </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">ABOUT ME</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/education">EDUCATION</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/experience">EXPERIENCE</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/project">PROJECT</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/contact">CONTACT</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <main>
        <router-view/>
    </main>
</template>
