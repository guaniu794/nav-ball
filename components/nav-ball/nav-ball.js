// components/menu.js
Component({
	/**
	 * Component properties
	 */
	properties: {
		navs:{
			type:Array,
			value:[]
		}
	},

	/**
	 * Component initial data
	 */
	data: {
		isFold:true,
		x: 315,
		y: 559,
	},

	ready() {
		const that = this
		wx.getSystemInfo({
			success (res) {
				that.setData({
					x: res.windowWidth - 60,
					y: res.windowHeight - 60,
				})
			}
		})
	},

	/**
	 * Component methods
	 */
	methods: {

		goUrl({
      currentTarget: {
        dataset: { type, url }
      }
    }) {
			var that= this
			wx[type]({
				url,
				success() {
					that.onClickAdd()
				}
			})
		},

		onClickAdd() {
			this.setData({
				isFold: !this.data.isFold
			})
			this.setData({
				maskAnimation: this.data.isFold ? 'maskClose' : 'maskOpen',
				btnAnimation: this.data.isFold ? 'menuClose' : 'menuOpen'
			})
		},

	}
})
