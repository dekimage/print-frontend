const Reducer = (store, action) => {
  switch (action.type) {
    case "UPDATE_LEVEL_REWARDS":
      return {
        ...store,
        user: {
          ...store.user,
          rewards_tower: action.data.rewards_tower,
          [action.data.updatedRewards.rewardType]:
            action.data.updatedRewards.quantity,
        },
      };

    default:
      return store;
  }
};

export { Reducer as default };
