## AEM FED Mixins

### Sass Mixins 

Included in the mixins directory is the following collection of Sass mixins for use: 

* General mixins
* Media queries mixins
* Typography mixins

### Instructions

* Mixins are defined using the @mixin at-rule, which is written @mixin <name> { ... } or @mixin name(<arguments...>) { ... }. 
* A mixin’s name can be any Sass identifier, and it can contain any statement other than top-level statements. They can be used to encapsulate styles that can be dropped into a single style rule; they can contain style rules of their own that can be nested in other rules or included at the top level of the stylesheet; or they can just serve to modify variables.
* Mixins are included into the current context using the @include at-rule, which is written @include <name> or @include <name>(<arguments...>), with the name of the mixin being included.

For more information visit [Sass Mixin Documentation](https://sass-lang.com/documentation/at-rules/mixin): 