<template>
  <div class="row">
    <draggable
        :list="list"
        :options="{delay:1000}"
        class="list-group"
        ghost-class="ghost"
    >
      <div
          class="list-group-item"
          v-for="item in list"
          :key="item.label"
      >
        <div class="item-wrapper">
          <picture>
            <source
                :srcset="require(`/src/assets/${item.title}.png`)"
                media="(min-width: 768px)"
            >
            <img
                :src="require(`/src/assets/small/${item.title}.png`)"
                alt="Album cover"
                class="image"
            >
          </picture>
          <span class="label">
            {{ item.label | trimString(7) }}
          </span>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: "IconGrid",
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { id: 0, label: "One", title: 'please-please-me' },
        { id: 1, label: "Two", title: 'with-the-beatles' },
        { id: 2, label: "Three", title: 'a-hard-days-night' },
        { id: 3, label: "Four", title: 'beatles-for-sale' },
        { id: 4, label: "Five", title: 'help' },
        { id: 5, label: "Six", title: 'rubber-soul' },
        { id: 6, label: "Seven", title: 'revolver' },
        { id: 7, label: "Eight", title: 'sgt-peppers' },
        { id: 8, label: "Nine", title: 'white-album' },
        { id: 9, label: "Ten", title: 'yellow-submarine' },
        { id: 10, label: "Eleven", title: 'abbey-road' },
        { id: 11, label: "Twelve", title: 'let-it-be' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.list-group {
  display: grid;
  grid-template-columns: repeat(2, auto);

  @media (min-width: 500px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(6, auto);
  }
}

.list-group-item {
  margin: 0 auto;
  padding: 10px;

  .item-wrapper {
    width: 80px;
    color: white;
    cursor: move;

    .image {
      width: 100%;
      height: 80px;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.40) 0 1px 4px 0, rgba(99, 99, 99, 0.2) 0 2px 8px 0;
    }

    .label {
      font-size: .75em;
    }
  }

  &.sortable-chosen {
    .image {
      opacity: .8;
      background: white;
      animation: shake 150ms infinite;
    }
  }

  &.ghost {
    .image {
      opacity: .4;
      background: #cccccc;
      animation: none;
    }
  }

}

@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(3deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
}

</style>