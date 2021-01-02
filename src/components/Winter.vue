<template>
  <header @mouseenter="IMouseenter" @mousemove="IMousemove" @mouseleave="IMouseout" ref="IHeader">
    <div class="view">
      <img src="../assets/bilibili-winter-view-1.jpg" class="morning" alt="">
      <img src="../assets/bilibili-winter-view-2.jpg" class="afternoon" alt="">
      <video autoplay loop muted class="evening">
        <source src="../assets/bilibili-winter-view-3.webm" type="video/webm" />
      </video>
      <img src="../assets/bilibili-winter-view-3-snow.png" class="window-cover" alt="">
    </div>

    <div class="tree">
      <img src="../assets/bilibili-winter-tree-1.png" class="morning" alt="">
      <img src="../assets/bilibili-winter-tree-2.png" class="afternoon" alt="">
      <img src="../assets/bilibili-winter-tree-3.png" class="evening" alt="">
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Winter',
    methods: {
      IMouseenter: function (e) {
        this.startingPoint = e.clientX
        this.$refs.IHeader.classList.add('moving')
      },

      IMouseout: function (e) {
        this.$refs.IHeader.classList.remove('moving')
        this.$refs.IHeader.style.setProperty('--percentage', 0.5)
      },

      IMousemove: function (e) {
        let percentage = (e.clientX - this.startingPoint) / window.outerWidth + 0.5
          this.$refs.IHeader.style.setProperty('--percentage', percentage)
      },


    }
  }
</script>

<style scoped>
  body {
    margin: 0;
  }

  header {
    margin-top: 250px;
    height: 160px;
    position: relative;
    overflow: hidden;
    --percentage: 0.5;
  }

  header .view, header .tree {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header img, header video {
    position: absolute;
    display: block;
    width: 120%;
    height: 100%;
    object-fit: cover;
  }

  header .morning {
    z-index: 20;
    opacity: calc(1 - (var(--percentage) - 0.25) / 0.25);
  }

  header .afternoon {
    z-index: 10;
    opacity: calc(1 - (var(--percentage) - 0.5) / 0.5);
  }

  header .view {
    transform: translatex(calc(var(--percentage) * 100px));
  }

  header .tree {
    transform: translatex(calc(var(--percentage) * 50px));
    filter: blur(3px);
  }

  header .view,
  header .tree,
  header .morning,
  header .afternoon {
    transition: .2s all ease-in;
  }

  header.moving .view,
  header.moving .tree,
  header.moving .morning,
  header.moving .afternoon {
    transition: none;
  }

  header .window-cover {
    opacity: calc((var(--percentage) - 0.9) / 0.1);
  }
</style>
