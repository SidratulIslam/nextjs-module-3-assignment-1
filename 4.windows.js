function openWindow(url, width, height) {
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const options = `width=${width},height=${height},left=${left},top=${top}`;
    window.open(url, '', options);
}

openWindow('https://www.example.com', 800, 600)