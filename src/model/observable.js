export default (object) => {
  const subscriptions = [];
  const subscribe = (subscription) => {
    subscriptions.push(subscription);
  };
  return new Proxy(object, {
    get(target, prop, receiver) {
      if (prop === 'subscribe') {
        return subscribe;
      }
      if (prop === 'subscriptions') {
        return subscriptions;
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, val, receiver) {
      const result = Reflect.set(target, prop, val, receiver);
      subscriptions.forEach((subscription) => {
        subscription();
      });
      return result;
    },
  });
};
