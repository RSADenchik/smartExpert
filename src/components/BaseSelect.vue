<template>
    <div class="custom-select" v-if="items"
         @mouseleave="this.openList = false">
        <div class="custom-select__selected"
             @click="openList = !openList">
            {{ selectedItem ? selectedItem.name : items ? items[0].name : '' }}
            <span :class="openList ? 'chevron' : 'chevron bottom'"></span>
        </div>
        <ul :style="openList ? `max-height: ${items.length * 34}px` : ''">
            <li
                v-for="item in items"
                :data-id="item.id"
                :key="item.id"
                @click="onSelectItem(item)">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "BaseSelect",
    data() {
        return {
            items: null,
            openList: false,
            selectedItem: null
        }
    },
    created() {
        this.axios.get('https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users').then((response) => {
            this.items = response.data;
        })
    },
    methods: {
        onSelectItem(item) {
            this.selectedItem = item;
            this.openList = false;
        }
    }
}
</script>