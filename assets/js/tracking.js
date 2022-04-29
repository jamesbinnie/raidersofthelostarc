var hero_cta_selector = document.querySelector('#header > div > ul > li > a')

dataLayer = window.dataLayer || [];

hero_cta_selector.addEventListener('click', function(){
    dataLayer.push({
    'event': 'ga_click',
    'event_category': 'button',
    'event_action': 'click',
    'event_label': "hero_cta",
  });
});

hero_cta_selector.addEventListener('mouseover', function(){
    dataLayer.push({
    'event': 'ga_hover',
    'event_category': 'button',
    'event_action': 'hover',
    'event_label': "hero_cta",
  });
});
