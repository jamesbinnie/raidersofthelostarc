var hero_cta_selector = document.querySelector('#header > div > ul > li > a')

dataLayer = window.dataLayer || [];

hero_cta_selector.addEventListener('click', function(){
    dataLayer.push({
    'event': 'gaClick',
    'event_category': 'Button',
    'event_action': 'Click',
    'event_label': "Hero CTA",
  });
});

hero_cta_selector.addEventListener('mouseover', function(){
    dataLayer.push({
    'event': 'gaClick',
    'event_category': 'Button',
    'event_action': 'Hover',
    'event_label': "Hero CTA",
  });
});
