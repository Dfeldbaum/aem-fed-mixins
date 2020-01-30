# AEM FED Mixins

## Sass Mixins 

Included in the mixins directory is the following collection of Sass mixins for use: 

* General mixins
* Media queries mixins
* Typography mixins

## General Instructions

* Mixins are defined using the @mixin at-rule, which is written @mixin <name> { ... } or @mixin name(<arguments...>) { ... }. 
* A mixin’s name can be any Sass identifier, and it can contain any statement other than top-level statements. 
* They can be used to encapsulate styles that can be dropped into a single style rule; they can contain style rules of their own that can be nested in other rules or included at the top level of the stylesheet; or they can just serve to modify variables.
* Mixins are included into the current context using the @include at-rule, which is written @include <name> or @include <name>(<arguments...>), with the name of the mixin being included.

For more general information visit [Sass Mixin Documentation](https://sass-lang.com/documentation/at-rules/mixin)


## General Mixins

### Sizing

Use @include size() with height and weight parameters to generate height and width styles:

```
.demo-div {
	@include size(200px, 500px)
  // height: 200px;
  // weight: 500px;
}
```

### Square Sizing

Use @include square() with a square size paramater to generate square height and width styles:

```
.demo-div {
	@include square(500px)
  // height: 500px;
  // weight: 500px;
}
```

### Spacing

Use @include spacing() with a spacing parameter for top and bottom padding styles:

```
.demo-div {
	@include spacing(25px)
  // padding: 25px 0;
}
```

### Absolute Fill

Use @include absolute-fill to fill entire height and width of a target element:

```
.demo-div {
	@include absolute-fill
  // position: absolute;
  // left: 0;
  // top: 0;
  // height: 100%;
  // width: 100%;
}
```

### Image Mask Gradient

Use @include image-mask-gradient to generate semi-transparent gradient styles for an image:

```
.demo-image {
	@include image-mask-gradient
  // @include absolute-fill;
  // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#bf000000', GradientType=0);
  // background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 85%, rgba(0, 0, 0, 0.75) 100%);
  // content: '';
  // z-index: 2;
}
```


## Typography Mixins

### Pixels to REM Converter

Convert to rem units for any css property by inserting a pixel value as a number into the mixin’s expression. 

```
.demo-text {
	font-size: rem(20); // 2rem
}
```

### H1 Heading

Use @include h1 for preset desktop and mobile font-size, font-weight and line-height styling of H1 text. 

```
.demo-h1-heading {
	@include h1; 
	// desktop font-size: 35px; mobile font-size: 25px
	// desktop line-height: 1.15; mobile line-height: 1.25 
	// desktop & mobile font-weight: normal

}
```

### H1 Heading - Hero Section

Use @include h1-hero for preset desktop and mobile font-size and line-height styling of hero section heading text.  

```
.demo-hero-h1-heading {
	@include h1-hero; 
	// desktop font-size: 40px; mobile font-size: 55px
	// desktop line-height: 1.25; mobile line-height: 1.15 
}
```

### H2 Heading

Use @include h2 for preset desktop and mobile font-size and line-height styling of H2 text. 

```
.demo-h2-heading {
	@include h2; 
	// desktop font-size: 30px; mobile font-size: 20px
	// desktop line-height: 1.15; mobile line-height: 1.25 
}
```

### H3 Heading

Use @include h3 for preset desktop and mobile font-size and line-height styling of H3 text. 

```
.demo-h3-heading {
	@include h3; 
	// desktop font-size: 25px; mobile font-size: 18px
	// desktop line-height: 1.25; mobile line-height: 1.15
}
```

### H4 Heading

Use @include h4 for preset desktop and mobile font-size and line-height styling of H4 text. 

```
.demo-h4-heading {
	@include h4; 
	// desktop font-size: 20px; mobile font-size: 16px
	// desktop line-height: 1.25; mobile line-height: 1.15
}
```

### H5 Heading

Use @include h5 for preset desktop and mobile font-size and line-height styling of H5 text. 

```
.demo-h5-heading {
	@include h5; 
	// desktop font-size: 18px; mobile font-size: 16px;
	// desktop line-height: 1.25; mobile line-height: 1.15
}
```

### Body Copy

Use @include body-copy for preset desktop and mobile body copy styles.
   
```
.demo-body-copy {
	@include body-copy; 
	// desktop and mobile font-size: 16px
	// desktop line-height: 1.25; mobile line-height: 1;
  // desktop and mobile font-weight: normal 
}
```

### Body Copy - Small 

Use @include body-copy-small for preset desktop and mobile body copy styles.

```
.demo-small-body-copy {
	@include body-copy-small; 
	// desktop and mobile font-size: 14px
	// desktop line-height: 1.25; mobile line-height: 1
  // desktop and mobile font-weight: normal 
}
```

### Eyebrow Text - Large

Use @include eyebrow-large for preset desktop and mobile large eyebrow styles.

```
.demo-large-eyebrow {
	@include eyebrow-large; 
	// desktop font-size: 25px; mobile font-size: 18px
	// desktop line-height: 1.4; mobile line-height: 1.25
  // desktop and mobile text-transform: uppercase
  // desktop and mobile font-weight: bold
}
```

### Eyebrow Text - Small

Use @include eyebrow-small for preset desktop and mobile small eyebrow styles.

```
.demo-small-eyebrow {
	@include eyebrow-small; 
	// desktop font-size: 20px; mobile font-size: 16px
	// desktop line-height: 1.4; mobile line-height: 1.25
  // desktop and mobile text-transform: uppercase
  // desktop and mobile font-weight: bold
  // desktop and mobile margin-bottom: 20px
}
```


## Media Query Mixins

Note: All media query mixins incorporate various viewport breakpoint variables so that front end developers build responsively with ease. Each variable can be found within the variables directory within the node module.

### Mobile Media Query

Add styles within an @include media-mobile-only rule for viewport widths up to and including 767px (max-width of 767px).

```
.demo-element {
	@include media-mobile-only {
    margin-bottom: 25px;
  }
	// @media screen and ( max-width: 767px ) {
			margin-bottom: 25px;
	}
}
```

### Mobile Portrait Media Query

Add styles within an @include media-mobile-portrait rule for mobile portrait orientation styles (max-width of 479px).

```
.demo-element {
	@include media-mobile-portrait {
    margin-bottom: 25px;
  }
	// @media screen and ( max-width: 479px ) {
			margin-bottom: 25px;
	}
}
```

### Mobile Landscape Media Query

Add styles within an @include media-mobile-landscape rule for mobile landscape orientations (min-width of 480px and max-width of 479px).

```
.demo-element {
	@include media-mobile-landscape {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 479px ) and ( max-width: 767px ) {
			margin-bottom: 25px;
	}
}
```

### Mobile Landscape and Up Media Query

Add styles within an @include media-mobile-landscape-and-up rule for mobile landscape orientations (min-width of 480px).

```
.demo-element {
	@include media-mobile-landscape-and-up {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 480px ) {
			margin-bottom: 25px;
	}
}
```

### Mobile and Tablet Media Query

Add styles within an @include media-mobile-and-tablet rule for viewport widths up to an including 991px (max-width of 991px).

```
.demo-element {
	@include media-mobile-and-tablet {
    margin-bottom: 25px;
  }
	// @media screen and ( max-width: 991px ) {
			margin-bottom: 25px;
	}
}
```

### Tablet and Up Media Query

Add styles within an @include media-tablet-and-up rule for viewport widths greater than 767px  (min-width of 768px).

```
.demo-element {
	@include media-tablet-and-up {
    margin-bottom: 25px;
  }
	// @media screen and ( max-width: 768px ) {
			margin-bottom: 25px;
	}
}
```

### Tablet Media Query

Add styles within an @include media-tablet-only rule for tablet viewport widths (min-width of 768px and max-width of 991px).

```
.demo-element {
	@include media-tablet-only {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 768px ) and ( max-width: 991px ) {
			margin-bottom: 25px;
	}
}
```

### iPad Mobile Media Query

Add styles within an @include media-mobile-ipad rule for mobile ipad viewport widths up to and including 550px (max-width of 550px).

```
.demo-element {
	@include media-ipad-mobile {
    margin-bottom: 25px;
  }
	// @media screen and ( max-width: 550px ) {
			margin-bottom: 25px;
	}
}
```
### iPad Desktop Media Query

Add styles within an @include media-mobile-ipad rule for desktop ipad viewport widths greater than 550px (min-width of 551px).

```
.demo-element {
	@include media-ipad-desktop {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 551px ) {
			margin-bottom: 25px;
	}
}
```

### Desktop and Up Media Query

Add styles within an @include media-desktop-and-up rule for viewport widths greater than 991px(min-width of 992px).

```
.demo-element {
	@include media-desktop-and-up {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 992px ) {
			margin-bottom: 25px;
	}
}
```

### Desktop Media Query

Add styles within an @include media-desktop-only rule for desktop viewport widths (min-width of 992px and max-width of 1199px).

```
.demo-element {
	@include media-desktop-only {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 992px ) and ( max-width: 1199px ) {
			margin-bottom: 25px;
	}
}
```

### Wide Desktop and Up Media Query

Add styles within an @include media-desktop-large rule for viewport widths greater than 1199px(min-width of 1200px).

```
.demo-element {
	@include media-desktop-large {
    margin-bottom: 25px;
  }
	// @media screen and ( min-width: 1200px ) {
			margin-bottom: 25px;
	}
}
```










