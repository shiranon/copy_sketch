import '@styles/style.css'

const wrapper = document.querySelector('.l-wrapper') as HTMLElement

// <div class="l-line"></div>をnum個作成
const num = 20
for (let i = 0; i < num; i++) {
	const el = document.createElement('div')
	el.classList.add('l-line')
	wrapper.appendChild(el)
}
