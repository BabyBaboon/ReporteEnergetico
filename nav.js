webix.protoUI({
	name:"navbar",
	defaults:{
		height:5,
		css:"navbar"
	},

	value_setter:function(value){
		var index = 0;
		for (var i = 0; i < this.demos.length; i++)
			if (this.demos[i].name == value)
			index = i;

		this.data = this.demos[index];
		this.data.next = this.demos[(index+1) % this.demos.length];
		this.data.prev = this.demos[(index -1 + this.demos.length) % this.demos.length];
	},
	demos:[

		{ name:"report",	link:"/download/", text:"." },

	]
}, webix.ui.template );
