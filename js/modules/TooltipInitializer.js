export const initializeTooltips = () => {
  tippy('.tooltip', {
    content(tooltipElement) {
      const tooltipContent = tooltipElement.querySelector('.tooltip__content');
      return tooltipContent;
    },
    allowHTML: true,
    theme: 'custom',
    arrow: false,
    offset: [0],
  });
};
