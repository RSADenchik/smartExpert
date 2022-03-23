<template>
    <h4>Test Task</h4>
    <main>
        <nav>
            <router-link :to="this.$route.name = 'select'" >Component: BaseSelect</router-link>
            <router-link :to="this.$route.name = 'tooltip'">Component: BaseTooltip</router-link>
        </nav>
        <router-view/>
    </main>
</template>
