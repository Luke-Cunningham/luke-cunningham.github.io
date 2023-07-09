const widgetContainer = document.getElementById('widget-container');
const widgetSlider = document.getElementById('widget-slider');

widgetSlider.addEventListener('input', handleSliderChange);

function handleSliderChange(event) {
  const selectedOption = event.target.value;

  let widgetUrl = '';
  if (selectedOption === '1') {
    widgetUrl = 'url-to-widget1';
  } else if (selectedOption === '2') {
    widgetUrl = 'url-to-widget2';
  } else if (selectedOption === '3') {
    widgetUrl = 'url-to-widget3';
  }

  widgetContainer.innerHTML = `<iframe src="${widgetUrl}" width="100%" height="100%"></iframe>`;
}

widgetSlider.addEventListener('mousemove', handleSliderLabelChange);

function handleSliderLabelChange(event) {
  const selectedOption = event.target.value;
  const sliderLabels = {
    '1': "I know Luke well",
    '2': "I know programming well",
    '3': "I'm just here for the crossword"
  };
  const sliderLabel = document.getElementById('slider-label');
  sliderLabel.textContent = sliderLabels[selectedOption];
}
