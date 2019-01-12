import { shallowMount } from '@vue/test-utils';
import VueTabulator from '@/components/VueTabulator.vue';
import Vue from 'vue';

describe('VueTabulator.vue', () => {
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

    const wrapper = shallowMount(VueTabulator, {
      propsData: {
        options,
      },
    });


    expect(wrapper.findAll('.tabulator-col-title').filter(item => item.text().match('Name')).length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
