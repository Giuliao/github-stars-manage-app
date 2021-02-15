import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { BackToTopComponent  } from '../app/shared/components/back-to-top/back-to-top.component';
import { SharedModule } from '../app/shared/shared.module'

export default {
    title: 'back-to-top',
    component: BackToTopComponent,
    decorators: [
        moduleMetadata({
          imports: [SharedModule],
        }),
    ],
} as Meta;


const template: Story<BackToTopComponent> = (args) => ({
    component: BackToTopComponent,
    props: args
});

export const myStory = template.bind({});
myStory.args = {};
