const sectionOne = {
  name: 'sectionOne',
  title: 'Section One',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    },
    {
      name: 'lineOne',
      title: 'Description Line One',
      type: 'string',
    },
    {
      name: 'lineTwo',
      title: 'Description Line Two',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    },
    {
      name: 'rightImages',
      title: 'Right Side Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};

export default sectionOne;
