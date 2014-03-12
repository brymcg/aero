#= require vendor/jquery
#= require vendor/jquery.smartresize
#= require vendor/jquery.tooltipster
#= require vendor/scrollspy
#= require vendor/affix
#= require_self

$( document ).ready ->
  $body   = $( document.body )
  $header = $( '> header' , $body )
  $hero   = $( '#hero' , $body )
  $subnav = $( '#subnav' , $body )
  $footer = $( '> footer' , $body )
  headerH = $header.outerHeight()
  subnavH = $subnav.outerHeight()
  footerH = $footer.outerHeight()

  # resetSubheaderHeight = ->
  #   $hero.height window.innerHeight
  #   $body.scrollspy 'refresh'

  # resetSubheaderHeight()
  # $( window ).smartresize -> resetSubheaderHeight()

  # Tooltips
  $( 'a[title], abbr[title]' ).tooltipster
    animation: 'grow'
    speed:      150
    delay:      0

  # Smooth scrolling to anchors
  $( 'a[href*=#]:not([href=#])' ).click (e) ->
    return unless location.pathname.replace( /^\//,'' ) is this.pathname.replace( /^\//,'' )
    return unless location.hostname is this.hostname
    hash    = this.hash
    target  = $( this.hash )
    return unless target.length
    e.preventDefault()
    targetPosition = target.offset().top - subnavH + 1
    $body.animate( { scrollTop: targetPosition }, 250 )

  # Sticky sub-nav
  $subnav.affix
    offset:
      top: -> $hero.outerHeight() + headerH - subnavH
      bottom: -> footerH

  # Auto-activate sub-nav elements as you scroll
  $body.scrollspy
    target: '#subnav'
    offset: $subnav.outerHeight()
      

  # Apply 'affix' class to body if sub-nav is pinned on load
  unless $subnav.data('bs.affix').affixed
    $header.addClass 'affix'
    $subnav.addClass 'loaded'

  # Apply 'affix' class to body whenever sub-nav is pinned
  $subnav.on 'affixed.bs.affix', (e) ->
    $header.addClass 'affix'
    $body.scrollspy 'refresh'

  # Remove 'affix' class from body whenever sub-nav is unpinned
  $subnav.on 'affix-top.bs.affix', (e) -> $header.removeClass('affix').addClass 'loaded'

  # Add section class to sub-nav + log it in history
  # $subnav.addClass( location.hash.slice( 1 ) ) if location.hash
  $subnav.on 'activate.bs.scrollspy', (e) ->
    $this   = $( this )
    href    = $( '> a', e.target ).attr 'href'
    classes = $this.attr( 'class' ).split(' ').filter (c) ->
      c.indexOf( 'section' ) isnt 0 and c.indexOf( 'hero' ) isnt 0
    $this.attr 'class', "#{ classes.join(' ') } #{ href.slice( 1 ) }"
    href = window.location.pathname if href is '#hero'
    history.replaceState '', '', href