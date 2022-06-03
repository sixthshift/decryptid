import observable from './observable';

describe('Observable', () => {
  let obj;

  beforeEach(() => {
    obj = { a: 1 };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should allow callbacks to be subscribed', () => {
    const o = observable(obj);
    const subscription1 = jest.fn();
    o.subscribe(subscription1);
    expect(o.subscriptions).toHaveLength(1);
    expect(o.subscriptions).toContain(subscription1);
    const subscription2 = jest.fn();
    o.subscribe(subscription2);
    expect(o.subscriptions).toHaveLength(2);
    expect(o.subscriptions).toContain(subscription2);
  });

  it('should publish changes to subscribers', () => {
    const o = observable(obj);
    const subscription1 = jest.fn();
    o.subscribe(subscription1);
    o.a = 2;
    expect(subscription1).toHaveBeenCalledTimes(1);
    const subscription2 = jest.fn();
    o.subscribe(subscription2);
    o.a = 3;
    expect(subscription1).toHaveBeenCalledTimes(2);
    expect(subscription2).toHaveBeenCalledTimes(1);
  });

  it('should maintain its own list of subscriptions', () => {
    const o1 = observable(obj);
    const o2 = observable(obj);
    const subscription1 = jest.fn();
    const subscription2 = jest.fn();
    const subscription3 = jest.fn();
    o1.subscribe(subscription1);
    expect(o1.subscriptions).toHaveLength(1);
    expect(o1.subscriptions).toContain(subscription1);
    o1.subscribe(subscription2);
    expect(o1.subscriptions).toHaveLength(2);
    expect(o1.subscriptions).toContain(subscription2);
    o2.subscribe(subscription3);
    expect(o2.subscriptions).toHaveLength(1);
    expect(o2.subscriptions).toContain(subscription3);
    o1.subscribe(subscription3);
    expect(o1.subscriptions).toHaveLength(3);
    expect(o1.subscriptions).toContain(subscription3);
  });

  it('should not modify the underlying target object', () => {
    const o = observable(obj);
    expect(o).toHaveProperty('subscriptions');
    expect(obj).not.toHaveProperty('subscriptions');
  });
});
