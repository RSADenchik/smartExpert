<template>
    <div class="custom-tooltip">
        <div v-for="item in items" :key="item.title" class="btn" @mouseenter="showTooltip($event, item)" @click="showTooltip($event, item)">
            <span class="btn-title">{{ item.title }}</span>
            <span :class="item.active ? `active tooltip ${item.position}` : `tooltip ${item.position}`">{{ item.tooltip }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseTooltip",
    data() {
        return {
            items: [
                {title: 'Bottom', tooltip: 'Text text text text text text text text text', position: 'bottom', active: false},
                {title: 'Top', tooltip: 'Text text text text text text text text text', position: 'top', active: false},
                {title: 'Left', tooltip: 'Text text text text text text text text text', position: 'left', active: false},
                {title: 'Right', tooltip: 'Text text text text text text text text text', position: 'right', active: false},
            ]
        }
    },
    created() {
        window.addEventListener("resize", this.resize);
        window.addEventListener('click', this.autoHideTooltip);
        window.addEventListener('touchstart', this.autoHideTooltip);
    },
    methods: {
        showTooltip(target, item) {
            item.active = true
            if (target.view.outerWidth < 600 && (item.position === 'left' || item.position === 'right')) {
                item.position = 'bottom';
            }
        },
        resize() {
            this.items.map((i) => {
                i.position = i.title.toLowerCase()
                i.active = false
            });
        },
        autoHideTooltip(e) {
            e.stopPropagation()
            if(e.target.classList[0] !== 'btn' && e.target.classList[0] !== 'btn-title') {
                this.items.map((i) => i.active = false)
            }
        }
    }
}
</script>
