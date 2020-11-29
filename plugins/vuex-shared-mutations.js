import createMutationsSharer, { BroadcastChannelStrategy, LocalStorageStratery } from "vuex-shared-mutations";

function createStrategy() {
  /* istanbul ignore next: browser-dependent code */
  if (BroadcastChannelStrategy.available()) {
    return new BroadcastChannelStrategy();
  }

  /* istanbul ignore next: browser-dependent code */
  if (LocalStorageStratery.available()) {
    return new LocalStorageStratery();
  }

  /* istanbul ignore next: browser-dependent code */
  throw new Error("No strategies available");
}

export default ({ store }) => {
  window.onNuxtReady(() => {
    createMutationsSharer({
      predicate: (mutation) => mutation.type.startsWith("profile/") || mutation.type.startsWith("global/"),
      strategy: createStrategy(),
    })(store);
  });
};
