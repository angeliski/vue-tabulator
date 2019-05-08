import { shallowMount } from '@vue/test-utils';
import TabulatorComponent from '@/components/TabulatorComponent.vue';
import Vue from 'vue';

describe('TabulatorComponent.vue', () => {
  it('renders correct based in the options', () => {
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
