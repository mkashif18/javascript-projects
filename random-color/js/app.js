const getColor = () => {
	const random_num = Math.floor(Math.random() * 16777215);
	const hex_code = '#'+random_num.toString(16);
	document.body.style.backgroundColor = hex_code;
	document.getElementById('color-code').innerText = hex_code;
}
const copyToClipboard = async (hex_code) => {
    try {
        await navigator.clipboard.writeText(hex_code);
        alert('Copied to clipboard!');
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
}
getColor();
document.getElementById('btn').addEventListener('click', getColor);