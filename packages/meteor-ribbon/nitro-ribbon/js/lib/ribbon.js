(function( $ ) {
	$.fn.nribbon = function( config ) {
        this.each(function() {
            var container = $( this );
            var headerClass = "ribbon-header";
            var contentClass = "ribbon-content";
            // Either find the header and content templates or create them
            // Users can define these elements for a smoother render process
            var header = container.children("." + headerClass);
            var content = container.children("." + contentClass);

            if (!header.length){
            	console.log("Adding an element with the "+headerClass+" is recommended");
            	header = container.prepend('<div>').addClass(headerClass);
            }

            if (!content.length){
            	console.log("Adding an element with the "+contentClass+" is recommended");
            	content = container.append('<div>').addClass(contentClass);
            }
            header.html($.fn.nribbon.headerTemplate);
    		   content.html($.fn.nribbon.contentTemplate);
            $.Metro.init()
        });
        return this;
    };
}( jQuery ));



/*
var config = {
   title:'Example Document',
   titleLeft:[
      {
         type:'button',
         name:'folder-buttonx',
         glyph:'mif-folder'
      },
      {
         type:'button',
         name:'save-button',
         glyph:'mif-floppy-disk'
      },
      {
         type:'button',
         name:'share-button',
         glyph:'mif-users'
      },
      {
         type:'button',
         name:'undo-button',
         glyph:'mif-undo'
      },
      {
         type:'button',
         name:'print-button',
         glyph:'mif-printer'
      }
   ],

   titleRight:[
      {
         type:'button',
         name:'upload-button',
         glyph:'mif-upload'
      }
   ],

   tabs: {
      home:
         [
            [
               {
                  type: 'big-button',
                  name: 'email-button',
                  label: 'Email',
                  glyph: 'mif-envelop'
               },
               {
                  type: 'big-button',
                  name: 'image-button',
                  label: 'Image',
                  glyph: 'mif-file-picture',
                  dropdown: [
                     "Message",
                     "Event",
                     "Meeting",
                     "Contact"
                  ]
               }
            ],[
               {
                  type: 'mini-button',
                  name: 'notebook-save-button',
                  label: 'Notebook Save',
                  img: '/img/Notebook-Save.png'
               },
               {
                  type: 'mini-button',
                  name: 'folder-rename-button',
                  label: 'Folder Rename',
                  img: '/img/Folder-Rename.png'
               },
               {
                  type: 'mini-button',
                  name: 'image-button',
                  label: 'Calendar Next',
                  img: '/img/Calendar-Next.png'
               }
            ],[
               {
                  type: 'mini-button',
                  name: 'notebook-save-image-button',
                  img: '/img/Notebook-Save.png'
               },
               {
                  type: 'mini-button',
                  name: 'folder-rename-image-button',
                  img: '/img/Folder-Rename.png'
               },
               {
                  type: 'mini-button',
                  name: 'calender-next-image-button',
                  img: '/img/Calendar-Next.png'
               }
            ],[
               {
                  type: 'small-button',
                  name: 'rocket-small',
                  glyph: 'mif-rocket'
               },
               {
                  type: 'small-button',
                  name: 'comments-small',
                  glyph: 'mif-comments'
               },
            ]
         ],
      mailing:
         [
            [
               {
                  type: 'big-button',
                  name: 'email-button',
                  label: 'Email',
                  glyph: 'mif-envelop'
               },
               {
                  type: 'big-button',
                  name: 'drive-button',
                  label: 'Google Drive',
                  glyph: 'mif-google-drive'
               },
               {
                  type: 'big-button',
                  name: 'github-button',
                  label: 'Github',
                  glyph: 'mif-github'
               }
            ]
         ],
      folder:[
         [
            {
               type: 'mini-button',
               name: 'notebook-save-image-button',
               img: '/img/Notebook-Save.png'
            },
            {
               type: 'mini-button',
               name: 'folder-rename-image-button',
               img: '/img/Folder-Rename.png'
            },
            {
               type: 'mini-button',
               name: 'calender-next-image-button',
               img: '/img/Calendar-Next.png'
            }
         ],[
            {
               type: 'small-button',
               name: 'rocket-small',
               glyph: 'mif-rocket'
            },
            {
               type: 'small-button',
               name: 'comments-small',
               glyph: 'mif-comments'
            }
         ]
      ],
      view:[
            [
               {
                  type: 'small-button',
                  name: 'rocket-small',
                  glyph: 'mif-rocket'
               },
               {
                  type: 'small-button',
                  name: 'comments-small',
                  glyph: 'mif-comments'
               },
            ],[
               {
                  type: 'mini-button',
                  name: 'notebook-save-image-button',
                  img: '/img/Notebook-Save.png'
               },
               {
                  type: 'mini-button',
                  name: 'folder-rename-image-button',
                  img: '/img/Folder-Rename.png'
               },
               {
                  type: 'mini-button',
                  name: 'calender-next-image-button',
                  img: '/img/Calendar-Next.png'
               }
            ]
         ]
   }
}
*/


$.fn.nribbon.headerTemplate = '\
<div class="ribbon-header"> \
   <div class="ribbon-header"> \
      <div class="ribbon-title-bar"> \
         <ul class="command-holder"> \
            {{#each titleLeft}}\
               <li class="command-button"><a data-name={{ name}} class="{{ glyph }}"></a></li> \
            {{\\each}}\
         </ul> \
         <div class="ribbon-title"><span>Document X</span></div> \
         <ul class="command-holder"> \
            <li class="command-button"><a class="mif-upload"></a></li> \
         </ul> \
      </div> \
      <ul class="tabs-holder"> \
         <li class="active"><a href="#tab_home">Home</a></li> \
         <li class=""><a href="#tab_mailings">Mailing</a></li> \
         <li class=""><a href="#tab_folder">Folder</a></li> \
         <li class=""><a href="#tab_view">View</a></li> \
         <li class="tabs-hide"><a href="#" class="mif-eject" title="Hide Menu"></a></li> \
      </ul> \
   </div> \
</div>';

$.fn.nribbon.contentTemplate = '\
<div class="ribbon-content">\
   <div class="ribbon-content">\
      <div class="tab-panel" id="tab_home" style="display: block;">\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <button class="fluent-big-button"><span class="icon mif-envelop"></span></button>\
               <div class="tab-content-segment">\
                  <button class="fluent-big-button dropdown-toggle"><span class="icon mif-file-picture"></span><span class="label">Element</span></button>\
                  <ul class="d-menu nitro-menu" data-role="dropdown">\
                     <li><a href="#">Message</a></li>\
                     <li><a href="#">Event</a></li>\
                     <li><a href="#">Meeting</a></li>\
                     <li><a href="#">Contact</a></li>\
                  </ul>\
               </div>\
               <div class="tab-content-segment"><button class="fluent-big-button"><span class="mif-cancel"></span><span class="label">Delete</span></button></div>\
            </div>\
         </div>\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <div class="tab-content-segment"><button class="fluent-button"><span class="mif-loop"></span></button><button class="fluent-button"><span class="mif-infinite"></span></button><button class="fluent-button"><span class="mif-loop2"></span></button></div>\
               <div class="tab-content-segment"><button class="fluent-tool-button"></button><button class="fluent-tool-button"></button><button class="fluent-tool-button"></button></div>\
               <div class="tab-content-segment">\
                  <div class="nitro-button-group"><button class="nitro-button nitro-mini-button"><a href="#" class="button"><span class="icon mif-loop"></span><span class="label">Replay</span></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><span class="icon mif-infinite"></span><span class="label">Replay all</span></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><span class="icon mif-loop2"></span><span class="label">Forward</span></a></button></div>\
               </div>\
            </div>\
         </div>\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <div class="tab-content-segment">\
                  <div class="nitro-button-group"><button class="nitro-button nitro-mini-button"><a href="#" class="button"><img src="/img/Notebook-Save.png"><span class="label">Replay</span></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><img src="/img/Folder-Rename.png"><span class="label">Replay all</span></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><img src="/img/Calendar-Next.png"><span class="label">Forward</span></a></button></div>\
               </div>\
            </div>\
         </div>\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <div class="tab-content-segment">\
                  <div class="nitro-button-group"><button class="nitro-button nitro-mini-button"><a href="#" class="button"><img src="/img/Notebook-Save.png"></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><img src="/img/Folder-Rename.png"></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><img src="/img/Calendar-Next.png"></a></button></div>\
               </div>\
            </div>\
         </div>\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <div class="input-control text"><input type="text"><button class="button"><span class="mif-search"></span></button></div>\
               <button class="fluent-button"><span class="icon-book on-left"></span></button>\
               <div class="tab-content-segment">\
                  <button class="fluent-button dropdown-toggle"><span class="mif-filter on-left"></span><span class="label">Mail Filters</span></button>\
                  <ul class="d-menu nitro-menu" data-role="dropdown">\
                     <li><a href="#">Unread messages</a></li>\
                     <li><a href="#">Has attachments</a></li>\
                     <li class="divider"></li>\
                     <li><a href="#">Important</a></li>\
                     <li><a href="#">Broken</a></li>\
                  </ul>\
               </div>\
            </div>\
         </div>\
         <div class="tab-panel-group">\
            <div class="tab-content-segment"><button class="nitro-button nitro-big-button"><a href="#" class="button"><span class="icon mif-cancel"></span></a><span class="label"><br><br></span></button></div>\
            <div class="tab-content-segment">\
               <div class="nitro-button-group"><button class="nitro-button nitro-mini-button"><a href="#" class="button"><span class="icon mif-cancel"></span><span class="label">Button A</span></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><span class="icon mif-cancel"></span><span class="label">Button B</span></a></button><button class="nitro-button nitro-mini-button"><a href="#" class="button"><span class="icon mif-cancel"></span><span class="label">Button C</span></a></button></div>\
            </div>\
            <div class="tab-content-segment"><button class="nitro-button nitro-big-button"><a href="#" class="button"><span class="icon mif-cancel"></span></a><span class="label"><br><br></span></button></div>\
            <div class="tab-content-segment">\
               <div class="nitro-button-group"><button class="nitro-button nitro-small-button"><a href="#" class="button"><span class="icon mif-cancel"></span><span class="label">Button A</span></a></button><button class="nitro-button nitro-small-button"><a href="#" class="button"><span class="icon mif-cancel"></span><span class="label">Button B</span></a></button></div>\
            </div>\
         </div>\
      </div>\
      <div class="tab-panel" id="tab_mailings" style="display: none;">\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <button class="fluent-big-button"><span class="icon mif-envelop"></span><br><br></button>\
               <div class="tab-content-segment">\
                  <button class="fluent-big-button dropdown-toggle"><span class="icon mif-file-picture"></span><span class="label"><br><br></span></button>\
                  <ul class="d-menu nitro-menu" data-role="dropdown">\
                     <li><a href="#">Message</a></li>\
                     <li><a href="#">Event</a></li>\
                     <li><a href="#">Meeting</a></li>\
                     <li><a href="#">Contact</a></li>\
                  </ul>\
               </div>\
               <div class="tab-content-segment"><button class="fluent-big-button"><span class="mif-cancel"></span><span class="label">Delete</span></button></div>\
            </div>\
         </div>\
      </div>\
      <div class="tab-panel" id="tab_folder" style="display: none;">\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <div class="tab-content-segment"><button class="fluent-button"><span class="mif-loop"></span></button><button class="fluent-button"><span class="mif-infinite"></span></button><button class="fluent-button"><span class="mif-loop2"></span></button></div>\
               <div class="tab-content-segment"><button class="fluent-tool-button"><img src="/img/Notebook-Save.png"></button><button class="fluent-tool-button"><img src="/img/Folder-Rename.png"></button><button class="fluent-tool-button"><img src="/img/Calendar-Next.png"></button></div>\
            </div>\
         </div>\
      </div>\
      <div class="tab-panel" id="tab_view" style="display: none;">\
         <div class="tab-panel-group">\
            <div class="tab-group-content">\
               <button class="fluent-big-button"><span class="icon mif-envelop"></span><br><br></button>\
               <div class="tab-content-segment">\
                  <button class="fluent-big-button dropdown-toggle"><span class="icon mif-file-picture"></span><span class="label"><br><br></span></button>\
                  <ul class="d-menu nitro-menu" data-role="dropdown">\
                     <li><a href="#">Message</a></li>\
                     <li><a href="#">Event</a></li>\
                     <li><a href="#">Meeting</a></li>\
                     <li><a href="#">Contact</a></li>\
                  </ul>\
               </div>\
               <div class="tab-content-segment"><button class="fluent-big-button"><span class="mif-cancel"></span><span class="label">Delete</span></button></div>\
            </div>\
         </div>\
      </div>\
   </div>\
</div>';



