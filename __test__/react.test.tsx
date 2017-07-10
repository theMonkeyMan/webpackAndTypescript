import * as React from 'react';
import InputCompnent from '../src/js/components/inputCompnent';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

describe('test inputComponent', () => {
  const component = shallow(
    <InputCompnent>Facebook</InputCompnent>
  );

  it('init value', async () => {
    expect(component.state().inputText).toEqual('');
  });

  it('change value', async () => {
    component.find('input').simulate('change', { value: 'test' });
    let promise = promiseFactory(200);

    await promise.then(res => {
      expect(component.state().inputText).toEqual("test");
      console.info(expect(component.find('input')).toHaveLength(1))
    })
  });
})

function promiseFactory(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}