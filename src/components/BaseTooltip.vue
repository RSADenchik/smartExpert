<template>
    <div class="custom-tooltip">
        <div v-for="item in items" :key="item.title" class="btn" @mouseenter="calcCord($event, item)">
            <span>{{ item.title }}</span>
            <span :class="`tooltip ${item.position}`">{{ item.tooltip }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseTooltip",
    data() {
        return {
            items: [
                {title: 'Bottom', tooltip: 'Text text text text text text text text text', position: 'bottom'},
                {title: 'Top', tooltip: 'Text text text text text text text text text', position: 'top'},
                {title: 'Left', tooltip: 'Text text text text text text text text text', position: 'left'},
                {title: 'Right', tooltip: 'Text text text text text text text text text', position: 'right'},
            ]
        }
    },
    created() {
        window.addEventListener("resize", this.resize);
    },
    methods: {
        calcCord(target, item) {
            if (target.view.outerWidth < 600 && (item.position === 'left' || item.position === 'right')) {
                item.position = 'bottom';
            }
        },
        resize() {
            this.items.map((i) => i.position = i.title.toLowerCase())
        }
    },
}
</script>
