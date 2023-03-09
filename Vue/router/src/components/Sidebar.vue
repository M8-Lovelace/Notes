<template>
    <div class="col-4 sidebar ps-4">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><img src="../assets/menu.png" class="m-2" alt="" width="32"
                    height="32"></span>
        </button>
        <div class="row collapse navbar-collapse" id="navbarSupportedContent">
            <div class="col-sm-auto bg-light sticky-top mt-4">
                <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                    <ul
                        class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                        <li>
                            <a class="nav-link py-3 px-2 mt-3">
                                <router-link to="/">
                                    <img src="../assets/home.png" alt="" width="32" height="32">
                                </router-link>
                            </a>
                        </li>
                        <li>
                            <a class="nav-link py-3 px-2 mt-3">
                                <router-link to="/login">
                                    <img src="../assets/login.jpg" alt="" width="32" height="32">
                                </router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link py-3 px-2 mt-3 mb-sm-3">
                                <router-link to="/about">
                                    <img src="../assets/icon.png" alt="" width="32" height="32">
                                </router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.sidebar{
    position: absolute;
    top: 0;
}
</style>