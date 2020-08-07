import { shallowMount, mount } from '@vue/test-utils';
import TabulatorComponent from '@/components/TabulatorComponent.vue';
import { getInstance } from './helpers';
import Vue from 'vue';

describe('TabulatorComponent.vue', () => {
  describe('Init table', () => {
    test('renders correct based in the options', () => {
      const options = {
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

      const wrapper = shallowMount(TabulatorComponent, {
        propsData: {
          options,
        },
      });


      expect(wrapper.findAll('.tabulator-col-title').filter(item => item.text().match('Name')).length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Watchers', () => {
    test('update the config should recreate the table', async () => {
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

      const wrapper = mount(TabulatorComponent, {
        propsData: {
          options,
        },
      });


      const oldInstance = getInstance(wrapper);
      wrapper.setProps({
        options: {
          columns: [
            {
              title: 'Age',
              field: 'age',
            },
          ],
        },
      });
      await Vue.nextTick();
      const currentInstance = getInstance(wrapper);

      expect(oldInstance).not.toBe(currentInstance);
    });

    test('update the v-model not should recreate the table', () => {
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

      const wrapper = mount(TabulatorComponent, {
        propsData: {
          options,
        },
      });


      const oldInstance = getInstance(wrapper);
      wrapper.setProps({
        tableData: [],
      });
      const currentInstance = getInstance(wrapper);

      expect(oldInstance).toBe(currentInstance);
    });
  });
});
