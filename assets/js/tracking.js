dataLayer = window.dataLayer || [];
document.querySelector('#header > div > ul > li > a').addEventListener('click', function(){
    dataLayer.push({
    'event': 'gaClick',
    'event_category': 'Button',
    'event_action': 'Click',
    'event_label': "Hero CTA",
  });
});
