import SideMenu from './SideMenu';

export default {
  titile: 'SideMenu',
  component: SideMenu,
};

const Template = (args) => <SideMenu {...args}></SideMenu>;

export const Menu = Template.bind({});

Menu.args = { open: true };
