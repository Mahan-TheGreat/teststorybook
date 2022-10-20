import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { ChartModule } from "primeng/chart";
import { ChartComponent } from "src/app/components/chart/chart.component";

export default{
    title: 'Charts/Chart',
    component: ChartComponent,
    decorators: [
        moduleMetadata({
            imports:[
                ChartModule
            ]
        })
    ],
    argTypes:{

    }
} as Meta;

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
    props:args
})

export const BarChart = Template.bind({});
BarChart.args={
    chartBar:true
}
