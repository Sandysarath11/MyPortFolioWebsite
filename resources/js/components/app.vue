<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-tertiary">
        <div class="container-fluid">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/about">ABOUT ME</router-link>
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
                    <router-link class="nav-link active" aria-current="page" to="/">CONTACT</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        <router-view/>
    </main>
</template>
