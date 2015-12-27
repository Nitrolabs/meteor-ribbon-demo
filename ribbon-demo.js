
if (Meteor.isClient) {
	// counter starts at 0
	console.log('Nitro-ribbon demo starting up')

	Template.NitroRibbon.rendered = function(){
		var a = $('.nitro-ribbon');
		a.nribbon(config);

		/*a.ribbon('folder-button').click(function(event){
			console.log('Folder button clicked');
		});

		a.ribbon('share-button').click(function(event){
			console.log('Share button clicked');
		});

		a.ribbon('save-button').click(function(event){
			console.log('Save button clicked');
		});

		a.ribbon('email-button').click(function(){
			console.log('Email button clicked');
		});*/
	}
}





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
