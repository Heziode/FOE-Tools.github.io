import { ElementMixin, HandleDirective } from "vue-slicksort";

export default {
  name: "SortableItem",
  mixins: [ElementMixin],
  props: ["item", "showHandle"],
  directives: { handle: HandleDirective },
};
