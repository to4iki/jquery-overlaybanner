# OverlayBanner

The best jQuery plugin ever.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/to4iki/jquery-overlaybanner/master/dist/jquery-overlaybanner.min.js
[max]: https://raw.github.com/to4iki/jquery-overlaybanner/master/dist/jquery-overlaybanner.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery-overlaybanner.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Documentation

Where in the HTML it is may be written because it is absolutely positioned.

## Examples

```javascript
$('.footerBanner').overlayBanner({
  'togglePosition': $('footer'),
  'toggleSpeed': 'fast',
  'bannerStyle': {
    'height': '155px',
    'width': '100%',
    'backgroundColor': '#FFF'
  }
});
```

## Release History
- ver 0.1.0
