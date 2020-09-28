import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';
import TabulatorComponent from '@/components/TabulatorComponent.vue';
import { UpdateStrategy } from '@/types';

const mockSetData = jest.fn();
const mockReplaceData = jest.fn();
const mockUpdateData = jest.fn();

jest.mock('tabulator-tables', () => jest.fn().mockImplementation(() => ({
  setData: mockSetData,
  replaceData: mockReplaceData,
  updateData: mockUpdateData,
})));
const Tabulator = require('tabulator-tables');

const options : Tabulator.Options = {
  columns: [
    {
      title: 'Name',
      field: 'name',
      sorter: 'string',
      width: 200,
      editor: true,
    },
  ],
};

describe('TabulatorComponent.vue | Integration Module', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Tabulator.mockClear();
    mockSetData.mockClear();
    mockReplaceData.mockClear();
    mockUpdateData.mockClear();
  });

  describe('Watchers', () => {
    test('update the v-model should use UpdateStrategy.DATA for default', async () => {
      const wrapper = mount(TabulatorComponent, {
        propsData: {
          options,
        },
      });


      wrapper.setProps({
        tableData: [],
      });

      await Vue.nextTick();
      expect(mockSetData).toHaveBeenCalled();
    });

    test('update the v-model should use UpdateStrategy.REPLACE', async () => {
      const wrapper = mount(TabulatorComponent, {
        propsData: {
          tableData: [{ name: 'Pi' }],
          options,
          integration: {
            updateStrategy: UpdateStrategy.REPLACE,
          },
        },
      });


      wrapper.setProps({
        tableData: [],
      });

      await Vue.nextTick();
      expect(mockSetData).not.toHaveBeenCalled();
      expect(mockReplaceData).toHaveBeenCalled();
    });

    test('update de v-model should use UpdateStrategy.UPDATE', async () => {
      const wrapper = mount(TabulatorComponent, {
        propsData: {
          tableData: [{ id: 1, name: 'Someone to update' }],
          options,
          integration: {
            updateStrategy: UpdateStrategy.UPDATE,
          },
        },
      });

      wrapper.setProps({
        tableData: [{ id: 1, name: 'Someone updated' }],
      });

      await Vue.nextTick();
      expect(mockSetData).not.toHaveBeenCalled();
      expect(mockReplaceData).not.toHaveBeenCalled();
      expect(mockUpdateData).toHaveBeenCalled();
    });
  });
});
