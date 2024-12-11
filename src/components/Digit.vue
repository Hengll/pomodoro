<template>
  <svg
    id="圖層_1"
    class="digit"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="470px"
    height="841.89px"
    viewBox="0 0 470 841.89"
    enable-background="new 0 0 470 841.89"
    xml:space="preserve"
  >
    <path
      :class="{ active: '02356789'.includes(data) }"
      class="digit-a"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M441,9c0,4.971-4.029,9-9,9H32c-4.971,0-9-4.029-9-9l0,0
	c0-4.971,4.029-9,9-9h400C436.971,0,441,4.029,441,9L441,9z"
    />
    <path
      :class="{ active: '045689'.includes(data) }"
      class="digit-b"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M9,0c4.971,0,9,4.029,9,9v400c0,4.971-4.029,9-9,9l0,0
	c-4.971,0-9-4.029-9-9V9C0,4.029,4.029,0,9,0L9,0z"
    />
    <path
      :class="{ active: '2345689'.includes(data) }"
      class="digit-c"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M444,420.945c0,4.971-4.029,9-9,9H35c-4.971,0-9-4.029-9-9l0,0
	c0-4.971,4.029-9,9-9h400C439.971,411.945,444,415.974,444,420.945L444,420.945z"
    />
    <path
      :class="{ active: '0235689'.includes(data) }"
      class="digit-d"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M444,832.89c0,4.971-4.029,9-9,9H35c-4.971,0-9-4.029-9-9l0,0
	c0-4.971,4.029-9,9-9h400C439.971,823.89,444,827.919,444,832.89L444,832.89z"
    />
    <path
      :class="{ active: '0268'.includes(data) }"
      class="digit-e"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M9,423.89c4.971,0,9,4.029,9,9v400c0,4.971-4.029,9-9,9l0,0
	c-4.971,0-9-4.029-9-9v-400C0,427.919,4.029,423.89,9,423.89L9,423.89z"
    />
    <path
      :class="{ active: '01234789'.includes(data) }"
      class="digit-f"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M461,0c4.971,0,9,4.029,9,9v400c0,4.971-4.029,9-9,9l0,0
	c-4.971,0-9-4.029-9-9V9C452,4.029,456.029,0,461,0L461,0z"
    />
    <path
      :class="{ active: '013456789'.includes(data) }"
      class="digit-g"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      d="M461,423.89c4.971,0,9,4.029,9,9v400c0,4.971-4.029,9-9,9l0,0
	c-4.971,0-9-4.029-9-9v-400C452,427.919,456.029,423.89,461,423.89L461,423.89z"
    />
    <circle
      :class="{ active: ':'.includes(data) }"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      cx="235"
      cy="209"
      r="53.5"
    />
    <circle
      :class="{ active: ':'.includes(data) }"
      fill="#E71E19"
      stroke="#000000"
      stroke-miterlimit="10"
      cx="235"
      cy="632.89"
      r="53.5"
    />
  </svg>
</template>

<script setup>
// const props = defineProps(['data', 'color'])
defineProps({
  data: {
    type: String,
    default() {
      return ''
    },
  },
  color: {
    type: String,
    default() {
      return ''
    },
  },
})
</script>

<style scoped lang="scss">
.digit {
  width: 8%;
  height: 100%;
  margin: 10px;
}

path,
circle {
  fill: transparent;
  stroke: none;
  &.active {
    // v-bind 把 CSS 的值和 Vue 的變數綁定
    fill: v-bind(color);
  }
}
</style>
