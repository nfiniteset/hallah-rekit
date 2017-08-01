import { expect } from 'chai';

const upsertById = require('../../src/common/upsertById');

describe('upsert', () => {
  describe('with an existing item', () => {
    let list;
    let result;

    before(() => {
      list = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
      result = upsertById(list, { id: 2, name: 'baz' });
    });

    it('updates the existing item', () => {
      const updatedItem = result.find(o => o.id === 2);
      expect(updatedItem.name).to.eq('baz');
    });

    it('does not modify the initial list', () => {
      const originalItem = list.find(o => o.id === 2);
      expect(originalItem.name).to.eq('bar');
    });
  });

  describe('with a non-existing item', () => {
    let list;
    let result;

    before(() => {
      list = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
      result = upsertById(list, { id: 3, name: 'buzz' });
    });


    it('inserts the item', () => {
      const insertedItem = result.find(o => o.id === 3);
      expect(insertedItem.name).to.eq('buzz');
    });

    it('does not modify the existng list', () => {
      expect(list.length).to.eq(2);
    });
  });
});
