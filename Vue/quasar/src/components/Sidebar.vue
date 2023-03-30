<template>
    <div>
        <q-list class="iconsList">
            <q-item clickable v-ripple class="item">
                <q-item-section avatar>
                    <router-link to="/" >
                        <i class="icon icon-home"></i>
                    </router-link>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple class="item">
                <q-item-section avatar>
                    <router-link to="/login">
                        <i class="icon icon-login"></i>
                    </router-link>
                </q-item-section>
            </q-item>
            <q-item clickable v-ripple class="item">
                <q-item-section avatar>
                    <router-link to="/about">
                        <i class="icon icon-about"></i>
                    </router-link>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<style scoped lang="sass">
i
    font-size: 1.6rem
    color: white
    // -webkit-text-stroke: 1px
    font-weight: bold

.iconsList
    margin-top: 15px

.item
    padding-left: 25px
    padding-top: 15px
    padding-bottom: 15px

a
    text-decoration: none
</style>