var hero_cta_selector = document.querySelector('#header > div > ul > li > a')

dataLayer = window.dataLayer || [];

window.dataLayer.push({
    'event': 'set_brand',
    'user_brand': 'Binnie Inc.'
});

hero_cta_selector.addEventListener('click', function(){
    var hero_cta_selector_classes = hero_cta_selector.className;
    var hero_cta_selector_text = hero_cta_selector.textContent;
    dataLayer.push({
    'event': 'ga_click',
    'event_category': 'button',
    'event_action': 'click',
    'event_label': "hero_cta",
    'link_classes': hero_cta_selector_classes,
    'link_text': hero_cta_selector_text
  });
});

hero_cta_selector.addEventListener('mouseover', function(){
    var hero_cta_selector_classes = hero_cta_selector.className;
    var hero_cta_selector_text = hero_cta_selector.textContent;
    dataLayer.push({
    'event': 'ga_hover',
    'event_category': 'button',
    'event_action': 'hover',
    'event_label': "hero_cta",
    'link_classes': hero_cta_selector_classes,
    'link_text': hero_cta_selector_text
  });
});
