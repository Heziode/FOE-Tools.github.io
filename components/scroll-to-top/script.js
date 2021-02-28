export default {
  name: "ScrollToTop",
  props: {
    visibleY: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      this.isVisible = this.visibleY < window.scrollY;
    },
    goToTop() {
      if (document.scrollingElement.scrollTop === 0) return;
      window.scroll({ top: 0 });
      this.$emit("scrolledOnTop");
    },
  },
};
