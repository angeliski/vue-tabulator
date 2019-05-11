import { shallowMount, mount } from '@vue/test-utils';
import TabulatorComponent from '@/components/TabulatorComponent.vue';
import { UpdateStrategy } from '@/types';

const mockSetData = jest.fn();
const mockReplaceData = jest.fn();
jest.mock('tabulator-tables', () => jest.fn().mockImplementation(() => ({
  setData: mockSetData,
  replaceData: mockReplaceData,
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
  });

  describe('Watchers', () => {
    test('update the v-model should use UpdateStrategy.DATA for default', () => {
      const wrapper = mount(TabulatorComponent, {
        propsData: {
          options,
        },
      });


      wrapper.setProps({
        tableData: [],
      });

      expect(mockSetData).toHaveBeenCalled();
    });

    test('update the v-model should use UpdateStrategy.REPLACE', () => {
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

      expect(mockSetData).not.toHaveBeenCalled();
      expect(mockReplaceData).toHaveBeenCalled();
    });
  });
});
