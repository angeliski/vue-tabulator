import { shallowMount, mount } from '@vue/test-utils';
import TabulatorComponent from '@/components/TabulatorComponent.vue';
import Vue from 'vue';
import { getInstance } from './helpers';

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

    test('update the config should remove the old column the table', async () => {
      const columns : Tabulator.ColumnDefinition[] = [
        {
          title: 'Name',
          field: 'name',
          sorter: 'string',
          width: 200,
          editor: true,
        },
        {
          title: 'Age',
          field: 'age',
          sorter: 'string',
          width: 200,
          editor: true,
        },
      ];
      const options : Tabulator.Options = {
        columns,
      };

      const wrapper = mount(TabulatorComponent, {
        propsData: {
          options,
        },
      });


      const oldInstance = getInstance(wrapper);
      wrapper.setProps({
        options: {
          columns: [columns[0]],
        },
      });
      await Vue.nextTick();
      const currentInstance = getInstance(wrapper);


      expect(oldInstance.getColumns()).not.toBe(currentInstance.getColumns());

      expect(currentInstance.getColumns().length).toBe(1);
      expect(currentInstance.getColumns()[0].getDefinition().title).toBe('Name');
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
