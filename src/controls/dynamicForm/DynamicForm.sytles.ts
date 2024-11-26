import type {
  IDynamicFormStyleProps,
  IDynamicFormStyles,
} from './IDynamicFormProps';

export const getStyles = (props: IDynamicFormStyleProps): IDynamicFormStyles => {
  const className=props.className;
  return {
    root:[
      className,
      {

      }
    ],
    sectionFormField: [
      'sectionFormField',

      {
        selectors: {
          ':has(div)': {
            'max-width': '50vmin',
            'min-width': '25vmax',
            padding: '20px',
            [`@media (min-width: 480px)`]: {
              width: '90%',
            },
          },
        },
      },
    ],
    sectionFormContianer: [
      'sectionFormFields',
      {
        display: 'flex',
        'flex-wrap': 'wrap'
      },
    ],

    sectionHeader: [
        'sectionTitle',
        {
            color: '#000000',
            'font-weight': '600',
            'font-size': '16px',
            'margin-top': '6px',
            'margin-bottom': '12px',
            clear: 'both',
            'padding-left': '20px'
        },
      ],
  };
};
