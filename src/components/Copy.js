export const handleCopy = async (txt, key, setVisible) => {
    try {
        await navigator.clipboard.writeText(txt);
        setVisible((prev) => ({ ...prev, [key]: true }))
        setTimeout(() => setVisible((prev) => ({ ...prev, [key]: false })), 1000);
    } catch (err) {
        console.error('Kopyalama işlemi sırasında hata oluştu:', err);
    }
}