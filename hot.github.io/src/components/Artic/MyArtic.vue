<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img
            :src="cover.images"
            alt=""
            class="thumb"
            v-if="cover.type === 1"
          />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img
            src="https://www.escook.cn/vuebase/pics/2.png"
            alt=""
            class="thumb"
          />
          <img
            src="https://www.escook.cn/vuebase/pics/2.png"
            alt=""
            class="thumb"
          />
          <img
            src="https://www.escook.cn/vuebase/pics/2.png"
            alt=""
            class="thumb"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者&nbsp;{{ author }} &nbsp;&nbsp; {{ count }}&nbsp;评论
            &nbsp;&nbsp; 发布日期&nbsp;{{ pubdate }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" @click="remove" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    pubdate: {
      type: String,
      default: ''
    },
    count: {
      type: [String, Number],
      default: 0
    },
    id: {
      type: [String, Number],
      default: 0
    },
    cover: {
      type: Object,
      defauly: function () {
        return { images: [], type: 3 }
      }
    }
  },
  methods: {
    remove() {
      this.$emit('removeNews', this.id)
    }
  }
}
</script>
<style scoped lang="less">
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  /* // 矩形黄金比例：0.618 */

  width: 113px;
  height: 70px;
  object-fit: cover;
  //这三行代码表示对图片进行按比例切割，若原图高度为140，70px表示把高度变为原来的一般
  background-color: #f8f8f8;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
