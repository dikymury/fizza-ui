<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 18 19"
    fill="none"
  >
    <linear-gradient-svg :ids="idx" />
    <g :clip-path="`url(#${idx})`">
      <path
        d="M16.1051 6.95682L6.24577 1.67989C6.02327 1.56177 5.7752 1.5 5.52329 1.5C5.27137 1.5 5.0233 1.56177 4.8008 1.67989L1.88692 3.19671C1.62418 3.34069 1.40438 3.55183 1.24996 3.80856C1.09553 4.06529 1.01203 4.35841 1.00797 4.65798C1.00391 4.95755 1.07944 5.25283 1.22685 5.51365C1.37426 5.77447 1.58827 5.99149 1.847 6.14253L11.6025 11.6749C11.8395 11.8063 12.106 11.8753 12.3769 11.8753C12.6479 11.8753 12.9143 11.8063 13.1513 11.6749L16.1769 9.88667C16.4303 9.73183 16.6385 9.51303 16.7806 9.25225C16.9227 8.99147 16.9937 8.6979 16.9864 8.40102C16.9791 8.10413 16.8938 7.81439 16.7392 7.56089C16.5845 7.30739 16.3658 7.09906 16.1051 6.95682Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.9949 17.4628V10.2779M1.88182 6.95682L11.7411 1.67989C11.9636 1.56177 12.2117 1.5 12.4636 1.5C12.7155 1.5 12.9636 1.56177 13.1861 1.67989L16.1 3.19671C16.3648 3.33705 16.5877 3.54521 16.7457 3.79991C16.9037 4.05461 16.9913 4.3467 16.9994 4.64633C17.0075 4.94595 16.9359 5.24236 16.7919 5.50524C16.6479 5.76812 16.4367 5.98805 16.1798 6.14253L6.38437 11.6749C6.14743 11.8063 5.88094 11.8753 5.61 11.8753C5.33906 11.8753 5.07257 11.8063 4.83562 11.6749L1.80997 9.88668C1.55656 9.73183 1.34836 9.51303 1.20628 9.25225C1.06419 8.99147 0.993228 8.6979 1.00051 8.40102C1.00779 8.10413 1.09306 7.81439 1.24776 7.56089C1.40245 7.30739 1.62113 7.09906 1.88182 6.95682Z"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3826 10.6772V13.3676C15.3829 13.6689 15.3004 13.9646 15.1441 14.2222C14.9879 14.4798 14.7638 14.6896 14.4964 14.8285L9.70649 17.2874C9.48702 17.4014 9.24331 17.461 8.99598 17.461C8.74864 17.461 8.50494 17.4014 8.28547 17.2874L3.49552 14.8285C3.22814 14.6896 3.00409 14.4798 2.84782 14.2222C2.69155 13.9646 2.60906 13.6689 2.60938 13.3676V10.6772"
        :stroke="gradient ? `url(#${idx})` : 'currentColor'"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath :id="idx">
        <rect width="19" height="19" fill="none" />
      </clipPath>
    </defs>
  </svg>
</template>
<script setup>
import LinearGradientSvg from "./components/LinearGradientSvg.vue";
defineProps({
  width: {
    type: [String, Number],
    default: 18,
  },
  height: {
    type: [String, Number],
    default: 18,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  // id uniq for every svg icon
  idx: {
    type: [String, Number],
    default: "1",
  },
});
</script>
