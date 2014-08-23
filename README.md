Undo (turn off) Skype click to call style using jquery
================

jquery plugin for undoing the annoying skype browser plugin anchor styling

Skype Click to call transforms incorrect text and gives no control over the styles
-
The browser plugin called "Skype click to call" will forcefully take control of your websites DOM transforming any text it thinks are telephone numbers in to a blue skype styled link.  It does not matter whether the telephone number is inside of an anchor tag or not.  

1. There is no control over what links gets transformed, and usually the plugin will transform pieces of text which are not telephone numbers such as opening hours or other numbers which are not telephone numbers.
2. The blue skype image style that it adds may not look very nice on your website, push text out so it wraps or just not go with the colour scheme of the page.

Other problems related to this
-
1. Historically, when installing Skype, the browser plugin has been forcefully installed with the application without permission, or subtly included as an opt-out (checked by default) checkbox.  It is only recently in the latest versions of skype that the browser plugins have been offerred as an opt-in (unchecked) checkbox.  It is also only recently that Chrome and Firefox have added a security system which asks you to accept browser addons. Because of this, and due to user ignorance, many browsers are running this plugin without the knowledge of the user.  
2. Also, due to user ignorance, many people will complain to the webmasters wondering why phone numbers look freaky on their website.  
3. The browser plugin code in the latest skype version is extremely intrusive.  They have really spent the time and effort to circumvent "fixes" such as ignoring the header which should turn off the functionality, using random css classes to override fixes and eventually forcing inline css styling.  There are many "fixes" to this problem out there which simply do not work anymore with the current version of the plugins.  

What the plugin does
-
This plugin will alter your webpages DOM and remove any skype anchors it finds by replacing every character of the content with span tags containing single characters.  Since the span tag is an inline tag and assuming you dont have a non standard css styling for it, it should display in the same way as a normal piece of text.  

Testing
-
This is the only solution that I have found to work on the latest versions of click to call so I am publishing it here.  Tested on IE11, Firefox & Chrome.  I am not sure if it will work on previous versions of click 2 call as I dont know of any way to test this.

Feedback
-
I welcome any comments to phil@code67.com, feel free to send me pull requests or let me know whether this works for you.


