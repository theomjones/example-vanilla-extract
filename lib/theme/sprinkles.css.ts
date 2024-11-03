import {
    createSprinkles,
    defineProperties
} from '@vanilla-extract/sprinkles';
import { contract } from './main.css';

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        gap: {
            ...contract.space,
        },
        fontSize: contract.fontSizes,
        boxShadow: contract.shadows,
        borderRadius: contract.radii,
        display: ['none', 'flex', 'block', 'inline'],
        flexDirection: ['row', 'column'],
        justifyContent: [
            'stretch',
            'flex-start',
            'center',
            'flex-end',
            'space-around',
            'space-between'
        ],
        alignItems: [
            'stretch',
            'flex-start',
            'center',
            'flex-end'
        ],
        paddingTop: contract.space,
        paddingBottom: contract.space,
        paddingLeft: contract.space,
        paddingRight: contract.space
        // etc.
    },
    shorthands: {
        padding: [
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight'
        ],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        placeItems: ['justifyContent', 'alignItems'],
        rounded: ['borderRadius'],
        shadow: ['boxShadow']
    }
});

const colorProperties = defineProperties({
    conditions: {
        lightMode: {},
        darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: 'lightMode',
    properties: {
        color: contract.colors,
        background: contract.colors,
        borderColor: contract.colors
        // etc.
    }
});

export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];



// TODO: this is useful but at what cost?

// // // Generic type that maps over the keys of T and outputs { [OutputKey]: T[K] }
// type TransformObject<T extends Record<string, any>, OutputKey extends string> = {
//     [K in keyof T]: { [P in OutputKey]: T[K] };
// };

// // The function to create the transformed object
// function transformContractSection<T extends Record<string, any>, OutputKey extends string>(
//     section: T,
//     outputKey: OutputKey
// ): TransformObject<T, OutputKey> {
//     return Object.fromEntries(
//         Object.entries(section).map(([key, value]) => [key, { [outputKey]: value }])
//     ) as TransformObject<T, OutputKey>;
// }

// const gapObjectFromScale = transformContractSection(contract.space, 'gap');
