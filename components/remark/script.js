import remark from "remark";
import html from "remark-html";
import emoji from "remark-emoji";

export default {
  name: "Remark",
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  watch: {
    markdown() {
      this.updateMarkdown();
    },
  },
  methods: {
    updateMarkdown() {
      const self = this;
      remark()
        .use(emoji)
        .use(html)
        .process(this.$props.markdown, (err, file) => {
          /*
           * We ignore `if` statement from coverage because if we have an error
           * here, it is due to remark and not to input.
           */
          /* istanbul ignore if  */
          if (err) {
            console.error(err);
          } else {
            self.$data.value = file.contents;
            this.$emit("md-update", file.contents);
          }
        });
    },
  },
  mounted() {
    this.updateMarkdown();
  },
};
