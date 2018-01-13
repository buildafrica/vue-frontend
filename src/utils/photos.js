let ImageCompressor = require('@xkeshi/image-compressor');

export const uploadConf = {
	images: [],
	accept: 'image/png,image/gif,image/jpeg,image/webp',
	extensions: 'gif,jpg,jpeg,png,webp',
	// extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
	// extensions: /\.(gif|jpe?g|png|webp)$/i,
	minSize: 1024,
	size: 1024 * 1024 * 10,
	multiple: true,
	directory: false,
	drop: true,
	dropDirectory: true,
	addIndex: false,
	thread: 3,
	name: 'file',
	postAction: '/upload/post',
	putAction: '/upload/put',
	headers: { 'X-Csrf-Token': 'xxxx' },
	data: { '_csrf_token': 'xxxxxx' },
	autoCompress: 1024 * 1024,
	uploadAuto: false,
	isOption: false,
	addData: {
		show: false,
		name: '',
		type: '',
		content: '',
	},
	editFile: {
		show: false,
		name: '',
	},
	inputFilter(newFile, oldFile, prevent) {
		if (newFile && !oldFile) {
			// Before adding a file
			// 添加文件前

			// Filter system files or hide files
			// 过滤系统文件 和隐藏文件
			if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
				return prevent()
			}

			// Filter php html js file
			// 过滤 php html js 文件
			if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
				return prevent()
			}

			// Automatic compression
			// 自动压缩
			if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
				newFile.error = 'compressing'
				const imageCompressor = new ImageCompressor(null, {
					convertSize: Infinity,
					maxWidth: 512,
					maxHeight: 512,
				})
				imageCompressor.compress(newFile.file)
					.then((file) => {
						this.$refs.upload.update(newFile, {
							error: '',
							file,
							size: file.size,
							type: file.type
						})
					})
					.catch((err) => {
						this.$refs.upload.update(newFile, {
							error: err.message || 'compress'
						})
					})
			}
		}


		if (newFile && (!oldFile || newFile.file !== oldFile.file)) {

			// Create a blob field
			// 创建 blob 字段
			newFile.blob = ''
			let URL = window.URL || window.webkitURL
			if (URL && URL.createObjectURL) {
				newFile.blob = URL.createObjectURL(newFile.file)
			}

			// Thumbnails
			// 缩略图
			newFile.thumb = ''
			if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
				newFile.thumb = newFile.blob
			}
		}
	},

	// add, update, remove File Event
	inputFile(newFile, oldFile) {
		if (newFile && oldFile) {
			// update

			if (newFile.active && !oldFile.active) {
				// beforeSend

				// min size
				if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
					this.$refs.upload.update(newFile, {
						error: 'size'
					})
				}
			}

			if (newFile.progress !== oldFile.progress) {
				// progress
			}

			if (newFile.error && !oldFile.error) {
				// error
			}

			if (newFile.success && !oldFile.success) {
				// success
			}
		}


		if (!newFile && oldFile) {
			// remove
			if (oldFile.success && oldFile.response.id) {
				// $.ajax({
				//   type: 'DELETE',
				//   url: '/upload/delete?id=' + oldFile.response.id,
				// })
			}
		}


		// Automatically activate upload
		if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
			if (this.uploadAuto && !this.$refs.upload.active) {
				this.$refs.upload.active = true
			}
		}
	},


	alert(message) {
		alert(message)
	},


	onEditFileShow(file) {
		this.editFile = { ...file,
			show: true
		}
		this.$refs.upload.update(file, {
			error: 'edit'
		})
	},

	onEditorFile() {
		if (!this.$refs.upload.features.html5) {
			this.alert('Your browser does not support')
			this.editFile.show = false
			return
		}

		let data = {
			name: this.editFile.name,
		}
		if (this.editFile.cropper) {
			let binStr = atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(',')[1])
			let arr = new Uint8Array(binStr.length)
			for (let i = 0; i < binStr.length; i++) {
				arr[i] = binStr.charCodeAt(i)
			}
			data.file = new File([arr], data.name, {
				type: this.editFile.type
			})
			data.size = data.file.size
		}
		this.$refs.upload.update(this.editFile.id, data)
		this.editFile.error = ''
		this.editFile.show = false
	},

	// add folader
	onAddFolader() {
		if (!this.$refs.upload.features.directory) {
			this.alert('Your browser does not support')
			return
		}

		let input = this.$refs.upload.$el.querySelector('input')
		input.directory = true
		input.webkitdirectory = true
		this.directory = true

		input.onclick = null
		input.click()
		input.onclick = (e) => {
			this.directory = false
			input.directory = false
			input.webkitdirectory = false
		}
	},

	onAddData() {
		this.addData.show = false
		if (!this.$refs.upload.features.html5) {
			this.alert('Your browser does not support')
			return
		}

		let file = new window.File([this.addData.content], this.addData.name, {
			type: this.addData.type,
		})
		this.$refs.upload.add(file)
	}

}
